"use client";
import { useReducer, useEffect, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./slugyfy.css";

function Compound() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Обновляем каждую секунду
    return () => clearInterval(interval);
  }, []);

  const days = currentDate.getDate();
  const monthh = currentDate.getMonth() + 1; // Месяцы начинаются с 0
  const yearr = currentDate.getFullYear();

  const [day, setday] = useState(days);
  const [month, setmonth] = useState(monthh);
  const [year, setyear] = useState(yearr);
  const [delimiter, setdelimiter] = useState("slash");
  const [format, setformat] = useState("dd.mm.yyyy");

  const objj = {
    delimiter: delimiter,
    format: format,
    date: `${month}/${day}/${year}`,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Дата "}
        description={
          "Хотите преобразовать дату рождения или любую другую дату в римские цифры? Наш конвертер поможет быстро и правильно записать число в римской системе."
        }
        span={"римскими цифрами "}
      >
        <CalorieForm
          objj={objj}
          url={"https://boxcalculators.ru/api/convert/roman-numeral-date"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput-select">
                <label className="numrange row-1 van">
                  <span>Дата</span>
                  <input
                    min={0}
                    max={31}
                    type="number"
                    className="input"
                    placeholder="день"
                    value={day}
                    onChange={(e) => {
                      setday(e.target.value);
                    }}
                    required
                  />
                  <div className="notation notation-day">день</div>
                </label>
                <label className="numrange row-1 van">
                  <input
                    min={0}
                    max={12}
                    type="number"
                    className="input"
                    placeholder="месяц"
                    value={month}
                    onChange={(e) => {
                      setmonth(e.target.value);
                    }}
                    required
                  />
                  <div className="notation">месяц</div>
                </label>
                <label className="numrange row-1 van">
                  <input
                    min={0}
                    max={3999}
                    type="number"
                    className="input"
                    placeholder="год"
                    value={year}
                    onChange={(e) => {
                      setyear(e.target.value);
                    }}
                    required
                  />
                  <div className="notation">год</div>
                </label>
              </div>
              <label>
                <span> Формат</span>
                <select
                  name="format"
                  onChange={(e) => setformat(e.target.value)}
                  value={format}
                >
                  <option value="dd.mm.yyyy">DD.MM.YYYY</option>
                  <option value="mm.dd.yyyy">MM.DD.YYYY</option>
                  <option value="dd.mm.yyyy">DD.MM.YYYY</option>
                  <option value="yyyy.mm.dd">YYYY.MM.DD</option>
                </select>
              </label>
              <label>
                <span>Разделитель</span>
                <select
                  name="delimiter"
                  onChange={(e) => setdelimiter(e.target.value)}
                  value={delimiter}
                >
                  <option value="dot">. (точка)</option>
                  <option value="comma">, (запятая)</option>
                  <option value="dash">- (тире)</option>
                  <option value="colon">: (двоеточие)</option>
                  <option value="underline">_ (подчеркивание)</option>
                  <option value="slash">/ (Слэш)</option>
                  <option value="space">" " (пробел)</option>
                </select>
              </label>
            </div>
          </div>
        </CalorieForm>

        <Contents>
          <h2>Как переводить даты в римские цифры?</h2>

          <p>
            Перевод даты в римские цифры — это не только интересная задача, но и
            полезный навык. Такой формат часто используется в документах,
            фильмах, книгах и даже в татуировках.
          </p>

          <p>
            Например, если вы хотите записать дату своего рождения или важного
            события в стиле римских императоров, просто введите дату в наш
            калькулятор, и он мгновенно преобразует её в правильную римскую
            запись.
          </p>

          <h2>История римских цифр</h2>
          <p>
            Римская система счисления имеет тысячелетнюю историю. Она
            использовалась ещё в Древнем Риме для записи чисел, дат и важных
            событий. В отличие от современной десятичной системы, римские цифры
            основаны на комбинациях букв латинского алфавита:
          </p>

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

          <p>
            Эта система не предусматривает ноль, зато она обладает уникальной
            эстетикой и исторической ценностью.
          </p>

          <h2>Как работает конвертер дат?</h2>
          <p>Калькулятор разбивает дату на три части:</p>
          <ul>
            <li>
              <strong>День:</strong> от 1 до 31;
            </li>
            <li>
              <strong>Месяц:</strong> от I до XII;
            </li>
            <li>
              <strong>Год:</strong> например, 2024 → MMXXIV.
            </li>
          </ul>

          <p>
            После ввода даты в привычном формате (например, 15.09.2023),
            калькулятор автоматически преобразует каждую часть в римскую запись:
          </p>
          <div className="example">
            <span className="page-bolt">15.09.2023 → XV.IX.MMXXIII</span>
          </div>

          <h2>Таблица римских чисел</h2>
          <p>Вот базовая таблица римских чисел для справки:</p>

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
                <td>4</td>
                <td>IV</td>
              </tr>
              <tr>
                <td>5</td>
                <td>V</td>
              </tr>
              <tr>
                <td>9</td>
                <td>IX</td>
              </tr>
              <tr>
                <td>10</td>
                <td>X</td>
              </tr>
              <tr>
                <td>40</td>
                <td>XL</td>
              </tr>
              <tr>
                <td>50</td>
                <td>L</td>
              </tr>
              <tr>
                <td>90</td>
                <td>XC</td>
              </tr>
              <tr>
                <td>100</td>
                <td>C</td>
              </tr>
              <tr>
                <td>400</td>
                <td>CD</td>
              </tr>
              <tr>
                <td>500</td>
                <td>D</td>
              </tr>
              <tr>
                <td>1000</td>
                <td>M</td>
              </tr>
              <tr>
                <td>2024</td>
                <td>MMXXIV</td>
              </tr>
            </tbody>
          </table>

          <h2>Примеры популярных дат</h2>
          <ul>
            <li>1 января 2000 → I.I.MMM</li>
            <li>23 февраля 2021 → XXIII.II.MMXXI</li>
            <li>1 сентября 2022 → I.IX.MMXXII</li>
            <li>12 декабря 2023 → XII.XII.MMXXIII</li>
            <li>31 октября 1999 → XXXI.X.MCMXCIX</li>
          </ul>

          <h2>Зачем переводить даты в римские цифры?</h2>
          <p>Вот основные причины:</p>
          <ul>
            <li>
              <strong>Документы:</strong> юридические, официальные бумаги;
            </li>
            <li>
              <strong>Фильмы и игры:</strong> оформление титров, уровней, глав;
            </li>
            <li>
              <strong>Татуировки:</strong> многие выбирают римские даты для
              нательных надписей;
            </li>
            <li>
              <strong>Образование:</strong> изучение истории математики;
            </li>
            <li>
              <strong>Личное использование:</strong> подарочные открытки,
              памятные даты, семейные события.
            </li>
          </ul>

          <h2>Правила записи</h2>
          <p>При переводе в римские числа важно помнить:</p>
          <ul>
            <li>
              <strong>Сложение:</strong> если символ стоит после большего —
              прибавляется;
            </li>
            <li>
              <strong>Вычитание:</strong> если меньший символ перед большим —
              вычитается;
            </li>
            <li>
              <strong>Повторение:</strong> один символ можно использовать не
              более 3 раз подряд;
            </li>
            <li>
              <strong>Ограничения:</strong> максимальное число — 5000 (MMMMM).
            </li>
          </ul>

          <h2>Как выглядят века в римской системе?</h2>
          <p>
            Если вы переводите годы рождения или исторические даты, вот как
            будут выглядеть века:
          </p>
          <ul>
            <li>
              <strong>XIX век:</strong> 1801–1900 → от <strong>MDCCCI</strong>{" "}
              до <strong>MDCXXX</strong>
            </li>
            <li>
              <strong>XX век:</strong> 1901–2000 → от <strong>MCM</strong> до{" "}
              <strong>MM</strong>
            </li>
            <li>
              <strong>XXI век:</strong> 2001–2100 → от <strong>MMI</strong> до{" "}
              <strong>MMC</strong>
            </li>
          </ul>

          <h2>Как работать с датами рождения?</h2>
          <p>Допустим, вы родились 12 апреля 1998 года:</p>
          <div className="example">
            <span className="page-bolt">12 → XII</span>,{" "}
            <span className="page-bolt">4 → IV</span>,{" "}
            <span className="page-bolt">1998 → MCMXCVIII</span>
          </div>

          <p>Тогда вся дата будет выглядеть так:</p>
          <div className="example">XII.IV.MCMXCVIII</div>

          <h2>Важные моменты</h2>
          <p>
            - Не используйте четыре одинаковых символа подряд (например, IIII →
            IV) - Для дат рождения, свадеб, юбилеев используйте полную запись -
            Проверяйте результат, особенно если дата важна (например, для
            татуировки или сертификата) - Помните, что римские даты не содержат
            нулей (все начинается с единицы)
          </p>

          <h2>Почему стоит выбрать наш калькулятор?</h2>
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
              <strong>Универсальный:</strong> поддерживает любой формат дат;
            </li>
            <li>
              <strong>Мгновенный результат:</strong> получайте готовый ответ за
              доли секунд;
            </li>
            <li>
              <strong>Подходит для всех:</strong> студентов, дизайнеров,
              режиссёров, историков.
            </li>
          </ul>

          <h2>Интересные факты о римских числах</h2>
          <ul>
            <li>Ноль отсутствует в римской системе;</li>
            <li>
              На некоторых часах вместо IV используется IIII для симметрии;
            </li>
            <li>
              Римские числа не подходят для сложных матемантических операций;
            </li>
            <li>
              Часто встречаются в кино: например, фильм «Gladiator» (2000) → MM
            </li>
            <li>
              Римские даты популярны в татуировках, особенно для дат рождения
              детей, свадьбы, памяти близких.
            </li>
          </ul>

          <h2>Заключение</h2>
          <p>
            Римские цифры — это не просто архаизм, это стиль, который помогает
            нам выразить дату с особой элегантностью и уважением к традиции. Наш
            калькулятор римских дат поможет вам легко и красиво оформить важные
            события, сделать татуировку, создать титры или подготовить
            исторический материал.
          </p>

          <p>
            Это универсальный инструмент, который сочетает в себе
            функциональность, простоту и культурную значимость.
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
