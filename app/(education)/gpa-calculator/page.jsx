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
          "Инструмент для быстрого и точного расчета среднего балла успеваемости по оценкам. Подходит как для школ, так и для университетов."
        }
        span={"оценок"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/gpa"}
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
            Калькулятор среднего балла — это простой и полезный
            онлайн-инструмент, который помогает рассчитать успеваемость
            учащегося или студента. Введите количество полученных оценок и
            получите мгновенный результат без ошибок и задержек.
          </p>

          <h2>Что можно рассчитать?</h2>
          <p>Наш калькулятор позволяет:</p>
          <ul>
            <li>
              <strong>Вычислить средний балл:</strong> по предоставленным
              оценкам;
            </li>
            <li>
              <strong>Узнать уровень успеваемости:</strong> отличник, хорошист,
              троечник и т.д.;
            </li>
            <li>
              <strong>Спрогнозировать итоговый балл:</strong> если вы хотите
              понять, какие оценки нужно получить.
            </li>
          </ul>

          <h3>Как использовать калькулятор?</h3>
          <ol>
            <li>
              Введите количество оценок: «пятерки», «четверки», «тройки»,
              «двойки»;
            </li>
            <li>Нажмите кнопку «Рассчитать»;</li>
            <li>Получите точный средний балл и интерпретацию.</li>
          </ol>

          <h2>Формула расчета среднего балла</h2>
          <p>
            Чтобы рассчитать среднюю оценку, используется следующая формула:
          </p>
          <div className="formula">
            <span>Средний балл = </span>
            <p>(5 × A + 4 × B + 3 × C + 2 × D) / (A + B + C + D)</p>
          </div>

          <h3>Где:</h3>
          <ul>
            <li>
              <strong>A</strong> — количество пятерок;
            </li>
            <li>
              <strong>B</strong> — количество четверок;
            </li>
            <li>
              <strong>C</strong> — количество троек;
            </li>
            <li>
              <strong>D</strong> — количество двоек.
            </li>
          </ul>

          <h2>Для чего нужен этот калькулятор?</h2>
          <p>Этот инструмент будет полезен:</p>
          <ul>
            <li>
              <strong>🎓 Ученикам:</strong> чтобы оценить свою успеваемость;
            </li>
            <li>
              <strong>📚 Студентам:</strong> для анализа среднего балла по
              семестру;
            </li>
            <li>
              <strong>👨‍🏫 Преподавателям:</strong> для автоматизации расчета
              успеваемости группы;
            </li>
            <li>
              <strong>👩‍👦 Родителям:</strong> чтобы отслеживать успехи ребенка;
            </li>
            <li>
              <strong>📊 Школам:</strong> при составлении отчетов по классам.
            </li>
          </ul>

          <h2>Пример расчета</h2>
          <p>Допустим, у вас:</p>
          <ul>
            <li>10 оценок "5"</li>
            <li>5 оценок "4"</li>
            <li>3 оценки "3"</li>
            <li>0 оценок "2"</li>
          </ul>

          <p className="example">
            <strong>Расчёт:</strong> (5×10 + 4×5 + 3×3 + 2×0) / (10 + 5 + 3 + 0)
            = (50 + 20 + 9 + 0) / 18 = 79 / 18 ≈{" "}
            <span className="page-bolt">4.4</span>
          </p>

          <p>
            Это значит, что ваш средний балл составляет около{" "}
            <strong>4.4</strong> — выше среднего уровня.
          </p>

          <h2>В чем польза калькулятора оценок?</h2>
          <ul>
            <li>Быстрый и точный расчет без ошибок;</li>
            <li>Не нужно считать вручную или в уме;</li>
            <li>Удобство использования — просто вводите оценки;</li>
            <li>Подходит как для школ, так и для вузов;</li>
            <li>
              Интерпретация результата: например, «хорошо», «отлично»,
              «удовлетворительно».
            </li>
          </ul>

          <h2>Какие оценки учитываются?</h2>
          <p>
            Калькулятор поддерживает стандартную 5-балльную систему, принятую в
            большинстве российских школ и вузов:
          </p>
          <ul>
            <li>
              <strong>5</strong> — отлично;
            </li>
            <li>
              <strong>4</strong> — хорошо;
            </li>
            <li>
              <strong>3</strong> — удовлетворительно;
            </li>
            <li>
              <strong>2</strong> — неудовлетворительно;
            </li>
          </ul>

          <p>
            Также возможна адаптация под международные форматы, такие как GPA
            (Grade Point Average), где вместо 5-бальной системы используются
            десятичные значения.
          </p>

          <h2>Какие еще задачи решает калькулятор?</h2>
          <ul>
            <li>
              <strong>🎯 Цели:</strong> узнать, сколько нужно пятёрок, чтобы
              повысить средний балл до 4.5 или 5.0;
            </li>
            <li>
              <strong>📈 Анализ успеваемости:</strong> отслеживание динамики
              оценок по четвертям или семестрам;
            </li>
            <li>
              <strong>📝 Отчеты:</strong> подготовка данных для родителей,
              администрации или портфолио;
            </li>
            <li>
              <strong>🧠 Самоанализ:</strong> повышение ответственности за учебу
              и мотивации;
            </li>
          </ul>

          <h2>Советы по использованию</h2>
          <p>Вот несколько советов:</p>
          <ul>
            <li>
              <strong>Проверьте данные:</strong> убедитесь, что вы ввели
              правильное количество оценок;
            </li>
            <li>
              <strong>Анализируйте регулярно:</strong> следите за изменениями
              успеваемости;
            </li>
            <li>
              <strong>Используйте прогноз:</strong> вводите гипотетические
              оценки, чтобы планировать будущие результаты;
            </li>
            <li>
              <strong>Сравнивайте:</strong> анализируйте свои оценки в динамике;
            </li>
            <li>
              <strong>Учитывайте специфику:</strong> некоторые предметы могут
              весить больше (например, профильные).
            </li>
          </ul>

          <h2>Заключение</h2>
          <p>
            Независимо от того, вы школьник, студент или преподаватель —
            калькулятор среднего балла поможет вам эффективно отслеживать и
            анализировать успеваемость. Он экономит время, снижает риск ошибок и
            делает образовательный процесс более прозрачным и управляемым.
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
