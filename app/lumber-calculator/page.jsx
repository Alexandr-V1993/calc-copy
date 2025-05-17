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
          "Подсчитать количество досок в кубе или объем по их размерам очень просто – просто введите нужные параметры в указанные поля для получения точного результата."
        }
        span={"доски"}
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
          <h2>Расчёт объема и количества досок</h2>
          <p>
            При строительстве важно точно рассчитать необходимое количество
            пиломатериалов, таких как доски, для планирования и выполнения
            работ. Наш онлайн-калькулятор досок поможет вам с легкостью
            определить количество досок или объем пиломатериалов, когда под
            рукой нет физического калькулятора. Это удобный инструмент для
            проверки заказов, оценки расхода древесины или определения поставок
            на месте.
          </p>

          <h2>Как пользоваться калькулятором</h2>
          <p>
            Рассчитать количество досок в кубическом метре или наоборот очень
            просто – введите необходимые параметры в указанные поля, чтобы
            получить точные результаты. Калькулятор также позволяет определить
            вес доски, площадь и общую стоимость.
          </p>

          <h2>Сколько досок в кубе</h2>
          <p>
            Количество досок в одном кубе зависит от их габаритов, включая
            длину, ширину и толщину. Также на размеры влияет влажность
            древесины, поскольку доски разных пород дерева впитывают влагу с
            разной скоростью. Точный расчет количества досок в кубе и их веса
            поможет вам лучше планировать строительные работы. Приведенная
            таблица поможет быстро понять, как размеры доски влияют на
            количество и объем.
          </p>

          <p>
            Наш калькулятор досок станет надежным помощником в любых
            строительных проектах, обеспечивая точные расчеты и экономию вашего
            времени.
          </p>
          <table className="t-width">
            <thead>
              <tr>
                <th>Толщина, мм</th>
                <th>Ширина, мм</th>
                <th>Длина, мм</th>
                <th>
                  Объем, м<sup>3</sup>
                </th>
                <th>Количество, шт</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20</td>
                <td>20</td>
                <td>6000</td>
                <td>0.0024</td>
                <td>417</td>
              </tr>
              <tr>
                <td>20</td>
                <td>50</td>
                <td>6000</td>
                <td>0.0060</td>
                <td>167</td>
              </tr>
              <tr>
                <td>20</td>
                <td>60</td>
                <td>6000</td>
                <td>0.0072</td>
                <td>139</td>
              </tr>
              <tr>
                <td>20</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0084</td>
                <td>119</td>
              </tr>
              <tr>
                <td>20</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0096</td>
                <td>104</td>
              </tr>
              <tr>
                <td>20</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0108</td>
                <td>93</td>
              </tr>
              <tr>
                <td>20</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0120</td>
                <td>83</td>
              </tr>
              <tr>
                <td>20</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0144</td>
                <td>69</td>
              </tr>
              <tr>
                <td>20</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0180</td>
                <td>56</td>
              </tr>
              <tr>
                <td>20</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0216</td>
                <td>46</td>
              </tr>
              <tr>
                <td>20</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0240</td>
                <td>42</td>
              </tr>
              <tr>
                <td>20</td>
                <td>250</td>
                <td>6000</td>
                <td>0.0300</td>
                <td>33</td>
              </tr>
              <tr>
                <td>20</td>
                <td>300</td>
                <td>6000</td>
                <td>0.0360</td>
                <td>28</td>
              </tr>
              <tr>
                <td>25</td>
                <td>20</td>
                <td>6000</td>
                <td>0.0030</td>
                <td>333</td>
              </tr>
              <tr>
                <td>25</td>
                <td>25</td>
                <td>6000</td>
                <td>0.0038</td>
                <td>267</td>
              </tr>
              <tr>
                <td>25</td>
                <td>40</td>
                <td>6000</td>
                <td>0.0060</td>
                <td>167</td>
              </tr>
              <tr>
                <td>25</td>
                <td>50</td>
                <td>6000</td>
                <td>0.0075</td>
                <td>133</td>
              </tr>
              <tr>
                <td>25</td>
                <td>60</td>
                <td>6000</td>
                <td>0.0090</td>
                <td>111</td>
              </tr>
              <tr>
                <td>25</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0105</td>
                <td>95</td>
              </tr>
              <tr>
                <td>25</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0120</td>
                <td>83</td>
              </tr>
              <tr>
                <td>25</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0135</td>
                <td>74</td>
              </tr>
              <tr>
                <td>25</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0150</td>
                <td>67</td>
              </tr>
              <tr>
                <td>25</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0180</td>
                <td>56</td>
              </tr>
              <tr>
                <td>25</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0225</td>
                <td>44</td>
              </tr>
              <tr>
                <td>25</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0270</td>
                <td>37</td>
              </tr>
              <tr>
                <td>25</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0300</td>
                <td>33</td>
              </tr>
              <tr>
                <td>25</td>
                <td>250</td>
                <td>6000</td>
                <td>0.0375</td>
                <td>27</td>
              </tr>
              <tr>
                <td>25</td>
                <td>300</td>
                <td>6000</td>
                <td>0.0450</td>
                <td>22</td>
              </tr>
              <tr>
                <td>30</td>
                <td>20</td>
                <td>6000</td>
                <td>0.0036</td>
                <td>278</td>
              </tr>
              <tr>
                <td>30</td>
                <td>25</td>
                <td>6000</td>
                <td>0.0045</td>
                <td>222</td>
              </tr>
              <tr>
                <td>30</td>
                <td>30</td>
                <td>6000</td>
                <td>0.0054</td>
                <td>185</td>
              </tr>
              <tr>
                <td>30</td>
                <td>40</td>
                <td>6000</td>
                <td>0.0072</td>
                <td>139</td>
              </tr>
              <tr>
                <td>30</td>
                <td>50</td>
                <td>6000</td>
                <td>0.0090</td>
                <td>111</td>
              </tr>
              <tr>
                <td>30</td>
                <td>60</td>
                <td>6000</td>
                <td>0.0108</td>
                <td>93</td>
              </tr>
              <tr>
                <td>30</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0126</td>
                <td>79</td>
              </tr>
              <tr>
                <td>30</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0144</td>
                <td>69</td>
              </tr>
              <tr>
                <td>30</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0162</td>
                <td>62</td>
              </tr>
              <tr>
                <td>30</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0180</td>
                <td>56</td>
              </tr>
              <tr>
                <td>30</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0216</td>
                <td>46</td>
              </tr>
              <tr>
                <td>30</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0270</td>
                <td>37</td>
              </tr>
              <tr>
                <td>30</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0324</td>
                <td>31</td>
              </tr>
              <tr>
                <td>30</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0360</td>
                <td>28</td>
              </tr>
              <tr>
                <td>30</td>
                <td>250</td>
                <td>6000</td>
                <td>0.0450</td>
                <td>22</td>
              </tr>
              <tr>
                <td>30</td>
                <td>300</td>
                <td>6000</td>
                <td>0.0540</td>
                <td>19</td>
              </tr>
              <tr>
                <td>40</td>
                <td>20</td>
                <td>6000</td>
                <td>0.0048</td>
                <td>208</td>
              </tr>
              <tr>
                <td>40</td>
                <td>40</td>
                <td>6000</td>
                <td>0.0096</td>
                <td>104</td>
              </tr>
              <tr>
                <td>40</td>
                <td>50</td>
                <td>6000</td>
                <td>0.0120</td>
                <td>83</td>
              </tr>
              <tr>
                <td>40</td>
                <td>60</td>
                <td>6000</td>
                <td>0.0144</td>
                <td>69</td>
              </tr>
              <tr>
                <td>40</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0168</td>
                <td>60</td>
              </tr>
              <tr>
                <td>40</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0192</td>
                <td>52</td>
              </tr>
              <tr>
                <td>40</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0216</td>
                <td>46</td>
              </tr>
              <tr>
                <td>40</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0240</td>
                <td>42</td>
              </tr>
              <tr>
                <td>40</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0288</td>
                <td>35</td>
              </tr>
              <tr>
                <td>40</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0360</td>
                <td>28</td>
              </tr>
              <tr>
                <td>40</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0432</td>
                <td>23</td>
              </tr>
              <tr>
                <td>40</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0480</td>
                <td>21</td>
              </tr>
              <tr>
                <td>40</td>
                <td>250</td>
                <td>6000</td>
                <td>0.0600</td>
                <td>17</td>
              </tr>
              <tr>
                <td>40</td>
                <td>300</td>
                <td>6000</td>
                <td>0.0720</td>
                <td>14</td>
              </tr>
              <tr>
                <td>50</td>
                <td>50</td>
                <td>6000</td>
                <td>0.0150</td>
                <td>67</td>
              </tr>
              <tr>
                <td>50</td>
                <td>60</td>
                <td>6000</td>
                <td>0.0180</td>
                <td>56</td>
              </tr>
              <tr>
                <td>50</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0210</td>
                <td>48</td>
              </tr>
              <tr>
                <td>50</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0240</td>
                <td>42</td>
              </tr>
              <tr>
                <td>50</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0270</td>
                <td>37</td>
              </tr>
              <tr>
                <td>50</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0300</td>
                <td>33</td>
              </tr>
              <tr>
                <td>50</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0360</td>
                <td>28</td>
              </tr>
              <tr>
                <td>50</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0450</td>
                <td>22</td>
              </tr>
              <tr>
                <td>50</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0540</td>
                <td>19</td>
              </tr>
              <tr>
                <td>50</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0600</td>
                <td>17</td>
              </tr>
              <tr>
                <td>50</td>
                <td>250</td>
                <td>6000</td>
                <td>0.0750</td>
                <td>13</td>
              </tr>
              <tr>
                <td>50</td>
                <td>300</td>
                <td>6000</td>
                <td>0.0900</td>
                <td>11</td>
              </tr>
              <tr>
                <td>60</td>
                <td>60</td>
                <td>6000</td>
                <td>0.0216</td>
                <td>46</td>
              </tr>
              <tr>
                <td>60</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0252</td>
                <td>40</td>
              </tr>
              <tr>
                <td>60</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0288</td>
                <td>35</td>
              </tr>
              <tr>
                <td>60</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0324</td>
                <td>31</td>
              </tr>
              <tr>
                <td>60</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0360</td>
                <td>28</td>
              </tr>
              <tr>
                <td>60</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0432</td>
                <td>23</td>
              </tr>
              <tr>
                <td>60</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0540</td>
                <td>19</td>
              </tr>
              <tr>
                <td>60</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0648</td>
                <td>15</td>
              </tr>
              <tr>
                <td>60</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0720</td>
                <td>14</td>
              </tr>
              <tr>
                <td>60</td>
                <td>250</td>
                <td>6000</td>
                <td>0.0900</td>
                <td>11</td>
              </tr>
              <tr>
                <td>60</td>
                <td>300</td>
                <td>6000</td>
                <td>0.1080</td>
                <td>9</td>
              </tr>
              <tr>
                <td>70</td>
                <td>70</td>
                <td>6000</td>
                <td>0.0294</td>
                <td>34</td>
              </tr>
              <tr>
                <td>70</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0336</td>
                <td>30</td>
              </tr>
              <tr>
                <td>70</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0378</td>
                <td>26</td>
              </tr>
              <tr>
                <td>70</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0420</td>
                <td>24</td>
              </tr>
              <tr>
                <td>70</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0504</td>
                <td>20</td>
              </tr>
              <tr>
                <td>70</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0630</td>
                <td>16</td>
              </tr>
              <tr>
                <td>70</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0756</td>
                <td>13</td>
              </tr>
              <tr>
                <td>70</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0840</td>
                <td>12</td>
              </tr>
              <tr>
                <td>70</td>
                <td>250</td>
                <td>6000</td>
                <td>0.1050</td>
                <td>10</td>
              </tr>
              <tr>
                <td>70</td>
                <td>300</td>
                <td>6000</td>
                <td>0.1260</td>
                <td>8</td>
              </tr>
              <tr>
                <td>80</td>
                <td>80</td>
                <td>6000</td>
                <td>0.0384</td>
                <td>26</td>
              </tr>
              <tr>
                <td>80</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0432</td>
                <td>23</td>
              </tr>
              <tr>
                <td>80</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0480</td>
                <td>21</td>
              </tr>
              <tr>
                <td>80</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0576</td>
                <td>17</td>
              </tr>
              <tr>
                <td>80</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0720</td>
                <td>14</td>
              </tr>
              <tr>
                <td>80</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0864</td>
                <td>12</td>
              </tr>
              <tr>
                <td>80</td>
                <td>200</td>
                <td>6000</td>
                <td>0.0960</td>
                <td>10</td>
              </tr>
              <tr>
                <td>80</td>
                <td>250</td>
                <td>6000</td>
                <td>0.1200</td>
                <td>8</td>
              </tr>
              <tr>
                <td>80</td>
                <td>300</td>
                <td>6000</td>
                <td>0.1440</td>
                <td>7</td>
              </tr>
              <tr>
                <td>90</td>
                <td>90</td>
                <td>6000</td>
                <td>0.0486</td>
                <td>21</td>
              </tr>
              <tr>
                <td>90</td>
                <td>100</td>
                <td>6000</td>
                <td>0.0540</td>
                <td>19</td>
              </tr>
              <tr>
                <td>90</td>
                <td>120</td>
                <td>6000</td>
                <td>0.0648</td>
                <td>15</td>
              </tr>
              <tr>
                <td>90</td>
                <td>150</td>
                <td>6000</td>
                <td>0.0810</td>
                <td>12</td>
              </tr>
              <tr>
                <td>90</td>
                <td>180</td>
                <td>6000</td>
                <td>0.0972</td>
                <td>10</td>
              </tr>
              <tr>
                <td>90</td>
                <td>200</td>
                <td>6000</td>
                <td>0.1080</td>
                <td>9</td>
              </tr>
              <tr>
                <td>90</td>
                <td>250</td>
                <td>6000</td>
                <td>0.1350</td>
                <td>7</td>
              </tr>
              <tr>
                <td>90</td>
                <td>300</td>
                <td>6000</td>
                <td>0.1620</td>
                <td>6</td>
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
