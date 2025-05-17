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
          "Профессиональный калькулятор линолеума поможет вам точно рассчитать необходимое количество материала для вашего помещения. "
        }
      >
        <CalorieForm
          obj={prepareFormData()}
          url={"https://calcoffee.ru/api/calculate/flooring"}
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
          <h2>Как пользоваться калькулятором линолеума</h2>
          <p>Наш калькулятор предлагает два метода расчета:</p>

          <h3>1. Расчет по размерам</h3>
          <p>
            Введите длину и ширину комнаты, а также параметры рулона линолеума.
            Укажите направление укладки и другие параметры для получения точного
            расчета.
          </p>

          <h3>2. Расчет по площади</h3>
          <p>
            Если вам известна общая площадь помещения, просто введите это
            значение и параметры рулона для быстрого расчета.
          </p>

          <h3>Полезные советы:</h3>
          <ul>
            <li>
              Всегда добавляйте 5-10% материала на подрезку и возможные ошибки
            </li>
            <li>
              При наличии рисунка учитывайте его шаг для правильной подгонки
            </li>
            <li>Учитывайте тип линолеума при расчетах</li>
            <li>
              Для помещений сложной формы разбейте площадь на простые фигуры
            </li>
          </ul>

          <h3>Частые вопросы</h3>
          <p>
            <strong>Как рассчитать запас линолеума?</strong>
            <br />
            Мы автоматически учитываем стандартный запас 5-7%, но вы можете
            указать свой коэффициент в соответствующем поле.
          </p>

          <p>
            <strong>Что делать если комната нестандартной формы?</strong>
            <br />
            Разделите помещение на прямоугольные участки, рассчитайте каждый
            отдельно и суммируйте результаты.
          </p>

          <p>
            <strong>Как учитывается рисунок на линолеуме?</strong>
            <br />
            Активируйте опцию "Подгонка рисунка" и укажите шаг рисунка для
            точного расчета.
          </p>

          <a href="/">Выбрать другой калькулятор</a>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
