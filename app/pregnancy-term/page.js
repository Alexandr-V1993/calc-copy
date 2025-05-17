"use client";
import React, { useEffect, useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import PregnancyForm from "./PregnancyForm";
import "./pregnancy.css";

function Pregnancy() {
  const [cycleDate, setCycleDate] = useState(formatDate(new Date()));
  const [cycleDays, setCycleDays] = useState(28);
  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // Функция для локализации и форматирования даты в нужный формат
  function formatLocalizedDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("ru-RU", options).format(date);
  }

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Знание предполагаемой даты родов, известной как ПДР или срок родов, является важным моментом при готовке к рождению ребенка. Рассчитайте срок беременности, основываясь на дате последних месячных."
        }
        span={"беременности"}
      >
        <PregnancyForm
          obj={{ cycleDate, cycleDays }}
          mode={"mode"} // Уточните, что должен быть передан в этом поле
          url={"https://calcoffee.ru/api/calculate/pregnancy"}
        >
          <div className="label-row">
            <div className="row-vans-top"></div>
            <div className="row-vans-bottom">
              <label className="numrange row-1 date">
                <span>Начало последней менструации</span>
                <span className="span-data">
                  ({formatLocalizedDate(cycleDate)})
                </span>
                <input
                  type="date"
                  className="input"
                  value={cycleDate}
                  onChange={(e) => setCycleDate(e.target.value)}
                />
              </label>
              <label className="numrange row-1 van">
                <span>Продолжительность цикла</span>
                <input
                  type="number"
                  className="input"
                  min="0"
                  max="50"
                  value={cycleDays}
                  onChange={(e) => setCycleDays(e.target.value)}
                  required
                />
              </label>
            </div>
          </div>
        </PregnancyForm>

        <Contents>
          <h2>Значимость Калькулятора Предполагаемой Даты Родов (ПДР)</h2>
          <p>
            Калькулятор ПДР - ключевой инструмент для будущих родителей,
            позволяющий определить примерную дату рождения ребенка. Давайте
            рассмотрим несколько цифр и фактов, подтверждающих его значимость:
          </p>
          <h2>80%</h2>
          <p>
            Около 80% беременных женщин рожают в течение 10 дней до или после
            предполагаемой даты родов, указанной калькулятором ПДР.
          </p>
          <h2>±5-7 дней</h2>
          <p>
            Ошибки в определении ПДР при использовании ультразвукового
            исследования составляют примерно ±5-7 дней по сравнению с
            фактической датой родов.
          </p>
          <h2>Нерегулярные Циклы</h2>
          <p>
            Стандартный метод расчета ПДР от первого дня последних месячных
            может быть менее точным у женщин с нерегулярными циклами.
          </p>
          <h2>Точность Ультразвукового Исследования</h2>
          <p>
            Ультразвуковое исследование обычно считается более точным методом
            определения ПДР, чем отсчет от первого дня последних месячных.
          </p>
          <h2>Погрешность и Коррекция</h2>
          <p>
            Важно понимать, что дата родов может измениться в процессе
            беременности из-за различных факторов, таких как поздние
            ультразвуковые исследования или изменения в развитии плода.
          </p>
          <h2>Заключение</h2>
          <p>
            Хотя калькулятор ПДР является полезным инструментом для предсказания
            даты родов, важно помнить о его ограничениях и возможной
            погрешности. Всегда лучше обсуждать любые изменения или вопросы с
            вашим врачом для получения более точной информации о предполагаемой
            дате родов.
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

// Функция для форматирования даты в нужный формат (yyyy-MM-dd)

export default Pregnancy;
