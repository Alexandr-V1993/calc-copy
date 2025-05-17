"use client";

import { useReducer } from "react";
import FuelCostForm from "./FuelCostForm";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "./FuelCost.css";

function reducer(state, action) {
  switch (action.type) {
    case "units":
      return { ...state, units: action.payload };
    case "mode":
      return { ...state, mode: action.payload };
    case "consumption":
      return { ...state, consumption: action.payload };
    case "consumptionUnit":
      return { ...state, consumptionUnit: action.payload };
    case "distance":
      return { ...state, distance: action.payload };
    case "cost":
      return { ...state, cost: action.payload };
    default:
      return state;
  }
}

function FaelCost() {
  const initialState = {
    units: "metric",
    mode: "consumptionCost",
    consumption: 0,
    consumptionUnit: "lp100km",
    distance: 0,
    cost: 0,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleUnitsChange = (e) => {
    dispatch({ type: "units", payload: String(e.target.value) });
  };

  const handleModeChange = (e) => {
    dispatch({ type: "mode", payload: String(e.target.value) });
  };

  const handleConsumptionChange = (e) => {
    dispatch({ type: "consumption", payload: Number(e.target.value) });
  };

  const handleConsumptionUnitChange = (e) => {
    dispatch({ type: "consumptionUnit", payload: String(e.target.value) });
  };

  const handleDistanceChange = (e) => {
    dispatch({ type: "distance", payload: Number(e.target.value) });
  };

  const handleCostChange = (e) => {
    dispatch({ type: "cost", payload: Number(e.target.value) });
  };

  const updatedObject = { ...state };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор расхода топлива помогает оценить стоимость поездки или ежемесячные расходы на топливо для автомобиля. Он учитывает расстояние, цену и эффективность топлива, предоставляя точную оценку затрат."
        }
        span={"расхода топлива "}
      >
        <FuelCostForm
          obj={updatedObject}
          url={"https://calcoffee.ru/api/calculate/fuel-cost"}
          rashod={`Израсходовано топлива ${
            state.units === "english" ? "г-в" : "л-в"
          }: `}
          CenaTopliva={"Стоимость топлива : "}
        >
          <div className="row-select">
            <div className="left-select">
              <span>Единицы измерения</span>
              <select onChange={handleUnitsChange}>
                <option value="metric">Метрические (км, литры)</option>
                <option value="english">Английские (мили, галлоны)</option>
              </select>
            </div>
            <div className="right-select">
              <span>Рассчитать</span>
              <select onChange={handleModeChange}>
                <option value="consumptionCost">
                  Рассчитать расход и стоимость
                </option>
                <option value="consumptionAvg">
                  Рассчитать средний расход на 100 км.
                </option>
              </select>
            </div>
          </div>

          <div className="label-row">
            <label className="numrange row-1">
              <span>
                {state.mode === "consumptionCost"
                  ? "Средний расход топлива"
                  : "Израсходовано топлива"}
              </span>
              <input
                type="number"
                className="input"
                onChange={handleConsumptionChange}
                required
              />
              <div className="notation">
                {state.units === "english" ? "г-в" : "л-в"}
              </div>
            </label>
            {state.mode === "consumptionCost" && (
              <select
                onChange={handleConsumptionUnitChange}
                className="align-end"
              >
                <option value="lp100km">
                  {state.units === "english"
                    ? "миль / галлон"
                    : "литров / 100 км"}
                </option>
                <option value="kmpl">
                  {state.units === "english"
                    ? "галлонов / 100 миль"
                    : "километров / литр"}
                </option>
              </select>
            )}
          </div>
          <label className="numrange row-1">
            <span>
              {state.mode === "consumptionCost"
                ? "Расстояние"
                : "Пройденное расстояние"}
            </span>
            <input
              type="number"
              className="input"
              onChange={handleDistanceChange}
              required
            />
            <div className="notation">
              {state.units === "english" ? "миль" : "км"}
            </div>
          </label>
          <label className="numrange row-1">
            <span>
              {state.units === "english" ? "Цена за галлон" : "Цена за литр"}
            </span>
            <input
              type="number"
              className="input"
              onChange={handleCostChange}
              required
            />
            <div className="notation">₽</div>
          </label>
        </FuelCostForm>

        <Contents>
          <h2 className="tops-content">
            Факторы, определяющие цену на топливо
          </h2>
          <p>
            Цены на топливо подвержены воздействию различных факторов,
            оказывающих влияние на стоимость бензина и дизельного топлива.
          </p>
          Расходы россиян на заправку автомобиля могут колебаться в зависимости
          от нескольких ключевых факторов, включая тип транспортного средства,
          стоимость топлива, стиль вождения и пройденное расстояние. Эти факторы
          различаются в различных регионах страны и могут оказывать различное
          воздействие на динамику цен.
          <p>
            В связи с разницей в ценах на топливо по регионам россияне вынуждены
            выделять значительную часть своего бюджета на покупку топлива.
            Осознание этих факторов может помочь эффективному управлению
            расходами:
          </p>
          <ol>
            <li>
              Экономичное вождение: Применение экономичных навыков вождения,
              таких как устойчивость скорости и уменьшение времени простоя,
              способствует максимизации пробега и снижению расхода топлива.
            </li>
            <li>
              Общественный транспорт и карпулинг: Использование общественного
              транспорта или совместного использования автомобиля для сокращения
              индивидуальных затрат на топливо.
            </li>
            <li>
              Программы лояльности и скидки: Воспользоваться программами
              лояльности и скидками, предоставляемыми поставщиками топлива, с
              целью экономии средств на топливе.
            </li>
            <li>
              Отслеживание цен на топливо: Использование приложений или
              онлайн-ресурсов для мониторинга цен на топливо, что позволяет
              принимать своевременные и выгодные решения относительно заправки.
            </li>
          </ol>
          <h3>Советы по снижению расходов на топливо включают в себя:</h3>
          <ul>
            <li>
              Экономичное вождение: Поддерживайте стабильную скорость, избегайте
              резких торможений и ускорений.
            </li>
            <li>
              Использование общественного транспорта: Рассмотрите возможность
              использования общественного транспорта или совместных поездок для
              уменьшения индивидуальных затрат на топливо.
            </li>
            <li>
              Обслуживание автомобиля: Регулярное техническое обслуживание
              автомобиля способствует оптимизации расхода топлива.
            </li>
            <li>
              Планирование маршрута: Избегайте пробок и выбирайте оптимальные
              маршруты для снижения расхода топлива.
            </li>
            <li>
              Использование программ лояльности и скидок: Воспользуйтесь
              лояльными программами топливных компаний для экономии на
              заправках.
            </li>
            <li>
              Снижение избыточного веса: Избегайте перевозки ненужных предметов
              или груза, чтобы уменьшить расход топлива.
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

export default FaelCost;
