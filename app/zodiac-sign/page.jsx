// pages/zodiac-calculator.js
"use client";
import React, { useState } from "react";
import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import ZodiacForm from "./ZodiacForm";
import "./alco.css";
import Contents from "../components/Contents";

const zodiacSigns = [
  { sign: "Овен", start: "03-21", end: "04-20" },
  { sign: "Телец", start: "04-21", end: "05-20" },
  { sign: "Близнецы", start: "05-21", end: "06-21" },
  { sign: "Рак", start: "06-22", end: "07-22" },
  { sign: "Лев", start: "07-23", end: "08-23" },
  { sign: "Дева", start: "08-24", end: "09-23" },
  { sign: "Весы", start: "09-24", end: "10-23" },
  { sign: "Скорпион", start: "10-24", end: "11-22" },
  { sign: "Стрелец", start: "11-23", end: "12-21" },
  { sign: "Козерог", start: "12-22", end: "01-20" },
  { sign: "Водолей", start: "01-21", end: "02-19" },
  { sign: "Рыбы", start: "02-20", end: "03-20" },
];

const chineseZodiacSigns = [
  "Крыс",
  "Бык",
  "Тигр",
  "Кролик",
  "Дракон",
  "Змея",
  "Лошадь",
  "Овца",
  "Обезьяна",
  "Петух",
  "Собака",
  "Свинья",
];

