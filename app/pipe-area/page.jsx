"use client";
import React, { useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [type, settype] = useState("radius");
  const [value, setvalue] = useState("");
  const [height, setheight] = useState("");
  const [round, setround] = useState(2);
  const [tab, setTab] = useState("radius");

  const handleTabClick = (tabType) => {
    setTab(tabType);
    settype(tabType);
  };

  const initial = {
    type: type,
    value: value,
    height: height,
    round: round,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор площади "}
        description={
          "Профессиональный расчет площади поверхности трубы: внутренней, внешней и торцов. Учет диаметра, толщины стенок и длины. Формулы с пояснениями."
        }
        span={"трубы"}
      >
        <CalorieForm
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/area-cylinder"}
        >
          <div className="test-input">
            <div className="tabs">
              <div>
                <span className="color-grey">Известная величина</span>
              </div>
              <span
                className={tab === "radius" ? "active underline" : ""}
                onClick={() => handleTabClick("radius")}
              >
                Радиус
              </span>
              <span
                className={tab === "diameter" ? "active underline" : ""}
                onClick={() => handleTabClick("diameter")}
              >
                Диаметр
              </span>
            </div>

            <div className="content">
              {tab === "radius" && (
                <div className="radius">
                  <label className="numrange">
                    <span>
                      Радиус,<span className="red"> r</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={value}
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Длина, <span className="red"> L</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Округлять до</span>
                    <select
                      name="round"
                      className="calc-inp"
                      id="round"
                      onChange={(e) => setround(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option selected value="2">
                        2
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Единица измерения</span>
                    <select name="unit" className="calc-inp" id="unit">
                      <option value="м">м</option>
                      <option value="см">см</option>
                      <option value="мм">мм</option>
                    </select>
                  </label>
                </div>
              )}
              {tab === "diameter" && (
                <div className="radius">
                  <label className="numrange">
                    <span>
                      Диаметр,<span className="red"> d</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={value}
                      onChange={(e) => setvalue(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Длина, <span className="red"> L</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Округлять до</span>
                    <select
                      name="round"
                      className="calc-inp"
                      id="round"
                      onChange={(e) => setround(e.target.value)}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option selected value="2">
                        2
                      </option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Единица измерения</span>
                    <select name="unit" className="calc-inp" id="unit">
                      <option value="м">м</option>
                      <option value="см">см</option>
                      <option value="мм">мм</option>
                    </select>
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h1>Калькулятор площади трубы</h1>

          <h2>Точный расчет поверхности металлических и пластиковых труб</h2>

          <p>
            Наш калькулятор позволяет рассчитать все параметры поверхности
            трубы: внешнюю площадь, внутреннюю площадь и площадь торцов.
          </p>

          <div className="features">
            <h3>Основные расчеты:</h3>
            <ul>
              <li>Площадь внешней поверхности</li>
              <li>Площадь внутренней поверхности</li>
              <li>Площадь торцевых поверхностей</li>
              <li>Расчет по внешнему диаметру и толщине стенки</li>
              <li>Примеры практических вычислений</li>
            </ul>
          </div>

          <h3>Основные формулы расчета</h3>

          <div className="formula-block">
            <h4>Площадь внешней поверхности:</h4>
            <p className="formula">
              S<sub>внеш</sub> = π × D × L
            </p>
            <p>где D - внешний диаметр, L - длина трубы</p>
          </div>

          <div className="formula-block">
            <h4>Площадь внутренней поверхности:</h4>
            <p className="formula">
              S<sub>внут</sub> = π × (D - 2t) × L
            </p>
            <p>где t - толщина стенки трубы</p>
          </div>

          <div className="formula-block">
            <h4>Площадь торцов:</h4>
            <p className="formula">
              S<sub>торц</sub> = 2 × π/4 × (D² - (D-2t)²) = π × t × (D - t)
            </p>
          </div>

          <h3>Примеры расчетов</h3>

          <div className="example">
            <h4>Пример 1: Труба 108×4 мм, длина 6 м</h4>
            <p className="formula">
              S<sub>внеш</sub> = π × 0.108 × 6 ≈ 2.036 м²
              <br />S<sub>внут</sub> = π × (0.108 - 0.008) × 6 ≈ 1.885 м²
              <br />S<sub>торц</sub> = π × 0.004 × (0.108 - 0.004) ≈ 0.0013 м²
            </p>
          </div>

          <div className="example">
            <h4>Пример 2: Труба 325×8 мм, длина 12 м</h4>
            <p className="formula">
              S<sub>внеш</sub> = π × 0.325 × 12 ≈ 12.252 м²
              <br />S<sub>внут</sub> = π × (0.325 - 0.016) × 12 ≈ 11.657 м²
              <br />S<sub>торц</sub> = π × 0.008 × (0.325 - 0.008) ≈ 0.008 м²
            </p>
          </div>

          <h3>Практическое применение</h3>

          <p>Расчет площади трубы необходим в различных отраслях:</p>

          <ul>
            <li>
              <strong>Промышленность:</strong> расчет теплообмена, подбор
              изоляции
            </li>
            <li>
              <strong>Строительство:</strong> определение расхода защитных
              покрытий
            </li>
            <li>
              <strong>ЖКХ:</strong> планирование ремонтных работ трубопроводов
            </li>
            <li>
              <strong>Проектирование:</strong> расчет гидравлического
              сопротивления
            </li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> При расчетах площади для окраски или
              изоляции учитывайте необходимый запас (обычно 5-10%).
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Как рассчитать площадь для трубы нестандартной формы?</h4>
            <p>Для профильных труб используйте периметр сечения × длину</p>

            <h4>Как учитывать резьбовые соединения?</h4>
            <p>Добавьте 15-20% к расчетной площади для учета фитингов</p>

            <h4>Как перевести площадь в количество краски?</h4>
            <p>Разделите площадь на расход краски (указан на упаковке)</p>
          </div>

          <p className="other-calculators">
            <a href="/">Все инженерные калькуляторы →</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
