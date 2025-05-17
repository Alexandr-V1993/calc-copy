import React, { useState } from "react";
import "./alco.css";

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
  "Крысы",
  "Быка",
  "Тигра",
  "Кролика",
  "Дракона",
  "Змеи",
  "Лошади",
  "Овцы",
  "Обезьяны",
  "Петуха",
  "Собаки",
  "Свиньи",
];

const months = [
  { value: "01", name: "Январь" },
  { value: "02", name: "Февраль" },
  { value: "03", name: "Март" },
  { value: "04", name: "Апрель" },
  { value: "05", name: "Май" },
  { value: "06", name: "Июнь" },
  { value: "07", name: "Июль" },
  { value: "08", name: "Август" },
  { value: "09", name: "Сентябрь" },
  { value: "10", name: "Октябрь" },
  { value: "11", name: "Ноябрь" },
  { value: "12", name: "Декабрь" },
];

const ZodiacForm = ({ handleSubmit }) => {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [selectedZodiac, setSelectedZodiac] = useState("");
  const [chineseZodiac, setChineseZodiac] = useState("");

  const handleZodiacSubmit = (e) => {
    e.preventDefault();
    const birthday = new Date(`${month}-${date}-${year}`);
    const sign = getZodiacSign(birthday);
    const chineseSign = getChineseZodiacSign(year);
    setSelectedZodiac(sign);
    setChineseZodiac(chineseSign);
    handleSubmit(sign);
  };

  const getZodiacSign = (date) => {
    const monthDay = date.getDate();
    const monthIndex = date.getMonth() + 1; // JavaScript months are zero-based
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
    <form className="inlinecalculators" onSubmit={handleZodiacSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">
          <label>
            <span>Год рождения</span>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>
          <label>
            <span>Месяц рождения</span>

            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="">Месяц</option>
              {months.map(({ value, name }) => (
                <option key={value} value={value}>
                  {name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>День рождения</span>

            <input
              type="number"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="btn-top">
        <button className="btns bst" type="submit">
          Вычислить
        </button>
      </div>
      {selectedZodiac && (
        <div id="res">
          <div className="test-res">
            <div className="row-row">
              <p className="resultstring">
                <span id="rw">Знак зодиака :</span>
                <span id="rw">В год :</span>
              </p>
              <p className="resultstring right">
                <span id="resultimt">{selectedZodiac}</span>
                <span id="resultimt"> {chineseZodiac}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ZodiacForm;
