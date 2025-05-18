"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentageLessForm from "./PercentageLessForm";
import Link from "next/link";
import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  number: null,
  number2: null,
  round: 1,
  condition: "decrease",
};

function reducer(state, action) {
  switch (action.type) {
    case "number":
      return { ...state, number: Number(action.payload) };
    case "number2":
      return { ...state, number2: Number(action.payload) };
    case "round":
      return { ...state, round: Number(action.payload) };
    default:
      break;
  }
}

function PercentageNumLess() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор на сколько % одно число"}
        description={
          "Чтобы вычислить, на сколько процентов одно число меньше другого, нужно из 100 вычесть отношение первого числа ко второму, умноженное на 100."
        }
        span={" меньше другого."}
      >
        <PercentageLessForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/percent-difference"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <Input
                  type={"number"}
                  labelTitle={"Число 1"}
                  dispatch={dispatch}
                  typeDispatch={"number"}
                  hadleInput={hadleInput}
                />
                <div>
                  <span className="minus">{"<"}</span>
                </div>
                <Input
                  type={"number2"}
                  labelTitle={"Число 2"}
                  typeDispatch={"number2"}
                  hadleInput={hadleInput}
                />
              </div>

              <label className="label-select">
                <span>Окр.до</span>
                <select
                  className="select"
                  onChange={(e) =>
                    dispatch({ type: "round", payload: Number(e.target.value) })
                  }
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </label>
            </div>
          </div>
        </PercentageLessForm>

        <Contents>
          <ul className="percent-list">
            <Link href={"/percent-of-number"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор процента от числа</h5>
              </li>
            </Link>
            <Link href={"/add-percentage-number"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор прибавки процента к числу</h5>
              </li>
            </Link>
            <Link href={"/percentage-from-number"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор высчета процента из числа</h5>
              </li>
            </Link>
            <Link href={"/one-hundred-percent"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор найти сто поцентов</h5>
              </li>
            </Link>
            <Link href={"/percentage-number-greater"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор на сколько % одно число больше другого</h5>
              </li>
            </Link>

            <Link href={"/number-of-number"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор % числа от числа</h5>
              </li>
            </Link>
          </ul>
          <h2>Формула</h2>
          <p>
            Чтобы вычислить, на сколько процентов одно число меньше другого,
            нужно из 100 вычесть отношение первого числа ко второму, умноженное
            на 100.
          </p>
          <h2 className="formula">Р = 100 − Ч1 Ч2 · 100</h2>
          <p>
            Таким же образом можно определить на сколько процентов уменьшилось
            число. Например, размер ваших накоплений, после того, как часть была
            потрачена на отпуск.
          </p>
          <h2>Примеры</h2>
          <h2 className="formula">
            <strong>Пример:</strong>
            Вычислим, на сколько процентов число 5 меньше числа 20: 100 − 5 20 ·
            100 = 100 − 0,25 · 100 = 100 − 25 = 75% Число 5 меньше числа 20 на
            75%.
          </h2>
          <h2 className="formula">
            <strong>Пример:</strong>
            Например, фрилансер Олег в январе выполнил заказы на 40000 рублей, а
            в феврале на 30000 рублей. Найдем, на сколько процентов Олег в
            феврале заработал меньше, чем в январе: 100 − 30000 40000 · 100 =
            100 − 0,75 * 100 = 100 − 75 = 25% Таким образом, в феврале Олег
            заработал на 25% меньше, чем в январе.
          </h2>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default PercentageNumLess;
