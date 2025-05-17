"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentageForm from "./PercentageForm";
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

function PercentageNum() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор прибавления "}
        description={
          "Благодаря нашему калькулятору вам не нужно выполнять расчеты. Написав исходные данные (число, величина процента) и нажав кнопку «Рассчитать», вы мгновенно узнаете результат прибавления процента к числу."
        }
        span={"процента к числу"}
      >
        <PercentageForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/percent-change"}
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
                  labelTitle={"Прибавить процент"}
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
        </PercentageForm>

        <Contents>
          <ul className="percent-list">
            <Link href={"/percent-of-number"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор процента от числа</h5>
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
          <h2>Формула прибавления процента к числу</h2>
          <ol>
            <li>Искомое число = число + процент от числа</li>
            <li>Процент от числа = (величина процента × число) ÷ 100%</li>
            <li>Искомое число = число × (1 + величина процента) ÷ 100%</li>
          </ol>
          <p>
            Наш калькулятор это мощный инструмент для выполнения расчетов
            процентов. Один из самых распространенных вопросов, с которым
            сталкиваются пользователи, это "как прибавить процент к числу?". Для
            решения этой задачи есть несколько способов.
          </p>
          <p>
            Первый способ, наиболее простой, состоит в использовании кнопок
            калькулятора для ввода числа, а затем операции сложения (+), за
            которой следует ввод процентного значения. Например, чтобы прибавить
            10% к числу 100, пользователь может сначала ввести 100, затем нажать
            кнопку "+", а затем ввести 10 и нажать кнопку "%". Наш калькулятор
            поможет выполнить эту операцию и отобразит результат, в данном
            случае 110.
          </p>
          <p>
            Второй способ включает использование функции процента на
            калькуляторе. Пользователь может ввести число, затем нажать кнопку
            "%", а затем ввести процентное значение. Например, если пользователь
            введет 100, затем нажмет "%", а затем введет 10, калькулятор также
            отобразит результат 110.
          </p>
          <p>
            Третий способ заключается в использовании формулы в калькуляторе.
            Некоторые калькуляторы позволяют пользователям вводить
            математические выражения, такие как "100 + 10%", непосредственно в
            строке ввода, а затем автоматически вычислять результат. Этот метод
            обычно более удобен для выполнения сложных расчетов процентов.
          </p>
          <p>
            Независимо от выбранного вами способа, наш калькулятор обеспечивает
            точные и быстрые результаты, что делает его незаменимым инструментом
            как в повседневной жизни, так и в профессиональной сфере. Благодаря
            удобству использования и эффективности, наш калькулятор продолжает
            оставаться вашим незаменимыми помощниками для решения различных
            задач.
          </p>
          <p>
            <a className="bur" href="/">
              Выбрать другой калькулятор
            </a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default PercentageNum;
