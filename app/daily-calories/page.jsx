"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import Input from "../components/Input";

import CalorieForm from "./CalorieForm";
import "./calorie.css";

const initial = {
  formula: "mifflinStJeor",
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
        title={"Калькулятор "}
        description={
          "Точный калькулятор калорий позволяет выбрать различные формулы расчета, включая формулы Миффлина-Сан Жеора и Харриса-Бенедикта в простом и упрощенном виде, а также определить норму калорий, необходимую именно вам для достижения ваших целей с учетом дневной активности."
        }
        span={" калорий"}
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
          <p>
            <strong>Добро пожаловать в наш калькулятор калорий!</strong> Это
            универсальный инструмент для тех, кто хочет контролировать свой
            рацион и поддерживать здоровый образ жизни. Здесь вы найдете все
            необходимое для расчета суточной потребности в калориях, а также
            советы по правильному питанию.
          </p>

          <hr />

          <h2>1. Что такое калории?</h2>
          <p>
            <strong>Калория</strong> - это единица измерения энергии. В
            контексте питания, калории означают количество энергии, которое мы
            получаем из пищи и напитков. Энергия необходима нашему организму для
            выполнения всех жизненно важных функций: дыхания, поддержания
            температуры тела, физической активности и даже во время сна.
          </p>

          <hr />

          <h2>2. Как рассчитываются калории?</h2>
          <p>
            Существует несколько формул для расчета суточной потребности в
            калориях. Наиболее популярные из них:
          </p>
          <ul>
            <li>
              <strong>Формула Миффлина-Сан Жеора:</strong>
              <p className="formula">
                Мужчины: BMR = 10 &times; вес (кг) + 6.25 &times; рост (см) - 5
                &times; возраст (годы) + 5 Женщины: BMR = 10 &times; вес (кг) +
                6.25 &times; рост (см) - 5 &times; возраст (годы) - 161
              </p>
            </li>
            <li className="top-ul">
              <strong>Формула Харриса-Бенедикта:</strong>
              <p className="formula">
                Мужчины: BMR = 88.362 + (13.397 &times; вес (кг)) + (4.799
                &times; рост (см)) - (5.677 &times; возраст (годы)) Женщины: BMR
                = 447.593 + (9.247 &times; вес (кг)) + (3.098 &times; рост (см))
                - (4.330 &times; возраст (годы))
              </p>
            </li>
          </ul>
          <p>
            <strong>BMR (Basal Metabolic Rate)</strong> - это базовый обмен
            веществ, количество калорий, которые организм расходует в состоянии
            покоя.
          </p>

          <hr />

          <h2>3. Коэффициенты физической активности</h2>
          <p>
            Чтобы определить общую суточную потребность в калориях,{" "}
            <strong> BMR </strong>
            умножается на коэффициент физической активности:
          </p>
          <ul>
            <li>
              Малоподвижный образ жизни (офисная работа):{" "}
              <strong>BMR &times; 1.2</strong>
            </li>
            <li>
              Легкая активность (легкие упражнения/спорт 1-3 дня в неделю):{" "}
              <strong>BMR &times; 1.375</strong>
            </li>
            <li>
              Умеренная активность (умеренные упражнения/спорт 3-5 дней в
              неделю): <strong>BMR &times; 1.55</strong>
            </li>
            <li>
              Высокая активность (интенсивные упражнения/спорт 6-7 дней в
              неделю): <strong> BMR &times; 1.725</strong>
            </li>
            <li>
              Очень высокая активность (очень интенсивные упражнения/спорт,
              физическая работа): <strong>BMR &times; 1.9</strong>
            </li>
          </ul>

          <hr />

          <h2>4. Таблица потребности в калориях</h2>
          <table>
            <thead>
              <tr>
                <th>Активность</th>
                <th>Мужчины (ккал/день)</th>
                <th>Женщины (ккал/день)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Малоподвижный</td>
                <td>2000 - 2400</td>
                <td>1600 - 2000</td>
              </tr>
              <tr>
                <td>Легкая активность</td>
                <td>2400 - 2600</td>
                <td>2000 - 2200</td>
              </tr>
              <tr>
                <td>Умеренная активность</td>
                <td>2600 - 2800</td>
                <td>2200 - 2400</td>
              </tr>
              <tr>
                <td>Высокая активность</td>
                <td>2800 - 3000</td>
                <td>2400 - 2600</td>
              </tr>
              <tr>
                <td>Очень высокая активность</td>
                <td>3000 - 3500</td>
                <td>2600 - 3000</td>
              </tr>
            </tbody>
          </table>

          <hr />

          <h2>5. Пример расчета калорийности</h2>
          <p>
            <strong>
              Пример для женщины 30 лет, весом 60 кг, ростом 165 см, с умеренной
              физической активностью:
            </strong>
          </p>
          <ol>
            <li>
              <strong> Расчет BMR по формуле Миффлина-Сан Жеора:</strong>
              <p className="formula">
                BMR = 10 &times; 60 + 6.25 &times; 165 - 5 &times; 30 - 161 =
                1341.25 ккал
              </p>
            </li>
            <li className="top-ul">
              <strong> Умножаем на коэффициент активности (1.55):</strong>
              <p className="formula">
                Суточная потребность = 1341.25 &times; 1.55 = 2078 ккал
              </p>
            </li>
          </ol>

          <hr />

          <h2>6. Советы по правильному питанию</h2>
          <ul>
            <li>
              <strong>Разнообразие:</strong> Включайте в рацион различные группы
              продуктов.
            </li>
            <li>
              <strong>Баланс:</strong> Следите за балансом белков, жиров и
              углеводов.
            </li>
            <li>
              <strong>Контроль порций:</strong> Обращайте внимание на размеры
              порций.
            </li>
            <li>
              <strong>Гидратация:</strong> Пейте достаточное количество воды.
            </li>
            <li>
              <strong>Регулярные приемы пищи:</strong> Старайтесь есть в одно и
              то же время каждый день.
            </li>
          </ul>

          <hr />

          <h2>7. Часто задаваемые вопросы</h2>
          <p>
            <strong>Вопрос:</strong> Как понять, что я правильно рассчитываю
            свои калории?
          </p>
          <p>
            <strong>Ответ:</strong> Используйте надежные формулы и учитывайте
            индивидуальные особенности.
          </p>
          <p>
            <strong>Вопрос:</strong> Нужно ли считать калории каждый день?
          </p>
          <p>
            <strong>Ответ:</strong> Нет, но регулярный учет поможет лучше
            понимать свои пищевые привычки и достигать поставленных целей.
          </p>

          <p>
            Используйте наш калькулятор калорий, чтобы следить за своим питанием
            и поддерживать здоровье. Начните сегодня и достигайте своих целей!
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
