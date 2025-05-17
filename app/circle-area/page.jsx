"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [vel, setvel] = useState("м");
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({
    value: "",
    round: 3,
    type: "radius",
  });

  const handleTabClick = (tab) => {
    let type = "radius";
    if (tab === "tab2") type = "diameter";
    if (tab === "tab3") type = "circumference";

    setSelectedTab(tab);
    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  };

  useEffect(() => {
    let type = "radius";
    if (selectedTab === "tab2") type = "diameter";
    if (selectedTab === "tab3") type = "circumference";

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
      round: e.target.value,
    });
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор площади круга предназначен для удобного и точного вычисления площади на основе радиуса. Подходит для использования в учебных целях, при проектировании и в любой другой ситуации, где требуется точный расчет площади круга."
        }
        span={"площади круга"}
      >
        <CalorieForm
          vel={vel}
          selectedTab={selectedTab}
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/area-circle"}
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
                    Длина
                  </span>
                </div>
              </div>
            </div>

            <div className="content">
              {initial.type === "radius" && (
                <label className="numrange">
                  <span>
                    Радиус круга, <span className="red">r</span>
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
              )}
              {initial.type === "diameter" && (
                <label className="numrange">
                  <span>
                    Диаметр круга, <span className="red">d</span>
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
              )}
              {initial.type === "circumference" && (
                <label className="numrange">
                  <span>
                    Длина окружности, <span className="red">L</span>
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
                  onChange={(e) => setvel(e.target.value)}
                >
                  <option value="м" selected="">
                    м
                  </option>
                  <option value="см">см</option>
                  <option value="мм">мм</option>
                </select>
              </label>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <div>
            <h2>1. Основные Формулы</h2>
            <div>
              <h3>1.1 Площадь круга</h3>
              <p>
                Площадь круга <strong>S</strong> можно вычислить, используя
                радиус <strong>r</strong> или диаметр <strong>d</strong> круга.
                Формулы:
              </p>
              <ul>
                <li>
                  <strong>С использованием радиуса:</strong>
                  <div className="formula">
                    <code>S = π &middot; r²</code>
                  </div>
                  <p>
                    где <strong>π</strong> (пи) — математическая константа,
                    примерно равная 3.14159.
                  </p>
                </li>
                <li>
                  <strong>С использованием диаметра:</strong>
                  <div className="formula">
                    <code>S = π &middot; d² / 4</code>
                  </div>
                  <p>
                    где <strong>d</strong> — диаметр круга, который равен
                    удвоенному радиусу <strong>d = 2r</strong>.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3>1.2 Длина окружности круга</h3>
              <p>
                Для полного понимания геометрии круга, также важно знать, как
                вычислить длину его окружности <strong>C</strong>. Формула:
              </p>
              <ul>
                <li>
                  <div className="formula">
                    <code>C = 2 &middot; π &middot; r</code>
                  </div>
                </li>
                <li>
                  Если известен диаметр:
                  <div className="formula">
                    <code>C = π &middot; d</code>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2>2. Примеры расчетов</h2>
            <div>
              <h3>2.1 Пример 1: Расчет площади круга по радиусу</h3>
              <p>
                Предположим, радиус круга <strong>r</strong> равен 5 см. Площадь
                круга рассчитывается следующим образом:
              </p>
              <div className="formula">
                <code>S = π &middot; 5² = π &middot; 25 &asymp; 78.54 см²</code>
              </div>
            </div>

            <div>
              <h3>2.2 Пример 2: Расчет площади круга по диаметру</h3>
              <p>
                Если диаметр круга <strong>d</strong> равен 10 см, радиус будет
                равен <strong>d / 2 = 5 см</strong>. Площадь:
              </p>
              <div className="formula">
                <code>
                  S = π &middot; 10² / 4 = (π &middot; 100) / 4 = 25π &asymp;
                  78.54 см²
                </code>
              </div>
            </div>
          </div>

          <div>
            <h2>3. Применение калькулятора</h2>
            <p>
              Калькулятор площади круга может быть полезен в различных областях:
            </p>
            <ul>
              <li>
                <strong>Строительство и инженерия:</strong> Для расчета площади
                покрытия и материалов.
              </li>
              <li>
                <strong>Наука и исследования:</strong> Для вычисления свойств и
                параметров объектов круглой формы.
              </li>
              <li>
                <strong>Финансовые расчеты:</strong> Для оценки стоимости
                материалов и ресурсов.
              </li>
            </ul>
          </div>

          <div>
            <h2>4. Программирование калькулятора</h2>
            <div>
              <h3>4.1 Интерфейс пользователя</h3>
              <p>
                Убедитесь, что интерфейс прост в использовании. Включите поля
                для ввода радиуса или диаметра и кнопки для расчета и очистки
                данных. Предоставьте четкие указания и сообщения об ошибках.
              </p>
            </div>

            <div>
              <h3>4.2 Форматирование результата</h3>
              <p>
                Результаты расчета должны быть легко читаемыми. Используйте
                функции форматирования чисел для отображения результатов с двумя
                или тремя знаками после запятой.
              </p>
            </div>

            <div>
              <h3>4.3 Валидизация ввода</h3>
              <p>
                Проверьте, что введенные пользователем данные корректны.
                Например, радиус и диаметр не могут быть отрицательными числами.
                Обработайте ошибки и предоставьте пользователю понятные
                сообщения.
              </p>
            </div>
          </div>

          <div>
            <h2>5. Расширенные концепции</h2>
            <div>
              <h3>5.1 Объем круговой сферы</h3>
              <p>
                Для сферической формы можно использовать формулу для объема:
              </p>
              <div className="formula">
                <code>V = (4 / 3) &middot; π &middot; r³</code>
              </div>
              <p>
                где <strong>r</strong> — радиус сферы. Это может быть полезно,
                если вы работаете с круглыми объектами в трехмерном
                пространстве.
              </p>
            </div>

            <div>
              <h3>5.2 Площадь сектора круга</h3>
              <p>
                Если вам нужно вычислить площадь сектора круга, можно
                использовать следующую формулу:
              </p>
              <div className="formula">
                <code>S = (θ / 360°) &middot; π &middot; r²</code>
              </div>
              <p>
                где <strong>θ</strong> — центральный угол сектора в градусах.
              </p>
            </div>

            <div>
              <h3>5.3 Площадь сегмента круга</h3>
              <p>
                Для более сложных расчетов, таких как площадь сегмента круга,
                используется формула:
              </p>
              <div className="formula">
                <code>S = r² &middot; (θ / 2 - sin θ)</code>
              </div>
              <p>
                где <strong>θ</strong> в радианах.
              </p>
            </div>
          </div>

          <div>
            <h2>Заключение</h2>
            <p>
              Калькулятор площади круга является полезным инструментом для
              выполнения различных расчетов, связанных с круглыми объектами.
              Понимание формул и концепций, таких как радиус, диаметр и
              окружность, поможет в точных расчетах и применении их в реальной
              жизни. Не забудьте о важности точного форматирования и проверки
              ввода для обеспечения надежности калькулятора.
            </p>
          </div>

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
