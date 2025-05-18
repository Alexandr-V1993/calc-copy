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
          "Онлайн калькулятор обоев поможет точно рассчитать необходимое количество рулонов с учетом размеров комнаты, дверей, окон и раппорта узора. Простой и удобный инструмент для экономии времени и денег при планировании ремонта."
        }
        span={" обоев"}
      >
        <AlcoForm
          obj={prepareDataForSubmit(state)}
          url={"https://boxcalculators.ru/api/calculate/wallpaper"}
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
          <h2>Как правильно рассчитать количество обоев для ремонта?</h2>

          <p>
            Ремонт — дело хлопотное, но правильный расчет обоев может сделать
            его проще и дешевле. Онлайн-калькулятор позволяет быстро определить,
            сколько рулонов вам понадобится, чтобы оклеить стены в вашей
            комнате. Это помогает избежать лишних затрат и неожиданностей на
            этапе покупки материалов.
          </p>

          <h3>Что влияет на расход обоев?</h3>

          <p>При расчете необходимо учитывать несколько ключевых факторов:</p>

          <ul>
            <li>
              <strong>Общая площадь стен</strong> — измеряется по периметру
              комнаты.
            </li>
            <li>
              <strong>Наличие окон и дверей</strong> — эти участки не требуют
              оклейки.
            </li>
            <li>
              <strong>Размеры рулона</strong> — стандартные: 0.53 м × 10 м, но
              могут быть и другие.
            </li>
            <li>
              <strong>Раппорт узора</strong> — если обои имеют повторяющийся
              рисунок, это увеличивает расход.
            </li>
            <li>
              <strong>Запас материала</strong> — обычно добавляют 10–15% на
              случай ошибок и подрезки.
            </li>
          </ul>

          <h3>Как работает калькулятор обоев?</h3>

          <p>
            Калькулятор автоматически вычисляет общую площадь стен, вычитает
            участки окон и дверей, учитывает размеры рулона и возможный запас.
            После ввода данных система рассчитывает точное количество рулонов,
            которое потребуется для полной оклейки помещения.
          </p>

          <h3>Пошаговая инструкция:</h3>

          <ol>
            <li>
              <strong>Измерьте высоту стен:</strong> от пола до потолка.
            </li>
            <li>
              <strong>Измерьте ширину каждой стены:</strong> сложите все
              значения.
            </li>
            <li>
              <strong>Укажите размеры окон и дверей:</strong> чтобы исключить их
              из общей площади.
            </li>
            <li>
              <strong>Выберите параметры обоев:</strong> ширина и длина рулона,
              наличие раппорта.
            </li>
            <li>
              <strong>Нажмите «Рассчитать»:</strong> получите точное количество
              рулонов.
            </li>
          </ol>

          <h3>Пример расчета обоев</h3>

          <p>
            Допустим, у вас комната площадью 4×5 метра, высота потолков — 2.7
            метра. Есть одно окно 1.5×1 м и дверь 0.9×2 м. Вы выбрали обои с
            раппортом узора 50 см, размер рулона — 0.53×10 м.
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
                  <td>Периметр комнаты</td>
                  <td>18 м</td>
                </tr>
                <tr>
                  <td>Высота стен</td>
                  <td>2.7 м</td>
                </tr>
                <tr>
                  <td>Площадь окна</td>
                  <td>1.5 м²</td>
                </tr>
                <tr>
                  <td>Площадь двери</td>
                  <td>1.8 м²</td>
                </tr>
                <tr>
                  <td>Площадь стен без учёта окон и дверей</td>
                  <td>48.6 м²</td>
                </tr>
                <tr>
                  <td>Площадь одного рулона</td>
                  <td>5.3 м²</td>
                </tr>
                <tr>
                  <td>Необходимое количество рулонов</td>
                  <td>10 шт</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Как выбрать правильные обои?</h3>

          <p>Обои бывают разными по материалу, размерам и дизайну:</p>

          <ul>
            <li>
              <strong>Бумажные:</strong> бюджетный вариант, подходят для спален
              и детских;
            </li>
            <li>
              <strong>Флизелиновые:</strong> прочные, легко клеятся, долговечны;
            </li>
            <li>
              <strong>Виниловые:</strong> влагостойкие, идеальны для кухни и
              ванной;
            </li>
            <li>
              <strong>Текстильные:</strong> экологичные, создают атмосферу уюта;
            </li>
            <li>
              <strong>Жидкие обои:</strong> напоминают декоративную штукатурку,
              подходят для звукоизоляции.
            </li>
          </ul>

          <h3>Как учесть раппорт узора?</h3>

          <p>
            Если обои с орнаментом, важно учитывать шаг повторения рисунка — он
            может быть от 25 см до 1 м. Такие обои требуют большего количества
            материала, так как каждую следующую полосу нужно подгонять под
            предыдущую.
          </p>

          <h3>Советы по экономии</h3>

          <p>Чтобы минимизировать расход:</p>

          <ul>
            <li>
              Выбирайте однотонные обои — они не требуют подгонки рисунка;
            </li>
            <li>
              Используйте большие рулоны (например, 1.06 м × 25 м) — меньше швов
              и отходов;
            </li>
            <li>
              Учитывайте высоту потолка — лучше брать обои с небольшим запасом;
            </li>
            <li>Проверяйте ширину рулона перед покупкой;</li>
            <li>
              Покупайте обои с запасом — 1–2 дополнительных рулона всегда должны
              быть на случай порчи или исправления ошибок.
            </li>
          </ul>

          <h3>Как проверить точность расчета?</h3>

          <p>Проверьте данные на соответствие реальным замерам:</p>

          <ul>
            <li>Используйте лазерный уровень или рулетку;</li>
            <li>Учитывайте толщину плинтусов и карнизов;</li>
            <li>Проверьте совпадение единиц измерения (метры / сантиметры);</li>
            <li>
              Если сомневаетесь — сделайте ручной расчёт и сравните с
              результатом калькулятора.
            </li>
          </ul>

          <h3>Преимущества онлайн-калькулятора обоев</h3>

          <p>Онлайн-калькулятор предлагает множество преимуществ:</p>

          <ul>
            <li>
              <strong>Точность:</strong> учитывает все параметры, включая
              раппорт и запас;
            </li>
            <li>
              <strong>Удобство:</strong> интуитивно понятный интерфейс;
            </li>
            <li>
              <strong>Скорость:</strong> результат за секунду после ввода
              данных;
            </li>
            <li>
              <strong>Доступность:</strong> работает с любого устройства с
              интернетом;
            </li>
            <li>
              <strong>Экономия:</strong> избегайте перерасхода и недостачи.
            </li>
          </ul>

          <h3>Как рассчитывается площадь стен?</h3>

          <p>Общая площадь стен рассчитывается по формуле:</p>

          <p className="formula">Площадь = Периметр комнаты × Высота стен</p>

          <p>Затем вычитается площадь окон и дверей:</p>

          <p className="formula">
            Площадь оклейки = Общая площадь – Площадь окон и дверей
          </p>

          <h3>Как рассчитывается количество рулонов?</h3>

          <p>
            Один рулон имеет фиксированную площадь (ширина × длина). Например:
          </p>

          <p className="formula">0.53 м × 10 м = 5.3 м²</p>

          <p>
            Затем общая площадь делится на площадь одного рулона, и добавляется
            запас:
          </p>

          <p className="formula">
            Результат = (Площадь оклейки / Площадь рулона) × 1.1 (на запас)
          </p>

          <h3>Часто задаваемые вопросы</h3>

          <p>
            <strong>
              Можно ли использовать калькулятор для нестандартных комнат?
            </strong>
          </p>
          <p>
            Да, калькулятор подходит даже для комнат с нишами, выступами и
            нестандартной формой. Просто введите размеры каждой стены отдельно
            или суммируйте общую длину стен.
          </p>

          <p>
            <strong>Что делать, если обои с раппортом?</strong>
          </p>
          <p>
            Введите значение раппорта в специальное поле. Система сама добавит
            нужный запас для подгонки узора.
          </p>

          <p>
            <strong>Нужно ли учитывать высоту плинтуса?</strong>
          </p>
          <p>
            Нет, но вы можете указать её вручную, чтобы немного скорректировать
            высоту покрытия.
          </p>

          <h3>Интересные факты об обоях</h3>

          <p>
            Интересно, что первые бумажные обои появились еще в Древнем Китае.
            Сегодня же выбор огромен: от классических бумажных до моющихся
            виниловых и 3D-обоев. Использование калькулятора позволяет подбирать
            оптимальный тип обоев под стиль и бюджет.
          </p>

          <h3>Итог</h3>

          <p>
            Расчёт обоев — важная часть подготовки к ремонту. Онлайн-калькулятор
            значительно упрощает этот процесс. Благодаря ему вы точно знаете,
            сколько рулонов нужно купить, и не боитесь остаться без материала
            или переплатить.
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
