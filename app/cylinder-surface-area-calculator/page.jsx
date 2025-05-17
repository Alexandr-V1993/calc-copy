"use client";
import React, { useState } from "react";

import HeaderModal from "../components/HeaderModal";
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
          "Калькулятор площади поверхности цилиндра — это удобный инструмент, который поможет легко и быстро вычислить площадь поверхности цилиндра, что особенно полезно при расчете необходимых материалов."
        }
        span={"поверхности цилиндра"}
      >
        <CalorieForm
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/area-cylinder"}
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
                    <span>Высота</span>
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
                    <span>Высота</span>
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
          <h2>Расчет Площади Цилиндра: Формулы, Примеры и Пояснения</h2>

          <p>
            Цилиндр — это геометрическая фигура, которая часто встречается в
            повседневной жизни. Его площадь играет важную роль в различных
            областях, начиная от строительства и инженерии до упаковочной
            индустрии. В этом разделе мы подробно рассмотрим, как вычислить
            площадь цилиндра, используя основные формулы, и приведем примеры для
            лучшего понимания.
          </p>

          <h3>Основные Элементы Цилиндра</h3>
          <p>
            Прежде чем перейти к формулам, давайте разберемся с основными
            элементами цилиндра:
          </p>
          <ul>
            <li>
              <strong>Радиус основания (r):</strong> Радиус круга, который
              формирует основание цилиндра.
            </li>
            <li>
              <strong>Высота (h):</strong> Расстояние между двумя основаниями
              цилиндра.
            </li>
            <li>
              <strong>Диаметр (d):</strong> Длина от одной стороны основания до
              другой через центр, связана с радиусом как{" "}
              <span className="w-t">d = 2r</span>.
            </li>
          </ul>

          <h3>Формулы для Вычисления Площади Цилиндра</h3>
          <p>Площадь цилиндра можно разделить на три основные составляющие:</p>

          <h4>
            Площадь боковой поверхности (S<sub>бок</sub>)
          </h4>
          <p>
            Боковая поверхность цилиндра — это прямоугольник, свернутый в
            трубку. Его площадь можно найти по следующей формуле:
          </p>
          <p className="formula">
            S<sub>бок</sub> = 2πrh
          </p>
          <p>где:</p>
          <ul>
            <li>r — радиус основания цилиндра,</li>
            <li>h — высота цилиндра.</li>
          </ul>

          <h4>
            Площадь одного основания (S<sub>осн</sub>)
          </h4>
          <p>
            Основание цилиндра — это круг, и его площадь рассчитывается по
            известной формуле:
          </p>
          <p className="formula">
            S<sub>осн</sub> = πr<sup>2</sup>
          </p>
          <p>
            Поскольку цилиндр имеет два основания, общая площадь оснований
            будет:
          </p>
          <p className="formula">
            S<sub>осн, общая</sub> = 2πr<sup>2</sup>
          </p>

          <h4>
            Полная площадь поверхности цилиндра (S<sub>полн</sub>)
          </h4>
          <p>
            Полная площадь поверхности цилиндра включает площадь боковой
            поверхности и площадь двух оснований:
          </p>
          <p className="formula">
            S<sub>полн</sub> = S<sub>бок</sub> + S<sub>осн, общая</sub> = 2πrh +
            2πr<sup>2</sup>
          </p>
          <p>или, что эквивалентно:</p>
          <p className="formula">
            S<sub>полн</sub> = 2πr(h + r)
          </p>

          <h3>Примеры Расчетов</h3>

          <h4>Пример 1</h4>
          <p>
            Предположим, у нас есть цилиндр с радиусом основания r = 5 см и
            высотой h = 10 см. Рассчитаем все составляющие площади:
          </p>
          <p>
            <strong>Площадь боковой поверхности:</strong>
          </p>
          <p className="formula">
            S<sub>бок</sub> = 2π × 5 × 10 = 100π ≈ 314.16 см²
          </p>
          <p>
            <strong>Площадь одного основания:</strong>
          </p>
          <p className="formula">
            S<sub>осн</sub> = π × 5<sup>2</sup> = 25π ≈ 78.54 см²
          </p>
          <p>Общая площадь двух оснований:</p>
          <p className="formula">
            S<sub>осн, общая</sub> = 2 × 25π = 50π ≈ 157.08 см²
          </p>
          <p>
            <strong>Полная площадь поверхности цилиндра:</strong>
          </p>
          <p className="formula">
            S<sub>полн</sub> = 100π + 50π = 150π ≈ 471.24 см²
          </p>

          <h4>Пример 2</h4>
          <p>
            Допустим, радиус основания цилиндра составляет 7 см, а высота — 14
            см. Рассчитаем полную площадь поверхности цилиндра:
          </p>
          <p>
            <strong>Площадь боковой поверхности:</strong>
          </p>
          <p className="formula">
            S<sub>бок</sub> = 2π × 7 × 14 = 196π ≈ 615.75 см²
          </p>
          <p>
            <strong>Площадь одного основания:</strong>
          </p>
          <p className="formula">
            S<sub>осн</sub> = π × 7<sup>2</sup> = 49π ≈ 153.94 см²
          </p>
          <p>Общая площадь двух оснований:</p>
          <p className="formula">
            S<sub>осн, общая</sub> = 2 × 49π = 98π ≈ 307.88 см²
          </p>
          <p>
            <strong>Полная площадь поверхности цилиндра:</strong>
          </p>
          <p className="formula">
            S<sub>полн</sub> = 196π + 98π = 294π ≈ 923.63 см²
          </p>

          <h3>Заключение</h3>
          <p>
            Расчет площади цилиндра — важная задача, которая может понадобиться
            в самых разных областях. Формулы для боковой, полной площади и
            площади оснований помогут вам точно вычислить эти параметры для
            любого цилиндра. Используя приведенные формулы и примеры, вы сможете
            легко справиться с задачей расчета площади цилиндра.
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
