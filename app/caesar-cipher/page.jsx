"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import Input from "../components/Input";

import CalorieForm from "./CalorieForm";
import "./calorie.css";

const initial = {
  shift: 13,
  action: "encrypt",
  alphabet: "russian",
  text: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "shift":
      return { ...state, shift: Number(action.payload) };
    case "action":
      return { ...state, action: action.payload };
    case "alphabet":
      return { ...state, alphabet: action.payload };
    case "text":
      return { ...state, text: action.payload };
  }
}
function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Шифр "}
        description={
          "Шифр Цезаря - криптографический метод работы с текстом, который имеет много названий как: код Цезаря, шифр сдвига, сдвиг Цезаря. Все названия сводятся к одному принципу работы. Шифр был назван в честь римского императора Юлия Цезаря (Гая Юлия Цезаря), которым он вел переписку важных сообщений, включая переписку с Цицероном."
        }
        span={"Цезаря"}
      >
        <CalorieForm obj={obj} url={"https://calcoffee.ru/api/cipher/caesar"}>
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput-select">
                <label className="label-top">
                  <span>Сдвиг</span>
                  <select
                    name="shift"
                    onChange={(e) =>
                      dispatch({
                        type: "shift",
                        payload: Number(e.target.value),
                      })
                    }
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13" selected>
                      13
                    </option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                  </select>
                </label>
                <label className="label-top">
                  <span>Операция</span>
                  <select
                    name="action"
                    onChange={(e) =>
                      dispatch({ type: "action", payload: e.target.value })
                    }
                  >
                    <option value="encrypt">Зашифровать</option>
                    <option value="decrypt">Расшифровать</option>
                  </select>
                </label>
                <label className="label-top">
                  <span>Алфавит</span>
                  <select
                    name="alphabet"
                    onChange={(e) =>
                      dispatch({ type: "alphabet", payload: e.target.value })
                    }
                  >
                    <option value="russian">Русский</option>
                    <option value="english">Английский</option>
                  </select>
                </label>

                <label className="label-row-top">
                  <span className="pre-top">Текст</span>
                  <textarea
                    required
                    onChange={(e) =>
                      dispatch({ type: "text", payload: e.target.value })
                    }
                  ></textarea>
                </label>
              </div>
            </div>
          </div>
        </CalorieForm>

        <Contents>
          <p>
            Шифр Цезаря, один из наиболее простых и популярных методов
            шифрования, привлекает внимание своей легкостью использования и
            понимания. Его основная идея заключается в замене каждой буквы в
            открытом тексте на букву, находящуюся на некотором постоянном
            расстоянии вперед или назад по алфавиту.
          </p>
          <p>
            Принцип работы шифра Цезаря очень прост: для зашифровки сообщения
            выбирается ключ шифрования, который представляет собой число от 1 до
            25 (количество букв в алфавите). Затем каждая буква в сообщении
            сдвигается на указанное количество позиций в алфавите. Например, при
            сдвиге на 3 позиции вперед, буква "A" заменяется на "D", "B" на "E",
            "C" на "F", и так далее.
          </p>
          <p>
            Чтобы проиллюстрировать этот процесс, вот таблица шифрования для
            сдвига на 3 позиции вперед для латинского алфавита в верхнем
            регистре:
          </p>
          <table border="1">
            <thead>
              <tr>
                <th>Исходная буква</th>
                <th>Зашифрованная буква</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>D</td>
              </tr>
              <tr>
                <td>B</td>
                <td>E</td>
              </tr>
              <tr>
                <td>C</td>
                <td>F</td>
              </tr>
              <tr>
                <td>D</td>
                <td>G</td>
              </tr>
              <tr>
                <td>E</td>
                <td>H</td>
              </tr>
              <tr>
                <td>F</td>
                <td>I</td>
              </tr>
              <tr>
                <td>G</td>
                <td>J</td>
              </tr>
              <tr>
                <td>H</td>
                <td>K</td>
              </tr>
              <tr>
                <td>I</td>
                <td>L</td>
              </tr>
              <tr>
                <td>J</td>
                <td>M</td>
              </tr>
              <tr>
                <td>K</td>
                <td>N</td>
              </tr>
              <tr>
                <td>L</td>
                <td>O</td>
              </tr>
              <tr>
                <td>M</td>
                <td>P</td>
              </tr>
              <tr>
                <td>N</td>
                <td>Q</td>
              </tr>
              <tr>
                <td>O</td>
                <td>R</td>
              </tr>
              <tr>
                <td>P</td>
                <td>S</td>
              </tr>
              <tr>
                <td>Q</td>
                <td>T</td>
              </tr>
              <tr>
                <td>R</td>
                <td>U</td>
              </tr>
              <tr>
                <td>S</td>
                <td>V</td>
              </tr>
              <tr>
                <td>T</td>
                <td>W</td>
              </tr>
              <tr>
                <td>U</td>
                <td>X</td>
              </tr>
              <tr>
                <td>V</td>
                <td>Y</td>
              </tr>
              <tr>
                <td>W</td>
                <td>Z</td>
              </tr>
              <tr>
                <td>X</td>
                <td>A</td>
              </tr>
              <tr>
                <td>Y</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Z</td>
                <td>C</td>
              </tr>
            </tbody>
          </table>
          <p>
            Таким образом, каждая буква в открытом тексте заменяется
            соответствующей буквой из второй строки таблицы. Например, "A"
            становится "D", "B" становится "E", "C" становится "F", и так далее.
          </p>
          <p>
            Шифр Цезаря может быть легко реализован вручную или с помощью
            программных средств. Он может использоваться для шифрования
            сообщений или для обучения основам криптографии. Однако он не
            обеспечивает высокой степени безопасности и легко поддается взлому
            методом перебора ключа, поэтому его использование ограничивается в
            основном учебными и простыми коммуникационными задачами.
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

export default Compound;
