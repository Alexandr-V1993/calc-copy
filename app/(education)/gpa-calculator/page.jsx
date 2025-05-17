"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  grades: {
    A: null,
    B: null,
    C: null,
    D: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "A":
      return {
        ...state,
        grades: { ...state.grades, A: Number(action.payload) },
      };
    case "B":
      return {
        ...state,
        grades: { ...state.grades, B: Number(action.payload) },
      };
    case "C":
      return {
        ...state,
        grades: { ...state.grades, C: Number(action.payload) },
      };
    case "D":
      return {
        ...state,
        grades: { ...state.grades, D: Number(action.payload) },
      };

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
          "Онлайн калькулятор оценок – инструмент, который поможет вам легко и быстро рассчитать средний балл успеваемости ученика в учебе."
        }
        span={"оценок"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/gpa"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <Input
                  type={"number"}
                  labelTitle={"Пятерок (5)"}
                  notation={""}
                  typeDispatch={"A"}
                  hadleInput={hadleInput}
                />

                <Input
                  type={"number"}
                  labelTitle={"Четверок (4)"}
                  notation={""}
                  typeDispatch={"B"}
                  hadleInput={hadleInput}
                />
                <Input
                  type={"number"}
                  labelTitle={"Троек (3)"}
                  notation={""}
                  typeDispatch={"C"}
                  hadleInput={hadleInput}
                />
                <Input
                  type={"number"}
                  labelTitle={"Двоек (2)"}
                  notation={""}
                  typeDispatch={"D"}
                  hadleInput={hadleInput}
                />

                <span className="cursive">
                  Введите количество оценок по каждому балу
                </span>
                <span>Количество оценок:</span>

                <span className="bold">
                  {state.grades.A +
                    state.grades.B +
                    state.grades.C +
                    state.grades.D}
                </span>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <p>
            Онлайн калькулятор успеваемости – это инновационный инструмент,
            предназначенный для моментального определения среднего балла ученика
            по его академическим оценкам.
          </p>
          <p>
            Этот калькулятор обеспечивает точный анализ оценок, включая
            вычисление среднего и рекомендуемого балла, а также оценку степени
            успешности учебного процесса.
          </p>
          <p>
            Независимо от того, нужен ли вам калькулятор для электронного
            дневника, онлайн журнала оценок или просто для оценки своего
            академического прогресса, наш инструмент предоставит надежные
            расчеты вашей успеваемости.
          </p>
          <h3>Как использовать калькулятор:</h3>
          <ol>
            <li>
              Введите количество оценок каждого уровня (пятерок, четверок,
              троек, двоек).
            </li>
            <li>Нажмите кнопку "Рассчитать".</li>
            <li>
              Получите мгновенный результат, отображающий ваш средний балл.
            </li>
          </ol>
          <h2>Формула для расчета среднего балла:</h2>
          <div className="formula">
            <span>Средний Балл </span>
            <p>(5 × А + 4 × Б + 3 × В + 2 × Г) / (А + Б + В + Г),</p>
          </div>
          <h3>где:</h3>
          <ul>
            <li>А - количество пятерок (5),</li>
            <li>Б - количество четверок (4),</li>
            <li>В - количество троек (3),</li>
            <li>Г - количество двоек (2).</li>
          </ul>
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
