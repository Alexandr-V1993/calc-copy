"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentageNamOfNumForm from "./PercentageNamOfNumForm";
import Input from "@/app/components/Input";
import "./percent.css";
import Link from "next/link";
const initial = {
  number: null,
  number2: null,
  round: 1,
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

function PercentageNumOfNum() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор процента одного числа "}
        description={
          "Как посчитать сколько процентов составляет одно числа от другого? Задачка решается при помощи бесплатного онлайн калькулятора, который использует для вычисления формулу: Первое число / Второе число * 100%."
        }
        span={" от другого"}
      >
        <PercentageNamOfNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/percent-of"}
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
                  <span className="minus">{"-"}</span>
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
        </PercentageNamOfNumForm>

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
            <Link href={"/percentage-number-less"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор на сколько % одно число меньше другого</h5>
              </li>
            </Link>
          </ul>
          <h2>Справка</h2>
          <p>
            Часто встречаются задачи, в которых требуется определить процентное
            соотношение одного числа от другого.
          </p>
          <p>
            Например, маркетолог может готовить отчет для руководства компании,
            где требуется рассчитать чему равна доля рекламных переходов от
            общего количества посетителей сайта за последний календарный месяц.
          </p>
          <p>
            Давайте разберемся: За апрель сайт посетило 53983 уникальных
            пользователя. По данным аналитических систем из рекламных каналов мы
            получили 8930 визитов.
          </p>
          <p>
            Вопрос: Как найти процент рекламных переходов от общего числа
            уникальных визитов?
          </p>
          <h2>Инструкция</h2>
          <p>
            Рассчитать эту задачу можно по формуле: Рекламный трафик / Общий
            трафик * 100%. Однако, вы можете использовать и бесплатный сервис,
            который моментально произведет нужные вычисления.
          </p>
          <ol>
            <li>
              В левое окошко укажем объём юзеров с рекламы —{" "}
              <strong>8930</strong>;
            </li>
            <li>
              В правом окне общее значение для сравнения —
              <strong> 53983</strong>.
            </li>
          </ol>
          <p>
            Мгновенно получаем ответ — <strong>16,54 %</strong> доля переходов с
            рекламы от общего объёма посетителей ресурса.
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

export default PercentageNumOfNum;