export default function ZodiacCalculator() {
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [chineseZodiac, setChineseZodiac] = useState("");

  const handleSubmit = (date) => {
    const birthday = new Date(date);
    const sign = getZodiacSign(birthday);
    const chineseSign = getChineseZodiacSign(birthday.getFullYear());
    setSelectedZodiac(sign);
    setChineseZodiac(chineseSign);
  };

  const getZodiacSign = (date) => {
    const monthDay = date.getDate();
    const monthIndex = date.getMonth() + 1;
    for (const { sign, start, end } of zodiacSigns) {
      const startParts = start.split("-");
      const endParts = end.split("-");
      const startMonth = parseInt(startParts[0]);
      const startDate = parseInt(startParts[1]);
      const endMonth = parseInt(endParts[0]);
      const endDate = parseInt(endParts[1]);
      if (
        (monthIndex === startMonth && monthDay >= startDate) ||
        (monthIndex === endMonth && monthDay <= endDate)
      ) {
        return sign;
      }
    }
  };

  const getChineseZodiacSign = (year) => {
    const index = (year - 4) % 12;
    return chineseZodiacSigns[
      index >= 0 ? index : chineseZodiacSigns.length + index
    ];
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор знака "}
        description={
          "Если у вас нет точной информации о дате рождения или если вам просто интересно узнать больше о вашем близком человеке, наш онлайн калькулятор может помочь раскрыть все тайны. Узнайте его знак зодиака и даже год рождения, а затем объедините эту информацию, чтобы понять его сильные и слабые стороны. Наш инструмент поможет вам разгадать все загадки его личности."
        }
        span={"зодиака"}
      >
        <div id="body_calc" className="alert alert-info">
          <div>
            <ZodiacForm handleSubmit={handleSubmit} />
          </div>
        </div>
        <Contents>
          <h2>Таблица знаков зодиака</h2>
          <table>
            <tbody>
              <tr className="d-none">
                <th>
                  <strong>
                    <span>Знак</span>
                  </strong>
                </th>
                <th>
                  <strong>
                    <span>Символ</span>
                  </strong>
                </th>

                <th>
                  <strong>
                    <span>Западная астрология</span>
                  </strong>
                </th>
                <th>
                  <strong>
                    <span>Индийская астрология</span>
                  </strong>
                </th>
                <th>
                  <strong>
                    <span>Даты пребывания Солнца </span>
                  </strong>
                  <br className="mobile-break" />
                  <strong>
                    <span>в зодиакальных созвездиях</span>
                  </strong>
                </th>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Овен</span>
                  </strong>
                </td>
                <td>
                  <b>♈</b>
                </td>
                <td>
                  <span>21 марта&nbsp;— 20 апреля</span>
                </td>
                <td>
                  <span>14 апреля&nbsp;— 14 мая</span>
                </td>
                <td>
                  <span>Овен, 18 апреля&nbsp;— 14 мая</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Телец</span>
                  </strong>
                </td>
                <td>
                  <b>♉</b>
                </td>
                <td>
                  <span>21 апреля&nbsp;— 20 мая</span>
                </td>
                <td>
                  <span>15 мая&nbsp;— 14 июня</span>
                </td>
                <td>
                  <span>Телец, 14 мая&nbsp;— 21 июня</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Близнецы</span>
                  </strong>
                </td>
                <td>
                  <b>♊</b>
                </td>
                <td>
                  <span>21 мая&nbsp;— 21 июня</span>
                </td>
                <td>
                  <span>15 июня&nbsp;— 16 июля</span>
                </td>
                <td>
                  <span>Близнецы, 21 июня&nbsp;— 20 июля</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Рак</span>
                  </strong>
                </td>
                <td>
                  <b>♋</b>
                </td>
                <td>
                  <span>22 июня&nbsp;— 22 июля</span>
                </td>
                <td>
                  <span>17 июля&nbsp;— 16 августа</span>
                </td>
                <td>
                  <span>Рак, 20 июля&nbsp;— 11 августа</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Лев</span>
                  </strong>
                </td>
                <td>
                  <b>♌</b>
                </td>
                <td>
                  <span>23 июля&nbsp;— 23 августа</span>
                </td>
                <td>
                  <span>17 августа&nbsp;— 16 сентября</span>
                </td>
                <td>
                  <span>Лев, 11 августа&nbsp;— 17 сентября</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Дева</span>
                  </strong>
                </td>
                <td>
                  <b>♍</b>
                </td>
                <td>
                  <span>24 августа&nbsp;— 23 сентября</span>
                </td>
                <td>
                  <span>17 сентября&nbsp;— 17 октября</span>
                </td>
                <td>
                  <span>Дева, 17 сентября&nbsp;— 31 октября</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Весы</span>
                  </strong>
                </td>
                <td>
                  <b>♎</b>
                </td>
                <td>
                  <span>24 сентября&nbsp;— 23 октября</span>
                </td>
                <td>
                  <span>18 октября&nbsp;— 16 ноября</span>
                </td>
                <td>
                  <span>Весы, 31 октября&nbsp;— 22 ноября</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Скорпион</span>
                  </strong>
                </td>
                <td>
                  <b>♏</b>
                </td>
                <td>
                  <span>24 октября — 22 ноября</span>
                </td>
                <td>
                  <span>17 ноября&nbsp;— 15 декабря</span>
                </td>
                <td>
                  <span>Скорпион, 22 ноября&nbsp;— 30 ноября</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Стрелец</span>
                  </strong>
                </td>
                <td>
                  <b>♐</b>
                </td>
                <td>
                  <span>23 ноября&nbsp;— 21 декабря</span>
                </td>
                <td>
                  <span>16 декабря&nbsp;— 14 января</span>
                </td>
                <td>
                  <span>Стрелец, 18 декабря&nbsp;— 19 января</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Козерог</span>
                  </strong>
                </td>
                <td>
                  <b>♑</b>
                </td>
                <td>
                  <span>22 декабря&nbsp;— 20 января</span>
                </td>
                <td>
                  <span>15 января&nbsp;— 14 февраля</span>
                </td>
                <td>
                  <span>Козерог, 19 января&nbsp;— 16 февраля</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Водолей</span>
                  </strong>
                </td>
                <td>
                  <b>♒</b>
                </td>
                <td>
                  <span>21 января&nbsp;— 19 февраля</span>
                </td>
                <td>
                  <span>15 февраля&nbsp;— 14 марта</span>
                </td>
                <td>
                  <span>Водолей, 16 февраля&nbsp;— 12 марта</span>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>
                    <span>Рыбы</span>
                  </strong>
                </td>
                <td>
                  <b>♓</b>
                </td>
                <td>
                  <span>20 февраля&nbsp;— 20 марта</span>
                </td>
                <td>
                  <span>15 марта&nbsp;— 14 апреля</span>
                </td>
                <td>
                  <span>Рыбы, 12 марта&nbsp;— 18 апреля</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Открытие Тайн Зодиака: Путешествие в Мир Звезд</h3>
          <ol>
            <li>
              <strong>Врата в Мистический Мир:</strong> Знаки зодиака – это
              врата в мистический мир, где каждый сектор представляет уникальные
              аспекты человеческого опыта. Погрузитесь в этот удивительный мир и
              обретите новое понимание о себе и окружающем мире.
            </li>
            <li>
              <strong>История и Традиции:</strong> Знаки зодиака имеют богатую
              историю и традиции, уходящие корнями в древние времена. Изучение
              их позволяет нам проникнуть в глубины человеческой культуры и
              мудрости.
            </li>
            <li>
              <strong>Ключ к Личностному Развитию:</strong> Каждый знак зодиака
              несет в себе уникальные качества и характеристики, которые могут
              помочь нам в личностном росте и самопознании. Разберитесь, какой
              знак вас вдохновляет и что он может вам дать.
            </li>
            <li>
              <strong>Связь с Космосом:</strong> Знаки зодиака связывают нас с
              космосом и его законами. Изучение их помогает нам почувствовать
              себя частью вселенной и понять глубокие взаимосвязи между нами и
              звездами.
            </li>
            <li>
              <strong>Символизм и Магия:</strong> Каждый знак зодиака обладает
              своим уникальным символизмом и магией, которая помогает нам
              раскрыть потенциал нашей души и обрести гармонию с миром вокруг.
            </li>
            <li>
              <strong>Руководство в Жизни:</strong> Знаки зодиака могут стать
              вашими руководителями в жизни, подсказывая вам верный путь и
              помогая преодолевать трудности на пути к успеху и счастью.
            </li>
            <li>
              <strong>Энергетика и Вибрации:</strong> Каждый знак зодиака
              обладает своей уникальной энергетикой и вибрациями, которые могут
              повлиять на наше состояние и настроение. Узнайте, как они могут
              влиять на вашу жизнь.
            </li>
            <li>
              Звездные Путешествия: Погрузитесь в звездные путешествия с помощью
              знаков зодиака и обнаружьте новые горизонты возможностей и путей
              развития.
            </li>
            <li>
              <strong>Искусство Прогнозирования:</strong> Астрология – это
              искусство прогнозирования, основанное на изучении знаков зодиака.
              Познайте тайны и методы этого древнего искусства и примените их
              для улучшения своей жизни.
            </li>
            <li>
              <strong>Гармония и Баланс:</strong> Изучение знаков зодиака
              помогает нам обрести гармонию и баланс в жизни, понять свои
              сильные и слабые стороны, и направить свою энергию в нужное русло
              для достижения жизненных целей.
            </li>
          </ol>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}
