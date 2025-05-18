"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentageFromForm from "./PercentageFromForm";
import Link from "next/link";
import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  number: null,
  percent: null,
  round: 1,
  condition: "decrease",
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

function PercentageFromNum() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор высчета "}
        description={
          "Для того чтобы вычесть проценты от заданного числа, необходимо сначала найти этот процент. Делим число на 100%, а затем умножаем на заданный процент. "
        }
        span={"процента из числа"}
      >
        <PercentageFromForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/percent-change"}
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
                  labelTitle={"Вычесть процент"}
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
        </PercentageFromForm>

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
          <h2>Формула вычитания процента от числа</h2>
          <p>Искомое число = число × (1 – величина процента) ÷ 100%</p>
          <p>
            Не только во время учебы, но и в повседневной жизни нам всем
            приходится выполнять расчеты с процентами. Например, у нас возникает
            необходимость вычитания процентов или отнять процент от цены.
          </p>
          <p>
            {" "}
            Благодаря нашему калькулятору вам не нужно выполнять расчеты.
            Написав исходные данные (число, величина процента) и нажав кнопку
            «Рассчитать», вы мгновенно узнаете результат вычитания процента к
            числу.
          </p>
          <p>
            Все расчеты бастрые и правильные. Калькулятор работает в онлайн
            режиме и бесплатно для посетителей нашего сайта. Здесь вы можете
            отнять 1, 5, 10, 20, 40 процентов или любую другую величину процента
            от любого числа.
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

export default PercentageFromNum;
