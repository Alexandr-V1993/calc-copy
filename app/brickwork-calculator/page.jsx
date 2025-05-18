"use client";
import React, { useState, useEffect } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import CalorieForm from "./CalorieForm";
import "./stag.css";

const brickSizes = [
  {
    name: "Одинарный 1НФ",
    length: 250,
    width: 120,
    height: 65,
    lwh: "250x120x65",
    weight: 3.6,
  },
  {
    name: "Полуторный 1,4НФ",
    length: 250,
    width: 120,
    height: 88,
    lwh: "250x120x88",
    weight: 4.3,
  },
  {
    name: "Двойной 2,1НФ",
    length: 250,
    width: 120,
    height: 140,
    lwh: "250x120x140",
    weight: 7.2,
  },
  {
    name: "Евро",
    length: 250,
    width: 85,
    height: 65,
    lwh: "250x85x65",
    weight: 2.5,
  },
  {
    name: "Модульный",
    length: 288,
    width: 138,
    height: 65,
    lwh: "288x138x65",
    weight: 4.7,
  },
  {
    name: "Силикатный",
    length: 250,
    width: 120,
    height: 138,
    lwh: "250x120x138",
    weight: 5.9,
  },
  {
    name: "Свои размеры",
    lwh: false,
    weight: 5.9,
  },
];

const brickBonds = [
  {
    name: "Половина кирпича",
    value: 0.5,
  },
  {
    name: "в 1 кирпич",
    value: 1,
  },
  {
    name: "в 1.5 кирпича",
    value: 1.5,
  },
  {
    name: "в 2 кирпича",
    value: 2,
  },
  {
    name: "в 2.5 кирпича",
    value: 2.5,
  },
];

