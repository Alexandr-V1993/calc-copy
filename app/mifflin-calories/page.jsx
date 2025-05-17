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
        title={"Калькулятор калорий"}
        description={
          "Онлайн калькулятор позволяет рассчитать количество калорий, которое необходимо ежедневно получать вашему организму в зависимости от вашего роста, веса, возраста и степени физической активности. Рачет проводится по формуле Миффлина-Сан Жеора."
        }
        span={" по формуле Миффлина-Сан Жеора"}
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
            Чтобы похудеть или, наоборот, набрать мышечную массу, ключевое
            значение имеет объем потребляемых в день калорий. Однако встает
            вопрос о том, как определить оптимальное количество. Один из
            наиболее точных методов - формула Миффлина-Сан Жеора. Она позволяет
            выявить суточную норму потребляемых калорий на основе возраста,
            веса, роста, пола и уровня активности. Однако проводить
            самостоятельно сложные расчеты не нужно, вместо этого можно
            воспользоваться калькулятором калорий, указав все необходимые
            данные.
          </p>

          <h2>Что представляет собой формула Миффлина-Сан Жеора</h2>
          <p>
            Это научно обоснованный метод для расчета BMR (базового уровня
            метаболизма). В настоящее время Американская ассоциация диетологов
            считает его наиболее точным. Он направлен на определение объема
            энергии, которая необходима нашему организму для покрытия затрат в
            состоянии покоя. На основе этого значения рассчитывается оптимальное
            значение калорийности питания с учетом индивидуального уровня
            активности (предусмотрено несколько вариантов от низкого с сидящим
            образом жизни и до интенсивных тренировок). Формула действенна для
            людей возрастом от 13 и до 80 лет.
          </p>

          <h2>Как выглядит формула?</h2>
          <p>
            Для женщин формула Миффлина-Сан Жеора выглядит следующим образом:
          </p>
          <p className="formula">(10 × X) + (6.25 × Y) - (5 × Z) - 161</p>
          <p>где:</p>
          <ul>
            <li>X - вес, указываемый в кг;</li>
            <li>Y - рост в см;</li>
            <li>Z - возраст в годах.</li>
          </ul>

          <p>Для мужчин эта формула выглядит следующим образом:</p>
          <p className="formula">(10 × V) + (6.25 × R) - (5 × W) - 5</p>

          <p>
            Для учета физической активности итоговый результат перемножается с
            коэффициентом:
          </p>
          <ul>
            <li>
              При сидячей нагрузке и отсутствии физ. нагрузок он равен ×1,2;
            </li>
            <li>
              Если присутствует легкая гимнастика или пробежки один-три раза в
              неделю коэффициент составляет ×1,375;
            </li>
            <li>При занятиях спортом со средней интенсивностью - ×1,55;</li>
            <li>
              При полноценных тренировках 6-7 раз в неделю, коэффициент будет
              равен ×1,725;
            </li>
            <li>
              Если же повседневная трудовая деятельность связана с физическими
              нагрузками, а также присутствуют силовые тренировки дважды в
              неделю его значение вырастет до ×1,9.
            </li>
          </ul>

          <h3>Пример расчета</h3>
          <p>
            Итак, для женщина 40 лет ростом 165 см и весом 73 кг с легким
            уровнем физической активности объем калорий должен составить
          </p>
          <p className="formula">
            (10 × 73) + (6.25 × 165) - (5 × 40) - 161 = 730 + 1031,25 - 200 -
            161 = 1400.25
          </p>
          <p className="formula">1400.25 × 1.375 = 1925.34</p>

          <h2>Как использовать калькулятор</h2>
          <p>
            Калькулятор максимально прост в использовании. Он поможет избежать
            расчетов вручную. Чтобы получить значение достаточно лишь заполнить
            форму, указав все данные. Вычисления будут проведены автоматически.
          </p>
          <p>
            Калькулятор Миффлина-Сан Жеора поможет определить оптимальное
            значение калорийности рациона для поддержания физической формы на
            текущем уровне. Если же необходимо похудеть или, напротив, набрать
            вес, достаточно уменьшить или увеличить полученную цифру. Однако при
            этом важно помнить о том, что питание должно быть сбалансированным.
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
