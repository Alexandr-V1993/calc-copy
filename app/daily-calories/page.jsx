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
          "Точный калькулятор калорий позволяет выбрать различные формулы расчета, включая Миффлина-Сан Жеора и Харриса-Бенедикта, чтобы определить вашу суточную норму калорий с учетом уровня активности."
        }
        span={" калорий"}
      >
        <CalorieForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/calorie"}
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
            удобный инструмент для тех, кто хочет контролировать рацион, следить
            за здоровьем и достигать своих целей: похудение, набор мышечной
            массы или поддержание формы.
          </p>

          <hr />

          <h2>1. Что такое калории?</h2>
          <p>
            <strong>Калория</strong> — это мера энергии, которую ваш организм
            получает из пищи и напитков. Эта энергия нужна для дыхания,
            движения, работы мозга и всех физиологических процессов, даже во
            время сна.
          </p>

          <hr />

          <h2>2. Как рассчитываются калории?</h2>
          <p>
            Калькулятор использует две проверенные формулы для расчёта базового
            уровня метаболизма (BMR):
          </p>

          <ul>
            <li>
              <strong>Формула Миффлина-Сан Жеора:</strong>
              <p className="formula">
                Мужчины: BMR = 10 × вес (кг) + 6.25 × рост (см) − 5 × возраст
                (годы) + 5
              </p>
              <p className="formula">
                Женщины: BMR = 10 × вес (кг) + 6.25 × рост (см) − 5 × возраст
                (годы) − 161
              </p>
            </li>

            <li className="top-ul">
              <strong>Формула Харриса-Бенедикта:</strong>
              <p className="formula">
                Мужчины: BMR = 88.362 + (13.397 × вес (кг)) + (4.799 × рост
                (см)) − (5.677 × возраст (годы))
              </p>
              <p className="formula">
                Женщины: BMR = 447.593 + (9.247 × вес (кг)) + (3.098 × рост
                (см)) − (4.330 × возраст (годы))
              </p>
            </li>
          </ul>

          <p>
            <strong>BMR (базовый метаболизм)</strong> — это количество калорий,
            которые ваш организм тратит в состоянии покоя.
          </p>

          <hr />

          <h2>3. Коэффициенты физической активности</h2>
          <p>
            Чтобы получить общую суточную потребность в калориях, базовый
            метаболизм умножается на коэффициент активности:
          </p>
          <ul>
            <li>
              <strong>Малоподвижный образ жизни:</strong> BMR × 1.2
            </li>
            <li>
              <strong>Легкая активность (1–3 дня в неделю):</strong> BMR × 1.375
            </li>
            <li>
              <strong>Умеренная активность (3–5 дней в неделю):</strong> BMR ×
              1.55
            </li>
            <li>
              <strong>Высокая активность (6–7 дней в неделю):</strong> BMR ×
              1.725
            </li>
            <li>
              <strong>Очень высокая активность:</strong> BMR × 1.9
            </li>
          </ul>

          <hr />

          <h2>4. Как рассчитывается норма калорий?</h2>
          <p>
            После определения BMR и выбора уровня активности, калькулятор
            рассчитывает суточную потребность в калориях. Также можно задать
            цели:
          </p>
          <ul>
            <li>
              <strong>Поддержание веса:</strong> калории = TDEE (общие расходы в
              день)
            </li>
            <li>
              <strong>Похудение:</strong> калории = TDEE − 10% / 20%
            </li>
            <li>
              <strong>Набор массы:</strong> калории = TDEE + 10% / 20%
            </li>
          </ul>

          <hr />

          <h2>5. Определение БЖУ</h2>
          <p>
            Помимо калорий, калькулятор может помочь определить норму белков,
            жиров и углеводов:
          </p>
          <ul>
            <li>
              <strong>Белки:</strong> 1.2–2 г на кг веса тела
            </li>
            <li>
              <strong>Жиры:</strong> 25–35% от общих калорий
            </li>
            <li>
              <strong>Углеводы:</strong> оставшаяся часть после вычета белков и
              жиров
            </li>
          </ul>

          <hr />

          <h2>6. Советы по правильному питанию</h2>
          <p>Вот несколько практических рекомендаций:</p>
          <ul>
            <li>Ешьте больше овощей и фруктов;</li>
            <li>Пейте достаточное количество воды;</li>
            <li>Избегайте переработанной пищи и сахара;</li>
            <li>Следите за порциями;</li>
            <li>Не пропускайте приемы пищи;</li>
            <li>Добавляйте в рацион источники белка;</li>
            <li>Включайте полезные жиры (авокадо, орехи, оливковое масло);</li>
            <li>Выбирайте сложные углеводы вместо простых.</li>
          </ul>

          <hr />

          <h2>7. Часто задаваемые вопросы</h2>

          <h3>Как понять, что я правильно рассчитываю свои калории?</h3>
          <p>
            Используйте точные формулы и регулярно корректируйте показатели в
            зависимости от изменений веса, уровня активности и целей.
          </p>

          <h3>Нужно ли считать калории каждый день?</h3>
          <p>
            Нет, но регулярный учет помогает лучше понимать свой рацион и
            корректировать его при необходимости.
          </p>

          <h3>Как часто нужно пересчитывать норму калорий?</h3>
          <p>
            Пересчитывайте каждые 2–3 месяца или при значительном изменении
            веса, режима питания или физической нагрузки.
          </p>

          <h3>
            Что делать, если я не могу точно определить уровень активности?
          </h3>
          <p>
            Выберите среднее значение (например, умеренная активность), а затем
            скорректируйте по реальному состоянию дел.
          </p>

          <h3>Можно ли использовать калькулятор для набора мышечной массы?</h3>
          <p>
            Да, просто выберите цель «Набор массы» и добавьте дополнительные
            калории в рацион.
          </p>

          <hr />

          <h2>8. Заключение</h2>
          <p>
            Калькулятор калорий — незаменимый инструмент для тех, кто заботится
            о своем здоровье, тренируется, хочет похудеть или набрать мышечную
            массу. Он поможет вам составить план питания, достичь целей и
            чувствовать себя лучше.
          </p>

          <p>
            Не забывайте, что правильное питание — это не только подсчёт
            калорий, но и баланс, качество продуктов и регулярность.
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
