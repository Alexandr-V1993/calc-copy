"use client";
import React, { useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [width, setwidth] = useState(10);
  const [length, setlength] = useState(12);
  const [height, setheight] = useState(1000);
  const [concreteGradeId, setConcreteGradeId] = useState(19);
  const [d, setD] = useState(12);
  const [tdoska, settdoska] = useState(25);
  const [hdoska, sethdoska] = useState(150);
  const [ddoska, setddoska] = useState(6000);
  const [riad, setriad] = useState(500);
  const [tolsh, settolh] = useState(400);
  const [rowsd, setrowsd] = useState(4);
  const [stripType, setStripType] = useState("type-1");
  const [seredina, setSeredina] = useState(null);

  // State for visibility of armature and formwork
  const [isArmatureVisible, setIsArmatureVisible] = useState(false);
  const [isFormworkVisible, setIsFormworkVisible] = useState(false);

  // State for current image and selected button index
  const [currentImage, setCurrentImage] = useState("/big-lenta/vans.jpg");
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const initial = {
    a: Number(width),
    b: Number(length),
    c: Number(height),
    d: Number(tolsh),
    numberRows: Number(rowsd),
    concreteGradeId: Number(concreteGradeId),
    stripType: stripType,
    vStep: riad,
    type: "strip",
    ad: d,
    boardSize: `${tdoska}x${hdoska}x${ddoska}`,
    e: Number(seredina) || null,
  };

  const toggleArmatureVisibility = () => {
    setIsArmatureVisible(!isArmatureVisible);
  };

  const toggleFormworkVisibility = () => {
    setIsFormworkVisible(!isFormworkVisible);
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    const image = event.currentTarget.getAttribute("data-image");
    const index = event.currentTarget.getAttribute("data-index");
    const type = event.currentTarget.getAttribute("data-type");
    setCurrentImage(image);
    setSelectedButtonIndex(Number(index));
    setStripType(type);

    // Reset seredina when type-3 is not selected
    if (type !== "type-3") {
      setSeredina(null);
    }
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Профессиональный расчет ленточного фундамента: количество арматуры, объем бетона, параметры опалубки. Учет глубины промерзания и типа грунта."
        }
        span={"ленточного фундамента"}
      >
        <CalorieForm
          ddoska={ddoska}
          d={d}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/concrete"}
        >
          <div className="test-input">
            <label className="cen-sp">
              <span>Тип фундамента</span>
            </label>
            <div className="row row-fl">
              <button
                data-image="/big-lenta/vans.jpg"
                data-index="0"
                data-type="type-1"
                onClick={handleImageChange}
                className={selectedButtonIndex === 0 ? "selected" : ""}
              >
                <img src="/f-lenta-img/van.png" alt="van" />
              </button>
              <button
                data-image="/big-lenta/twos.jpg"
                data-index="1"
                data-type="type-2"
                onClick={handleImageChange}
                className={selectedButtonIndex === 1 ? "selected" : ""}
              >
                <img src="/f-lenta-img/two.png" alt="two" />
              </button>
              <button
                data-image="/big-lenta/threes.jpg"
                data-index="2"
                data-type="type-3"
                onClick={handleImageChange}
                className={selectedButtonIndex === 2 ? "selected" : ""}
              >
                <img src="/f-lenta-img/three.png" alt="three" />
              </button>
              <button
                data-image="/big-lenta/fours.jpg"
                data-index="3"
                data-type="type-4"
                onClick={handleImageChange}
                className={selectedButtonIndex === 3 ? "selected" : ""}
              >
                <img src="/f-lenta-img/four.png" alt="four" />
              </button>
              <button
                data-image="/big-lenta/fives.jpg"
                data-index="4"
                data-type="type-5"
                onClick={handleImageChange}
                className={selectedButtonIndex === 4 ? "selected" : ""}
              >
                <img src="/f-lenta-img/five.png" alt="five" />
              </button>
              <button
                data-image="/big-lenta/sixs.jpg"
                data-index="5"
                data-type="type-6"
                onClick={handleImageChange}
                className={selectedButtonIndex === 5 ? "selected" : ""}
              >
                <img src="/f-lenta-img/six.png" alt="six" />
              </button>
              <label>
                <span>МАРКА БЕТОНА</span>
                <select
                  name="formula"
                  className="calc-inp"
                  onChange={(e) => setConcreteGradeId(e.target.value)}
                  value={concreteGradeId}
                >
                  <option value="12">М100 (B7,5) </option>
                  <option value="13">М150 (В12,5) </option>
                  <option value="14">М200 (В15) </option>
                  <option value="15">М250 (В20) </option>
                  <option value="16">М300 (В22,5) </option>
                  <option value="17">М400 (В30) </option>
                  <option value="18">М450 (В35) </option>
                  <option value="19">М500 (В40) </option>
                  <option value="20">М600 (В45) </option>
                  <option value="21">М700 (В55) </option>
                  <option value="22">М800 (В60) </option>
                </select>
              </label>
            </div>
            <label className="cen-sp">
              <figure>
                <img
                  src={currentImage}
                  alt="фундамент"
                  style={{ width: "85%", height: "auto" }}
                />
              </figure>
            </label>

            <div className="row-two  test-test">
              {stripType === "type-3" && (
                <label className="numrange block-label test-two">
                  <span>
                    ДЛИНА ЛЕНТЫ В СЕРЕДИНЕ, <span className="colors"> Е</span>
                  </span>
                  <input
                    type="number"
                    className="input"
                    onChange={(e) => setSeredina(e.target.value)}
                    value={seredina || null}
                  />
                  <div className="notation">м</div>
                </label>
              )}
              <div className="row-two">
                <label className="numrange">
                  <span>
                    ШИРИНА ЛЕНТЫ, <span className="colors"> А</span>
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
                    ДЛИНА ЛЕНТЫ, <span className="colors"> В</span>
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
            </div>
            <div className="row-two">
              <label className="numrange">
                <span>
                  ВЫСОТА ЛЕНТЫ,<span className="colors"> С</span>
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
              <label className="numrange">
                <span>
                  ТОЛЩИНА ЛЕНТЫ,<span className="colors"> D</span>
                </span>
                <input
                  type="number"
                  className="input"
                  required
                  onChange={(e) => settolh(e.target.value)}
                  value={tolsh}
                />
                <div className="notation">мм</div>
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
                  <div className="row-two column-test gaps">
                    <label className="numrange">
                      <span>СХЕМА АРМИРОВАНИЯ</span>
                      <select
                        name="formula"
                        className="calc-inp"
                        onChange={(e) => setrowsd(e.target.value)}
                      >
                        <option value="4" selected="">
                          4 стержнями
                        </option>
                        <option value="6">6 стержнями</option>
                        <option value="8">8 стержнями</option>
                      </select>
                    </label>
                    <label>
                      <span>ДИАМЕТР АРМАТУРЫ</span>
                      <select
                        name="formula"
                        className="calc-inp"
                        value={d}
                        onChange={(e) => setD(e.target.value)}
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
                  <div className="row-two column-bottom">
                    <label className="numrange">
                      <span>ШАГ МЕЖДУ ВЕРТИКАЛЬНЫМИ ПРУТАМИ АРМАТУРЫ</span>
                      <input
                        type="number"
                        className="input"
                        onChange={(e) => setriad(e.target.value)}
                        value={riad}
                      />
                      <div className="notation">мм</div>
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
          <h1>Калькулятор ленточного фундамента</h1>

          <h2>Полный расчет материалов для строительства</h2>

          <p>
            Ленточный фундамент - наиболее популярный тип основания для частных
            домов. Наш калькулятор выполняет точные расчеты по СНиП 2.02.01-83 и
            СП 50-101-2004:
          </p>

          <div className="features">
            <h3>Что рассчитывает наш инструмент:</h3>
            <ul>
              <li>Объем бетона с учетом 10% запаса</li>
              <li>Количество арматуры (продольной и поперечной)</li>
              <li>Параметры опалубки</li>
              <li>Стоимость материалов</li>
              <li>Рекомендуемую глубину заложения</li>
            </ul>
          </div>

          <h3>Типы ленточных фундаментов</h3>

          <p>
            <strong>По глубине заложения:</strong>
          </p>

          <ul>
            <li>Мелкозаглубленный (40-70 см) - для легких построек</li>
            <li>Заглубленный (ниже промерзания) - для капитальных строений</li>
          </ul>

          <h3>Как пользоваться калькулятором</h3>

          <ol>
            <li>Укажите длину и ширину ленты</li>
            <li>Выберите глубину заложения</li>
            <li>Задайте параметры армирования</li>
            <li>Укажите тип грунта (глина, суглинок, песок)</li>
            <li>Получите детальную смету материалов</li>
          </ol>

          <h3>Технические особенности</h3>

          <p>Расчеты учитывают все нормативные требования:</p>

          <ul>
            <li>Минимальный диаметр арматуры 12 мм для несущих стержней</li>
            <li>Шаг поперечной арматуры 30-50 см</li>
            <li>Защитный слой бетона 30-50 мм</li>
            <li>Угловые усиления в местах сопряжения лент</li>
          </ul>

          <h3>Дополнительные рекомендации</h3>

          <p>Для повышения надежности фундамента:</p>

          <ul>
            <li>Устройство песчаной подушки 20-30 см</li>
            <li>Гидроизоляция битумными материалами</li>
            <li>Утепление цоколя и отмостки</li>
            <li>Дренажная система при высоких грунтовых водах</li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> Для сложных грунтов (торфяники, плывуны)
              рекомендуем консультацию с геодезистом.
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Какой бетон использовать для ленточного фундамента?</h4>
            <p>Марка М300-М400 с морозостойкостью F150-200.</p>

            <h4>Нужна ли подбетонка (подготовка)?</h4>
            <p>
              Рекомендуется при высоких нагрузках (толщина 5-10 см из тощего
              бетона).
            </p>

            <h4>Как часто нужно делать деформационные швы?</h4>
            <p>Через каждые 30 м для монолитных конструкций.</p>
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
