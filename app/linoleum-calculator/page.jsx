"use client";

import React, { useState, useEffect } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [tab, setTab] = useState("long");
  const [showPatternStep, setShowPatternStep] = useState(false);
  const [errors, setErrors] = useState({
    roomLength: false,
    roomWidth: false,
    rollLength: false,
    rollWidth: false,
    weightPerSqm: false,
    pricePerSqm: false,
    patternStep: false,
    roomArea: false,
    wasteFactor: false,
  });

  const [formData, setFormData] = useState({
    direction: "along_length",
    patternMatching: false,
    patternStep: "0.3",
    pricePerSqm: "",
    rollLength: "",
    rollWidth: "",
    roomLength: "",
    roomWidth: "",
    type: "dimensions",
    wasteFactor: "1.0",
    linoleumType: "household_pvc",
    roomArea: "",
  });

  // Валидация в реальном времени
  useEffect(() => {
    if (formData.patternMatching) {
      const patternValid =
        formData.patternStep && parseFloat(formData.patternStep) > 0.1;
      setErrors((prev) => ({ ...prev, patternStep: !patternValid }));
    }

    if (tab === "dvh") {
      const wasteValid =
        formData.wasteFactor && parseFloat(formData.wasteFactor) >= 1.0;
      setErrors((prev) => ({ ...prev, wasteFactor: !wasteValid }));
    }
  }, [
    formData.patternStep,
    formData.patternMatching,
    formData.wasteFactor,
    tab,
  ]);

  const handleTabClick = (tabType) => {
    setTab(tabType);
    setFormData((prev) => ({
      ...prev,
      type: tabType === "long" ? "dimensions" : "area",
      roomLength: tabType === "dvh" ? "" : prev.roomLength,
      roomWidth: tabType === "dvh" ? "" : prev.roomWidth,
      roomArea: tabType === "long" ? "" : prev.roomArea,
      wasteFactor: tabType === "long" ? "" : "1.0",
    }));
    setErrors({
      roomLength: false,
      roomWidth: false,
      rollLength: false,
      rollWidth: false,
      weightPerSqm: false,
      pricePerSqm: false,
      patternStep: false,
      roomArea: false,
      wasteFactor: false,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Сбрасываем ошибку при изменении
    if (name !== "patternStep" && name !== "wasteFactor") {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  const handlePatternMatchingChange = (e) => {
    const checked = e.target.checked;
    const newPatternStep =
      checked && !formData.patternStep ? "0.3" : formData.patternStep;

    setFormData((prev) => ({
      ...prev,
      patternMatching: checked,
      patternStep: newPatternStep,
    }));

    setShowPatternStep(checked);
    setErrors((prev) => ({ ...prev, patternStep: false }));
  };

  const validateForm = () => {
    const newErrors = {
      roomLength: tab === "long" && !formData.roomLength,
      roomWidth: tab === "long" && !formData.roomWidth,
      rollLength: !formData.rollLength,
      rollWidth: !formData.rollWidth,
      weightPerSqm: !formData.weightPerSqm,
      pricePerSqm: !formData.pricePerSqm,
      patternStep:
        formData.patternMatching &&
        (!formData.patternStep || parseFloat(formData.patternStep) <= 0.1),
      roomArea: tab === "dvh" && !formData.roomArea,
      wasteFactor:
        tab === "dvh" &&
        (!formData.wasteFactor || parseFloat(formData.wasteFactor) < 1.0),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const prepareFormData = () => {
    // Создаем копию данных формы без изменений
    const data = { ...formData };

    if (tab === "long") {
      delete data.roomArea;
      delete data.wasteFactor;
    } else {
      delete data.roomLength;
      delete data.roomWidth;
    }

    return data;
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор линолеума"}
        description={
          "Онлайн калькулятор поможет точно рассчитать, сколько линолеума вам потребуется для комнаты, учитывая размеры помещения, ширину рулона и запас на подрезку."
        }
      >
        <CalorieForm
          obj={prepareFormData()}
          url={"https://boxcalculators.ru/api/calculate/flooring"}
          validate={validateForm}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="centered-text">
                <span>Метод расчета</span>
              </div>
              <span
                className={tab === "long" ? "active underline" : ""}
                onClick={() => handleTabClick("long")}
              >
                По размерам
              </span>
              <span
                className={tab === "dvh" ? "active underline" : ""}
                onClick={() => handleTabClick("dvh")}
              >
                По площади
              </span>
            </div>

            <div className="content">
              {tab === "long" && (
                <>
                  <span className="s-topen">Размеры комнаты</span>
                  <div className="radius">
                    <label className="numrange">
                      <span>
                        Длина, <span className="red"> м</span>
                      </span>
                      <input
                        type="number"
                        className={`input ${
                          errors.roomLength ? "error-input" : ""
                        }`}
                        name="roomLength"
                        value={formData.roomLength}
                        onChange={handleInputChange}
                        required
                        min="0.1"
                        step="any"
                      />
                      {errors.roomLength && (
                        <div className="error-message">Обязательное поле</div>
                      )}
                    </label>
                    <label className="numrange">
                      <span>
                        Ширина, <span className="red">м</span>
                      </span>
                      <input
                        type="number"
                        className={`input ${
                          errors.roomWidth ? "error-input" : ""
                        }`}
                        name="roomWidth"
                        value={formData.roomWidth}
                        onChange={handleInputChange}
                        required
                        min="0.1"
                        step="any"
                      />
                      {errors.roomWidth && (
                        <div className="error-message">Обязательное поле</div>
                      )}
                    </label>
                  </div>
                </>
              )}

              {tab === "dvh" && (
                <>
                  <span className="s-topen">Площадь помещения (м2)</span>
                  <div className="radius">
                    <label className="numrange">
                      <input
                        type="number"
                        className={`input ${
                          errors.roomArea ? "error-input" : ""
                        }`}
                        name="roomArea"
                        value={formData.roomArea}
                        onChange={handleInputChange}
                        required
                        min="1"
                        step="any"
                      />
                      {errors.roomArea && (
                        <div className="error-message">Обязательное поле</div>
                      )}
                    </label>
                  </div>
                  <span className="s-topen">Коэффициент запаса</span>
                  <div className="radius">
                    <label className="numrange">
                      <input
                        type="number"
                        className={`input ${
                          errors.wasteFactor ? "error-input" : ""
                        }`}
                        name="wasteFactor"
                        value={formData.wasteFactor}
                        onChange={handleInputChange}
                        required
                        min="1.0"
                        step="any"
                        placeholder="1.0"
                      />
                      {errors.wasteFactor && (
                        <div className="error-message">
                          {formData.wasteFactor
                            ? "Минимальный коэффициент 1.0"
                            : "Обязательное поле"}
                        </div>
                      )}
                    </label>
                  </div>
                </>
              )}

              <span className="s-topen">Размеры рулона</span>
              <div className="radius">
                <label className="numrange">
                  <span>
                    Длина, <span className="red"> м</span>
                  </span>
                  <input
                    type="number"
                    className={`input ${
                      errors.rollLength ? "error-input" : ""
                    }`}
                    name="rollLength"
                    value={formData.rollLength}
                    onChange={handleInputChange}
                    required
                    min="0.1"
                    step="any"
                  />
                  {errors.rollLength && (
                    <div className="error-message">Обязательное поле</div>
                  )}
                </label>
                <label className="numrange">
                  <span>
                    Ширина, <span className="red">м</span>
                  </span>
                  <input
                    type="number"
                    className={`input ${errors.rollWidth ? "error-input" : ""}`}
                    name="rollWidth"
                    value={formData.rollWidth}
                    onChange={handleInputChange}
                    required
                    min="0.1"
                    step="any"
                  />
                  {errors.rollWidth && (
                    <div className="error-message">Обязательное поле</div>
                  )}
                </label>
              </div>

              <span className="s-topen">Направление укладки</span>
              <div className="radius">
                <select
                  className="calc-select"
                  name="direction"
                  value={formData.direction}
                  onChange={handleInputChange}
                >
                  <option value="along_length">Вдоль длины</option>
                  <option value="along_width">Вдоль ширины</option>
                </select>
              </div>

              <span className="s-topen">Тип линолеума</span>
              <div className="radius">
                <label className="numrange">
                  <select
                    className="calc-select"
                    id="linoleumType"
                    name="linoleumType"
                    value={formData.linoleumType}
                    onChange={handleInputChange}
                  >
                    <option value="household_pvc">Бытовой (ПВХ)</option>
                    <option value="semi_commercial_pvc">
                      Полукоммерческий (ПВХ)
                    </option>
                    <option value="commercial_pvc">Коммерческий (ПВХ)</option>
                    <option value="household_natural">
                      Бытовой (натуральный)
                    </option>
                    <option value="semi_commercial_natural">
                      Полукоммерческий (натуральный)
                    </option>
                    <option value="commercial_natural">
                      Коммерческий (натуральный)
                    </option>
                  </select>
                </label>
              </div>

              <label className="label-m">
                <span className="align-middle">Подгонка рисунка</span>
                <input
                  type="checkbox"
                  name="patternMatching"
                  checked={formData.patternMatching}
                  onChange={handlePatternMatchingChange}
                />
              </label>

              {showPatternStep && (
                <>
                  <span className="s-topen">Шаг рисунка, м</span>
                  <div className="radius">
                    <label className="numrange">
                      <input
                        type="number"
                        className={`input ${
                          errors.patternStep ? "error-input" : ""
                        }`}
                        name="patternStep"
                        value={formData.patternStep}
                        onChange={handleInputChange}
                        placeholder="0.3"
                        min="0.1"
                        step="any"
                      />
                      {errors.patternStep && (
                        <div className="error-message">
                          {formData.patternStep
                            ? "Минимальный шаг 0.1 м"
                            : "Обязательное поле"}
                        </div>
                      )}
                    </label>
                  </div>
                </>
              )}

              <span className="s-topen">
                Стоимость, 1м <sup>2</sup>
              </span>
              <div className="radius">
                <label className="numrange">
                  <input
                    type="number"
                    className={`input ${
                      errors.pricePerSqm ? "error-input" : ""
                    }`}
                    name="pricePerSqm"
                    value={formData.pricePerSqm}
                    onChange={handleInputChange}
                    required
                    min="0.1"
                    step="any"
                  />
                  {errors.pricePerSqm && (
                    <div className="error-message">Обязательное поле</div>
                  )}
                </label>
              </div>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>Как рассчитать нужное количество линолеума?</h2>

          <p>
            Линолеум — популярный напольный материал, сочетающий доступную цену,
            долговечность и простоту укладки. Однако перед покупкой важно
            правильно определить объем, чтобы не купить лишнего или
            недостаточно. Онлайн-калькулятор помогает сделать это быстро и
            точно, учитывая особенности помещения и самого покрытия.
          </p>

          <h3>Почему стоит использовать калькулятор?</h3>

          <p>
            Ручной расчет может быть неточным, особенно если комната имеет
            сложную форму или вы планируете укладывать покрытие с подгонкой
            рисунка. Калькулятор автоматически учитывает такие параметры, как:
          </p>

          <ul>
            <li>
              <strong>Общая площадь помещения:</strong> длина × ширина;
            </li>
            <li>
              <strong>Ширина рулона:</strong> влияет на количество стыков;
            </li>
            <li>
              <strong>Запас на подрезку:</strong> обычно 5–10%;
            </li>
            <li>
              <strong>Тип укладки:</strong> прямая, диагональная, с фиксацией;
            </li>
            <li>
              <strong>Стоимость за метр:</strong> чтобы сразу понять бюджет
              проекта.
            </li>
          </ul>

          <h3>Какие данные нужны для расчёта?</h3>

          <p>Чтобы получить точный результат, подготовьте:</p>

          <ul>
            <li>
              <strong>Длину и ширину комнаты</strong> в метрах;
            </li>
            <li>
              <strong>Ширину рулона:</strong> стандартные варианты — 2, 3 или 4
              метра;
            </li>
            <li>
              <strong>Тип линолеума:</strong> бытовой, полукоммерческий,
              коммерческий;
            </li>
            <li>
              <strong>Наличие рисунка:</strong> требует дополнительного запаса;
            </li>
            <li>
              <strong>Цену за квадратный метр:</strong> можно указать для
              расчёта стоимости.
            </li>
          </ul>

          <h3>Где чаще всего используется линолеум?</h3>

          <p>Этот материал подходит практически для любого помещения:</p>

          <ul>
            <li>
              <strong>В жилых зонах:</strong> спальни, гостиные, коридоры;
            </li>
            <li>
              <strong>На кухне:</strong> водостойкие виды идеально подходят;
            </li>
            <li>
              <strong>В ванной:</strong> при условии правильной гидроизоляции;
            </li>
            <li>
              <strong>В офисах и школах:</strong> коммерческий тип отлично
              выдерживает нагрузку;
            </li>
            <li>
              <strong>В детских:</strong> мягкий и безопасный вариант для
              активных игр.
            </li>
          </ul>

          <h3>Как работает калькулятор?</h3>

          <p>
            После ввода данных система рассчитывает общую площадь комнаты и
            сравнивает её с шириной и длиной рулона. Если помещение имеет ниши,
            колонны или неправильную форму, калькулятор позволяет разбить его на
            участки и рассчитать каждый отдельно. Также учитывается наличие
            рисунка, направление укладки и коэффициент запаса.
          </p>

          <h3>Что такое коэффициент запаса?</h3>

          <p>
            Даже самый аккуратный мастер оставляет небольшой запас материала на
            случай:
          </p>

          <ul>
            <li>
              <strong>Подрезки по краям:</strong> трубы, дверные проемы, углы;
            </li>
            <li>
              <strong>Ошибка в замерах:</strong> лучше взять чуть больше, чем
              меньше;
            </li>
            <li>
              <strong>Брак при транспортировке:</strong> повреждения могут быть;
            </li>
            <li>
              <strong>Подгонка узора:</strong> увеличивает расход на 10–15%;
            </li>
            <li>
              <strong>Диагональная укладка:</strong> также требует больше
              покрытия.
            </li>
          </ul>

          <h3>Как проверить точность результата?</h3>

          <p>
            Вы можете сравнить полученные значения с другими калькуляторами или
            выполнить контрольный расчет вручную. Также можно использовать
            мобильное приложение или обратиться к специалисту в магазине.
            Главное — правильно ввести исходные данные и не забывать про запас.
          </p>

          <h3>Какие ошибки совершают при расчете?</h3>

          <p>Чаще всего пользователи сталкиваются с такими проблемами:</p>

          <ul>
            <li>
              <strong>Не учтена ширина рулона:</strong> из-за этого возникает
              лишний шов;
            </li>
            <li>
              <strong>Перепутан тип покрытия:</strong> бытовой и коммерческий
              линолеум отличаются по характеристикам;
            </li>
            <li>
              <strong>Игнорирование рисунка:</strong> если есть узор, нужен
              запас для подгонки;
            </li>
            <li>
              <strong>Неверные замеры:</strong> неточности в начальных данных;
            </li>
            <li>
              <strong>Отсутствие учета формы:</strong> неправильная геометрия
              влияет на расход.
            </li>
          </ul>

          <h3>Как выбрать хороший калькулятор линолеума?</h3>

          <p>Хороший калькулятор должен:</p>

          <ul>
            <li>
              <strong>Уметь работать с разными единицами:</strong> метры,
              сантиметры;
            </li>
            <li>
              <strong>Поддерживать разные типы линолеума:</strong> ПВХ,
              натуральный, коммерческий;
            </li>
            <li>
              <strong>Учитывать рисунок:</strong> если он есть;
            </li>
            <li>
              <strong>Показывать стоимость:</strong> на основе цены за
              квадратный метр;
            </li>
            <li>
              <strong>Быть бесплатным:</strong> без подписок и регистрации.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-калькулятора?</h3>

          <p>Онлайн-инструменты обеспечивают:</p>

          <ul>
            <li>
              <strong>Точность:</strong> алгоритмы учитывают все основные
              факторы;
            </li>
            <li>
              <strong>Скорость:</strong> результат готов почти мгновенно;
            </li>
            <li>
              <strong>Универсальность:</strong> подходит как для дома, так и для
              офиса;
            </li>
            <li>
              <strong>Доступность:</strong> работает на любом устройстве;
            </li>
            <li>
              <strong>Экономию:</strong> избегайте перерасхода и перекупа.
            </li>
          </ul>

          <h3>Какие еще параметры можно рассчитать?</h3>

          <p>Некоторые калькуляторы умеют:</p>

          <ul>
            <li>
              <strong>Считать подложку:</strong> какой объем пленки или пробки
              нужен;
            </li>
            <li>
              <strong>Указать количество плинтуса:</strong> на основе периметра;
            </li>
            <li>
              <strong>Посчитать доставку:</strong> вес и количество рулонов
              влияют на логистику;
            </li>
            <li>
              <strong>Рассчитать объем клея:</strong> если покрытие
              приклеивается;
            </li>
            <li>
              <strong>Предложить варианты укладки:</strong> прямая,
              диагональная, с подгонкой.
            </li>
          </ul>

          <h3>Какие советы по выбору линолеума?</h3>

          <p>Вот что стоит учесть при покупке:</p>

          <ul>
            <li>
              <strong>Для кухни:</strong> берите водостойкий и легко чистящийся;
            </li>
            <li>
              <strong>Для прихожей:</strong> прочный и износостойкий;
            </li>
            <li>
              <strong>Для детской:</strong> экологичный и мягкий;
            </li>
            <li>
              <strong>Для спальни:</strong> теплый и бесшовный;
            </li>
            <li>
              <strong>Для офиса:</strong> коммерческий линолеум с защитой от
              истирания.
            </li>
          </ul>

          <h3>Какие типы линолеума существуют?</h3>

          <p>В зависимости от назначения и качества:</p>

          <ul>
            <li>
              <strong>Бытовой:</strong> для квартир, доступный и мягкий;
            </li>
            <li>
              <strong>Полукоммерческий:</strong> средний уровень
              износостойкости;
            </li>
            <li>
              <strong>Коммерческий:</strong> для офисов и торговых центров;
            </li>
            <li>
              <strong>Натуральный:</strong> пробковый, алкидный — более дорогой,
              но экологичный;
            </li>
            <li>
              <strong>ПВХ-линолеум:</strong> самый распространенный, экономичный
              и практичный.
            </li>
          </ul>

          <h3>Как правильно измерить комнату?</h3>

          <p>Вот что делать:</p>

          <ul>
            <li>
              <strong>Используйте рулетку:</strong> измеряйте длину и ширину;
            </li>
            <li>
              <strong>Если помещение сложное:</strong> делите его на
              прямоугольники;
            </li>
            <li>
              <strong>Избегайте округлений:</strong> лучше добавить немного
              сверху;
            </li>
            <li>
              <strong>Учтите мебель:</strong> если она остается, уменьшите
              площадь;
            </li>
            <li>
              <strong>Проверьте углы:</strong> они могут быть не совсем прямыми.
            </li>
          </ul>

          <h3>Какие проблемы возникают при укладке?</h3>

          <p>Среди распространенных трудностей:</p>

          <ul>
            <li>
              <strong>Стыковка нескольких полос:</strong> важна ширина рулона;
            </li>
            <li>
              <strong>Появление волн:</strong> если материал не был «вылежан»;
            </li>
            <li>
              <strong>Повреждение при нарезке:</strong> используйте острый нож;
            </li>
            <li>
              <strong>Несоответствие цвета:</strong> фото не всегда передают
              реальные оттенки;
            </li>
            <li>
              <strong>Недостаток клея:</strong> особенно если покрытие
              приклеивается.
            </li>
          </ul>

          <h3>Какие преимущества у разных типов линолеума?</h3>

          <p>Вот краткая характеристика:</p>

          <ul>
            <li>
              <strong>ПВХ:</strong> водостойкий, легкий в уходе;
            </li>
            <li>
              <strong>Натуральный:</strong> экологичный, но дороже;
            </li>
            <li>
              <strong>Коммерческий:</strong> выдерживает большие нагрузки;
            </li>
            <li>
              <strong>Антискользящий:</strong> подходит для влажных зон;
            </li>
            <li>
              <strong>Теплый линолеум:</strong> с толстой основой, комфортен
              босыми ногами.
            </li>
          </ul>

          <h3>Какие еще параметры влияют на стоимость?</h3>

          <p>Цена зависит от множества факторов:</p>

          <ul>
            <li>
              <strong>Толщина:</strong> чем толще — тем дороже;
            </li>
            <li>
              <strong>Износостойкость:</strong> важна для проходных зон;
            </li>
            <li>
              <strong>Цвет и рисунок:</strong> декоративные варианты стоят выше;
            </li>
            <li>
              <strong>Производитель:</strong> брендовые материалы часто дороже;
            </li>
            <li>
              <strong>Место покупки:</strong> цена может отличаться в
              зависимости от магазина.
            </li>
          </ul>

          <h3>Какие еще функции могут быть полезны?</h3>

          <p>Некоторые калькуляторы также предлагают:</p>

          <ul>
            <li>
              <strong>Рассчитать подложку:</strong> на основе площади и типа
              покрытия;
            </li>
            <li>
              <strong>Указать количество плинтуса:</strong> на основе периметра;
            </li>
            <li>
              <strong>Посчитать объем клея:</strong> для фиксации материала;
            </li>
            <li>
              <strong>Рассчитать стоимость доставки:</strong> если заказываете
              напрямую;
            </li>
            <li>
              <strong>Предложить варианты:</strong> разные типы и бренды
              линолеума.
            </li>
          </ul>

          <h3>Какие еще инструменты пригодятся при ремонте?</h3>

          <p>Помимо калькулятора линолеума, полезными будут:</p>

          <ul>
            <li>
              <strong>Калькулятор ковролина:</strong> если рассматриваете мягкие
              покрытия;
            </li>
            <li>
              <strong>Калькулятор паркета:</strong> для деревянных полов;
            </li>
            <li>
              <strong>Калькулятор ламината:</strong> чтобы сравнить варианты;
            </li>
            <li>
              <strong>Калькулятор краски:</strong> для стен, если ремонт
              масштабный;
            </li>
            <li>
              <strong>Калькулятор обоев:</strong> для завершения дизайна
              помещения.
            </li>
          </ul>

          <h3>Какие советы по укладке?</h3>

          <p>Вот что стоит учесть при работе:</p>

          <ul>
            <li>
              <strong>Выравнивайте пол:</strong> до начала укладки;
            </li>
            <li>
              <strong>Разглаживайте материал:</strong> пусть полежит несколько
              часов;
            </li>
            <li>
              <strong>Используйте правильный нож:</strong> для аккуратной резки;
            </li>
            <li>
              <strong>Не экономьте на клее:</strong> особенно если покрытие
              приклеивается;
            </li>
            <li>
              <strong>Проверьте направление:</strong> линолеум может иметь
              направленный ворс или рисунок.
            </li>
          </ul>

          <h3>Какие преимущества у линолеума?</h3>

          <p>Это практичное и доступное покрытие, которое:</p>

          <ul>
            <li>
              <strong>Легко чистится:</strong> просто протирается влажной
              тряпкой;
            </li>
            <li>
              <strong>Не боится воды:</strong> подходит для кухни и ванной;
            </li>
            <li>
              <strong>Создает тепло:</strong> мягкий и приятный босыми ногами;
            </li>
            <li>
              <strong>Долго служит:</strong> до 15 лет и более при правильном
              уходе;
            </li>
            <li>
              <strong>Широкий выбор:</strong> цвета, текстуры, толщины,
              плотность.
            </li>
          </ul>

          <h3>Какие еще параметры влияют на укладку?</h3>

          <p>При монтаже важно:</p>

          <ul>
            <li>
              <strong>Правильно положить материал:</strong> с соблюдением
              направления ворса;
            </li>
            <li>
              <strong>Установить порожки:</strong> между комнатами;
            </li>
            <li>
              <strong>Обработать швы:</strong> герметиком или лентой;
            </li>
            <li>
              <strong>Проверить состояние основания:</strong> пол должен быть
              ровным и чистым;
            </li>
            <li>
              <strong>Использовать правильный клей:</strong> под тип линолеума.
            </li>
          </ul>

          <h3>Какие ошибки совершают при покупке?</h3>

          <p>Самые частые:</p>

          <ul>
            <li>
              <strong>Не проверили образец:</strong> цвет и фактура могут
              отличаться от экрана;
            </li>
            <li>
              <strong>Не учли условия использования:</strong> в кухне нужен
              другой тип покрытия;
            </li>
            <li>
              <strong>Забыли про подложку:</strong> она улучшает комфорт и
              снижает шум;
            </li>
            <li>
              <strong>Не взяли запас:</strong> лучше купить чуть больше, чем
              потом докупать;
            </li>
            <li>
              <strong>Не сравнивали предложения:</strong> цены сильно
              различаются в разных магазинах.
            </li>
          </ul>

          <h3>Итог</h3>

          <p>
            Онлайн-калькулятор линолеума — незаменимый помощник при планировании
            ремонта. Он помогает избежать перерасхода, точно определить
            стоимость и заранее подготовиться к укладке. Используйте его, чтобы
            сделать процесс покупки и установки максимально простым и выгодным.
          </p>

          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
