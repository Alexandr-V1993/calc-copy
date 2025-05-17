"use client";

import { useReducer } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import Input from "@/app/components/Input";
import "./percent.css";

const initial = {
  students: null,
  unaccredited: null,
  grades: {
    A: null,
    B: null,
    C: null,
    D: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "students":
      return { ...state, students: Number(action.payload) };
    case "unaccredited":
      return { ...state, unaccredited: Number(action.payload) };
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
        title={"Калькулятор  "}
        description={
          "Онлайн калькулятор СОУ (степень обученности учащихся) предназначен для учителей, учеников и родителей, чтобы оценить и контролировать качество знаний и успеваемость в образовательном процессе."
        }
        span={"СОУ"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/sou"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <Input
                  type={"number"}
                  labelTitle={"Количество всех обучающихся"}
                  notation={""}
                  typeDispatch={"students"}
                  hadleInput={hadleInput}
                />
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
                <Input
                  type={"number"}
                  labelTitle={
                    "Количество н/а (неаттестованных без уважительной причины)"
                  }
                  notation={""}
                  typeDispatch={"unaccredited"}
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
            Наш сервис представляет уникальный онлайн калькулятор СОУ (степень
            обученности учащихся), который спроектирован для упрощения процесса
            оценки качества обучения и успеваемости в образовательных
            учреждениях.
          </p>
          <p>
            Этот инструмент предназначен для учителей, учеников и их родителей,
            позволяя им более точно оценить уровень подготовки учащихся и
            эффективность учебной программы.
          </p>
          <p>
            Калькулятор основан на ряде формул, включая расчёт степени
            обученности (СОУ), качества знаний (КЗ), успеваемости (У) и среднего
            балла (СБ). Ниже приведены эти формулы:
          </p>
          <ul className="list-formula">
            <li>
              <div className="formula">
                <span>Формула для СОУ:</span>
                <p>СОУ=( Go G5×100+G4×64+G3×36+G2×16+Gн/а×7 ​ )×100%</p>
              </div>
            </li>
            <li>
              <div className="formula">
                <span>Формула для КЗ:</span>
                <p>КЗ=( Go G5+G4 ​ )×100%</p>
              </div>
            </li>
            <li>
              <div className="formula">
                <span>Формула для успеваемости:</span>
                <p>У=( Go G5+G4+G3 ​ )×100%</p>
              </div>
            </li>
            <li>
              <div className="formula">
                <span>Формула для среднего балла:</span>
                <p>СБ=( Go 5G5+4G4+3G3+2G2 ​ )</p>
              </div>
            </li>
          </ul>
          <h3>Где:</h3>
          <ul>
            <li>G5 — количество оценок "отлично",</li>
            <li>G4 — количество оценок "хорошо",</li>
            <li>G3 — количество оценок "удовлетворительно",</li>
            <li>G2 — количество оценок "неудовлетворительно",</li>
            <li>Gн/а — количество неаттестованных без уважительной причины,</li>
            <li>Go — общее количество обучающихся.</li>
          </ul>
          <p>
            Наш калькулятор обеспечивает быструю и точную оценку учебного
            процесса, помогая вам принимать информированные решения для
            улучшения образовательной среды.
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
