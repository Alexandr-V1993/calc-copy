"use client";
import React, { useReducer, useState } from "react";
import "./alco.css";

const initialState = {
  result: null,
  showResult: false,
  solution: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "SHOW_RESULT":
      return { ...state, showResult: action.payload };
    case "SET_SOLUTION":
      return { ...state, solution: action.payload };
    default:
      return state;
  }
}

const FractionForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [operation, setOperation] = useState("default");
  const [inputValues, setInputValues] = useState({
    int1: "",
    n1: "",
    d1: "",
    int2: "",
    n2: "",
    d2: "",
    int5: "",
    n5: "",
    d5: "",
    n6: "",
    d6: "",
    dec: "",
    int3: "",
    n3: "",
    d3: "",
    int4: "",
    n4: "",
    d4: "",
    percent: "",
    action: "plus",
  });

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const gcd = (a, b) => {
    return b ? gcd(b, a % b) : a;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let result = null;
    let solution = null;
    const {
      int1,
      n1,
      d1,
      int2,
      n2,
      d2,
      int5,
      n5,
      d5,
      n6,
      d6,
      dec,
      int3,
      n3,
      d3,
      int4,
      n4,
      d4,
      percent,
    } = inputValues;

    const parseFraction = (intPart, numerator, denominator) => {
      const intVal = parseInt(intPart || 0);
      const numVal = parseInt(numerator || 0);
      const denomVal = parseInt(denominator || 1);
      return { intVal, numVal, denomVal };
    };

    const formatFraction = (numerator, denominator) => {
      const gcdValue = gcd(numerator, denominator);
      numerator /= gcdValue;
      denominator /= gcdValue;
      if (denominator < 0) {
        numerator = -numerator;
        denominator = -denominator;
      }
      if (numerator % denominator === 0) {
        return (numerator / denominator).toString();
      }
      const intPart = Math.trunc(numerator / denominator);
      const fracNumerator = Math.abs(numerator % denominator);
      return intPart
        ? `${intPart} ${fracNumerator}/${denominator}`
        : `${fracNumerator}/${denominator}`;
    };

    if (operation === "default") {
      const fraction1 = parseFraction(int1, n1, d1);
      const fraction2 = parseFraction(int2, n2, d2);

      const fraction1Numerator =
        fraction1.intVal * fraction1.denomVal + fraction1.numVal;
      const fraction1Denominator = fraction1.denomVal;
      const fraction2Numerator =
        fraction2.intVal * fraction2.denomVal + fraction2.numVal;
      const fraction2Denominator = fraction2.denomVal;

      solution = `Решение:\n1. Перевод смешанных дробей в обыкновенные:\n${fraction1.intVal}×${fraction1.denomVal} + ${fraction1.numVal}/${fraction1.denomVal} = ${fraction1Numerator}/${fraction1Denominator}\n${fraction2.intVal}×${fraction2.denomVal} + ${fraction2.numVal}/${fraction2.denomVal} = ${fraction2Numerator}/${fraction2Denominator}`;

      const commonDenominator = fraction1Denominator * fraction2Denominator;
      let newNumerator;
      let newDenominator = commonDenominator;

      switch (inputValues.action) {
        case "plus":
          newNumerator =
            fraction1Numerator * fraction2Denominator +
            fraction2Numerator * fraction1Denominator;
          solution += `\n2. Приведение к общему знаменателю и сложение:\n${fraction1Numerator}×${fraction2Denominator}/${fraction1Denominator}×${fraction2Denominator} + ${fraction2Numerator}×${fraction1Denominator}/${fraction2Denominator}×${fraction1Denominator} = ${newNumerator}/${newDenominator}`;
          break;
        case "minus":
          newNumerator =
            fraction1Numerator * fraction2Denominator -
            fraction2Numerator * fraction1Denominator;
          solution += `\n2. Приведение к общему знаменателю и вычитание:\n${fraction1Numerator}×${fraction2Denominator}/${fraction1Denominator}×${fraction2Denominator} - ${fraction2Numerator}×${fraction1Denominator}/${fraction2Denominator}×${fraction1Denominator} = ${newNumerator}/${newDenominator}`;
          break;
        case "times":
          newNumerator = fraction1Numerator * fraction2Numerator;
          newDenominator = fraction1Denominator * fraction2Denominator;
          solution += `\n2. Умножение:\n${fraction1Numerator}×${fraction2Numerator}/${fraction1Denominator}×${fraction2Denominator} = ${newNumerator}/${newDenominator}`;
          break;
        case "divide":
          newNumerator = fraction1Numerator * fraction2Denominator;
          newDenominator = fraction1Denominator * fraction2Numerator;
          solution += `\n2. Деление:\n${fraction1Numerator}×${fraction2Denominator}/${fraction1Denominator}×${fraction2Numerator} = ${newNumerator}/${newDenominator}`;
          break;
        default:
          break;
      }

      result = formatFraction(newNumerator, newDenominator);
    } else if (operation === "mixed_to_simple") {
      const fraction = parseFraction(int5, n5, d5);
      result = `${fraction.intVal * fraction.denomVal + fraction.numVal}/${
        fraction.denomVal
      }`;
    } else if (operation === "simple_to_mixed") {
      const numerator = parseInt(n6 || 0);
      const denominator = parseInt(d6 || 1);

      result = formatFraction(numerator, denominator);
    } else if (operation === "decimal_to_fraction") {
      const decimal = parseFloat(dec || 0);
      const decimalString = decimal.toString();
      const decimalLength = decimalString.split(".")[1]?.length || 0;
      const numerator = Math.round(decimal * Math.pow(10, decimalLength));
      const denominator = Math.pow(10, decimalLength);
      result = formatFraction(numerator, denominator);
    } else if (operation === "fraction_to_decimal") {
      const integerPart = parseInt(int3 || 0);
      const numerator = parseInt(n3 || 0);
      const denominator = parseInt(d3 || 1);
      const decimalResult = integerPart + numerator / denominator;
      result = decimalResult.toFixed(2);
    } else if (operation === "fraction_to_percentage") {
      const fraction = parseFraction(int4, n4, d4);
      result =
        (
          ((fraction.intVal * fraction.denomVal + fraction.numVal) /
            fraction.denomVal) *
          100
        ).toFixed(2) + "%";
    } else if (operation === "percentage_to_fraction") {
      const percentage = parseFloat(percent || 0);
      // Вычисляем количество целых частей
      const wholePart = Math.floor(percentage / 100);
      // Вычисляем остаток (долю процента)
      const remainder = percentage % 100;
      // Вычисляем наибольший общий делитель для упрощения
      const greatestCommonDivisor = gcd(remainder, 100);
      // Делим числитель и знаменатель на НОД, чтобы получить упрощенную дробь
      const numerator = remainder / greatestCommonDivisor;
      const denominator = 100 / greatestCommonDivisor;
      // Формируем результат в виде смешанной дроби
      result = `${wholePart} ${numerator}/${denominator}`;
    }

    dispatch({ type: "SET_RESULT", payload: result });
    dispatch({ type: "SHOW_RESULT", payload: true });
    dispatch({ type: "SET_SOLUTION", payload: solution });
  };

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="calc-frow">
        <div className="calc-fleft">Операция</div>
        <div className="calc-fright">
          <select
            name="operation"
            value={operation}
            onChange={handleOperationChange}
            className="calc-inp js-calc-toggle"
          >
            <option value="default">
              Сложение, вычитание, умножение, деление дробей
            </option>
            <option value="mixed_to_simple">
              Перевод смешанных дробей в обыкновенные
            </option>
            <option value="simple_to_mixed">
              Перевод обыкновенных дробей в смешанные
            </option>
            <option value="decimal_to_fraction">
              Перевод десятичных дробей в обыкновенные
            </option>
            <option value="fraction_to_decimal">
              Перевод обыкновенных дробей в десятичные
            </option>
            <option value="fraction_to_percentage">
              Перевод смешанных дробей в проценты
            </option>
            <option value="percentage_to_fraction">
              Перевод процентов в смешанную дробь
            </option>
          </select>
        </div>
      </div>

      {operation === "default" && (
        <>
          <div className="calc-frow">
            <div className="calc-fleft">Исходные дроби</div>
            <div className="calc-fright">
              <input
                type="number"
                name="int1"
                value={inputValues.int1}
                onChange={handleChange}
                className="calc-inp"
                placeholder="Целая часть"
              />
              <input
                type="number"
                name="n1"
                value={inputValues.n1}
                onChange={handleChange}
                className="calc-inp"
                placeholder="Числитель"
              />
              <input
                type="number"
                name="d1"
                value={inputValues.d1}
                onChange={handleChange}
                className="calc-inp"
                placeholder="Знаменатель"
              />
            </div>
          </div>
          <div className="calc-frow">
            <div className="calc-fright">
              <select
                name="action"
                value={inputValues.action}
                onChange={handleChange}
                className="calc-inp"
              >
                <option value="plus">+</option>
                <option value="minus">-</option>
                <option value="times">*</option>
                <option value="divide">/</option>
              </select>
            </div>
          </div>
          <div className="calc-frow">
            <div className="calc-fright">
              <input
                type="number"
                name="int2"
                value={inputValues.int2}
                onChange={handleChange}
                className="calc-inp"
                placeholder="Целая часть"
              />
              <input
                type="number"
                name="n2"
                value={inputValues.n2}
                onChange={handleChange}
                className="calc-inp"
                placeholder="Числитель"
              />
              <input
                type="number"
                name="d2"
                value={inputValues.d2}
                onChange={handleChange}
                className="calc-inp"
                placeholder="Знаменатель"
              />
            </div>
          </div>
        </>
      )}

      {operation === "mixed_to_simple" && (
        <div className="calc-frow">
          <div className="calc-fleft">Смешанная дробь</div>
          <div className="calc-fright">
            <input
              type="number"
              name="int5"
              value={inputValues.int5}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Целая часть"
            />
            <input
              type="number"
              name="n5"
              value={inputValues.n5}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Числитель"
            />
            <input
              type="number"
              name="d5"
              value={inputValues.d5}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Знаменатель"
            />
          </div>
        </div>
      )}

      {operation === "simple_to_mixed" && (
        <div className="calc-frow">
          <div className="calc-fleft">Неправильная дробь</div>
          <div className="calc-fright">
            <input
              type="number"
              name="n6"
              value={inputValues.n6}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Числитель"
            />
            <input
              type="number"
              name="d6"
              value={inputValues.d6}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Знаменатель"
            />
          </div>
        </div>
      )}

      {operation === "decimal_to_fraction" && (
        <div className="calc-frow">
          <div className="calc-fleft">Десятичная дробь</div>
          <div className="calc-fright">
            <input
              type="number"
              name="dec"
              value={inputValues.dec}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Десятичное число"
            />
          </div>
        </div>
      )}

      {operation === "fraction_to_decimal" && (
        <div className="calc-frow">
          <div className="calc-fleft">Дробь</div>
          <div className="calc-fright">
            <input
              type="number"
              name="int3"
              value={inputValues.int3}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Целая часть"
            />
            <input
              type="number"
              name="n3"
              value={inputValues.n3}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Числитель"
            />
            <input
              type="number"
              name="d3"
              value={inputValues.d3}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Знаменатель"
            />
          </div>
        </div>
      )}

      {operation === "fraction_to_percentage" && (
        <div className="calc-frow">
          <div className="calc-fleft">Дробь</div>
          <div className="calc-fright">
            <input
              type="number"
              name="int4"
              value={inputValues.int4}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Целая часть"
            />
            <input
              type="number"
              name="n4"
              value={inputValues.n4}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Числитель"
            />
            <input
              type="number"
              name="d4"
              value={inputValues.d4}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Знаменатель"
            />
          </div>
        </div>
      )}

      {operation === "percentage_to_fraction" && (
        <div className="calc-frow">
          <div className="calc-fleft">Процент</div>
          <div className="calc-fright">
            <input
              type="number"
              name="percent"
              value={inputValues.percent}
              onChange={handleChange}
              className="calc-inp"
              placeholder="Процент"
            />
          </div>
        </div>
      )}

      <div className="calc-frow">
        <div className="calc-fleft"></div>
        <div className="calc-fright">
          <button type="submit" className="calc-btn">
            Рассчитать
          </button>
        </div>
      </div>

      {state.showResult && (
        <>
          <div className="calc-frow">
            <div className="calc-fleft">Результат</div>
            <div className="calc-fright calc-test">
              {state.result && state.result.includes("/") ? (
                <div className="fraction-container">
                  <span className="fraction-num">
                    {state.result.split("/")[0].split(" ")[0]}
                  </span>
                  <div
                    className={
                      state.result.split("/")[0].split(" ").length === 3
                        ? "fraction-rest three-digits"
                        : "fraction-rest"
                    }
                  >
                    <span className="fraction-num">
                      {state.result
                        .split("/")[0]
                        .split(" ")
                        .slice(1)
                        .map((num, index) => (
                          <span key={index}>{num}</span>
                        ))}
                    </span>
                    <span className="fraction-line"></span>
                    <span className="fraction-denom-container">
                      {state.result
                        .split("/")[1]
                        .split(" ")
                        .map((num, index) => (
                          <span key={index} className="fraction-denom">
                            {num}
                          </span>
                        ))}
                    </span>
                  </div>
                </div>
              ) : (
                <span className="calc-result">{state.result}</span>
              )}
            </div>
          </div>
          <div className="calc-frow">
            <div className="calc-fleft">Решение</div>
            <div className="calc-fright">{state.solution}</div>
          </div>
        </>
      )}
    </form>
  );
};

export default FractionForm;
