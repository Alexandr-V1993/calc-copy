"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [vel, setVel] = useState("м");
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({
    value: "",
    round: 2,
    type: "radius",
    height: "",
  });

  const handleTabClick = (tab) => {
    let type = "radius";
    if (tab === "tab2") type = "diameter";
    if (tab === "tab3") type = "area";

    setSelectedTab(tab);
    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  };

  useEffect(() => {
    let type = "radius";
    if (selectedTab === "tab2") type = "diameter";
    if (selectedTab === "tab3") type = "area";

    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  }, [selectedTab]);

  const handleChange = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleRoundChange = (e) => {
    setInitial({
      ...initial,
      round: Number(e.target.value),
    });
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор объема цилиндра предназначен для удобного и точного вычисления объема на основе радиуса и высоты. Подходит для использования в учебных целях, инженерных расчетах и в любой другой ситуации, где требуется точный расчет объема цилиндра."
        }
        span={"объема цилиндра"}
      >
        <CalorieForm
          vel={vel}
          selectedTab={selectedTab}
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/volume-cylinder"}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="flex-row">
                <div className="centre-flex">
                  {" "}
                  <span>Известная величина</span>
                </div>
                <div className="right-all-gap">
                  <span
                    className={selectedTab === "tab1" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab1")}
                  >
                    Радиус
                  </span>
                  <span
                    className={selectedTab === "tab2" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab2")}
                  >
                    Диаметр
                  </span>
                  <span
                    className={selectedTab === "tab3" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab3")}
                  >
                    Площадь
                  </span>
                </div>
              </div>
            </div>

            <div className="content">
              {initial.type === "radius" && (
                <>
                  <label className="numrange">
                    <span>
                      Радиус, <span className="red">r</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="value"
                      value={initial.value}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      name="height"
                      value={initial.height}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {initial.type === "diameter" && (
                <>
                  <label className="numrange">
                    <span>
                      Диаметр, <span className="red">d</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="value"
                      value={initial.value}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      name="height"
                      value={initial.height}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {initial.type === "area" && (
                <>
                  <label className="numrange">
                    <span>
                      Площадь, <span className="red">S</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="value"
                      value={initial.value}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      name="height"
                      value={initial.height}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              <label className="numrange">
                <span>Округлять до (знаков после запятой)</span>
                <select
                  name="round"
                  className="calc-inp"
                  value={initial.round}
                  onChange={handleRoundChange}
                >
                  {[...Array(11).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </label>
              <label className="numrange">
                <span>Единица измерения</span>
                <select
                  name="unit"
                  className="calc-inp"
                  value={vel}
                  onChange={(e) => setVel(e.target.value)}
                >
                  <option value="м">м</option>
                  <option value="см">см</option>
                  <option value="мм">мм</option>
                </select>
              </label>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>Калькулятор объема цилиндра: Формулы и примеры расчета</h2>
          <p>
            Калькулятор объема цилиндра – это удобный инструмент для вычисления
            объема цилиндрической формы на основе известных параметров. Если вам
            нужно быстро и точно определить объем цилиндра, воспользуйтесь нашим
            калькулятором. В этом руководстве мы расскажем, как рассчитать объем
            цилиндра вручную с помощью формул, а также приведем примеры расчета.
          </p>

          <h2>Формула объема цилиндра</h2>
          <p>Объем цилиндра можно вычислить с помощью следующей формулы:</p>
          <p class="formula">V = π * r² * h</p>
          <p>Где:</p>
          <ul>
            <li>
              <strong>V</strong> – объем цилиндра;
            </li>
            <li>
              <strong>π</strong> – математическая постоянная (приблизительно
              равная 3.14159);
            </li>
            <li>
              <strong>r</strong> – радиус основания цилиндра;
            </li>
            <li>
              <strong>h</strong> – высота цилиндра.
            </li>
          </ul>

          <h2>Пример расчета объема цилиндра</h2>
          <p>
            Рассмотрим пример, в котором радиус основания цилиндра равен 5 см, а
            высота – 10 см. Чтобы найти объем цилиндра, используем формулу:
          </p>
          <p class="formula">V = π * 5² * 10</p>
          <p>Сначала возводим радиус в квадрат:</p>
          <p class="formula">5² = 25</p>
          <p>Затем умножаем полученное значение на высоту и π:</p>
          <p class="formula">V = π * 25 * 10 = 250π ≈ 785.4 см³</p>
          <p>
            Таким образом, объем цилиндра с радиусом 5 см и высотой 10 см
            составляет приблизительно 785.4 см³.
          </p>

          <h2>Как пользоваться калькулятором объема цилиндра</h2>
          <p>
            Введите известные вам значения радиуса основания и высоты цилиндра в
            соответствующие поля калькулятора, и он мгновенно рассчитает объем.
            Этот инструмент идеально подходит как для студентов, так и для
            профессионалов, которым нужно быстро и точно вычислить объем
            цилиндра.
          </p>

          <p>
            Используйте наш калькулятор для решения задач по геометрии,
            инженерных расчетов или для практического применения в различных
            областях науки и техники.
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
