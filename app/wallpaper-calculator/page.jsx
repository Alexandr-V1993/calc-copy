"use client";
import { useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import AlcoForm from "./AlcoForm";
import "./alco.css";

const initial = {
  roomLength: 4,
  roomWidth: 3,
  roomHeight: 2.7,
  rollWidth: 1.06,
  rollLength: 10,
  rapport: 0.64,
  allowance: 0.1,
  cost: 2280,
  apertures: [],
};

function Wallpaper() {
  const [state, setState] = useState(initial);
  const [showApertureInputs, setShowApertureInputs] = useState(false);

  function handleInput(e, typeDispatch) {
    const value = e.target.value;
    setState({ ...state, [typeDispatch]: value });
  }

  function handleApertureChange(e, index, field) {
    const updatedApertures = [...state.apertures];
    updatedApertures[index][field] = e.target.value;
    setState({ ...state, apertures: updatedApertures });
  }

  function handleAddAperture() {
    setShowApertureInputs(true);
    setState({
      ...state,
      apertures: [...state.apertures, { height: "", width: "", quantity: "" }],
    });
  }

  function handleRemoveAperture(index) {
    const updatedApertures = [...state.apertures];
    updatedApertures.splice(index, 1);
    setState({ ...state, apertures: updatedApertures });
  }

  function prepareDataForSubmit(data) {
    const preparedData = { ...data };
    if (
      preparedData.allowance === "" ||
      preparedData.allowance === undefined ||
      preparedData.allowance === null
    ) {
      preparedData.allowance = 0;
    }
    return preparedData;
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор"}
        description={
          "Точный и удобный инструмент для расчета необходимого количества обоев. " +
          "Наш калькулятор поможет вам быстро и легко определить, сколько обоев нужно для вашего помещения, " +
          "учитывая размеры стен и возможные отходы. Планируйте ремонт с уверенностью и экономьте время и деньги."
        }
        span={" обоев"}
      >
        <AlcoForm
          obj={prepareDataForSubmit(state)}
          url={"https://calcoffee.ru/api/calculate/wallpaper"}
        >
          <div className="label-row">
            <span className="nap-span test-color">Размеры комнаты</span>
            <div className="cons">
              <div className="top-row">
                <label className="numrange row-1 van">
                  <span>
                    Длина, <span className="red">L</span>
                  </span>
                  <input
                    required
                    type={"number"}
                    className="input"
                    value={state.roomLength}
                    onChange={(e) => handleInput(e, "roomLength")}
                  />
                  <div className="notation">м</div>
                </label>
                <label className="numrange row-1 van">
                  <span>
                    Ширина, <span className="red">W</span>
                  </span>
                  <input
                    required
                    type={"number"}
                    className="input"
                    value={state.roomWidth}
                    onChange={(e) => handleInput(e, "roomWidth")}
                  />
                  <div className="notation">м</div>
                </label>
                <label className="numrange row-1 van">
                  <span>
                    Высота, <span className="red">H</span>
                  </span>
                  <input
                    required
                    type={"number"}
                    className="input"
                    value={state.roomHeight}
                    onChange={(e) => handleInput(e, "roomHeight")}
                  />
                  <div className="notation">м</div>
                </label>
              </div>
              <span className="nap-span test-color">Размеры рулона</span>
              <div className="top-rows">
                <label className="numrange row-1 van">
                  <span>
                    Ширина рулона <span className="red">(м)</span>
                  </span>
                  <input
                    required
                    type={"number"}
                    className="input"
                    value={state.rollWidth}
                    onChange={(e) => handleInput(e, "rollWidth")}
                  />
                  <div className="notation">м</div>
                </label>
                <label className="numrange row-1 van">
                  <span>
                    Длина рулона <span className="red">(м)</span>
                  </span>
                  <input
                    required
                    type={"number"}
                    className="input"
                    value={state.rollLength}
                    onChange={(e) => handleInput(e, "rollLength")}
                  />
                  <div className="notation">м</div>
                </label>
                <label className="numrange row-1 van">
                  <span>
                    Раппорт <span className="red">(м)</span>
                  </span>
                  <input
                    required
                    type={"number"}
                    className="input"
                    value={state.rapport}
                    onChange={(e) => handleInput(e, "rapport")}
                  />
                  <div className="notation">м</div>
                </label>
              </div>
              <label className="numrange row-1 van">
                <span>Запас на выравнивание</span>
                <input
                  type={"number"}
                  className="input"
                  value={state.allowance}
                  onChange={(e) => handleInput(e, "allowance")}
                />
                <div className="notation">м</div>
              </label>
              <label className="numrange row-1 van">
                <span>Цена одного рулона</span>
                <input
                  required
                  type={"number"}
                  className="input"
                  value={state.cost}
                  onChange={(e) => handleInput(e, "cost")}
                />
                <div className="notation">₽</div>
              </label>
            </div>
            <div className="print-none">
              <span>+</span>
              <button
                className="add-new-button"
                onClick={handleAddAperture}
                type="button"
              >
                Добавить Окно или Дверь
              </button>
            </div>
            {showApertureInputs && (
              <div className="topInput-selects">
                {state.apertures.map((aperture, index) => (
                  <div key={index} className="aperture-inputs">
                    <div>
                      <span className="bolt test-color">Проемы</span>
                    </div>
                    <div className="row-bottom">
                      <label className="numrange row-1 van">
                        <span>Высота</span>
                        <input
                          type={"number"}
                          className="input"
                          required
                          value={aperture.height}
                          onChange={(e) =>
                            handleApertureChange(e, index, "height")
                          }
                        />
                      </label>
                      <label className="numrange row-1 van">
                        <span>Ширина</span>
                        <input
                          type={"number"}
                          required
                          className="input"
                          value={aperture.width}
                          onChange={(e) =>
                            handleApertureChange(e, index, "width")
                          }
                        />
                      </label>
                      <label className="numrange row-1 van">
                        <span>Количество</span>
                        <input
                          type={"number"}
                          required
                          className="input"
                          value={aperture.quantity}
                          onChange={(e) =>
                            handleApertureChange(e, index, "quantity")
                          }
                        />
                      </label>
                      <button
                        className="btn-red"
                        type="button"
                        onClick={() => handleRemoveAperture(index)}
                      >
                        <span className="del">×</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </AlcoForm>
        <Contents>
          <h2>Что такое калькулятор обоев?</h2>
          <p>
            Калькулятор обоев — это онлайн-инструмент, предназначенный для
            точного расчета необходимого количества обоев для вашего помещения.
            Он помогает избежать перерасхода или нехватки материалов, что
            особенно важно при планировании ремонта. С его помощью вы сможете
            сэкономить не только деньги, но и время, проведенное в магазине
            строительных материалов.
          </p>

          <h2>Как работает калькулятор обоев?</h2>
          <p>
            Калькулятор обоев учитывает размеры вашего помещения, высоту и
            ширину стен, а также параметры обоев, такие как ширина рулона и
            длина рулона. Для точного расчета также можно указать размер
            повторяемого рисунка (раппорт) и высоту плинтуса, если таковой
            имеется.
          </p>

          <h2>Пошаговое руководство по использованию калькулятора обоев</h2>
          <ol>
            <li>
              <h3>Измерение параметров комнаты:</h3>
              <ul>
                <li>
                  Высота стен: Измерьте высоту от пола до потолка. Это важно для
                  расчета вертикального покрытия.
                </li>
                <li>
                  Ширина стен: Измерьте ширину каждой стены, которую вы
                  планируете оклеивать.
                </li>
                <li>
                  Размеры дверей и окон: Измерьте размеры всех дверей и окон,
                  так как эти участки не требуют оклейки обоями.
                </li>
              </ul>
            </li>
            <li>
              <h3>Ввод данных в калькулятор:</h3>
              <ul>
                <li>Введите высоту стен.</li>
                <li>Введите ширину каждой стены.</li>
                <li>Укажите количество дверей и окон, а также их размеры.</li>
                <li>
                  Введите параметры обоев: ширину и длину рулона, размер
                  повторяемого рисунка (раппорт), если он есть.
                </li>
              </ul>
            </li>
            <li>
              <h3>Расчет:</h3>
              <p>
                Калькулятор автоматически вычислит необходимое количество
                рулонов обоев, учитывая все введенные данные.
              </p>
            </li>
          </ol>

          <h2>Пример использования калькулятора обоев</h2>
          <p>Предположим, у вас есть комната с четырьмя стенами:</p>
          <ul>
            <li>Стена 1: ширина 4 метра, высота 2.5 метра</li>
            <li>Стена 2: ширина 3 метра, высота 2.5 метра</li>
            <li>Стена 3: ширина 4 метра, высота 2.5 метра</li>
            <li>Стена 4: ширина 3 метра, высота 2.5 метра</li>
          </ul>
          <p>
            Кроме того, у вас есть окно размером 1.2 метра на 1.5 метра и дверь
            размером 0.9 метра на 2 метра. Вы выбрали обои шириной 0.53 метра и
            длиной 10 метров в рулоне, без повторяемого рисунка.
          </p>

          <h3>Ввод данных:</h3>
          <ul>
            <li>Высота стен: 2.5 метра</li>
            <li>Ширина стен: 4 + 3 + 4 + 3 = 14 метров</li>
            <li>Размер окна: 1.2 метра на 1.5 метра</li>
            <li>Размер двери: 0.9 метра на 2 метра</li>
            <li>Ширина рулона: 0.53 метра</li>
            <li>Длина рулона: 10 метров</li>
          </ul>

          <h3>Расчет:</h3>
          <ul>
            <li>
              Общая площадь стен: 14 м (ширина) * 2.5 м (высота) = 35 кв.м
            </li>
            <li>Площадь окна: 1.2 м * 1.5 м = 1.8 кв.м</li>
            <li>Площадь двери: 0.9 м * 2 м = 1.8 кв.м</li>
            <li>
              Площадь, которую не нужно оклеивать: 1.8 кв.м (окно) + 1.8 кв.м
              (дверь) = 3.6 кв.м
            </li>
            <li>Площадь для оклейки: 35 кв.м - 3.6 кв.м = 31.4 кв.м</li>
            <li>Площадь одного рулона обоев: 0.53 м * 10 м = 5.3 кв.м</li>
            <li>
              Необходимое количество рулонов: 31.4 кв.м / 5.3 кв.м = примерно 6
              рулонов
            </li>
          </ul>
          <p>
            Таким образом, для оклейки вашей комнаты потребуется около 6 рулонов
            обоев.
          </p>

          <h2>Преимущества использования калькулятора обоев</h2>
          <ul>
            <li>
              Точность расчетов: Избегаете ошибок при расчетах, что особенно
              важно для дорогих или редких обоев.
            </li>
            <li>
              Экономия времени и денег: Покупаете ровно столько материалов,
              сколько необходимо, без лишних затрат.
            </li>
            <li>
              Удобство: Вводите данные онлайн и получаете результат в считанные
              секунды.
            </li>
            <li>
              Планирование: Помогает спланировать процесс оклейки, включая
              необходимые материалы и инструменты.
            </li>
          </ul>
          <p>
            Использование калькулятора обоев делает процесс ремонта более
            управляемым и предсказуемым, позволяя вам сосредоточиться на
            творческой части — выборе дизайна и декорировании вашего
            пространства.
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

export default Wallpaper;
