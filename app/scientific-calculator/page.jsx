"use client";
import React, { useState } from "react";
import "./stag.css";
import HeaderModal from "../components/NewModal";
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
          "Онлайн калькулятор BoxCalculators для точных расчётов: проценты, корни, скобки, работа с положительными и отрицательными числами. Подходит для дома, учёбы и офиса."
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
            Онлайн-калькулятор от BoxCalculators — идеальный инструмент для
            выполнения различных вычислений, будь то рабочие задачи, учебные
            примеры или личные расчёты.
          </p>

          <h2>Что можно рассчитать?</h2>
          <p>Калькулятор поддерживает широкий спектр функций:</p>
          <ul>
            <li>сложение, вычитание, умножение, деление;</li>
            <li>вычисление процентов от числа;</li>
            <li>прибавление и вычитание процентов;</li>
            <li>работу с положительными и отрицательными числами;</li>
            <li>решение выражений со скобками;</li>
            <li>извлечение квадратного корня.</li>
          </ul>

          <h2>Как использовать калькулятор?</h2>
          <p>
            Этот инструмент прост в использовании и подходит для любого
            устройства: компьютер, планшет или смартфон. Вводите выражения
            мышкой или клавиатурой, используйте встроенные функции, чтобы быстро
            получить точный результат.
          </p>

          <p>Например, вы можете:</p>
          <ul>
            <li>
              <strong>Посчитать процент:</strong> 5% от 200 = 10;
            </li>
            <li>
              <strong>Прибавить процент:</strong> 200 + 5% = 210;
            </li>
            <li>
              <strong>Вычесть процент:</strong> 200 − 5% = 190;
            </li>
            <li>
              <strong>Извлечь корень:</strong> √(25) = 5;
            </li>
            <li>
              <strong>Решить сложное выражение:</strong> (5 + 3) × 2 = 16.
            </li>
          </ul>

          <h2>Режимы калькулятора</h2>
          <p>Калькулятор предлагает два режима:</p>
          <ul>
            <li>
              <strong>Обычный:</strong> базовые операции для повседневного
              использования;
            </li>
            <li>
              <strong>Научный:</strong> дополнительные функции для сложных
              вычислений.
            </li>
          </ul>

          <p>
            Вы можете переключаться между ними в зависимости от ваших
            потребностей.
          </p>

          <h2>Калькулятор для разных устройств</h2>
          <p>
            Мы учли, что вы можете использовать калькулятор на любом устройстве:
          </p>
          <ul>
            <li>
              <strong>Для ПК и ноутбуков:</strong> полноценная клавиатура и
              поддержка горячих клавиш;
            </li>
            <li>
              <strong>Для планшетов:</strong> увеличенные кнопки и удобная
              навигация;
            </li>
            <li>
              <strong>Для смартфонов:</strong> адаптивный интерфейс и мобильная
              версия.
            </li>
          </ul>

          <h2>Горячие клавиши</h2>
          <p>
            Для удобства использования с клавиатуры поддерживаются следующие
            комбинации:
          </p>
          <ul>
            <li>
              <strong>Enter:</strong> выполнить вычисление;
            </li>
            <li>
              <strong>Backspace:</strong> удалить последний символ;
            </li>
            <li>
              <strong>C / Esc:</strong> сбросить калькулятор;
            </li>
            <li>
              <strong>+ / - / * / /:</strong> арифметические действия;
            </li>
            <li>
              <strong>%:</strong> расчёт процента;
            </li>
            <li>
              <strong>( ):</strong> использование скобок в сложных выражениях.
            </li>
          </ul>

          <h2>История калькуляторов</h2>
          <p>
            Первые механические калькуляторы появились в середине XIX века.
            Самым известным был <strong>арифмометр</strong>, который мог
            выполнять лишь простейшие операции. Современные онлайн-калькуляторы
            значительно продвинулись вперед: они работают мгновенно,
            поддерживают сложные формулы и доступны с любого устройства.
          </p>

          <h2>Почему стоит выбрать наш калькулятор?</h2>
          <ul>
            <li>
              <strong>Бесплатный:</strong> без регистрации и подписок;
            </li>
            <li>
              <strong>Точный:</strong> вычисления соответствуют стандартам;
            </li>
            <li>
              <strong>Удобный:</strong> интуитивный интерфейс;
            </li>
            <li>
              <strong>Функциональный:</strong> поддержка научных функций;
            </li>
            <li>
              <strong>Мобильная оптимизация:</strong> одинаково хорошо работает
              на всех устройствах.
            </li>
          </ul>

          <h2>Зачем нужен онлайн-калькулятор?</h2>
          <p>Онлайн-калькулятор полезен в разных ситуациях:</p>
          <ul>
            <li>
              <strong>🎓 Учеба:</strong> решение задач по математике и
              статистике;
            </li>
            <li>
              <strong>💼 Работа:</strong> финансовые расчёты, бюджетирование;
            </li>
            <li>
              <strong>🏠 Быт:</strong> планирование расходов, покупок, ремонта;
            </li>
            <li>
              <strong>📊 Бизнес:</strong> анализ данных, расчёт маржи, налогов;
            </li>
            <li>
              <strong>🧮 Инженерия:</strong> точные вычисления с поддержкой
              скобок и корней.
            </li>
          </ul>

          <p>
            Независимо от того, являетесь ли вы студентом, школьником,
            предпринимателем или просто решаете бытовую задачу — наш калькулятор
            поможет вам точно и быстро.
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
