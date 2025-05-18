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
          "Бесплатный онлайн калькулятор СОУ, КЗ, У и СБ. Рассчитывайте уровень обучения и успеваемости учащихся быстро и точно. Полезен для учителей и родителей."
        }
        span={"СОУ"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/sou"}
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
            Калькулятор <strong>СОУ</strong> (Степень обученности учащихся)
            помогает объективно оценить уровень успеваемости и качества знаний в
            классе или группе. Он полезен как для учителей, так и для родителей,
            которые хотят понять, насколько эффективно проходит учебный процесс.
          </p>

          <p>
            Этот инструмент основан на нескольких проверенных формулах,
            применяемых в российской системе образования:
          </p>

          <h3>Формулы расчёта:</h3>
          <ul className="list-formula">
            <li>
              <div className="formula">
                <span>Степень обученности (СОУ):</span>
                <p>СОУ = (G5×100 + G4×64 + G3×36 + G2×16 + ГН×7) / Go × 100%</p>
              </div>
            </li>
            <li>
              <div className="formula">
                <span>Качество знаний (КЗ):</span>
                <p>КЗ = (G5 + G4) / Go × 100%</p>
              </div>
            </li>
            <li>
              <div className="formula">
                <span>Успеваемость (У):</span>
                <p>У = (G5 + G4 + G3) / Go × 100%</p>
              </div>
            </li>
            <li>
              <div className="formula">
                <span>Средний балл (СБ):</span>
                <p>СБ = (5×G5 + 4×G4 + 3×G3 + 2×G2) / Go</p>
              </div>
            </li>
          </ul>

          <h3>Где:</h3>
          <ul>
            <li>
              <strong>G5</strong> — количество «отлично»;
            </li>
            <li>
              <strong>G4</strong> — количество «хорошо»;
            </li>
            <li>
              <strong>G3</strong> — количество «удовлетворительно»;
            </li>
            <li>
              <strong>G2</strong> — количество «неудовлетворительно»;
            </li>
            <li>
              <strong>ГН</strong> — неаттестованные без уважительной причины;
            </li>
            <li>
              <strong>Go</strong> — общее количество обучающихся.
            </li>
          </ul>

          <p>
            Эти показатели позволяют учителю или администрации принимать решения
            о корректировке учебного плана, работе с трудными темами и выявлении
            проблем учащихся.
          </p>

          <h3>Как использовать калькулятор?</h3>
          <p>
            Введите количества оценок по каждому пункту, и калькулятор
            автоматически рассчитает:
          </p>
          <ul>
            <li>
              <strong>Степень обученности</strong> — насколько ученики
              справились с аттестацией;
            </li>
            <li>
              <strong>Качество знаний</strong> — доля учеников с высоким уровнем
              подготовки;
            </li>
            <li>
              <strong>Успеваемость</strong> — процент учеников, не имеющих
              академической задолженности;
            </li>
            <li>
              <strong>Средний балл</strong> — среднее значение всех оценок
              группы или класса.
            </li>
          </ul>

          <h3>Почему это важно?</h3>
          <p>
            Калькулятор СОУ используется в школах и колледжах России для
            аналитики и отчетности. Он позволяет:
          </p>
          <ul>
            <li>оценить эффективность преподавания;</li>
            <li>выявить слабые места в учебном процессе;</li>
            <li>принять меры по повышению качества обучения;</li>
            <li>получить общий портрет учебной группы.</li>
          </ul>

          <p>
            Это особенно полезно при внутреннем аудите, составлении отчетов или
            определении уровня квалификации учащихся по предмету.
          </p>

          <h3>Для кого этот калькулятор?</h3>
          <ul>
            <li>
              <strong>Учителям:</strong> анализ результатов класса и
              планирование коррекционной работы;
            </li>
            <li>
              <strong>Родителям:</strong> контроль уровня знаний своего ребёнка;
            </li>
            <li>
              <strong>Ученикам:</strong> понимание своих позиций внутри класса;
            </li>
            <li>
              <strong>Администрации:</strong> сбор статистики и отчеты по итогам
              четверти, триместра или года.
            </li>
          </ul>

          <p>
            Наш калькулятор — незаменимый помощник в образовательной аналитике.
            Он прост в использовании, точен и соответствует требованиям
            российской системы оценки знаний.
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
