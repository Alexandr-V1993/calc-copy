"use client";
import React, { useState, useEffect } from "react";
import HeaderModal from "../components/HeaderModal";
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
          "Калькулятор кирпича предназначен для точного расчета количества строительного и облицовочного кирпича, необходимого для дома и цоколя. Он также учитывает важные параметры и материалы, такие как объем кладочного раствора, количество сетки и гибких связей."
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
          url={"https://calcoffee.ru/api/calculate/brick"}
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
          <h2 className="blue">
            Калькулятор расчёта кирпича на кладку: Все, что нужно знать
          </h2>
          <p>
            В современном строительстве важным аспектом является точное
            планирование и расчёт необходимых материалов. Один из таких
            материалов – кирпич. Для того чтобы избежать перерасхода и
            оптимизировать процесс закупки, используют калькуляторы расчёта
            кирпича. Эти инструменты помогают не только определить точное
            количество кирпичей для кладки, но и учесть параметры, такие как
            размеры кирпича, толщина шва и площадь кладки. Благодаря этому
            строители могут заранее планировать свои ресурсы и избегать лишних
            затрат.
          </p>
          <h2>Правильный выбор кирпича</h2>
          <p>
            Выбор правильного типа кирпича играет важную роль в строительстве.
            Он зависит от назначения здания, климатических условий и
            архитектурных требований. Лицевой кирпич подходит для внешней
            отделки, так как он имеет эстетичный вид и устойчив к атмосферным
            воздействиям. Обыкновенный кирпич часто используется для внутренних
            стен, так как он дешевле и не требует высокого качества внешней
            отделки.
          </p>

          <h2>Зачем нужен калькулятор расчёта кирпича?</h2>
          <p>
            Калькулятор расчёта кирпича позволяет быстро и точно определить
            необходимое количество кирпичей для строительства. Это важно, чтобы
            избежать перерасхода материалов и дополнительных затрат. Кроме того,
            правильный расчёт помогает планировать доставку и хранение
            стройматериалов.
          </p>

          <h2>Основные параметры для расчёта</h2>
          <p>
            При использовании калькулятора расчёта кирпича необходимо учитывать
            несколько ключевых параметров:
          </p>
          <ul>
            <li>
              <strong>Размеры кирпича:</strong> стандартные размеры могут
              варьироваться, что влияет на итоговое количество кирпичей.
            </li>
            <li>
              <strong>Толщина шва:</strong> обычно толщина шва составляет около
              10 мм, но может изменяться в зависимости от требований проекта.
            </li>
            <li>
              <strong>Площадь кладки:</strong> общая площадь стен, которая будет
              выложена кирпичом.
            </li>
          </ul>

          <h2>Пример расчёта кирпича на кладку</h2>
          <p>
            Для наглядности рассмотрим пример расчёта кирпича. Допустим, нам
            нужно выложить стену площадью 20 м², используя стандартный кирпич
            размером 250x120x65 мм и толщиной шва 10 мм.
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
                  <td>Площадь кладки</td>
                  <td>20 м²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Расчёт количества кирпича</h2>
          <p>
            Для расчёта количества кирпичей нужно сначала определить площадь
            одного кирпича с учётом шва. Затем разделить общую площадь кладки на
            площадь одного кирпича.
          </p>
          <p className="formula">
            Площадь одного кирпича с учётом шва: (0.25 м + 0.01 м) * (0.065 м +
            0.01 м) = 0.01785 м²
          </p>
          <p className="formula">
            Количество кирпичей: 20 м² / 0.01785 м² ≈ 1120 кирпичей
          </p>

          <h2>Корректировки и запасы</h2>
          <p>
            В реальной строительной практике всегда следует учитывать запас
            материалов на случай боев и подрезки кирпича. Рекомендуется
            добавлять около 5-10% к полученному количеству кирпичей.
          </p>

          <h2>Использование таблиц для упрощения расчётов</h2>
          <p>
            Для удобства и ускорения процесса расчёта часто используются
            таблицы, в которых уже указаны примерные значения количества кирпича
            для различных площадей и размеров кирпича. Такие таблицы позволяют
            быстро ориентироваться и вносить необходимые корректировки.
          </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Площадь кладки (м²)</th>
                  <th>Количество кирпичей (шт)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>560</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>1120</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>1680</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Онлайн-калькуляторы и их преимущества</h2>
          <p>
            В интернете можно найти множество онлайн-калькуляторов, которые
            автоматически учитывают все параметры и выдают готовый результат.
            Это особенно удобно для тех, кто не хочет тратить время на ручные
            расчёты и хочет получить точный результат с минимальными усилиями.
          </p>

          <h2>Типы кирпича по назначению</h2>
          <p>
            Кирпичи могут различаться не только по размеру и материалу, но и по
            назначению. В зависимости от цели использования можно выделить
            несколько основных типов кирпича:
          </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Тип кирпича</th>
                  <th>Описание</th>
                  <th>Примерное применение</th>
                  <th>Основные преимущества</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Обыкновенный</strong>
                  </td>
                  <td>
                    Используется для возведения внутренних и внешних стен, не
                    требующих специальной обработки.
                  </td>
                  <td>Внутренние стены, перегородки</td>
                  <td>Доступность, простота использования</td>
                </tr>
                <tr>
                  <td>
                    <strong>Лицевой</strong>
                  </td>
                  <td>
                    Применяется для облицовки фасадов зданий, имеет высокую
                    эстетическую ценность.
                  </td>
                  <td>Фасады зданий, декоративные элементы</td>
                  <td>
                    Эстетичный внешний вид, устойчивость к погодным условиям
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Клинкерный</strong>
                  </td>
                  <td>
                    Характеризуется высокой прочностью и устойчивостью к внешним
                    воздействиям, подходит для мощения.
                  </td>
                  <td>Мощение дорог, тротуаров</td>
                  <td>Высокая прочность, долговечность</td>
                </tr>
                <tr>
                  <td>
                    <strong>Шамотный</strong>
                  </td>
                  <td>
                    Изготавливается из огнеупорной глины, используется в печах и
                    каминах.
                  </td>
                  <td>Печи, камины, дымоходы</td>
                  <td>Огнеупорность, термостойкость</td>
                </tr>
                <tr>
                  <td>
                    <strong>Силикатный</strong>
                  </td>
                  <td>
                    Производится из песка и извести, отличается хорошей
                    звукоизоляцией и морозостойкостью.
                  </td>
                  <td>Жилые дома, промышленные здания</td>
                  <td>Хорошая звукоизоляция, морозостойкость</td>
                </tr>
                <tr>
                  <td>
                    <strong>Керамический</strong>
                  </td>
                  <td>
                    Наиболее распространенный тип, изготавливается из глины и
                    применяется в строительстве стен.
                  </td>
                  <td>Все виды строительства</td>
                  <td>Универсальность, прочность</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Сколько кирпичей в 1 м² и 1 м³ кладки?</h2>
          <p>
            Для расчёта количества кирпичей в кладке необходимо учитывать не
            только размеры кирпича, но и толщину швов. В таблице ниже приведены
            приблизительные значения для стандартных типов кирпича:
          </p>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Тип кирпича</th>
                  <th>Размер кирпича (мм)</th>
                  <th>Количество кирпичей в 1 м² кладки (шт)</th>
                  <th>Количество кирпичей в 1 м³ кладки (шт)</th>
                  <th>Вес одного кирпича (кг)</th>
                  <th>Примерный вес 1 м³ кладки (кг)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Одинарный</strong>
                  </td>
                  <td>250x120x65</td>
                  <td>51</td>
                  <td>512</td>
                  <td>3.5</td>
                  <td>1792</td>
                </tr>
                <tr>
                  <td>
                    <strong>Полуторный</strong>
                  </td>
                  <td>250x120x88</td>
                  <td>38</td>
                  <td>378</td>
                  <td>4.2</td>
                  <td>1588</td>
                </tr>
                <tr>
                  <td>
                    <strong>Двойной</strong>
                  </td>
                  <td>250x120x138</td>
                  <td>26</td>
                  <td>256</td>
                  <td>6.6</td>
                  <td>1689</td>
                </tr>
                <tr>
                  <td>
                    <strong>Силикатный</strong>
                  </td>
                  <td>250x120x88</td>
                  <td>38</td>
                  <td>378</td>
                  <td>4.1</td>
                  <td>1549</td>
                </tr>
                <tr>
                  <td>
                    <strong>Керамический</strong>
                  </td>
                  <td>250x120x65</td>
                  <td>51</td>
                  <td>512</td>
                  <td>3.4</td>
                  <td>1741</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Преимущества использования качественного кирпича</h2>
          <p>
            Качественный кирпич обеспечивает долговечность и прочность здания.
            Он устойчив к воздействию влаги, перепадам температур и механическим
            повреждениям. Использование качественного кирпича также снижает
            расходы на ремонт и обслуживание здания в будущем, что делает его
            выгодным вложением в долгосрочной перспективе.
          </p>

          <h2>Рекомендации по выбору калькулятора</h2>
          <p>
            При выборе калькулятора расчёта кирпича важно обратить внимание на
            его функционал и точность. Хороший калькулятор должен учитывать все
            необходимые параметры, быть удобным в использовании и предоставлять
            возможность корректировки исходных данных.
          </p>

          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>

          <style jsx>{`
            .table-container {
              overflow-x: auto;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th,
            td {
              border: 1px solid #ddd;
              padding: 8px;
            }
            th {
              background-color: #f2f2f2;
              text-align: left;
            }
            .formula {
              font-style: italic;
              color: #333;
            }
          `}</style>

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
