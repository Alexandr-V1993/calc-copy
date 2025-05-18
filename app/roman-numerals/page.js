"use client";
import { useReducer, useState } from "react";
import HeaderModal from "../components/NewModal";
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
          "Онлайн конвертер римских чисел от BoxCalculators. Переведите число или дату в римские цифры и наоборот за секунды. Работает в диапазоне от 1 до 5000."
        }
        span={"римских цифр"}
      >
        <RomanForm
          type={state.mode}
          obj={state}
          url={"https://boxcalculators.ru/api/convert/numerals"}
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
          <h2>Что такое римские цифры?</h2>

          <p>
            Римские цифры — это древняя система записи чисел, основанная на
            латинском алфавите. Она использовалась ещё в Древнем Риме и до сих
            пор встречается в кино, книгах, часах, документах и даже в играх.
          </p>

          <p>
            Несмотря на отсутствие нуля и сложности с большими числами, римская
            система остаётся популярной благодаря своей эстетике и исторической
            ценности.
          </p>

          <h2>Как работают римские цифры?</h2>
          <p>В римской системе используется всего семь основных символов:</p>

          <ul>
            <li>
              <strong>I</strong> — 1
            </li>
            <li>
              <strong>V</strong> — 5
            </li>
            <li>
              <strong>X</strong> — 10
            </li>
            <li>
              <strong>L</strong> — 50
            </li>
            <li>
              <strong>C</strong> — 100
            </li>
            <li>
              <strong>D</strong> — 500
            </li>
            <li>
              <strong>M</strong> — 1000
            </li>
          </ul>

          <p>Правила простые:</p>

          <ul>
            <li>
              <strong>Сложение:</strong> если символ с большим значением стоит
              перед меньшим, значения складываются (например, VI = 5 + 1 = 6);
            </li>
            <li>
              <strong>Вычитание:</strong> если символ с меньшим значением перед
              большим — из большего вычитается меньшее (например, IV = 5 − 1 =
              4).
            </li>
          </ul>

          <h2>Таблица римских чисел</h2>
          <p>Вот базовая таблица римских цифр:</p>

          <table className="roman-table">
            <thead>
              <tr>
                <th>Арабское</th>
                <th>Римское</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>I</td>
              </tr>
              <tr>
                <td>5</td>
                <td>V</td>
              </tr>
              <tr>
                <td>10</td>
                <td>X</td>
              </tr>
              <tr>
                <td>50</td>
                <td>L</td>
              </tr>
              <tr>
                <td>100</td>
                <td>C</td>
              </tr>
              <tr>
                <td>500</td>
                <td>D</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>M</td>
              </tr>
            </tbody>
          </table>

          <h2>Как использовать наш конвертер?</h2>
          <p>Конвертер римских чисел от BoxCalculators позволяет:</p>

          <ul>
            <li>перевести арабское число в римскую запись;</li>
            <li>расшифровать римскую цифру в привычную нам десятичную;</li>
            <li>
              использовать его для дат, нумерации глав, титров в фильмах,
              обозначения веков и т.д.
            </li>
          </ul>

          <p>Например:</p>
          <ul>
            <li>
              <strong>2024 → MMXXIV</strong>
            </li>
            <li>
              <strong>1999 → MCMXCIX</strong>
            </li>
            <li>
              <strong>12 → XII</strong>
            </li>
            <li>
              <strong>47 → XLVII</strong>
            </li>
          </ul>

          <h2>Где применяются римские цифры?</h2>
          <p>Римские цифры встречаются повсеместно:</p>
          <ul>
            <li>
              <strong>Фильмы:</strong> год выпуска часто указывается в римской
              форме;
            </li>
            <li>
              <strong>Документы:</strong> тома, главы, приложения;
            </li>
            <li>
              <strong>Часы:</strong> циферблаты классических часов;
            </li>
            <li>
              <strong>Игры и книги:</strong> названия серий, уровней, эпизодов;
            </li>
            <li>
              <strong>Юридические и официальные бумаги:</strong> номера законов,
              пунктов, статей;
            </li>
            <li>
              <strong>Образование:</strong> изучение истории математики и
              культурного наследия.
            </li>
          </ul>

          <h2>Правила записи римских чисел</h2>
          <p>При составлении чисел действуют следующие правила:</p>
          <ul>
            <li>
              <strong>Повторение:</strong> один символ можно повторять не более
              трёх раз (III = 3, но не IIII);
            </li>
            <li>
              <strong>Вычитание:</strong> I, X и C могут предшествовать более
              крупным числам для обозначения вычитания (IV = 4, IX = 9);
            </li>
            <li>
              <strong>Запрещено четыре одинаковых символа подряд:</strong>{" "}
              вместо IIII пишут IV;
            </li>
            <li>
              <strong>Максимальное число:</strong> обычно ограничивается 5000
              (включительно).
            </li>
          </ul>

          <h2>Примеры перевода</h2>
          <div className="example">
            <p>
              <strong>1 → I</strong>
            </p>
            <p>
              <strong>10 → X</strong>
            </p>
            <p>
              <strong>44 → XLIV</strong>
            </p>
            <p>
              <strong>1999 → MCMXCIX</strong>
            </p>
            <p>
              <strong>2024 → MMXXIV</strong>
            </p>
            <p>
              <strong>5000 → MMMMM</strong> (или иногда через черту над буквой)
            </p>
          </div>

          <h2>Почему стоит использовать наш калькулятор?</h2>
          <p>Наш конвертер:</p>
          <ul>
            <li>
              <strong>Бесплатный:</strong> без регистрации и подписок;
            </li>
            <li>
              <strong>Точный:</strong> соответствует всем правилам римской
              системы;
            </li>
            <li>
              <strong>Удобный:</strong> работает на любом устройстве;
            </li>
            <li>
              <strong>Мгновенный результат:</strong> переводите числа и даты за
              доли секунд;
            </li>
            <li>
              <strong>Поддерживает большой диапазон:</strong> от 1 до 5000.
            </li>
          </ul>

          <h2>Важные советы по использованию</h2>
          <p>Вот несколько полезных советов:</p>
          <ul>
            <li>Не используйте одну и ту же цифру больше трёх раз подряд;</li>
            <li>Для вычитания используются только I, X и C;</li>
            <li>Ноль в римской системе отсутствует;</li>
            <li>
              Для больших чисел ( 5000) иногда добавляют горизонтальную черту
              сверху, что означает умножение на 1000;
            </li>
            <li>
              Проверяйте результат — особенно если вы используете его для
              официальных документов или обучения.
            </li>
          </ul>

          <h2>Интересные факты</h2>
          <ul>
            <li>Римская система не имеет нуля;</li>
            <li>
              Число 4 в Японии и Китае может быть написано как IIII на некоторых
              циферблатах;
            </li>
            <li>
              Римские числа не подходят для сложных математических операций;
            </li>
            <li>
              На старых часах часто можно встретить IV и IIII как 4 — это вопрос
              эстетики;
            </li>
            <li>
              Максимальное число — MMMMM (5000), хотя существуют модификации для
              бОльших значений.
            </li>
          </ul>

          <h2>Заключение</h2>
          <p>
            Римские цифры — это не просто архаизм, а важная часть культуры,
            дизайна и образования. Они помогают лучше понимать историю, упрощают
            оформление документов и могут быть полезны в творческих задачах.
          </p>

          <p>
            Наш калькулятор римских чисел поможет вам быстро и точно перевести
            любое число в римскую систему и обратно. Он подходит как для
            школьников, так и для дизайнеров, режиссёров и историков.
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
