"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/HeaderModal";
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
        width: Number(100),
        length: Number(6000),
        thickness: Number(100),
        quantity: Number(1),
        cost: Number(12500),
      };
    } else if (selectedTab === "tab2") {
      newInitial = {
        density: Number(520),
        mode: "volume",
        width: Number(100),
        length: Number(6000),
        thickness: Number(100),
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
          "Для точного расчета кубатуры бруса, его площади в квадратных метрах, объема и количества штук в кубических метрах, воспользуйтесь удобным онлайн-калькулятором для бруса."
        }
        span={"бруса"}
      >
        <CalorieForm
          width={initial.width}
          length={initial.length}
          thickness={initial.thickness}
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/board"}
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
                    <div className="notation">шт</div>
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
          <h2>Калькулятор Расчет бруса</h2>
          <p>
            Калькулятор Расчет бруса – это удобный инструмент для тех, кто
            занимается строительством или ремонтом. Он предназначен для быстрого
            и точного расчета необходимого объема бруса для строительных нужд.
          </p>
          <p>
            Основная функция калькулятора заключается в определении количества
            бруса, необходимого для строительства определенной конструкции или
            выполнения проекта. Для этого пользователь вводит параметры своего
            проекта, такие как размеры строения, тип и количество элементов,
            которые требуется изготовить.
          </p>
          <p>
            Калькулятор Расчет бруса учитывает различные факторы, включая длину,
            ширину и толщину бруса, а также учитывает возможные отходы и избытки
            материала. Это позволяет оптимизировать расходы и точно спланировать
            закупку строительных материалов.
          </p>
          <p>
            Кроме того, калькулятор может предложить варианты оптимального
            использования материала, например, рассчитать наиболее экономичную
            длину бруса для минимизации отходов или определить необходимость
            дополнительных элементов в конструкции.
          </p>
          <p>
            Использование калькулятора Расчет бруса помогает экономить время и
            средства, улучшает точность строительных расчетов и позволяет
            строить более эффективно. Этот инструмент особенно полезен для
            профессионалов в строительной сфере, а также для частных
            застройщиков, планирующих выполнение строительных работ своими
            силами.
          </p>
          <h3>Сколько бруса в кубе</h3>
          <table className="t-width">
            <thead>
              <tr>
                <th>Размер бруса (мм)</th>
                <th>
                  Объем, 1м<sup>3</sup>
                </th>
                <th>Количество, шт</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100x100x6000</td>
                <td>0,06</td>
                <td>16,67</td>
              </tr>
              <tr>
                <td>100x150x6000</td>
                <td>0,09</td>
                <td>11,11</td>
              </tr>
              <tr>
                <td>150x150x6000</td>
                <td>0,135</td>
                <td>7,41</td>
              </tr>
              <tr>
                <td>100x180x6000</td>
                <td>0,108</td>
                <td>9,25</td>
              </tr>
              <tr>
                <td>150x180x6000</td>
                <td>0,162</td>
                <td>6,17</td>
              </tr>
              <tr>
                <td>180x180x6000</td>
                <td>0,1944</td>
                <td>5,14</td>
              </tr>
              <tr>
                <td>100x200x6000</td>
                <td>0,12</td>
                <td>8,33?</td>
              </tr>
              <tr>
                <td>150x200x6000</td>
                <td>0,18</td>
                <td>5,55</td>
              </tr>
              <tr>
                <td>180x200x6000</td>
                <td>0,216</td>
                <td>4,62</td>
              </tr>
              <tr>
                <td>200x200x6000</td>
                <td>0,24</td>
                <td>4,16</td>
              </tr>
              <tr>
                <td>250x200x6000</td>
                <td>0,3</td>
                <td>3,33</td>
              </tr>
              <tr>
                <td>250x250x6000</td>
                <td>0,375</td>
                <td>2,66</td>
              </tr>
              <tr>
                <td>250x300x6000</td>
                <td>0,45</td>
                <td>2,22</td>
              </tr>
              <tr>
                <td>300x300x6000</td>
                <td>0,54</td>
                <td>1,85</td>
              </tr>
            </tbody>
          </table>
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
