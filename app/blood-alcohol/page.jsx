"use client";
import { useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import AlcoForm from "./AlcoForm";
import "./alco.css";

const initial = {
  weight: null,
  gender: "male",
  fullness: "empty",
  elapsedTime: 0,
  beverages: [{ name: "Безалкогольное пиво", strength: 0.5, volume: 100 }],
};

const beveragesList = [
  { name: "Безалкогольное пиво", strength: 0.5, volume: 100 },
  { name: "Кефир старше 3х дней", strength: 0.07, volume: 100 },
  { name: "Хлебный квас", strength: 0.09, volume: 100 },
  { name: "Кумыс", strength: 1.2, volume: 100 },
  { name: "Пиво лёгкое", strength: 4, volume: 100 },
  { name: "Пиво обычное/Сидр", strength: 5, volume: 100 },
  { name: "Пиво портер/темное", strength: 6, volume: 100 },
  { name: "Cлабоалкоголки", strength: 7, volume: 100 },
  { name: "Пиво крепкое", strength: 8, volume: 100 },
  { name: "Шампанское", strength: 10, volume: 100 },
  { name: "Вино", strength: 12, volume: 100 },
  { name: "Вермут (Martini и пр.)", strength: 15, volume: 100 },
  { name: "Мягкие ликёры (Baileys и пр.)", strength: 17, volume: 100 },
  { name: "Портвейн", strength: 20, volume: 100 },
  { name: "Средние ликёры (Malibu и пр.)", strength: 20, volume: 100 },
  { name: "Рижский бальзам и т.п.", strength: 30, volume: 100 },
  { name: "Крепкие ликёры (Jagermeister и т.п.)", strength: 35, volume: 100 },
  { name: "Текила/Бренди/Бехеровка и т.п.", strength: 38, volume: 100 },
  { name: "Ром, Джин", strength: 40, volume: 100 },
  { name: "Водка", strength: 40, volume: 100 },
  { name: "Коньяк", strength: 40, volume: 100 },
  { name: "Виски/Бурбон/Скотч", strength: 40, volume: 100 },
  { name: "Самбука", strength: 40, volume: 100 },
  { name: "Абсент лёгкий", strength: 60, volume: 100 },
  { name: "Абсент средний", strength: 69, volume: 100 },
  { name: "Настойка боярышника", strength: 70, volume: 100 },
  { name: "Абсент крепкий", strength: 80, volume: 100 },
  { name: "Чистый спирт", strength: 95, volume: 100 },
];

function Alco() {
  const [state, setState] = useState(initial);

  function handleInput(e, typeDispatch) {
    setState({ ...state, [typeDispatch]: e.target.value });
  }

  function handleBeverageChange(e, index) {
    const selectedBeverage = beveragesList.find(
      (beverage) => beverage.name === e.target.value
    );
    const updatedBeverages = [...state.beverages];
    updatedBeverages[index] = { ...selectedBeverage };
    setState({ ...state, beverages: updatedBeverages });
  }

  function handleStrengthChange(e, index) {
    const updatedBeverages = [...state.beverages];
    updatedBeverages[index].strength = e.target.value;
    setState({ ...state, beverages: updatedBeverages });
  }

  function handleVolumeChange(e, index) {
    const updatedBeverages = [...state.beverages];
    updatedBeverages[index].volume = e.target.value;
    setState({ ...state, beverages: updatedBeverages });
  }

  function handleAddBeverage() {
    setState({
      ...state,
      beverages: [...state.beverages, { ...state.beverages[0] }],
    });
  }

  function handleRemoveBeverage(index) {
    const updatedBeverages = [...state.beverages];
    updatedBeverages.splice(index, 1);
    setState({ ...state, beverages: updatedBeverages });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Алкокалькулятор BoxCalculators позволяет быстро рассчитать концентрацию алкоголя в крови (BAC) и определить, сколько времени потребуется для полного выведения алкоголя."
        }
        span={" Алкоголя"}
      >
        <AlcoForm
          obj={state}
          url={"https://boxcalculators.ru/api/calculate/bac"}
        >
          <div className="label-row">
            <span className="nap-span">Напитки</span>
            {state.beverages.map((beverage, index) => (
              <div key={index} className="row-vans-bottom">
                <label className="label-top">
                  <span>Название</span>
                  <select
                    value={beverage.name}
                    onChange={(e) => handleBeverageChange(e, index)}
                  >
                    {beveragesList.map((bev) => (
                      <option key={bev.name} value={bev.name}>
                        {bev.name}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="all">
                  <label className="numrange row-1 van">
                    <span>Крепость, %</span>
                    <input
                      type="number"
                      className="input"
                      value={beverage.strength}
                      onChange={(e) => handleStrengthChange(e, index)}
                    />
                    <div className="notation">градусов</div>
                  </label>

                  <label className="numrange row-1 van">
                    <span>Объем (мл)</span>
                    <input
                      type="number"
                      className="input"
                      value={beverage.volume}
                      onChange={(e) => handleVolumeChange(e, index)}
                    />
                    <div className="notation">мл</div>
                  </label>
                </div>
                <button
                  className="button-del"
                  onClick={() => handleRemoveBeverage(index)}
                >
                  <span className="del">×</span>
                </button>
              </div>
            ))}
            <div className="print-none">
              <span>+</span>
              <button
                className="add-new-button"
                onClick={handleAddBeverage}
                type="button"
              >
                Добавить напиток
              </button>
            </div>
            <div className="topInput-selects">
              <label className="numrange row-1 van">
                <span>Вес</span>
                <input
                  type={"number"}
                  className="input"
                  onChange={(e) => handleInput(e, "weight")}
                  required
                />
                <div className="notation">кг</div>
              </label>

              <label className="label-tops">
                <span>Пол</span>
                <select
                  onChange={(e) => handleInput(e, "gender")}
                  value={state.gender}
                >
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </label>
            </div>
            <div className="alls">
              <label>
                <span>Наполненность желудка</span>
                <select
                  onChange={(e) => handleInput(e, "fullness")}
                  value={state.fullness}
                >
                  <option value="empty">Пустой</option>
                  <option value="middle">Сытый</option>
                  <option value="full">Полный</option>
                </select>
              </label>

              <label className="numrange row-1 van">
                <span>Время с момента первого напитка</span>
                <input
                  type={"number"}
                  className="input"
                  onChange={(e) => handleInput(e, "elapsedTime")}
                />
                <div className="notation">часов</div>
              </label>
            </div>
          </div>
        </AlcoForm>

        <Contents>
          <small>
            <em>
              Представленная информация носит исключительно ознакомительный
              характер и основана на общепринятых формулах. Калькулятор не
              заменяет профессиональную медицинскую или юридическую
              консультацию, равно как и реальный анализ алкоголя в крови.
              <strong>Важно помнить:</strong> управление автомобилем после
              употребления алкоголя всегда опасно, даже если расчеты показывают
              допустимый уровень.
            </em>
          </small>

          <p>
            Этот калькулятор поможет оценить концентрацию алкоголя в крови
            (BAC), узнать уровень алкоголя в выдыхаемом воздухе и рассчитать
            примерное время, необходимое для полного выветривания алкоголя из
            организма.
          </p>

          <p>
            Он может быть особенно полезен водителям, которые хотят убедиться в
            своей трезвости перед поездкой, а также тем, кто интересуется
            физиологией алкоголеметаболизма.
          </p>

          <h2>Как работает калькулятор?</h2>
          <p>
            Для получения максимально точной оценки введите следующие данные:
          </p>
          <ul>
            <li>
              <strong>Пол</strong> — влияет на распределение алкоголя;
            </li>
            <li>
              <strong>Вес</strong> — важный фактор при расчете BAC;
            </li>
            <li>
              <strong>Тип напитка и объем</strong> — важно для оценки количества
              чистого этанола;
            </li>
            <li>
              <strong>Время последнего приема пищи</strong> — влияет на скорость
              всасывания алкоголя.
            </li>
          </ul>

          <h2>Формула Эрика Видмарка</h2>
          <p>Концентрация алкоголя в крови (BAC) рассчитывается по формуле:</p>
          <p className="formula">BAC = A / (m × r)</p>

          <ul>
            <li>
              <strong>A</strong> — количество чистого этанола (в граммах);
            </li>
            <li>
              <strong>m</strong> — масса тела (в килограммах);
            </li>
            <li>
              <strong>r</strong> — коэффициент распределения Видмарка: 0,7 для
              мужчин, 0,6 для женщин.
            </li>
          </ul>

          <h2>Скорость вывода алкоголя</h2>
          <p>
            Организм выводит алкоголь линейно, со средней скоростью около{" "}
            <strong>0,15 ‰ в час</strong>. Однако этот процесс зависит от
            множества факторов: пол, возраст, вес, печёночная активность,
            наличие еды, тип напитка и объём употребления.
          </p>

          <p>
            Крепкие напитки выводятся дольше из-за высокой концентрации этанола.
            Также влияет скорость метаболизма и индивидуальные особенности
            организма.
          </p>

          <h2>Допустимые значения в России</h2>
          <p>
            По законам Российской Федерации, допустимый уровень алкоголя в крови
            составляет:
          </p>
          <ul>
            <li>
              <strong>0,32 ‰</strong> в крови;
            </li>
            <li>
              <strong>0,16 мг/л</strong> в выдыхаемом воздухе.
            </li>
          </ul>

          <p>
            Превышение этих значений может повлечь административную или
            уголовную ответственность.
          </p>

          <h2>Как долго выводится алкоголь?</h2>
          <p>Вот несколько примеров (для мужчины весом 80 кг):</p>
          <ul>
            <li>
              <strong>1 бокал вина (150 мл):</strong> ~2–3 часа;
            </li>
            <li>
              <strong>1 бутылка пива (0,5 л):</strong> ~3–4 часа;
            </li>
            <li>
              <strong>1 порция водки (50 мл):</strong> ~4–5 часов;
            </li>
            <li>
              <strong>3 порции водки (150 мл):</strong> ~9–10 часов;
            </li>
            <li>
              <strong>Более 200 мл водки:</strong> более 12 часов.
            </li>
          </ul>

          <h2>Почему нельзя полагаться только на калькулятор?</h2>
          <p>
            Хотя калькулятор использует научные формулы, он даёт лишь{" "}
            <strong>оценку</strong>, основанную на усреднённых данных. Реальная
            концентрация и скорость вывода зависят от множества индивидуальных
            факторов:
          </p>
          <ul>
            <li>здоровье печени;</li>
            <li>обмен веществ;</li>
            <li>генетические особенности;</li>
            <li>время приёма пищи;</li>
            <li>скорость поглощения;</li>
            <li>состояние организма.</li>
          </ul>

          <p>
            Поэтому ни один калькулятор не может гарантировать 100% точности.
            Если вы планируете садиться за руль — лучше перестраховаться и
            воздержаться от употребления вообще.
          </p>

          <h2>Цель калькулятора</h2>
          <p>
            Этот калькулятор создан не только для водителей, но и для
            образовательных целей. Он помогает:
          </p>
          <ul>
            <li>понять, как работает алкоголь в организме;</li>
            <li>прогнозировать уровень BAC;</li>
            <li>планировать безопасное время трезвения;</li>
            <li>учить основам фармакокинетики алкоголя.</li>
          </ul>

          <h2>Важно!</h2>
          <p>
            Никогда не полагайтесь полностью на такие инструменты при принятии
            решений о вождении. Лучший способ быть безопасным — не садиться за
            руль после употребления алкоголя.
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

export default Alco;
