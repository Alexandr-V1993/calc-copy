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
          "Алкогольный калькулятор позволяет быстро и точно рассчитать концентрацию алкоголя в крови, после приема спиртных напитков, а так же определения уровня алкоголя в выдыхаемом воздухе."
        }
        span={" Алкоголя"}
      >
        <AlcoForm obj={state} url={"https://calcoffee.ru/api/calculate/bac"}>
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
              {" "}
              Представленная нами информация предназначена исключительно для
              образовательных целей, предоставляя оценки на основе общепринятых
              формул. Результаты, полученные с помощью калькулятора, не могут
              заменить профессиональную медицинскую или юридическую консультацию
              и не являются альтернативой анализу алкоголя в крови или
              медицинскому освидетельствованию. <strong>Важно помнить!</strong>,
              что управление автомобилем после употребления алкоголя всегда
              опасно, независимо от расчетных значений, представленных здесь.
              Алкогольный калькулятор предоставляет возможность быстро и точно
              оценить концентрацию алкоголя в крови после употребления спиртных
              напитков, а также определить уровень алкоголя в выдыхаемом
              воздухе.
            </em>
          </small>
          <p>
            Наш инструмент может быть полезен тем, кто стремится рассчитать
            время, необходимое для вывода алкоголя из организма, а также оценить
            степень опьянения, время трезвения и состояние организма перед тем,
            как садиться за руль.
          </p>
          <p>
            Калькулятор учитывает множество факторов, чтобы обеспечить
            максимально точные результаты, соответствующие реальным значениям
            алкогольных тестеров, что способствует безопасности как водителя,
            так и окружающих.
          </p>
          <p>
            Для учета всех важных факторов необходимо ввести данные о вашем
            весе, времени с момента последнего приема пищи и объеме
            потребленного алкоголя с указанием типа напитка.
          </p>
          <p>
            С использованием нашего точного калькулятора вы сможете рассчитать
            количество чистого этанола в граммах в выдыхаемом воздухе,
            определить ваш уровень алкоголя в крови и узнать, соответствует ли
            он допустимым нормам для вождения в России.
          </p>
          <p>
            Это инструмент для водителей, которые предпочитают убедиться в своей
            безопасности на дороге и трезвости разума перед тем, как сесть за
            руль. Несмотря на поиск самого точного алкогольного калькулятора,
            важно понимать, что метаболизм каждого человека зависит от множества
            факторов и может варьироваться, что может привести к погрешностям в
            расчетах.
          </p>
          <p>
            Выведение алкоголя из организма - это биохимический процесс, в
            результате которого этанол удаляется из крови. Этот процесс линеен,
            и средняя скорость вывода составляет примерно{" "}
            <strong>0,15 промилле в час.</strong>
            Крепкие напитки выводятся медленнее из-за их высокого содержания
            этанола, и концентрация алкоголя в крови зависит от скорости его
            всасывания.
          </p>
          <p>
            Допустимая норма алкоголя за рулем в России составляет{" "}
            <strong> 0,32 ‰</strong> в крови и <strong>0,16 мг/л</strong> в
            выдыхаемом воздухе.
          </p>
          <h3>
            Для определения концентрации этанола в крови используется формула
            Эрика Видмарка:
          </h3>
          <p className="formula">c = A / (m x r) ​</p>
          <p>где:</p>
          <ul>
            <li>C - концентрация алкоголя в крови в ‰,</li>
            <li>
              A - масса выпитого напитка (в пересчете на чистый этанол) в
              граммах,
            </li>
            <li>m - масса тела в килограммах,</li>
            <li>
              r - коэффициент распределения Видмарка (0,70 для мужчин, 0,60 для
              женщин).
            </li>
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

export default Alco;
