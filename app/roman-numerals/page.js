"use client";
import { useReducer, useState } from "react";
import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import RomanForm from "./RomanForm";

import "./slugyfy.css";

const initial = {
  mode: "roman",
  value: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "roman":
      return { ...state, mode: "roman", value: null };
    case "arabic":
      return { ...state, mode: "arabic", value: null };
    case "inputValue":
      return { ...state, value: action.payload };
    case "textareaValue":
      const formattedValues = action.payload
        .split(" ")
        .filter(Boolean)
        .map((value) => `${value.trim()}`);
      return { ...state, value: formattedValues };
    default:
      return state;
  }
}

function Roman() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [showInput, setShowInput] = useState(true);
  const [showTextarea, setShowTextarea] = useState(false);

  const [inputValue, setInputValue] = useState(""); // Добавляем состояние для отслеживания значения поля ввода
  const [textareaValue, setTextareaValue] = useState(""); // Добавляем состояние для отслеживания значения текстового поля

  const handleCheckboxChange = (mode) => {
    dispatch({ type: mode });
    // Очищаем значения полей при смене чекбоксов
    setInputValue("");
    setTextareaValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch({ type: "inputValue", payload: e.target.value });
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
    dispatch({ type: "textareaValue", payload: e.target.value });
  };

  const handleCheckboxClick = () => {
    setShowInput(!showInput);
    setShowTextarea(!showTextarea);
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Конвертер "}
        description={
          "Онлайн конвертер римских чисел конвертирует римские цифры в арабские или десятичные числа и наоборот. Конвертер предоставляет возможность написать число римскими цифрами или же получить запись числа в римской системе счисления."
        }
        span={"римских цифр"}
      >
        <RomanForm
          type={state.mode}
          obj={state}
          url={"https://calcoffee.ru/api/convert/numerals"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput"></div>
              <div className="checkboxs">
                <span className="pre-top">Перевести в</span>
                <div className="row-label">
                  <label className="label-row-tops">
                    <input
                      type="checkbox"
                      className="row-check"
                      checked={state.mode === "roman"}
                      onChange={() => handleCheckboxChange("roman")}
                    />
                    <span>
                      <span className="span">римские</span>
                    </span>
                  </label>
                  <label className="label-row-tops">
                    <input
                      type="checkbox"
                      className="row-check"
                      checked={state.mode === "arabic"}
                      onChange={() => handleCheckboxChange("arabic")}
                    />
                    <span>
                      <span className="span">арабские</span>
                    </span>
                  </label>
                </div>
              </div>

              {showInput && (
                <label className="label-row-top">
                  <span className="pre-top">Число</span>
                  <input
                    type="number"
                    placeholder="Число"
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                </label>
              )}
              <label className="label-row-topss">
                <label className="label-row-tops">
                  <input
                    type="checkbox"
                    className="row-check"
                    onClick={handleCheckboxClick}
                  />
                </label>
                <span>
                  <span className="span-tops">Перевести несколько чисел</span>
                </span>
              </label>
              {showTextarea && (
                <div>
                  <span className="pre-top">Числа</span>
                  <label className="label-row-top">
                    <textarea
                      placeholder="Введите числа"
                      value={textareaValue}
                      onChange={handleTextareaChange}
                    ></textarea>
                  </label>
                </div>
              )}
            </div>
          </div>
        </RomanForm>
        <Contents>
          <h2>Римская система чисел: введение и основные правила</h2>
          <p>
            Хотите узнать больше о римской системе записи чисел? Римская система
            чисел - уникальная историческая форма записи чисел, которая имеет
            свои особенности и правила. В ней числа обозначаются римскими
            цифрами, состоящими из определенных комбинаций букв латинского
            алфавита.
          </p>
          <h2>Цифры на римском: основные принципы</h2>
          <p>
            Цифры на римском могут показаться запутанными на первый взгляд, но
            они следуют определенным правилам. Например, если буква с большим
            числовым значением стоит перед буквой с меньшим значением, то они
            складываются. Однако, если буква с меньшим значением стоит перед
            буквой с большим значением, то меньшее число вычитается из большего.
            Такая комбинаторика позволяет создавать разнообразные числа,
            используя всего несколько символов.
          </p>
          <h2>Преобразование чисел в римской системе</h2>
          <p>
            Не знаете, как записать число в римской системе счисления? Просто
            введите арабское число для преобразования в римскую цифру или
            введите римскую цифру, чтобы получить соответствующее арабское
            числовое значение. Например, римское число 1 выглядит как I, число
            19 будет выглядеть как "XIX", а 70 - как "LXX". Мы также
            предоставляем информацию о больших римских цифрах, таких как 400 и
            1000.
          </p>

          <p>
            Для удобства преобразования римских чисел существует специальная
            таблица римских цифр. Она представляет собой набор символов и их
            числовых значений, что делает процесс конвертации более простым и
            понятным. Вот небольшая таблица, которая поможет вам в
            преобразовании чисел:
          </p>
          <h2>Таблица римских цифр</h2>
          <table>
            <thead>
              <tr>
                <th>Римская цифра</th>
                <th>Арабское значение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I</td>
                <td>1</td>
              </tr>
              <tr>
                <td>II</td>
                <td>2</td>
              </tr>
              <tr>
                <td>III</td>
                <td>3</td>
              </tr>
              <tr>
                <td>IV</td>
                <td>4</td>
              </tr>
              <tr>
                <td>V</td>
                <td>5</td>
              </tr>
              <tr>
                <td>VI</td>
                <td>6</td>
              </tr>
              <tr>
                <td>VII</td>
                <td>7</td>
              </tr>
              <tr>
                <td>VIII</td>
                <td>8</td>
              </tr>
              <tr>
                <td>IX</td>
                <td>9</td>
              </tr>
              <tr>
                <td>X</td>
                <td>10</td>
              </tr>
              <tr>
                <td>XX</td>
                <td>20</td>
              </tr>
              <tr>
                <td>XXX</td>
                <td>30</td>
              </tr>
              <tr>
                <td>XL</td>
                <td>40</td>
              </tr>
              <tr>
                <td>L</td>
                <td>50</td>
              </tr>
              <tr>
                <td>LX</td>
                <td>60</td>
              </tr>
              <tr>
                <td>LXX</td>
                <td>70</td>
              </tr>
              <tr>
                <td>LXXX</td>
                <td>80</td>
              </tr>
              <tr>
                <td>XC</td>
                <td>90</td>
              </tr>
              <tr>
                <td>C</td>
                <td>100</td>
              </tr>
              <tr>
                <td>CC</td>
                <td>200</td>
              </tr>
              <tr>
                <td>CCC</td>
                <td>300</td>
              </tr>
              <tr>
                <td>CD</td>
                <td>400</td>
              </tr>
              <tr>
                <td>D</td>
                <td>500</td>
              </tr>
              <tr>
                <td>DC</td>
                <td>600</td>
              </tr>
              <tr>
                <td>DCC</td>
                <td>700</td>
              </tr>
              <tr>
                <td>DCCC</td>
                <td>800</td>
              </tr>
              <tr>
                <td>CM</td>
                <td>900</td>
              </tr>
              <tr>
                <td>M</td>
                <td>1000</td>
              </tr>
              <tr>
                <td>MM</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>MMM</td>
                <td>3000</td>
              </tr>
              <tr>
                <td>_V</td>
                <td>5000</td>
              </tr>
              <tr>
                <td>_X</td>
                <td>10000</td>
              </tr>
              <tr>
                <td>_L</td>
                <td>50000</td>
              </tr>
              <tr>
                <td>_C</td>
                <td>100000</td>
              </tr>
              <tr>
                <td>_D</td>
                <td>500000</td>
              </tr>
              <tr>
                <td>_M</td>
                <td>1000000</td>
              </tr>
            </tbody>
          </table>
          <p>
            Помните, что римская система счисления не только представляет
            историческую ценность, но и может быть интересным упражнением для
            развития математических навыков.
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

export default Roman;
