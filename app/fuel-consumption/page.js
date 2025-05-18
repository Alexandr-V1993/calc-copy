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
          "Онлайн калькулятор расхода топлива: рассчитайте стоимость поездки или ежемесячные затраты на бензин. Учитывает расстояние, цену топлива и эффективность автомобиля для точного прогноза расходов."
        }
        span={"расхода топлива "}
      >
        <FuelCostForm
          obj={updatedObject}
          url={"https://boxcalculators.ru/api/calculate/fuel-cost"}
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
            Какие факторы влияют на расход топлива?
          </h2>

          <p>
            Цена на топливо и его расход зависят от множества факторов, включая
            тип автомобиля, стиль вождения, маршрут и климатические условия. Эти
            параметры напрямую влияют на ежемесячные затраты автовладельцев.
          </p>

          <p>
            Затраты на заправку могут сильно отличаться не только между
            регионами, но и между водителями одного города. Чтобы лучше
            понимать, как снизить расход топлива и сэкономить, важно учитывать
            ключевые аспекты:
          </p>

          <h3>Основные факторы, влияющие на расход топлива:</h3>
          <ol>
            <li>
              <strong>Тип и модель автомобиля</strong> — внедорожники и
              грузовики потребляют больше топлива, чем компактные автомобили.
            </li>
            <li>
              <strong>Стиль вождения</strong> — резкие разгоны, частые
              торможения и длительные простои увеличивают расход.
            </li>
            <li>
              <strong>Двигатель и техническое состояние</strong> — износ
              деталей, давление в шинах и качество топливных фильтров также
              влияют на эффективность.
            </li>
            <li>
              <strong>Погодные условия</strong> — холод, дождь и ветер
              увеличивают нагрузку на двигатель и повышают потребление топлива.
            </li>
            <li>
              <strong>
                Использование кондиционера и дополнительных систем
              </strong>{" "}
              — такие функции, как климат-контроль или обогрев сидений, требуют
              дополнительной энергии.
            </li>
          </ol>

          <h3>Как сократить расход топлива и сэкономить?</h3>
          <ul>
            <li>
              <strong>Экономичное вождение:</strong> плавный разгон, равномерная
              скорость и своевременное переключение передач снижают потребление.
            </li>
            <li>
              <strong>Регулярное обслуживание:</strong> следите за состоянием
              двигателя, уровнем масла и давлением в шинах.
            </li>
            <li>
              <strong>Выбор маршрута:</strong> избегайте пробок и выбирайте
              дороги с хорошим покрытием.
            </li>
            <li>
              <strong>Карпулинг и общественный транспорт:</strong> сокращайте
              количество поездок на личном авто.
            </li>
            <li>
              <strong>Программы лояльности:</strong> используйте бонусные карты
              АЗС и акции для экономии.
            </li>
            <li>
              <strong>Минимизация веса:</strong> убирайте ненужные вещи из
              багажника — каждый лишний килограмм увеличивает расход.
            </li>
          </ul>

          <p>
            Калькулятор поможет вам спрогнозировать затраты на топливо, исходя
            из пройденного расстояния, среднего расхода и текущих цен на бензин
            или дизель. Это удобный инструмент для планирования бюджета поездок,
            командировок или семейных путешествий.
          </p>

          <p>
            Используйте наш калькулятор, чтобы принимать более осознанные
            решения при управлении автомобилем и оптимизировать свои расходы.
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

export default FaelCost;
