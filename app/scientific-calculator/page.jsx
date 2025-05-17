"use client";
import React, { useState } from "react";
import "./stag.css";
import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

const Calculator = () => {
  const [history, setHistory] = useState("0");
  const [currentAction, setCurrentAction] = useState("0");

  const handleButtonClick = (value) => {
    switch (value) {
      case "C":
        setHistory("0");
        setCurrentAction("0");
        break;
      case "CE":
        setHistory("0");
        setCurrentAction("0");
        break;
      case "Backspace":
        setCurrentAction((prevAction) => prevAction.slice(0, -1) || "0");
        break;
      case "%":
        setCurrentAction((prevAction) => String(parseFloat(prevAction) / 100));
        break;
      case "1/x":
        setCurrentAction((prevAction) => String(1 / parseFloat(prevAction)));
        break;
      case "square":
        setCurrentAction((prevAction) =>
          String(Math.pow(parseFloat(prevAction), 2))
        );
        break;
      case "root":
        setCurrentAction((prevAction) =>
          String(Math.sqrt(parseFloat(prevAction)))
        );
        break;
      case "=":
        try {
          const result = eval(currentAction).toString();
          setHistory(`${currentAction} = ${result}`);
          setCurrentAction(result);
        } catch (error) {
          setCurrentAction("Error");
        }
        break;
      case "±":
        setCurrentAction((prevAction) =>
          prevAction.charAt(0) === "-" ? prevAction.slice(1) : "-" + prevAction
        );
        setHistory((prevHistory) =>
          prevHistory.charAt(0) === "-"
            ? prevHistory.slice(1)
            : "-" + prevHistory
        );
        break;
      default:
        setCurrentAction((prevAction) =>
          prevAction === "0" ? value : prevAction + value
        );
        setHistory((prevHistory) =>
          prevHistory === "0" ? value : prevHistory + value
        );
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="header-color">
        <HeaderModal />
      </div>
      <TopForm
        title={"Обычный "}
        description={
          "Удобный Калькулятор онлайн для расчетов на работе, учёбе или дома. Калькулятор выполняет как простые арифметические действия, так и расчет процентов, и вычисление квадратного корня."
        }
        span={"калькулятор"}
      />

      <div className="colors">
        <form onSubmit={handleFormSubmit} className="form-container">
          <fieldset className="inputs">
            <input
              aria-label="Previous action of calculation"
              type="text"
              readOnly
              className="history-inp"
              value={history}
            />
            <input
              aria-label="Current operand or result of calculation"
              type="text"
              readOnly
              className="action-inp"
              value={currentAction}
            />
          </fieldset>
          <fieldset className="buttons">
            <button
              onClick={() => handleButtonClick("CE")}
              data-type="clean-entry"
            >
              CE
            </button>
            <button
              onClick={() => handleButtonClick("C")}
              data-type="clean"
              value="Delete"
            >
              C
            </button>
            <button
              onClick={() => handleButtonClick("Backspace")}
              data-type="backspace"
              value="Backspace"
            >
              ⟵
            </button>
            <button onClick={() => handleButtonClick("%")} data-type="percent">
              %
            </button>
            <button
              onClick={() => handleButtonClick("1/x")}
              data-type="num-action"
              value="1/x"
            >
              ⅟<em>x</em>
            </button>
            <button
              onClick={() => handleButtonClick("square")}
              data-type="num-action"
              value="square"
            >
              x²
            </button>
            <button
              onClick={() => handleButtonClick("root")}
              data-type="num-action"
              value="root"
            >
              √
            </button>
            <button
              onClick={() => handleButtonClick("/")}
              data-type="operation"
              value="/"
            >
              ÷
            </button>
            <button
              onClick={() => handleButtonClick("7")}
              data-type="number"
              value="7"
            >
              7
            </button>
            <button
              onClick={() => handleButtonClick("8")}
              data-type="number"
              value="8"
            >
              8
            </button>
            <button
              onClick={() => handleButtonClick("9")}
              data-type="number"
              value="9"
            >
              9
            </button>
            <button
              onClick={() => handleButtonClick("*")}
              data-type="operation"
              value="*"
            >
              ×
            </button>

            <button
              onClick={() => handleButtonClick("4")}
              data-type="number"
              value="4"
            >
              4
            </button>
            <button
              onClick={() => handleButtonClick("5")}
              data-type="number"
              value="5"
            >
              5
            </button>
            <button
              onClick={() => handleButtonClick("6")}
              data-type="number"
              value="6"
            >
              6
            </button>
            <button
              onClick={() => handleButtonClick("-")}
              data-type="operation"
              value="-"
            >
              -
            </button>
            <button
              onClick={() => handleButtonClick("1")}
              data-type="number"
              value="1"
            >
              1
            </button>
            <button
              onClick={() => handleButtonClick("2")}
              data-type="number"
              value="2"
            >
              2
            </button>
            <button
              onClick={() => handleButtonClick("3")}
              data-type="number"
              value="3"
            >
              3
            </button>
            <button
              onClick={() => handleButtonClick("+")}
              data-type="operation"
              value="+"
            >
              +
            </button>
            <button onClick={() => handleButtonClick("±")} data-type="negate">
              ±
            </button>
            <button
              onClick={() => handleButtonClick("0")}
              data-type="number"
              value="0"
            >
              0
            </button>
            <button
              onClick={() => handleButtonClick(".")}
              data-type="number"
              value="."
            >
              .
            </button>
            <button
              onClick={() => handleButtonClick("=")}
              className="equal"
              data-type="result"
              value="="
            >
              =
            </button>
          </fieldset>
        </form>
        <Contents>
          <p>
            Удобный онлайн калькулятор предназначен для различных расчетов -
            будь то на работе, в учебе или дома. Этот калькулятор может
            выполнять как простые арифметические операции, так и более сложные
            вычисления, включая расчет процентов, извлечение квадратного корня и
            решение сложных выражений с использованием скобок.
          </p>
          <p>
            Калькулятор доступен для использования на компьютерах, планшетах и
            смартфонах. Он быстро загружается, работает онлайн, имеет встроенную
            память и отображает текущие действия на дополнительном дисплее.
            Результаты вычислений легко копируются для дальнейшего
            использования.
          </p>
          <p>
            Калькулятор предлагает два режима работы: с использованием скобок и
            без них. Использование скобок позволяет решать более сложные задачи.
            Вы можете легко переключаться между этими режимами с помощью
            выпадающего меню.
          </p>
          <p>
            Кроме того, калькулятор предоставляет возможность выбора различных
            вариантов корпуса - для ПК или планшетов, а также мобильную
            компоновку для смартфонов.
          </p>
          <p>
            Функциональные кнопки калькулятора включают в себя основные
            арифметические операции, расчет процентов, возможность работы с
            наценкой, клавиши для ввода чисел и многое другое.
          </p>
          <p>
            Для удобства использования калькулятора с компьютерной клавиатурой
            предусмотрены специальные сочетания клавиш для выполнения различных
            операций, таких как ввод "Равно", "Плюс", "Минус", "Умножение" и
            "Деление", а также удаление последнего знака и сброс калькулятора.
          </p>
          <p>
            В качестве примеров использования калькулятора приведены различные
            расчеты, включая вычисление процентов от числа, прибавление
            процентов к числу, вычитание процентов из числа и извлечение
            квадратного корня.
          </p>
          <p>
            Калькулятор онлайн работает корректно и предоставляет точные
            результаты. Пользователь может выбирать между обычным и
            математическим режимами работы в зависимости от требуемой точности
            вычислений.
          </p>
          <p>
            Интересный факт: Предшественником современных калькуляторов был
            арифмометр, механическое устройство, появившееся в середине 19 века
            и способное выполнять только простые арифметические операции.
          </p>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </div>

      <Footer />
    </>
  );
};

export default Calculator;