function Compound() {
  const [initial, setInitial] = useState({
    brickLength: 250,
    brickWidth: 120,
    brickHeight: 65,
    wallLength: 10,
    wallHeight: 3,
    masonryThickness: 0.5,
    mortarThickness: 10,
    masonryGrid: 4,
    brickPrice: "",
    brickWeight: 3.6,
  });

  const handleBrickSizeChange = (event) => {
    const selectedOption = event.target.value;
    const selectedBrick = brickSizes.find(
      (brick) => `${brick.name} (${brick.lwh})` === selectedOption
    );

    if (selectedBrick) {
      setInitial((prevState) => ({
        ...prevState,
        brickLength: selectedBrick.length || "",
        brickWidth: selectedBrick.width || "",
        brickHeight: selectedBrick.height || "",
        brickWeight: selectedBrick.weight,
      }));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Сохраняем значение как строку в состоянии, а при использовании преобразуем в число
    setInitial((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Функция для получения числового значения из состояния
  const getNumericValue = (value) => {
    if (value === "") return "";
    const num = parseFloat(value);
    return isNaN(num) ? "" : num;
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Онлайн-калькулятор расчёта кирпича помогает точно определить необходимое количество кирпичей и сопутствующих материалов для строительства стен. Учитывает тип кирпича, толщину швов, площадь кладки и дополнительные параметры."
        }
        span={"кирпича"}
      >
        <CalorieForm
          wall={getNumericValue(initial.wallLength)}
          obj={{
            ...initial,
            brickLength: getNumericValue(initial.brickLength),
            brickWidth: getNumericValue(initial.brickWidth),
            brickHeight: getNumericValue(initial.brickHeight),
            wallLength: getNumericValue(initial.wallLength),
            wallHeight: getNumericValue(initial.wallHeight),
            masonryThickness: getNumericValue(initial.masonryThickness),
            mortarThickness: getNumericValue(initial.mortarThickness),
            masonryGrid: getNumericValue(initial.masonryGrid),
            brickPrice:
              initial.brickPrice === ""
                ? 0
                : getNumericValue(initial.brickPrice),
            brickWeight: getNumericValue(initial.brickWeight),
          }}
          url={"https://boxcalculators.ru/api/calculate/brick"}
        >
          <div className="test-input">
            <div className="content">
              <label className="numrange">
                <span>Вид кирпича</span>
                <select
                  className="calc-inp w-100"
                  onChange={handleBrickSizeChange}
                >
                  {brickSizes.map((brick, index) => (
                    <option key={index}>
                      {brick.name} {brick.lwh && `(${brick.lwh})`}
                    </option>
                  ))}
                </select>
              </label>
              <label className="numrange top-num">
                <span>
                  Размеры кирпича <span className="bolt">(ДxШxВ)</span>
                </span>
              </label>
              <div className="row-row">
                <label className="numrange">
                  <span>Длина</span>
                  <input
                    type="number"
                    className="input"
                    name="brickLength"
                    value={initial.brickLength}
                    onChange={handleInputChange}
                    step="any"
                  />
                  <div className="notation notation-m">мм</div>
                </label>
                <span className="five">x</span>
                <label className="numrange">
                  <span>Ширина</span>
                  <input
                    type="number"
                    className="input"
                    name="brickWidth"
                    value={initial.brickWidth}
                    onChange={handleInputChange}
                    required
                    step="any"
                  />
                  <div className="notation notation-m">мм</div>
                </label>
                <span className="five">x</span>
                <label className="numrange">
                  <span>Высота</span>
                  <input
                    type="number"
                    className="input"
                    name="brickHeight"
                    value={initial.brickHeight}
                    onChange={handleInputChange}
                    required
                    step="any"
                  />
                  <div className="notation notation-m">мм</div>
                </label>
              </div>
              <label className="numrange num-tops">
                <span>Общая длина всех стен</span>
                <input
                  type="number"
                  className="input"
                  name="wallLength"
                  value={initial.wallLength}
                  onChange={handleInputChange}
                  required
                  step="any"
                />
                <div className="notation">м</div>
              </label>
              <label className="numrange">
                <span>Высота стен по углам</span>
                <input
                  type="number"
                  className="input"
                  name="wallHeight"
                  value={initial.wallHeight}
                  onChange={handleInputChange}
                  required
                  step="any"
                />
                <div className="notation">м</div>
              </label>
              <label className="numrange">
                <span>Толщина стен</span>
                <select
                  className="calc-inp w-100"
                  name="masonryThickness"
                  value={initial.masonryThickness}
                  onChange={handleInputChange}
                >
                  {brickBonds.map((bond, index) => (
                    <option key={index} value={bond.value}>
                      {bond.name}
                    </option>
                  ))}
                </select>
              </label>
              <label className="numrange">
                <span>Толщина раствора в кладке</span>
                <input
                  type="number"
                  className="input"
                  name="mortarThickness"
                  value={initial.mortarThickness}
                  onChange={handleInputChange}
                  required
                  step="any"
                />
                <div className="notation">мм</div>
              </label>
              <label className="numrange">
                <span>Кладочная сетка</span>
                <select
                  className="calc-inp w-100"
                  name="masonryGrid"
                  value={initial.masonryGrid}
                  onChange={handleInputChange}
                >
                  <option value={0}>не укладывать</option>
                  <option value={2}>каждый ряд</option>
                  <option value={3}>через 2 ряда</option>
                  <option value={4}>через 3 ряда</option>
                  <option value={5}>через 4 ряда</option>
                </select>
              </label>
              <label className="numrange">
                <span>Цена за 1шт.</span>
                <input
                  type="number"
                  className="input"
                  name="brickPrice"
                  value={initial.brickPrice}
                  onChange={handleInputChange}
                  step="any"
                />
              </label>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>Как рассчитать количество кирпича для строительства?</h2>

          <p>
            При планировании строительства дома, бани или забора из кирпича
            важно заранее рассчитать точное количество необходимого материала.
            Это поможет избежать лишних затрат, недостатка материалов в процессе
            работ и упростит логистику доставки.
          </p>

          <p>
            Онлайн-калькулятор кирпича позволяет учесть такие параметры, как
            размеры используемого кирпича, толщина шва, общая площадь стен, их
            высота и толщина. Также можно задать запас материала на случай боя
            или подрезки — обычно это 5–10% от общего объёма.
          </p>

          <h3>Разновидности кирпича и их назначение</h3>

          <p>
            Кирпич может быть разным по составу, размерам и назначению. Наиболее
            популярные виды:
          </p>

          <ul>
            <li>
              <strong>Керамический кирпич</strong> — универсальный материал,
              используется для возведения стен и перегородок.
            </li>
            <li>
              <strong>Силикатный кирпич</strong> — отличается хорошей
              звукоизоляцией, но не рекомендуется для помещений с высокой
              влажностью.
            </li>
            <li>
              <strong>Облицовочный кирпич</strong> — применяется для отделки
              фасадов, имеет привлекательный внешний вид и устойчивость к
              погодным условиям.
            </li>
            <li>
              <strong>Огнеупорный кирпич</strong> — используется при
              строительстве печей, каминов и дымоходов.
            </li>
          </ul>

          <h3>Основные параметры для расчёта</h3>

          <p>Чтобы получить точный результат, необходимо знать:</p>

          <ul>
            <li>Тип и размер кирпича (стандартный: 250×120×65 мм).</li>
            <li>Толщину стены (в полкирпича, один, полтора и т. д.).</li>
            <li>Общую площадь стен (периметр × высоту).</li>
            <li>Толщину швов между кирпичами (обычно 10 мм).</li>
          </ul>

          <h3>Как работает калькулятор?</h3>

          <p>
            Калькулятор рассчитывает объём одного кирпича вместе с учётом шва,
            затем делит общую площадь стен на эту величину. Получается общее
            количество кирпичей. После этого добавляется запас материала.
          </p>

          <p className="formula">
            Формула: Общая площадь стен / Площадь одного кирпича (с учётом шва)
          </p>

          <h3>Пример расчёта</h3>

          <p>
            Допустим, нужно выложить стену площадью 25 м² стандартным кирпичом
            250×120×65 мм, толщина шва — 1 см.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Размер кирпича</td>
                  <td>250x120x65 мм</td>
                </tr>
                <tr>
                  <td>Толщина шва</td>
                  <td>10 мм</td>
                </tr>
                <tr>
                  <td>Площадь стены</td>
                  <td>25 м²</td>
                </tr>
                <tr>
                  <td>Запас кирпича</td>
                  <td>7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            С учётом всех данных получаем около 1400 кирпичей. С запасом —
            примерно 1500 штук.
          </p>

          <h3>Почему стоит использовать онлайн-калькулятор?</h3>

          <p>
            Ручной расчёт занимает время и может содержать ошибки. Калькулятор
            делает всё автоматически, быстро и точно. Он удобен как для
            новичков, так и для опытных строителей, экономит время и деньги.
          </p>

          <h3>Итог</h3>

          <p>
            Использование калькулятора кирпича — важный шаг на этапе подготовки
            к строительству. Он помогает минимизировать расходы, избежать
            дефицита материалов и спланировать все этапы работ заранее.
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
