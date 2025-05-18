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
          "Онлайн калькулятор для расчёта объёма, площади и количества бруса в кубических метрах. Точный и удобный инструмент для строительных расчётов."
        }
        span={"бруса"}
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
          <h2>Онлайн калькулятор расчета бруса</h2>

          <p>
            Строительство дома, бани или дачи из бруса требует точного расчёта
            материалов. Наш онлайн-калькулятор поможет вам быстро определить
            необходимое количество бруса в штуках и кубических метрах, учитывая
            параметры вашего проекта.
          </p>

          <p>
            Просто укажите длину, ширину и высоту будущего строения, а также
            размеры используемого бруса — и система мгновенно рассчитает общий
            объём материала. Калькулятор учитывает стандартные длины бруса
            (обычно 6 метров), а также возможные отходы при обработке и
            подгонке.
          </p>

          <p>
            Вы можете выбрать тип бруса: профилированный, клееный или обычный
            обрезной. Также доступен расчёт площади стен и перегородок, чтобы вы
            могли заранее спланировать бюджет и закупки.
          </p>

          <h3>Как работает калькулятор?</h3>

          <p>
            Алгоритм калькулятора рассчитывает объём одного бруса по формуле:
            ширина × высота × длина. Затем учитывается общая площадь стен, их
            толщина и количество угловых соединений. Результатом является точное
            количество бруса в кубометрах и штуках.
          </p>

          <p>
            Также предусмотрен запас материала на случай непредвиденных ситуаций
            — например, брака при укладке или погрешностей при производстве. Это
            позволяет избежать нехватки бруса в процессе строительства.
          </p>

          <h3>Зачем нужен этот калькулятор?</h3>

          <p>Использование калькулятора помогает:</p>

          <ul>
            <li>Сэкономить время на самостоятельные расчёты;</li>
            <li>Избежать ошибок при покупке материала;</li>
            <li>Точно определить стоимость строительства;</li>
            <li>Минимизировать количество отходов;</li>
            <li>Удобно планировать этапы строительства.</li>
          </ul>

          <p>
            Особенно полезен инструмент будет тем, кто строит самостоятельно,
            без привлечения специалистов. Он исключает риск недостатка или
            перерасхода материала, что особенно важно при ограниченном бюджете.
          </p>

          <h3>Преимущества нашего калькулятора:</h3>
          <ul>
            <li>Простой и понятный интерфейс;</li>
            <li>Мгновенный результат;</li>
            <li>Работает на любом устройстве;</li>
            <li>Не требует регистрации или скачивания;</li>
            <li>Бесплатное использование.</li>
          </ul>

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
