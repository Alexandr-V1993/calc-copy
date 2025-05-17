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
          "Хотите преобразовать свою дату рождения или любую другую в римские цифры? Мечтаете о татуировке с датой рождения ребенка в римских числах? Или просто интересуетесь, как записать дату на латинском? Наш конвертер дат быстро и легко переведет любую обычную дату в римскую запись всего за несколько кликов."
        }
        span={"римскими цифрами "}
      >
        <CalorieForm
          objj={objj}
          url={"https://calcoffee.ru/api/convert/roman-numeral-date"}
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
          <h2>Перевод даты в Римские цифры: История и Практика</h2>
          <p>
            Перевод даты в римские цифры - это увлекательный процесс, который
            уходит своими корнями в древность. Римляне использовали римские
            цифры для записи дат, событий и других важных данных. Эта система
            обозначения чисел, основанная на буквах алфавита, продолжает
            восхищать и вдохновлять современных людей своей красотой и
            уникальностью. В этой статье мы рассмотрим как переводить даты в
            римские цифры и предоставим таблицу для удобства в использовании.
          </p>
          <h2>История Римских Цифр</h2>
          <p>
            Использование римских цифр было широко распространено в Римской
            империи и других частях Европы. Эта система численности имеет свои
            корни в античности и была основана на комбинации букв алфавита
            латинского языка. Основные символы, используемые в римской системе,
            включают в себя I (1), V (5), X (10), L (50), C (100), D (500) и M
            (1000).
          </p>
          <h2>Практика Перевода</h2>
          <p>
            Чтобы перевести дату в римские цифры, мы разбиваем число на разряды
            и затем представляем каждый разряд в соответствии с правилами
            римской системы. Например, для перевода числа 2024 в римские цифры
            мы разделим его на тысячи (M), сотни (C), десятки (XX) и единицы
            (IV). Таким образом, 2024 будет представлено как MMXXIV.
          </p>
          <h2>Таблица Римских Цифр для Дат</h2>
          <p>
            Для удобства в использовании представляем таблицу римских цифр для
            чисел от 1 до 2024:
          </p>
          <table>
            <thead>
              <tr>
                <th>Год</th>
                <th>Римская цифра</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1000</td>
                <td>M</td>
              </tr>
              <tr>
                <td>1100</td>
                <td>MC</td>
              </tr>
              <tr>
                <td>1200</td>
                <td>MCC</td>
              </tr>
              <tr>
                <td>1300</td>
                <td>MCCC</td>
              </tr>
              <tr>
                <td>1400</td>
                <td>MCD</td>
              </tr>
              <tr>
                <td>1500</td>
                <td>MD</td>
              </tr>
              <tr>
                <td>1600</td>
                <td>MDC</td>
              </tr>
              <tr>
                <td>1700</td>
                <td>MDCC</td>
              </tr>
              <tr>
                <td>1800</td>
                <td>MDCCC</td>
              </tr>
              <tr>
                <td>1900</td>
                <td>MCM</td>
              </tr>
              <tr>
                <td>1990</td>
                <td>MCMXC</td>
              </tr>
              <tr>
                <td>1991</td>
                <td>MCMXCI</td>
              </tr>
              <tr>
                <td>1992</td>
                <td>MCMXCII</td>
              </tr>
              <tr>
                <td>1993</td>
                <td>MCMXCIII</td>
              </tr>
              <tr>
                <td>1994</td>
                <td>MCMXCIV</td>
              </tr>
              <tr>
                <td>1995</td>
                <td>MCMXCV</td>
              </tr>
              <tr>
                <td>1996</td>
                <td>MCMXCVI</td>
              </tr>
              <tr>
                <td>1997</td>
                <td>MCMXCVII</td>
              </tr>
              <tr>
                <td>1998</td>
                <td>MCMXCVIII</td>
              </tr>
              <tr>
                <td>1999</td>
                <td>MCMXCIX</td>
              </tr>
              <tr>
                <td>2000</td>
                <td>MM</td>
              </tr>
              <tr>
                <td>2001</td>
                <td>MMI</td>
              </tr>
              <tr>
                <td>2002</td>
                <td>MMII</td>
              </tr>
              <tr>
                <td>2003</td>
                <td>MMIII</td>
              </tr>
              <tr>
                <td>2004</td>
                <td>MMIV</td>
              </tr>
              <tr>
                <td>2005</td>
                <td>MMV</td>
              </tr>
              <tr>
                <td>2006</td>
                <td>MMVI</td>
              </tr>
              <tr>
                <td>2007</td>
                <td>MMVII</td>
              </tr>
              <tr>
                <td>2008</td>
                <td>MMVIII</td>
              </tr>
              <tr>
                <td>2009</td>
                <td>MMIX</td>
              </tr>
              <tr>
                <td>2010</td>
                <td>MMX</td>
              </tr>
              <tr>
                <td>2011</td>
                <td>MMXI</td>
              </tr>
              <tr>
                <td>2012</td>
                <td>MMXII</td>
              </tr>
              <tr>
                <td>2013</td>
                <td>MMXIII</td>
              </tr>
              <tr>
                <td>2014</td>
                <td>MMXIV</td>
              </tr>
              <tr>
                <td>2015</td>
                <td>MMXV</td>
              </tr>
              <tr>
                <td>2016</td>
                <td>MMXVI</td>
              </tr>
              <tr>
                <td>2017</td>
                <td>MMXVII</td>
              </tr>
              <tr>
                <td>2018</td>
                <td>MMXVIII</td>
              </tr>
              <tr>
                <td>2019</td>
                <td>MMXIX</td>
              </tr>
              <tr>
                <td>2020</td>
                <td>MMXX</td>
              </tr>
              <tr>
                <td>2021</td>
                <td>MMXXI</td>
              </tr>
              <tr>
                <td>2022</td>
                <td>MMXXII</td>
              </tr>
              <tr>
                <td>2023</td>
                <td>MMXXIII</td>
              </tr>
              <tr>
                <td>2024</td>
                <td>MMXXIV</td>
              </tr>
              <tr>
                <td>2025</td>
                <td>MMXXV</td>
              </tr>
            </tbody>
          </table>
          <p>
            Теперь, имея эту таблицу, вы можете легко переводить даты и другие
            числа в римские цифры.
          </p>
          <h2>Заключение</h2>
          <p>
            Перевод даты в римские цифры - это не только увлекательный процесс,
            но и часть нашего культурного наследия. Римские цифры продолжают
            вдохновлять нас своей простотой и красотой. Благодаря этой системе,
            мы можем сохранять и передавать информацию о датах и событиях с
            уникальным стилем и элегантностью.
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
