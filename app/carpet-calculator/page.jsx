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
    weightPerSqm: "",
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
        title={"Калькулятор ковролина"}
        description={
          "Онлайн калькулятор поможет точно рассчитать, сколько ковролина вам нужно на комнату, учитывая размеры, ширину рулона и возможные отходы при укладке."
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

              <span className="s-topen">
                Вес, 1м<sup>2</sup>(кг)
              </span>
              <div className="radius">
                <label className="numrange">
                  <input
                    type="number"
                    className={`input ${
                      errors.weightPerSqm ? "error-input" : ""
                    }`}
                    name="weightPerSqm"
                    value={formData.weightPerSqm}
                    onChange={handleInputChange}
                    required
                    min="0.1"
                    step="any"
                  />
                  {errors.weightPerSqm && (
                    <div className="error-message">Обязательное поле</div>
                  )}
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
          <h2>Как рассчитать нужное количество ковролина?</h2>

          <p>
            Ковролин — популярный материал для напольных покрытий благодаря
            своей мягкости, шумопоглощению и доступной цене. Однако перед
            покупкой важно определить, сколько материала потребуется, чтобы не
            купить лишнего или недостаточно. Онлайн-калькулятор помогает быстро
            и точно рассчитать объем, учитывая все особенности укладки и формы
            комнаты.
          </p>

          <h3>Почему стоит использовать калькулятор?</h3>

          <p>
            Ручной расчет может быть неточным, особенно если комната имеет
            сложную форму или вы планируете укладывать покрытие по диагонали.
            Калькулятор автоматически учитывает такие факторы, как:
          </p>

          <ul>
            <li>
              <strong>Ширина рулона:</strong> стандартная — 2 м, 3 м или 4 м;
            </li>
            <li>
              <strong>Площадь комнаты:</strong> ввод длины и ширины или общей
              площади;
            </li>
            <li>
              <strong>Запас на подрезку:</strong> обычно 5–10% от общего объема;
            </li>
            <li>
              <strong>Диагональная укладка:</strong> требует больше материала;
            </li>
            <li>
              <strong>Направление ворса:</strong> влияет на внешний вид и
              расход.
            </li>
          </ul>

          <p>Это делает процесс планирования более простым и экономичным.</p>

          <h3>Какие данные нужны для расчета?</h3>

          <p>Чтобы воспользоваться калькулятором, подготовьте:</p>

          <ul>
            <li>
              <strong>Длину и ширину комнаты</strong> в метрах;
            </li>
            <li>
              <strong>Ширину рулона:</strong> уточните у продавца или выберите
              из предложенных вариантов;
            </li>
            <li>
              <strong>Наличие ниш, выступов, колонн:</strong> они могут повлиять
              на общий расход;
            </li>
            <li>
              <strong>Тип укладки:</strong> прямая, диагональная, с подгонкой
              рисунка;
            </li>
            <li>
              <strong>Стоимость ковролина:</strong> чтобы рассчитать итоговую
              сумму.
            </li>
          </ul>

          <h3>Где чаще всего используется ковролин?</h3>

          <p>Ковролин применяется в самых разных ситуациях:</p>

          <ul>
            <li>
              <strong>В жилых помещениях:</strong> гостиные, спальни, детские;
            </li>
            <li>
              <strong>В офисах:</strong> зоны отдыха, переговорные;
            </li>
            <li>
              <strong>В общественных местах:</strong> школы, больницы, коридоры;
            </li>
            <li>
              <strong>На лестницах:</strong> прочный вариант для безопасного
              покрытия;
            </li>
            <li>
              <strong>В автомобилях:</strong> некоторые модели используют
              ковролин как внутреннюю отделку.
            </li>
          </ul>

          <h3>Как работает калькулятор?</h3>

          <p>
            После ввода данных система рассчитывает площадь комнаты и сравнивает
            её с шириной рулона. Затем она учитывает дополнительные параметры,
            такие как запас, направление укладки и наличие рисунка. В результате
            вы получаете точное количество погонных метров или квадратных метров
            ковролина, а также примерную стоимость проекта.
          </p>

          <h3>Какие ошибки совершают при расчете?</h3>

          <p>Чаще всего люди сталкиваются с такими проблемами:</p>

          <ul>
            <li>
              <strong>Не учтен запас:</strong> после укладки остается слишком
              мало или много материала;
            </li>
            <li>
              <strong>Игнорирование формы комнаты:</strong> неправильный расчет
              площади;
            </li>
            <li>
              <strong>Перепутана ширина рулона:</strong> разные производители
              предлагают разные размеры;
            </li>
            <li>
              <strong>Отсутствие учета узора:</strong> подгонка увеличивает
              расход;
            </li>
            <li>
              <strong>Неверно измеренная площадь:</strong> ошибка даже на 10 см
              может сильно повлиять на результат.
            </li>
          </ul>

          <h3>Как проверить точность результата?</h3>

          <p>
            Вы можете сделать контрольный расчет вручную или через другой
            калькулятор. Также можно сравнить несколько источников или
            использовать мобильное приложение для измерения площади. Главное —
            правильно ввести исходные данные и учесть все особенности укладки.
          </p>

          <h3>Как выбрать хороший калькулятор ковролина?</h3>

          <p>Хороший калькулятор должен:</p>

          <ul>
            <li>
              <strong>Уметь работать с разными единицами:</strong> метры,
              сантиметры;
            </li>
            <li>
              <strong>Поддерживать разные типы укладки:</strong> прямую,
              диагональную;
            </li>
            <li>
              <strong>Учитывать рисунок:</strong> если он есть;
            </li>
            <li>
              <strong>Показывать стоимость:</strong> на основе цены за
              квадратный метр;
            </li>
            <li>
              <strong>Быть бесплатным:</strong> без регистрации и подписки.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-калькулятора?</h3>

          <p>Онлайн-инструменты обеспечивают:</p>

          <ul>
            <li>
              <strong>Точность:</strong> алгоритмы учитывают все важные
              параметры;
            </li>
            <li>
              <strong>Скорость:</strong> результат готов почти мгновенно;
            </li>
            <li>
              <strong>Универсальность:</strong> подходит как для дома, так и для
              офиса;
            </li>
            <li>
              <strong>Доступность:</strong> работает на любом устройстве с
              интернетом;
            </li>
            <li>
              <strong>Экономию:</strong> позволяет избежать перерасхода и
              перекупа.
            </li>
          </ul>

          <h3>Что влияет на расход ковролина?</h3>

          <p>Несколько факторов могут повлиять на точность расчета:</p>

          <ul>
            <li>
              <strong>Форма комнаты:</strong> прямоугольник, треугольник,
              трапеция;
            </li>
            <li>
              <strong>Ширина рулона:</strong> стандартная — 2 или 4 метра;
            </li>
            <li>
              <strong>Метод укладки:</strong> диагональная укладка требует
              больше материала;
            </li>
            <li>
              <strong>Раппорт узора:</strong> если есть рисунок, который нужно
              подгонять;
            </li>
            <li>
              <strong>Мебель и ниши:</strong> их тоже нужно учитывать при
              замерах.
            </li>
          </ul>

          <h3>Как правильно измерить помещение?</h3>

          <p>Вот что делать:</p>

          <ul>
            <li>
              <strong>Используйте рулетку:</strong> измеряйте длину и ширину
              комнаты;
            </li>
            <li>
              <strong>Если помещение сложное:</strong> разделите его на простые
              участки;
            </li>
            <li>
              <strong>Избегайте округлений:</strong> лучше добавить немного
              сверху, чем не хватит;
            </li>
            <li>
              <strong>Учтите двери и проемы:</strong> иногда их площадь не
              учитывается;
            </li>
            <li>
              <strong>Проверьте направление ворса:</strong> это влияет на
              стыковку и внешний вид.
            </li>
          </ul>

          <h3>Какие еще параметры можно рассчитать?</h3>

          <p>Помимо самого количества ковролина, калькулятор может показать:</p>

          <ul>
            <li>
              <strong>Общую стоимость:</strong> на основе цены за квадратный
              метр;
            </li>
            <li>
              <strong>Необходимое количество подложки:</strong> под ковролин
              часто кладут основание;
            </li>
            <li>
              <strong>Затраты на установку:</strong> если указана стоимость
              работы;
            </li>
            <li>
              <strong>Потребность в плинтусе:</strong> на основе периметра
              комнаты;
            </li>
            <li>
              <strong>Размеры порезки:</strong> если у вас несколько комнат или
              зон.
            </li>
          </ul>

          <h3>Какие советы по выбору ковролина?</h3>

          <p>При покупке обратите внимание на:</p>

          <ul>
            <li>
              <strong>Тип ворса:</strong> длинный — мягче, но сложнее в уходе;
            </li>
            <li>
              <strong>Плотность:</strong> влияет на долговечность;
            </li>
            <li>
              <strong>Цвет и рисунок:</strong> светлый цвет скрывает меньше
              пыли;
            </li>
            <li>
              <strong>Состав:</strong> натуральные волокна дороже, но дольше
              служат;
            </li>
            <li>
              <strong>Ширину рулона:</strong> выбирайте тот, который подходит
              для вашей комнаты.
            </li>
          </ul>

          <h3>Какие типы ковролина бывают?</h3>
          <ul>
            <li>
              <strong>По составу:</strong> полиэстер, нейлон, полипропилен,
              шерсть;
            </li>
            <li>
              <strong>По способу производства:</strong> тканый, нетканый,
              иглопробивной;
            </li>
            <li>
              <strong>По назначению:</strong> бытовой, коммерческий, спортивный;
            </li>
            <li>
              <strong>По толщине:</strong> тонкий, средний, толстый.
            </li>
          </ul>

          <h3>Какие преимущества у ковролина?</h3>

          <p>Это практичное и доступное покрытие, которое:</p>

          <ul>
            <li>
              <strong>Поглощает звук:</strong> отличный выбор для квартир и
              офисов;
            </li>
            <li>
              <strong>Создает тепло:</strong> сохраняет комфортную температуру в
              помещении;
            </li>
            <li>
              <strong>Абсорбирует удары:</strong> снижает риск травм при
              падении;
            </li>
            <li>
              <strong>Удобен в уходе:</strong> легко чистится и долго служит;
            </li>
            <li>
              <strong>Выглядит эстетично:</strong> множество цветов и текстур на
              любой вкус.
            </li>
          </ul>

          <h3>Как проверить качество материала?</h3>

          <p>Обратите внимание на:</p>

          <ul>
            <li>
              <strong>Плотность:</strong> чем плотнее — тем дольше служит;
            </li>
            <li>
              <strong>Толщину:</strong> влияет на комфорт и уровень
              звукоизоляции;
            </li>
            <li>
              <strong>Устойчивость к истиранию:</strong> особенно важно для
              проходных зон;
            </li>
            <li>
              <strong>Срок службы:</strong> уточняйте у продавца;
            </li>
            <li>
              <strong>Сертификаты качества:</strong> экологичность и
              безопасность материалов.
            </li>
          </ul>

          <h3>Какие ещё инструменты могут помочь?</h3>

          <p>Кроме калькулятора ковролина, полезными будут:</p>

          <ul>
            <li>
              <strong>Калькулятор паркета:</strong> если рассматриваете
              деревянные покрытия;
            </li>
            <li>
              <strong>Калькулятор ламината:</strong> для сравнения стоимости и
              времени укладки;
            </li>
            <li>
              <strong>Калькулятор линолеума:</strong> если выбираете между
              покрытиями;
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

          <h3>Какие ошибки чаще всего возникают при покупке?</h3>

          <p>Среди распространенных проблем:</p>

          <ul>
            <li>
              <strong>Выбирают слишком тонкий:</strong> быстро стаптывается;
            </li>
            <li>
              <strong>Не учитывают место для расширения:</strong> ковролин может
              «играть» при укладке;
            </li>
            <li>
              <strong>Забывают про подложку:</strong> это влияет на комфорт и
              долговечность;
            </li>
            <li>
              <strong>Не проверяют образцы:</strong> цвет и фактура могут
              отличаться от фото;
            </li>
            <li>
              <strong>Игнорируют условия использования:</strong> в кухне или
              прихожей нужен другой тип покрытия.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-расчёта?</h3>

          <p>Онлайн-калькулятор:</p>

          <ul>
            <li>
              <strong>Точный:</strong> учитывает раппорт, запас, укладку;
            </li>
            <li>
              <strong>Мгновенный:</strong> результат за секунды;
            </li>
            <li>
              <strong>Универсальный:</strong> подходит для любого помещения;
            </li>
            <li>
              <strong>Доступный:</strong> работает на любом устройстве;
            </li>
            <li>
              <strong>Экономит деньги:</strong> избегайте перерасхода и
              недостачи.
            </li>
          </ul>

          <h3>Какие еще параметры влияют на стоимость?</h3>

          <p>Цена зависит от множества факторов:</p>

          <ul>
            <li>
              <strong>Тип волокна:</strong> искусственные дешевле, но менее
              долговечны;
            </li>
            <li>
              <strong>Производитель:</strong> брендовые материалы стоят выше;
            </li>
            <li>
              <strong>Толщина и плотность:</strong> чем выше — тем дороже;
            </li>
            <li>
              <strong>Рисунок и дизайн:</strong> декоративные покрытия стоят
              дороже;
            </li>
            <li>
              <strong>Дополнительные свойства:</strong> влагостойкость,
              антистатичность, защита от пятен.
            </li>
          </ul>

          <h3>Какие полезные советы по укладке?</h3>

          <p>Вот что стоит учесть при укладке:</p>

          <ul>
            <li>
              <strong>Измерьте комнату заранее:</strong> лучше дважды, чем один
              раз;
            </li>
            <li>
              <strong>Проверьте ширину рулона:</strong> она влияет на количество
              швов;
            </li>
            <li>
              <strong>Укладывайте вдоль света:</strong> так будет легче скрыть
              стыки;
            </li>
            <li>
              <strong>Используйте правильную подложку:</strong> улучшает
              амортизацию и звукоизоляцию;
            </li>
            <li>
              <strong>Делайте запас:</strong> всегда берите на 5–10% больше, чем
              требуется.
            </li>
          </ul>

          <h3>Какие еще параметры можно рассчитать?</h3>

          <p>Некоторые калькуляторы также умеют:</p>

          <ul>
            <li>
              <strong>Считать количество подложки:</strong> в зависимости от
              площади;
            </li>
            <li>
              <strong>Оценить стоимость доставки:</strong> особенно важно при
              крупных заказах;
            </li>
            <li>
              <strong>Посчитать количество плинтуса:</strong> на основе
              периметра;
            </li>
            <li>
              <strong>Рассчитать время укладки:</strong> для самостоятельного
              монтажа;
            </li>
            <li>
              <strong>Предложить подходящие аксессуары:</strong> монтажная
              лента, планки, уголки.
            </li>
          </ul>

          <h3>Какие еще факторы влияют на укладку?</h3>

          <p>Не забывайте:</p>

          <ul>
            <li>
              <strong>Температура и влажность:</strong> ковролин «тянется» при
              высокой влажности;
            </li>
            <li>
              <strong>Мебель:</strong> можно укладывать до монтажа мебели;
            </li>
            <li>
              <strong>Работа с углами:</strong> требует аккуратности и опыта;
            </li>
            <li>
              <strong>Тип основания:</strong> бетон, дерево, плитка — влияет на
              подготовку;
            </li>
            <li>
              <strong>Уровень квалификации:</strong> новичкам рекомендуется
              брать чуть больше материала.
            </li>
          </ul>

          <h3>Как выбрать правильный рулон?</h3>

          <p>Вот что стоит уточнить у продавца:</p>

          <ul>
            <li>
              <strong>Ширина рулона:</strong> 2 м, 3 м или 4 м;
            </li>
            <li>
              <strong>Длина рулона:</strong> 10 м, 25 м, 40 м и больше;
            </li>
            <li>
              <strong>Состав материала:</strong> полиэстер, нейлон, акрил;
            </li>
            <li>
              <strong>Стойкость к загрязнениям:</strong> важна для семей с
              детьми и животными;
            </li>
            <li>
              <strong>Срок гарантии:</strong> чем дольше — тем качественнее
              материал.
            </li>
          </ul>

          <h3>Какие еще услуги могут понадобиться?</h3>

          <p>Если вы не делаете всё самостоятельно, стоит учесть:</p>

          <ul>
            <li>
              <strong>Доставка:</strong> может быть платной;
            </li>
            <li>
              <strong>Установка:</strong> стоимость работы;
            </li>
            <li>
              <strong>Резка под размер:</strong> часто входит в услугу укладки;
            </li>
            <li>
              <strong>Подложка:</strong> важна для комфорта и долговечности;
            </li>
            <li>
              <strong>Чистка и обслуживание:</strong> профессионалы могут
              предложить уход после укладки.
            </li>
          </ul>

          <h3>Итог</h3>

          <p>
            Расчёт ковролина — важная часть подготовки к ремонту.
            Онлайн-калькулятор значительно упрощает этот процесс. Он помогает
            избежать лишних затрат, подобрать правильный материал и спланировать
            бюджет. Используйте его, чтобы сделать ремонт максимально
            эффективным и приятным.
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
