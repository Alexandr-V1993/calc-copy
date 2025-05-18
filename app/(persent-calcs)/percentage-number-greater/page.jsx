"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentageGreaterForm from "./PercentageGreaterForm";
import Link from "next/link";
import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  number: null,
  number2: null,
  round: 1,
  condition: "increase",
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

function PercentageNumGreater() {
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
          "Чтобы вычислить, на сколько процентов одно число больше другого, нужно первое число разделить на второе, умножить результат на 100 и вычесть 100."
        }
        span={" больше другого."}
      >
        <PercentageGreaterForm
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
                  <span className="minus">{">"}</span>
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
        </PercentageGreaterForm>

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

            <Link href={"/percentage-number-less"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор на сколько % одно число меньше другого</h5>
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
            Чтобы вычислить, на сколько процентов одно число больше другого,
            нужно первое число разделить на второе, умножить результат на 100 и
            вычесть 100.
          </p>
          <h2 className="formula">Р = Ч1 Ч2 · 100 − 100</h2>
          <p>
            Таким же образом можно определить на сколько процентов увеличилось
            число. Например, население Земли за последний год.
          </p>
          <h2>Примеры</h2>
          <h2 className="formula">
            <strong>Пример:</strong>
            Вычислим, на сколько процентов число 20 больше числа 5: 20 5 · 100 −
            100 = 4 · 100 − 100 = 400 − 100 = 300% Число 20 больше числа 5 на
            300%.
          </h2>
          <h2 className="formula">
            <strong>Пример:</strong>
            Например, зарплата начальника равна 50000 рублей, а сотрудника -
            35000 рублей. Найдем, на сколько процентов зарплата начальника
            больше: 50000 35000 · 100 − 100 = 1,43 * 100 − 100 = 143 − 100 = 43%
            Таким образом, зарплата начальника на 43% выше зарплаты сотрудника.
          </h2>
          <h2 className="formula">
            {" "}
            <strong>Пример:</strong>Пачка масла стоила 120 рублей, а через год
            та же самая пачка стоит уже 150 рублей. Определим, на сколько
            увеличилась цена. 150 120 · 100 − 100 = 1,25 * 100 − 100 = 125 − 100
            = 25% Таким образом, цена выросла на 25%.
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

export default PercentageNumGreater;
