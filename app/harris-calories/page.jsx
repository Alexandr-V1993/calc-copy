"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import Input from "../components/Input";

import CalorieForm from "./CalorieForm";
import "./calorie.css";

const initial = {
  formula: "harrisBenedict", // Изменено с "mifflinStJeor" на "harrisBenedict"
  age: null,
  height: null,
  weight: null,
  gender: "male",
  activity: "sedentary",
  goal: "loss",
};

function reducer(state, action) {
  switch (action.type) {
    case "formula":
      return { ...state, formula: String(action.payload) };
    case "age":
      return { ...state, age: Number(action.payload) };
    case "height":
      return { ...state, height: Number(action.payload) };
    case "weight":
      return { ...state, weight: Number(action.payload) };
    case "gender":
      return { ...state, gender: action.payload };
    case "activity":
      return { ...state, activity: action.payload };
    case "goal":
      return { ...state, goal: String(action.payload) };
  }
}
function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор калорий"}
        description={
          "Онлайн калькулятор позволяет рассчитать количество калорий, которое необходимо ежедневно получать вашему организму в зависимости от вашего роста, веса, возраста и степени физической активности. Рачет проводится по формуле Харриса-Бенедикта."
        }
        span={" по формуле Харриса-Бенедикта"}
      >
        <CalorieForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/calorie"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <label className="label-top">
                <span>Формула оценки BMR</span>

                <select
                  onChange={(e) =>
                    dispatch({
                      type: "formula",
                      payload: String(e.target.value),
                    })
                  }
                  value={state.formula} // Добавлено для контроля выбранного значения
                >
                  <option value="mifflinStJeor">Миффлина-Сан Жеора</option>
                  <option value="harrisBenedict">Харриса-Бенедикта</option>
                  <option value="sMifflinStJeor">
                    Упрощенный Миффлина-Сан Жеора
                  </option>
                  <option value="oHarrisBenedict">
                    Харриса-Бенедикта (Оригинальная)
                  </option>
                </select>
              </label>

              <div className="topInput-select">
                <Input
                  labelTitle={"Возраст"}
                  notation={"лет"}
                  typeDispatch={"age"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
                <Input
                  labelTitle={"Рост"}
                  notation={"см"}
                  typeDispatch={"height"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
              </div>
              <div className="topInput-selects">
                <Input
                  labelTitle={"Вес"}
                  notation={"кг"}
                  typeDispatch={"weight"}
                  hadleInput={hadleInput}
                  type={"number"}
                />
                <label className="label-tops">
                  <span>Пол</span>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "gender",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                  </select>
                </label>
              </div>
              <div className="input-bottom">
                <label>
                  <span>Дневная активность</span>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "activity",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="sedentary">Минимальная активность</option>
                    <option value="lightly">Слабый уровень активности</option>
                    <option value="moderately">
                      Умеренный уровень активности
                    </option>
                    <option value="active">Активный уровень активности</option>
                    <option value="veryActive">
                      Тяжелая или трудоемкая активность
                    </option>
                    <option value="extraActive">
                      Экстремальная активность
                    </option>
                    <option value="basal">
                      Уровень базального метаболизма
                    </option>
                  </select>
                </label>
                <label>
                  <span>Цель</span>
                  <select
                    onChange={(e) =>
                      dispatch({
                        type: "goal",
                        payload: String(e.target.value),
                      })
                    }
                  >
                    <option value="loss">Сбросить вес</option>
                    <option value="maintenance">Поддержать вес</option>
                    <option value="gain">Набрать вес</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        </CalorieForm>

        <Contents>
          <h2>
            Калькулятор калорий: точный расчет по формуле Харриса-Бенедикта
          </h2>

          <p>
            Возможно, вы хотите управлять весом, набирать мышечную массу или
            просто хотите быть здоровым. Для этого важно разобраться, сколько
            энергии ваше тело потребляет ежедневно. Точный способ это выяснить —
            калькулятор калорий, основанный на формуле Харриса-Бенедикта.
          </p>

          <h2>
            Как определить норму обмена с помощью формулы Харриса-Бенедикта
          </h2>
          <p>
            Это научная методика, вычисляющая базовый уровень обмена веществ.
            BMR – это количество калорий, расходуемое организмом без физической
            активности. Энергия расходуется на дыхание, кровообращение, работу
            органов. Существуют различные методики расчета. Но принцип
            Харриса-Бенедикта считается одной из самых точных для практического
            применения.
          </p>
          <p>
            Ее разработали два ученых в начале прошлого века. Они провели
            множество исследований и вывели уравнения, демонстрирующие
            зависимость расхода энергии от пола, возраста, антропометрических
            данных. Человек с большой массой тратит больше калорий на
            поддержание организма, чем более легкий человек.
          </p>

          <h2>Зачем нужен калькулятор?</h2>
          <p>
            Без точного плана питания любые цели для тела останутся мечтой.
            Определить норму калорий – значит получить личную ежедневную задачу
            по питанию. Добавьте сюда свою физическую активность. И получится
            четкое число, на которое можно опираться.
          </p>

          <h2>Как это работает?</h2>
          <p>
            Вы вводите свой возраст, рост, вес и уровень нагрузок. Калькулятор
            определит ваш BMR по принципу Харриса-Бенедикта. Затем нужно учесть
            степень физической нагрузки. Для этого основной обмен умножают на
            специальный коэффициент. Так получается уровень энергии, необходимый
            для сохранения настоящего веса.
          </p>

          <div className="benefits-list">
            <p>Понимая свою норму, вы можете:</p>
            <ul>
              <li>создать дефицит и худеть;</li>
              <li>создать избыток и набирать мышечную массу;</li>
              <li>поддерживать стабильный вес.</li>
            </ul>
          </div>

          <h2>Почему надо опираться на цифры?</h2>
          <p>
            Самочувствие, энергия, результаты зависят от осознанного подхода к
            питанию. Калькулятор калорий — это ваша личная карта, ведущая к
            целям. Сочетая расчет по формуле Харриса-Бенедикта со здоровыми
            привычками, вы получаете систему, которая работает на вас.
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
