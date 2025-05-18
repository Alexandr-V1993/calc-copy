"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
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
          "Шифр Цезаря — один из самых древних и известных методов шифрования, используемый Юлием Цезарем для секретной переписки. Он также называется кодом Цезаря или сдвигом Цезаря."
        }
        span={"Цезаря"}
      >
        <CalorieForm
          obj={obj}
          url={"https://boxcalculators.ru/api/cipher/caesar"}
        >
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
          <h2>Что такое шифр Цезаря?</h2>

          <p>
            Шифр Цезаря — один из первых и самых простых алгоритмов шифрования.
            Этот метод заключается в замене каждой буквы исходного текста
            другой, отстоящей от неё на фиксированное количество позиций в
            алфавите.
          </p>

          <p>
            Также известен как <strong>код Цезаря</strong>,{" "}
            <strong>сдвиг Цезаря</strong> или <strong>шифр сдвига</strong>.
            Название происходит от Гая Юлия Цезаря, который использовал этот
            метод для секретной переписки со своими генералами и советниками,
            включая Марка Туллия Цицерона.
          </p>

          <h2>Как работает шифр Цезаря?</h2>
          <p>Алгоритм шифра очень прост:</p>
          <ol>
            <li>
              <strong>Выбирается ключ:</strong> число от 1 до 25 для латинского
              алфавита;
            </li>
            <li>
              <strong>Каждая буква:</strong> заменяется на другую, отстоящую от
              неё на заданное количество позиций;
            </li>
            <li>
              <strong>Текст зашифровывается:</strong> применяя сдвиг ко всем
              буквам;
            </li>
            <li>
              <strong>Для расшифровки:</strong> используется тот же ключ, но в
              обратном направлении.
            </li>
          </ol>

          <p>Например, при сдвиге на 3 позиции вперед:</p>
          <div className="example">
            <span className="page-bolt">A → D</span>,{" "}
            <span className="page-bolt">B → E</span>,{" "}
            <span className="page-bolt">C → F</span> и т.д.
          </div>

          <h2>Таблица сдвига (ключ = 3)</h2>
          <table className="cipher-table">
            <thead>
              <tr>
                <th>Исходный алфавит</th>
                <th>Зашифрованный алфавит</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</td>
                <td>D E F G H I J K L M N O P Q R S T U V W X Y Z A B C</td>
              </tr>
            </tbody>
          </table>

          <p>
            Таким образом, каждая буква в вашем тексте заменяется на
            соответствующую ей из второй строки таблицы.
          </p>

          <h2>Пример шифрования</h2>
          <p>
            Возьмём слово <strong>"HELLO"</strong> и применим сдвиг на 3 символа
            вперёд:
          </p>
          <div className="example">
            <strong>HELLO</strong> → <span className="page-bolt">KHOOR</span>
          </div>

          <p>
            Чтобы расшифровать его, просто примените сдвиг на 3 символа назад.
          </p>

          <h2>Применение шифра Цезаря</h2>
          <p>
            Хотя сегодня шифр Цезаря не считается безопасным, он остаётся
            популярным:
          </p>
          <ul>
            <li>
              <strong>🎓 Образование:</strong> изучение основ криптографии;
            </li>
            <li>
              <strong>📜 История:</strong> моделирование старинных способов
              шифрования;
            </li>
            <li>
              <strong>🎮 Игры:</strong> головоломки, квесты, шифры в играх;
            </li>
            <li>
              <strong>🧠 Личное использование:</strong> для скрытия информации
              от случайных глаз.
            </li>
          </ul>

          <h2>Почему шифр Цезаря не используется в реальной криптографии?</h2>
          <p>
            Из-за своей простоты, шифр легко взломать. Всего существует всего 25
            возможных ключей для английского языка и около 32 для русского, что
            делает его уязвимым к методу <strong>brute-force</strong>{" "}
            (перебора).
          </p>

          <p>
            Однако, шифр Цезаря может быть частью более сложных систем
            шифрования или использоваться вместе с другими методами для усиления
            безопасности.
          </p>

          <h2>Где ещё можно использовать шифр?</h2>
          <p>Вот несколько интересных примеров:</p>
          <ul>
            <li>
              <strong>Загадки и кроссворды:</strong> часто используются шифры
              Цезаря для составления головоломок;
            </li>
            <li>
              <strong>Скрытые сообщения:</strong> можно использовать для
              создания «тайных» записок;
            </li>
            <strong>Компьютерные игры:</strong> некоторые игры используют его
            как элемент сюжета;
            <li>
              <strong>Обучение программированию:</strong> отличная задача для
              начинающих изучать Python, JavaScript и другие языки;
            </li>
            <li>
              <strong>Шифрование данных:</strong> редко, но иногда используется
              как часть более сложных алгоритмов.
            </li>
          </ul>

          <h2>Как расшифровать текст без ключа?</h2>
          <p>Расшифровать сообщение без знания ключа можно с помощью:</p>
          <ul>
            <li>
              <strong>Перебора:</strong> попробуйте все 25 вариантов сдвига;
            </li>
            <li>
              <strong>Анализа частот:</strong> определите наиболее
              распространённые буквы и сравните с частотными таблицами;
            </li>
            <li>
              <strong>Словарных атак:</strong> если вы знаете, что сообщение
              содержит конкретные слова, это сильно упрощает задачу.
            </li>
          </ul>

          <h2>Юлий Цезарь и его шифр</h2>
          <p>
            Гай Юлий Цезарь использовал этот метод для передачи секретных
            сообщений своим командирам. Самым известным был сдвиг на 3 позиции
            вперёд.
          </p>

          <p>
            Его современники могли не понимать смысл перехваченных посланий, но
            сегодня такой шифр взламывается за секунды. Тем не менее, шифр
            Цезаря стал основой для более сложных систем шифрования, таких как
            шифр Виженера и одноалфавитная замена.
          </p>

          <h2>Преимущества шифра Цезаря</h2>
          <ul>
            <li>
              <strong>Легко запомнить:</strong> не требует сложных формул;
            </li>
            <li>
              <strong>Прост в реализации:</strong> можно сделать вручную или
              написать программу за 10 минут;
            </li>
            <li>
              <strong>Универсален:</strong> работает с любым алфавитом;
            </li>
            <li>
              <strong>Хорош для обучения:</strong> помогает понять основы
              криптографии;
            </li>
            <li>
              <strong>Историческое значение:</strong> один из первых известных
              методов шифрования.
            </li>
          </ul>

          <h2>Недостатки шифра Цезаря</h2>
          <ul>
            <li>
              <strong>Низкая безопасность:</strong> легко взламывается;
            </li>
            <li>
              <strong>Малое количество ключей:</strong> всего 25–32 варианта;
            </li>
            <li>
              <strong>Не подходит для серьезной защиты:</strong> используется
              только в учебных целях;
            </li>
            <li>
              <strong>Не маскирует структуру текста:</strong> сохраняет частоту
              букв, что облегчает взлом.
            </li>
          </ul>

          <h2>Советы по использованию</h2>
          <p>Вот что стоит помнить:</p>
          <ul>
            <li>Всегда используйте уникальный ключ;</li>
            <li>Не применяйте его для конфиденциальных данных;</li>
            <li>
              Изменяйте ключ регулярно, если используете в играх или учебных
              задачах;
            </li>
            <li>
              Добавьте дополнительные уровни шифрования для повышения
              надежности;
            </li>
            <li>
              Попробуйте комбинировать с другими шифрами для лучшей защиты.
            </li>
          </ul>

          <h2>Заключение</h2>
          <p>
            Шифр Цезаря — это не только важная часть истории криптографии, но и
            отличный способ начать изучать принципы шифрования. Он прост,
            понятен и универсален.
          </p>

          <p>
            Хотя сегодня он уже не используется в серьёзных системах
            безопасности, его всё ещё ценят за доступность, наглядность и
            образовательную ценность. Попробуйте наш калькулятор, чтобы быстро
            зашифровать или расшифровать любой текст!
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
