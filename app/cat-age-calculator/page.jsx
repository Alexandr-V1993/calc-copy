"use client";

import { useState } from "react";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";
import "./percent.css";

function PercentNum() {
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const obj = {
    months: Number(months) || 0,
    years: Number(years) || 0,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор возраста кошки"}
        description={
          "Узнайте, сколько лет вашей кошке по человеческим меркам. Наш калькулятор точно переводит кошачий возраст в человеческий, учитывая все этапы жизни питомца."
        }
        span={""}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/cat-age"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <div className="test-input">
                  <div className="content">
                    <span className="w-cat">Возраст кошки</span>
                    <div className="f-cat">
                      <label className="numrange">
                        <span>Годы</span>
                        <input
                          type="number"
                          className="input"
                          value={years}
                          onChange={(e) => setYears(e.target.value)}
                          min="0"
                          max="30"
                          placeholder="0"
                        />
                      </label>
                      <label className="numrange">
                        <span>Месяцы</span>
                        <input
                          type="number"
                          className="input"
                          name="months"
                          value={months}
                          onChange={(e) => setMonths(e.target.value)}
                          min="0"
                          max="11"
                          placeholder="0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <h2>Как работает калькулятор возраста кошки?</h2>
          <p>
            Наш калькулятор использует научно обоснованный метод перевода
            кошачьего возраста в человеческие годы. В отличие от простого
            умножения на 7, мы учитываем:
          </p>

          <ul>
            <li>Быстрое взросление котят в первые 2 года жизни</li>
            <li>Разные скорости старения у молодых и пожилых кошек</li>
            <li>Физиологические изменения на каждом этапе жизни</li>
          </ul>

          <h3>Таблица соответствия возрастов</h3>
          <table className="age-table">
            <thead>
              <tr>
                <th>Возраст кошки</th>
                <th>Человеческий возраст</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 месяц</td>
                <td>6 месяцев</td>
              </tr>
              <tr>
                <td>6 месяцев</td>
                <td>10 лет</td>
              </tr>
              <tr>
                <td>1 год</td>
                <td>15 лет</td>
              </tr>
              <tr>
                <td>2 года</td>
                <td>24 года</td>
              </tr>
              <tr>
                <td>4 года</td>
                <td>32 года</td>
              </tr>
              <tr>
                <td>6 лет</td>
                <td>40 лет</td>
              </tr>
              <tr>
                <td>10 лет</td>
                <td>56 лет</td>
              </tr>
              <tr>
                <td>15 лет</td>
                <td>76 лет</td>
              </tr>
            </tbody>
          </table>

          <h3>Почему важно знать возраст кошки?</h3>
          <p>Понимание реального возраста вашего питомца помогает:</p>
          <ul>
            <li>Правильно подбирать питание и уход</li>
            <li>Своевременно выявлять возрастные заболевания</li>
            <li>Адекватно оценивать физические возможности кошки</li>
            <li>Подбирать соответствующие возрасту игры и нагрузки</li>
          </ul>

          <a href="/">Выбрать другой калькулятор</a>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default PercentNum;
