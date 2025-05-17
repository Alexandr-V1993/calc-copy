"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import OneHundredForm from "./OneHundredForm";
import Link from "next/link";
import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  number: null,
  percent: null,
  round: 1,
  condition: "increase",
};

function reducer(state, action) {
  switch (action.type) {
    case "number":
      return { ...state, number: Number(action.payload) };
    case "percent":
      return { ...state, percent: Number(action.payload) };
    case "round":
      return { ...state, round: Number(action.payload) };
    default:
      break;
  }
}

function OneHundred() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор нахождения"}
        description={
          "Калькулятор для вычисления 100 процентов, если известно что определенное число это N процентов"
        }
        span={"ста процентов"}
      >
        <OneHundredForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/percent-100"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <Input
                  type={"number"}
                  labelTitle={"Число"}
                  dispatch={dispatch}
                  typeDispatch={"number"}
                  hadleInput={hadleInput}
                />
                <Input
                  type={"number"}
                  labelTitle={"Состовляет"}
                  notation={"%"}
                  typeDispatch={"percent"}
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
        </OneHundredForm>

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

            <Link href={"/percentage-number-greater"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор на сколько % одно число больше другого</h5>
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
          <p>
            Калькулятор, вероятно,это одно из самых простых и в то же время
            удивительно полезных устройств в мире современных технологий.{" "}
          </p>
          <p>
            С его помощью мы можем проводить различные вычисления, начиная от
            базовых арифметических операций и заканчивая более сложными
            математическими формулами.
          </p>
          <p>
            {" "}
            Однако, когда речь идет о нахождении процентов,и тогда калькулятор
            становится еще более важным инструментом.
          </p>
          <p>
            Теперь давайте мы взглянем на то, как работает калькулятор при
            расчете ста процентов от числа.
          </p>
          <p>
            Современные калькуляторы обычно имеют функцию, которая позволяет
            найти сто процентов числа сразу.{" "}
          </p>
          <p>
            Для этого обычно достаточно ввести число и нажать на кнопку "сто
            процентов" или "=". Калькулятор сразу выполнит вычисление и
            отобразит результат на вашем экране.
          </p>
          <p>
            И давайте мы рассмотрим несколько примеров использования
            калькулятора для нахождения ста процентов числа. Предположим, у нас
            есть число 500. Путем использования функции "сто процентов"
            калькулятор покажет нам результат: 500. Это означает, что сто
            процентов числа 500 она равны самому числу 500.
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

export default OneHundred;
