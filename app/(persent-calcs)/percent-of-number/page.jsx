"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";
import Link from "next/link";
import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  number: null,
  percent: null,
  round: 1,
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

function PercentNum() {
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
          "Онлайн калькулятор процента от числа.Выполняет операции с процентами: нахождение процента от данного числа, расчет процентного соотношения между числами, прибавление или вычитание процента от заданного числа."
        }
        span={"процента от числа"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/percent-of-number"}
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
                  labelTitle={"Процент от числа"}
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
        </PercentNumForm>

        <Contents>
          <ul className="percent-list">
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
            <Link href={"/number-of-number"} className="underline">
              <li className="percent-item ">
                <h5>Калькулятор % числа от числа</h5>
              </li>
            </Link>
          </ul>
          <p>
            Вам нужно быстро рассчитать процент от конкретной суммы? Наш
            калькулятор процента от числа - поможет вам в этом!
          </p>
          <p>
            Простой и понятный интерфейс делает использование калькулятора очень
            удобным. Вам нужно просто ввести сумму и процент, и наш калькулятор
            быстро расчитает вам результат.
          </p>
          <p>
            Калькулятор процента от числа может быть полезен в различных сферах
            жизни, от финансов до повседневных расчетов.{" "}
          </p>
          <p>
            Наш калькулятор процента от числа доступен не только на компьютере,
            но и на мобильных устройствах и планшетах. И это значит, что вы
            можете легко и удобно использовать его в любом месте, где у вас есть
            доступ к интернету.
          </p>
          <p>
            Не тратьте время на сложные вычисления вручную. Воспользуйтесь нашим
            калькулятором процента от числа и упростите свои расчеты!
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

export default PercentNum;
