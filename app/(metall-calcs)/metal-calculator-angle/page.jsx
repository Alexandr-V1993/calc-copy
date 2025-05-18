"use client";
import React, { useReducer, useState } from "react";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import CalorieForm from "./CalorieForm";
import Armatura from "@/app/components/metall/Armatura";
import BalkaDvutavr from "@/app/components/metall/BalkaDvutavr";
import Shveller from "@/app/components/metall/Shveller";
import Ugolok from "@/app/components/metall/Ugolok";
import TrubaKruglaya from "@/app/components/metall/TrubaKruglaya";
import TrubaProfilnaya from "@/app/components/metall/TrubaProfilnaya";
import Krug from "@/app/components/metall/Krug";
import Kvadrat from "@/app/components/metall/Kvadrat";
import List from "@/app/components/metall/List";
import Lenta from "@/app/components/metall/Lenta";
import Shestigrannik from "@/app/components/metall/Shestigrannik";
import "./calorie.css";

const initial = {};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SELECTED_OBJECT":
      return { ...state, selectedObject: action.payload };
    default:
      return state;
  }
}

function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [selectedProrate, setSelectedProrate] = useState("Уголок");

  const handleProrateSelection = (prorateType) => {
    setSelectedProrate(prorateType);
    dispatch({
      type: "UPDATE_SELECTED_OBJECT",
      payload: { type: prorateType },
    });
  };

  const handleDataUpdate = (data) => {
    dispatch({ type: "UPDATE_SELECTED_OBJECT", payload: data });
  };

  return (
    <>
      <HeaderModal />
      <TopForm title={"Калькулятор веса "} span={"уголка"}>
        <CalorieForm
          obj={state.selectedObject}
          url={"https://boxcalculators.ru/api/calculate/metal"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <label className="label-top">
                <span>Тип проката</span>
                <div className="row">
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Арматура" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Арматура")}
                  >
                    <span className="align-middle">Арматура</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Балка/двутавр" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Балка/двутавр")}
                  >
                    <span className="align-middle">Балка/двутавр</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Швеллер" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Швеллер")}
                  >
                    <span className="align-middle">Швеллер</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Уголок" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Уголок")}
                  >
                    <span className="align-middle">Уголок</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Труба круглая" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Труба круглая")}
                  >
                    <span className="align-middle">Труба круглая</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Труба профильная" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Труба профильная")}
                  >
                    <span className="align-middle">Труба профильная</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Круг" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Круг")}
                  >
                    <span className="align-middle">Круг</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Квадрат" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Квадрат")}
                  >
                    <span className="align-middle">Квадрат</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Лист" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Лист")}
                  >
                    <span className="align-middle">Лист</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Лента" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Лента")}
                  >
                    <span className="align-middle">Лента</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Шестигранник" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Шестигранник")}
                  >
                    <span className="align-middle">Шестигранник</span>
                  </button>
                </div>
              </label>
              {/* Условные рендеры для компонентов */}
              {selectedProrate === "Арматура" && (
                <Armatura onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Балка/двутавр" && (
                <BalkaDvutavr onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Швеллер" && (
                <Shveller onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Уголок" && (
                <Ugolok onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Труба круглая" && (
                <TrubaKruglaya onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Труба профильная" && (
                <TrubaProfilnaya onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Круг" && (
                <Krug onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Квадрат" && (
                <Kvadrat onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Лист" && (
                <List onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Лента" && (
                <Lenta onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Шестигранник" && (
                <Shestigrannik onDataUpdate={handleDataUpdate} />
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <div className="sidebar">
            <div className="sidebar-header">
              <img className="sidebar-logo" src="/stroika2.svg" alt="дата" />
              <span className="sidebar-title">Строительные калькуляторы</span>
            </div>
            <div className="sidebar-links">
              <a href="/metal-calculator-armature" className="sidebar-link">
                Вес арматуры
              </a>
              <a href="/metal-calculator-angle" className="sidebar-link active">
                Вес уголка
              </a>
              <a href="/metal-calculator-circle" className="sidebar-link">
                Вес круга
              </a>
              <a href="/metal-calculator-square" className="sidebar-link">
                Вес квадрата
              </a>
              <a href="/metal-calculator-pipe" className="sidebar-link">
                Вес круглой трубы
              </a>
              <a href="/metal-calculator-shaped-tube" className="sidebar-link">
                Вес профильной трубы
              </a>
              <a href="/metal-calculator-beam" className="sidebar-link ">
                Вес балки двутавровой
              </a>
              <a href="/metal-calculator-channel" className="sidebar-link">
                Вес швеллера
              </a>
              <a href="/metal-calculator-sheet" className="sidebar-link">
                Вес листа
              </a>
              <a href="/metal-calculator-strip" className="sidebar-link">
                Вес полосы
              </a>
              <a href="/metal-calculator-hex" className="sidebar-link">
                Вес шестигранника
              </a>
              <a href="/metallocalculator" className="sidebar-link">
                Металлокалькулятор
              </a>
            </div>
          </div>
          <h2>Как рассчитать вес металлического уголка?</h2>

          <p>
            Металлические уголки широко используются в строительстве,
            машиностроении и мебельной промышленности. Чтобы точно спланировать
            нагрузки, перевозку или стоимость материала, важно знать их массу на
            метр длины. Наш калькулятор помогает быстро рассчитать вес уголка по
            его размерам и типу стали.
          </p>

          <h3>Что такое равнополочный и неравнополочный уголок?</h3>

          <ul>
            <li>
              <strong>Равнополочный:</strong> одинаковая ширина полок (например,
              40x40 мм);
            </li>
            <li>
              <strong>Неравнополочный:</strong> разная ширина сторон (например,
              50x30 мм).
            </li>
          </ul>

          <h3>Почему стоит использовать калькулятор?</h3>

          <p>
            Он экономит время на ручной подсчет по справочникам и снижает риск
            ошибок. Просто выберите тип уголка, введите ширину полок и толщину,
            а также длину — и получите точное значение массы.
          </p>

          <h3>Где применяется такой калькулятор?</h3>

          <ul>
            <li>
              <strong>В строительстве:</strong> каркасы, опоры, лестницы;
            </li>
            <li>
              <strong>В производстве:</strong> сборка конструкций;
            </li>
            <li>
              <strong>Для доставки:</strong> определение общего веса груза;
            </li>
            <li>
              <strong>В учебных целях:</strong> студенты и инженеры;
            </li>
            <li>
              <strong>Для частников:</strong> ремонт, заборы, беседки.
            </li>
          </ul>

          <h3>Какие данные выводятся?</h3>

          <p>Калькулятор показывает:</p>

          <ul>
            <li>
              <strong>Массу одного метра:</strong> в килограммах;
            </li>
            <li>
              <strong>Общий вес изделия:</strong> зависит от длины;
            </li>
            <li>
              <strong>Сортамент:</strong> стандартные размеры уголков;
            </li>
            <li>
              <strong>Плотность стали:</strong> влияет на точность;
            </li>
            <li>
              <strong>Типоразмеры:</strong> ГОСТ, DIN, ISO и другие стандарты.
            </li>
          </ul>

          <h3>Как проверить точность?</h3>

          <p>
            Вы можете сравнить результаты с официальными таблицами ГОСТ или
            данными от производителя. Также можно измерить реальный вес образца
            и сверить с расчетом.
          </p>

          <h3>Какие еще параметры могут быть полезны?</h3>

          <ul>
            <li>
              <strong>Площадь сечения:</strong> для прочностных расчетов;
            </li>
            <li>
              <strong>Цена за метр:</strong> если известна стоимость за единицу;
            </li>
            <li>
              <strong>Таблицы весов:</strong> для автономной работы;
            </li>
            <li>
              <strong>Справочники:</strong> ГОСТ 8509-93, ГОСТ 8510-91;
            </li>
            <li>
              <strong>Рекомендации:</strong> как выбрать подходящий профиль.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-калькулятора?</h3>

          <p>
            Это удобный и быстрый способ получить точные значения без знания
            формул. Инструмент работает на любом устройстве, не требует
            установки и обновляется автоматически.
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
