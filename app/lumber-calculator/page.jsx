"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({});

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    let newInitial;
    if (selectedTab === "tab1") {
      newInitial = {
        density: Number(520),
        mode: "quantity",
        width: Number(150),
        length: Number(6000),
        thickness: Number(50),
        quantity: Number(1),
        cost: Number(12500),
      };
    } else if (selectedTab === "tab2") {
      newInitial = {
        density: Number(520),
        mode: "volume",
        width: Number(150),
        length: Number(6000),
        thickness: Number(50),
        quantity: Number(1),
        cost: Number(12500),
      };
    }
    setInitial(newInitial);
  }, [selectedTab]);

  const handleChange = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Профессиональный расчет пиломатериалов: количество досок в кубе, объем в м³, вес и стоимость. Учет породы древесины и влажности."
        }
        span={"доски"}
      >
        <CalorieForm
          width={initial.width}
          length={initial.length}
          thickness={initial.thickness}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/board"}
        >
          <div className="test-input">
            <div className="tabs">
              <span
                className={selectedTab === "tab1" ? "active" : "noact"}
                onClick={() => handleTabClick("tab1")}
              >
                Объем по штукам
              </span>
              <span
                className={selectedTab === "tab2" ? "active" : "noact"}
                onClick={() => handleTabClick("tab2")}
              >
                Количество в кубах
              </span>
            </div>

            <div className="content">
              {selectedTab === "tab1" && (
                <h3>Расчет досок в кубе по размерам одной доски</h3>
              )}
              {selectedTab === "tab2" && (
                <h3>Расчет объема в кубометрах по размерам одной доски</h3>
              )}

              {selectedTab === "tab1" && (
                <>
                  {" "}
                  <label className="numrange">
                    <span>Плотность древесины (кг/м3)</span>
                    <select
                      name="density"
                      className="calc-inp w-100"
                      value={initial.density}
                      onChange={handleChange}
                    >
                      <option value="410">Пихта (410)</option>
                      <option value="450">Ель (450)</option>
                      <option value="510">Липа (510)</option>
                      <option value="520">Сосна (520)</option>
                      <option value="570">Кедр (570)</option>
                      <option value="635">Лиственница (635)</option>
                      <option value="650">Береза (650)</option>
                      <option value="680">Бук (680)</option>
                      <option value="750">Ясень (750)</option>
                      <option value="810">Дуб (810)</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>
                      Ширина, <span className="red">W</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      name="width"
                      value={initial.width}
                      onChange={handleChange}
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span>
                      {" "}
                      Длина, <span className="red">L</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="length"
                      value={initial.length}
                      onChange={handleChange}
                      required
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span>
                      {" "}
                      Толщина,
                      <span className="red"> H</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="thickness"
                      value={initial.thickness}
                      onChange={handleChange}
                      required
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span> Количество</span>
                    <input
                      type="number"
                      className="input"
                      name="quantity"
                      value={initial.quantity}
                      onChange={handleChange}
                      required
                    />
                    <div className="notation">
                      {selectedTab === "tab1" ? "шт" : "м3"}
                    </div>
                  </label>
                  <label className="numrange">
                    <span> Стоимость</span>
                    <input
                      type="number"
                      className="input"
                      name="cost"
                      value={initial.cost}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}

              {selectedTab === "tab2" && (
                <>
                  <label className="numrange">
                    <span>Плотность древесины (кг/м3)</span>
                    <select
                      name="density"
                      className="calc-inp w-100"
                      value={initial.density}
                      onChange={handleChange}
                    >
                      <option value="410">Пихта (410)</option>
                      <option value="450">Ель (450)</option>
                      <option value="510">Липа (510)</option>
                      <option value="520">Сосна (520)</option>
                      <option value="570">Кедр (570)</option>
                      <option value="635">Лиственница (635)</option>
                      <option value="650">Береза (650)</option>
                      <option value="680">Бук (680)</option>
                      <option value="750">Ясень (750)</option>
                      <option value="810">Дуб (810)</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>
                      Ширина, <span className="red">W</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      name="width"
                      value={initial.width}
                      onChange={handleChange}
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span>
                      {" "}
                      Длина, <span className="red">L</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="length"
                      value={initial.length}
                      onChange={handleChange}
                      required
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span>
                      {" "}
                      Толщина,
                      <span className="red"> H</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="thickness"
                      value={initial.thickness}
                      onChange={handleChange}
                      required
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span> Количество</span>
                    <input
                      type="number"
                      className="input"
                      name="quantity"
                      value={initial.quantity}
                      onChange={handleChange}
                      required
                    />
                    <div className="notation">
                      {selectedTab === "tab1" ? "шт" : "м3"}
                    </div>
                  </label>
                  <label className="numrange">
                    <span> Стоимость</span>
                    <input
                      type="number"
                      className="input"
                      name="cost"
                      value={initial.cost}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h1>Калькулятор пиломатериалов</h1>

          <h2>Точный расчет досок и бруса для строительства</h2>

          <p>
            Наш калькулятор помогает профессионально рассчитать количество и
            объем пиломатериалов для любых строительных и отделочных работ.
          </p>

          <div className="features">
            <h3>Что можно рассчитать:</h3>
            <ul>
              <li>Количество досок/бруса в 1 м³</li>
              <li>Общий объем пиломатериалов</li>
              <li>Вес древесины с учетом влажности</li>
              <li>Стоимость партии материалов</li>
              <li>Площадь покрытия</li>
            </ul>
          </div>

          <h3>Как пользоваться калькулятором</h3>

          <ol>
            <li>Выберите тип пиломатериала (доска, брус, вагонка)</li>
            <li>Укажите размеры (толщину, ширину, длину)</li>
            <li>Введите количество или объем</li>
            <li>Выберите породу древесины</li>
            <li>Получите точные расчеты</li>
          </ol>

          <h3>Плотность различных пород древесины</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Порода дерева</th>
                  <th>Плотность (кг/м³)</th>
                  <th>Влажность 12%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Сосна</td>
                  <td>480-520</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Ель</td>
                  <td>430-470</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td>Лиственница</td>
                  <td>650-710</td>
                  <td>660</td>
                </tr>
                <tr>
                  <td>Дуб</td>
                  <td>680-750</td>
                  <td>690</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Формулы расчета</h3>

          <p>
            <strong>Количество досок в кубе:</strong>
          </p>
          <p className="formula">N = 1 / (T × W × L)</p>
          <p>где T - толщина, W - ширина, L - длина в метрах</p>

          <p>
            <strong>Вес пиломатериалов:</strong>
          </p>
          <p className="formula">
            Вес = Объем × Плотность × (1 + Влажность/100)
          </p>

          <h3>Практические советы</h3>

          <ul>
            <li>Всегда учитывайте 5-7% запас на обрезки</li>
            <li>Влажная древесина может быть тяжелее на 15-30%</li>
            <li>
              Фактические размеры обрезных досок обычно меньше номинальных
            </li>
            <li>Для точных расчетов используйте данные от поставщика</li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> При расчете несущих конструкций
              обязательно консультируйтесь с профессиональными строителями.
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Сколько досок 50х150х6000 в кубе?</h4>
            <p>22,2 штуки (ровно 22 доски - 0,99 м³)</p>

            <h4>Как перевести погонные метры в кубометры?</h4>
            <p>Умножьте погонные метры на площадь сечения доски в м²</p>

            <h4>Какой брус лучше для строительства дома?</h4>
            <p>
              Для несущих стен рекомендуют брус 150х150 или 200х200 из хвойных
              пород
            </p>
          </div>

          <p className="other-calculators">
            <a href="/">Все строительные калькуляторы →</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
