"use client";
import React, { useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [width, setwidth] = useState(6);
  const [length, setlength] = useState(8);
  const [height, setheight] = useState(250);
  const [concreteGradeId, setconcreteGradeId] = useState(19);
  const [cellSize, setcellSize] = useState(200);
  const [cellSizes, setcellSizes] = useState(200);
  const [d, setd] = useState(12);
  const [tdoska, settdoska] = useState(25);
  const [hdoska, sethdoska] = useState(150);
  const [ddoska, setddoska] = useState(6000);
  const [riad, setriad] = useState(2);

  // New state for visibility
  const [isArmatureVisible, setIsArmatureVisible] = useState(false);
  const [isFormworkVisible, setIsFormworkVisible] = useState(false);

  const initial = {
    width: Number(width),
    length: Number(length),
    height: Number(height),
    concreteGradeId: Number(concreteGradeId),
    cellSize: `${cellSize}x${cellSizes}`,
    d: Number(d),
    type: "slab",
    boardSize: `${tdoska}x${hdoska}x${ddoska}`,
  };

  const toggleArmatureVisibility = () => {
    setIsArmatureVisible(!isArmatureVisible);
  };

  const toggleFormworkVisibility = () => {
    setIsFormworkVisible(!isFormworkVisible);
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Профессиональный калькулятор для расчета монолитного плитного фундамента: толщина плиты, арматура, опалубка и объем бетона. Точные вычисления для строительства."
        }
        span={"фундамента плиты"}
      >
        <CalorieForm
          cellSize={cellSize}
          cellSizes={cellSizes}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/concrete"}
        >
          <div className="test-input">
            <label className="cen-sp">
              <span>Монолитная плита</span>
              <figure>
                <img
                  src="/fdm.png"
                  alt="фундамент"
                  style={{ width: "85%", height: "auto" }}
                />
              </figure>
            </label>

            <div className="row-two test-two">
              <label className="numrange">
                <span>
                  ШИРИНА ПЛИТЫ, <span className="colors"> B</span>
                </span>
                <input
                  type="number"
                  className="input"
                  required
                  onChange={(e) => setwidth(e.target.value)}
                  value={width}
                />
                <div className="notation">м</div>
              </label>
              <label className="numrange">
                <span>
                  ДЛИНА ПЛИТЫ, <span className="colors"> A</span>
                </span>
                <input
                  type="number"
                  className="input"
                  required
                  onChange={(e) => setlength(e.target.value)}
                  value={length}
                />
                <div className="notation">м</div>
              </label>
            </div>
            <div className="row-two">
              <label className="numrange">
                <span>
                  ВЫСОТА ПЛИТЫ,<span className="colors"> С</span>
                </span>
                <input
                  type="number"
                  className="input"
                  required
                  onChange={(e) => setheight(e.target.value)}
                  value={height}
                />
                <div className="notation">мм</div>
              </label>
              <label>
                <span>МАРКА БЕТОНА</span>
                <select
                  name="formula"
                  className="calc-inp"
                  onChange={(e) => setconcreteGradeId(e.target.value)}
                  value={concreteGradeId}
                >
                  <option value="12">М100 (B7,5) </option>
                  <option value="13">М150 (В12,5) </option>
                  <option value="14">М200 (В15) </option>
                  <option value="15">М250 (В20) </option>
                  <option value="16">М300 (В22,5) </option>
                  <option value="17">М400 (В30) </option>
                  <option value="18">М450 (В35) </option>
                  <option value="19" selected>
                    М500 (В40){" "}
                  </option>
                  <option value="20">М600 (В45) </option>
                  <option value="21">М700 (В55) </option>
                  <option value="22">М800 (В60) </option>
                </select>
              </label>
            </div>
            <div>
              <label className="label-row-top checks">
                <input
                  type="checkbox"
                  className="check"
                  onClick={toggleArmatureVisibility}
                />
                <span>
                  <span className="span">Расчет арматуры</span>
                </span>
              </label>
              {isArmatureVisible && (
                <div className="border-all">
                  <div className="row-two">
                    <label className="numrange">
                      <span>ДЛИНА ЯЧЕЙКИ</span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={cellSizes}
                        onChange={(e) => setcellSizes(e.target.value)}
                      />
                      <div className="notation">мм</div>
                    </label>
                    <label className="numrange">
                      <span>ШИРИНА ЯЧЕЙКИ</span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={cellSize}
                        onChange={(e) => setcellSize(e.target.value)}
                      />
                      <div className="notation">мм</div>
                    </label>
                  </div>
                  <div className="row-two column-bottom">
                    <label className="numrange">
                      <span>КОЛИЧЕСТВО РЯДОВ</span>
                      <input
                        type="number"
                        className="input"
                        onChange={(e) => setriad(e.target.value)}
                        value={riad}
                      />
                      <div className="notation">шт</div>
                    </label>
                    <label>
                      <span>ДИАМЕТР АРМАТУРЫ</span>
                      <select
                        name="formula"
                        className="calc-inp"
                        value={d}
                        onChange={(e) => setd(e.target.value)}
                      >
                        <option value="6">6</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="12">12</option>
                        <option value="14">14</option>
                        <option value="16">16</option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="22">22</option>
                        <option value="25">25</option>
                        <option value="28">28</option>
                        <option value="32">32</option>
                      </select>
                    </label>
                  </div>
                </div>
              )}
              <label className="label-row-top checks">
                <input
                  type="checkbox"
                  className="check"
                  onClick={toggleFormworkVisibility}
                />
                <span>
                  <span className="span">Расчет опалубки</span>
                </span>
              </label>
              {isFormworkVisible && (
                <div className="row-two column-bottom border-all">
                  <label className="numrange">
                    <span>ШИРИНА ДОСКИ</span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={hdoska}
                      onChange={(e) => sethdoska(e.target.value)}
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span>ДЛИНА ДОСКИ</span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={ddoska}
                      onChange={(e) => setddoska(e.target.value)}
                    />
                    <div className="notation">мм</div>
                  </label>
                  <label className="numrange">
                    <span>ТОЛЩИНА ДОСКИ</span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={tdoska}
                      onChange={(e) => settdoska(e.target.value)}
                    />
                    <div className="notation">мм</div>
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h1>Калькулятор монолитного плитного фундамента</h1>

          <h2>Как рассчитать параметры плитного фундамента</h2>

          <p>
            Плитный фундамент - это монолитная железобетонная плита, которая
            равномерно распределяет нагрузку от здания на грунт. Наш калькулятор
            позволяет точно определить все необходимые параметры для
            строительства:
          </p>

          <ul>
            <li>Толщину плиты в зависимости от типа здания</li>
            <li>Количество и диаметр арматуры</li>
            <li>Объем бетона для заливки</li>
            <li>Параметры опалубки</li>
            <li>Стоимость материалов</li>
          </ul>

          <h3>Преимущества плитного фундамента</h3>

          <p>
            <strong>Монолитная плита</strong> особенно эффективна на проблемных
            грунтах:
          </p>

          <ul>
            <li>Пучинистых и просадочных почвах</li>
            <li>При высоком уровне грунтовых вод</li>
            <li>На участках с неравномерной плотностью грунта</li>
          </ul>

          <h3>Как пользоваться калькулятором</h3>

          <ol>
            <li>Введите размеры будущего строения (длина и ширина)</li>
            <li>
              Укажите планируемую толщину плиты (рекомендуем 200-400 мм для
              частных домов)
            </li>
            <li>Выберите диаметр арматуры (обычно 10-14 мм)</li>
            <li>Задайте шаг армирования (стандартно 200-300 мм)</li>
            <li>Нажмите "Рассчитать" для получения точных данных</li>
          </ol>

          <h3>Технические особенности расчета</h3>

          <p>
            Наш калькулятор учитывает все строительные нормы (СНиП 2.02.01-83,
            СП 50-101-2004):
          </p>

          <ul>
            <li>Минимальную толщину плиты (не менее 150 мм)</li>
            <li>Необходимость двухслойного армирования</li>
            <li>Защитный слой бетона для арматуры (30-50 мм)</li>
            <li>Расход бетона с учетом 5% запаса</li>
          </ul>

          <h3>Дополнительные рекомендации</h3>

          <p>Для улучшения характеристик фундамента рекомендуем:</p>

          <ul>
            <li>Устройство песчано-гравийной подушки (200-300 мм)</li>
            <li>Гидроизоляцию под плитой</li>
            <li>Утепление периметра (ЭППС 50-100 мм)</li>
            <li>Дренажную систему при высоких грунтовых водах</li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> Данные расчеты являются предварительными.
              Для точного проектирования рекомендуем обратиться к
              профессиональным проектировщикам.
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Какая оптимальная толщина плиты для дома из газобетона?</h4>
            <p>
              Для одноэтажного дома - 250-300 мм, для двухэтажного - 300-400 мм.
            </p>

            <h4>Можно ли использовать композитную арматуру?</h4>
            <p>Да, но диаметр должен быть на 1-2 мм больше стальной.</p>

            <h4>Нужен ли ростверк на плитном фундаменте?</h4>
            <p>Не обязателен, но может использоваться для точечных нагрузок.</p>
          </div>

          <p className="other-calculators">
            <a href="/">Посмотреть все строительные калькуляторы →</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
