"use client";
import React, { useState } from "react";

import HeaderModal from "../components/HeaderModal";
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
          "Онлайн калькулятор монолитного плитного фундамента (плиты) предназначен для расчетов размеров, опалубки, количества и диаметра арматуры и объема бетона, необходимого для обустройства данного типа фундамента домов и других построек."
        }
        span={"фундамента плиты"}
      >
        <CalorieForm
          cellSize={cellSize}
          cellSizes={cellSizes}
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/concrete"}
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
          <h2>
            Калькулятор для расчета толщины, арматуры и опалубки фундаментной
            плиты
          </h2>

          <h3>Введение</h3>

          <p>
            Фундаментная плита — это ключевой элемент любого здания,
            обеспечивающий его устойчивость и долговечность. Правильный расчет
            толщины плиты, количества арматуры и опалубки критически важен для
            обеспечения надежности конструкции. Калькуляторы для расчета этих
            параметров существенно облегчают процесс проектирования и помогают
            избежать ошибок, которые могут привести к дорогостоящим
            последствиям. В этой статье мы рассмотрим принципы работы
            калькуляторов, их основные функции и особенности использования.
          </p>

          <h2>Толщина фундаментной плиты</h2>

          <h3>Зачем важна правильная толщина?</h3>

          <p>
            Толщина фундаментной плиты определяет ее способность выдерживать
            нагрузки, распределять вес здания и предотвращать деформации.
            Неправильный расчет толщины может привести к трещинам и повреждениям
            как в самой плите, так и в конструкции здания.
          </p>

          <h3>Факторы, влияющие на расчет</h3>

          <ol>
            <li>
              <strong>Тип грунта:</strong> Плотность и несущая способность
              грунта играют ключевую роль в определении необходимой толщины
              плиты.
            </li>
            <li>
              <strong>Вес здания:</strong> Чем больше вес здания, тем толще
              должна быть плита для обеспечения адекватного распределения
              нагрузки.
            </li>
            <li>
              <strong>Климатические условия:</strong> В районах с экстремальными
              климатическими условиями, такими как частые заморозки, толщина
              плиты может быть увеличена для предотвращения повреждений от
              температурных изменений.
            </li>
            <li>
              <strong>Архитектурные особенности:</strong> Сложные конструкции и
              наличие подвалов требуют индивидуального подхода к расчету толщины
              плиты.
            </li>
          </ol>

          <h3>Как работает калькулятор</h3>

          <p>
            Калькулятор для расчета толщины фундаментной плиты учитывает все
            вышеуказанные факторы. Пользователь вводит данные о типе грунта,
            предполагаемой нагрузке, климатических условиях и архитектурных
            особенностях. На основе этих данных калькулятор вычисляет
            оптимальную толщину плиты.
          </p>

          <h2>Арматура для фундаментной плиты</h2>

          <h3>Важность арматуры</h3>

          <p>
            Арматура используется для усиления бетонной плиты, увеличивая ее
            прочность и устойчивость к нагрузкам. Без арматуры бетонная плита
            подвержена трещинам и разрушениям при деформациях и воздействии
            внешних сил.
          </p>

          <h3>Типы арматуры</h3>

          <ol>
            <li>
              <strong>Гладкая арматура:</strong> Используется в менее
              нагруженных конструкциях.
            </li>
            <li>
              <strong>Рифленая арматура:</strong> Применяется в более
              ответственных и нагруженных участках, так как обеспечивает лучшее
              сцепление с бетоном.
            </li>
            <li>
              <strong>Сетчатая арматура:</strong> Применяется для равномерного
              распределения нагрузки и повышения прочности всей плиты.
            </li>
          </ol>

          <h3>Расчет количества арматуры</h3>

          <p>
            Калькулятор для расчета арматуры позволяет точно определить
            необходимое количество и тип арматуры для конкретного проекта. Для
            этого вводятся данные о:
          </p>

          <ul>
            <li>Площадь плиты</li>
            <li>Толщина плиты</li>
            <li>Тип арматуры</li>
          </ul>

          <p>
            На основе этих данных калькулятор рассчитывает количество арматуры,
            необходимой для обеспечения прочности плиты.
          </p>

          <h2>Опалубка для фундаментной плиты</h2>

          <h3>Назначение опалубки</h3>

          <p>
            Опалубка используется для придания бетону необходимой формы и
            удержания его в процессе затвердевания. Она должна быть достаточно
            прочной и устойчивой, чтобы выдерживать вес бетона и арматуры.
          </p>

          <h3>Виды опалубки</h3>

          <ol>
            <li>
              <strong>Съемная опалубка:</strong> Изготавливается из дерева или
              металла и снимается после затвердевания бетона.
            </li>
            <li>
              <strong>Несъемная опалубка:</strong> Остается частью конструкции и
              дополнительно усиливает фундаментную плиту.
            </li>
          </ol>

          <h3>Расчет опалубки</h3>

          <p>Калькулятор для расчета опалубки учитывает:</p>

          <ul>
            <li>Площадь и периметр фундаментной плиты</li>
            <li>Высота плиты</li>
            <li>Тип опалубки</li>
          </ul>

          <p>
            Пользователь вводит эти параметры, и калькулятор определяет
            необходимое количество материалов для опалубки, а также
            предполагаемую стоимость.
          </p>

          <h2>Преимущества использования калькуляторов</h2>

          <ul>
            <li>
              <strong>Точность расчетов:</strong> Исключение человеческого
              фактора позволяет минимизировать ошибки.
            </li>
            <li>
              <strong>Экономия времени:</strong> Автоматический расчет занимает
              значительно меньше времени, чем ручной.
            </li>
            <li>
              <strong>Оптимизация затрат:</strong> Точные расчеты помогают
              избежать перерасхода материалов и снизить затраты.
            </li>
            <li>
              <strong>Простота использования:</strong> Интуитивно понятный
              интерфейс позволяет быстро освоить работу с калькулятором даже
              непрофессионалам.
            </li>
          </ul>
          <h2>Заключение</h2>
          <p>
            Использование калькуляторов для расчета толщины, арматуры и опалубки
            фундаментной плиты — это эффективный способ обеспечить надежность и
            долговечность конструкции. Эти инструменты позволяют быстро и точно
            проводить необходимые расчеты, оптимизировать затраты и
            минимизировать риск ошибок. Независимо от сложности проекта,
            калькуляторы станут незаменимым помощником для инженеров и
            строителей, гарантируя высокое качество работы и безопасность
            зданий.
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
