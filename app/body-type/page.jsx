"use client";

import { useReducer, useState } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import "./percent.css";

function PercentNum() {
  const [bust, setbust] = useState(); //груди
  const [hips, sethips] = useState(); //бедра
  const [waist, setwaist] = useState(); //талия
  const obj = {
    bust: Number(bust),
    hips: Number(hips),
    waist: Number(waist),
  };
  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Каждая женщина стремится верить в то, что её фигура безупречна, но существует ли в реальности такой идеал? Известные модельные параметры 90x60x90 часто считаются стандартом на подиуме, однако и они со временем теряют свою актуальность. К тому же, на протяжении истории человечества представления о «совершенной» женской фигуре неоднократно кардинально изменялись."
        }
        span={"типа фигуры"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/body-shape"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <div className="test-input">
                  <div className="content">
                    <label className="numrange">
                      <span>
                        Обхват груди <span className="red"> (см)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={bust}
                        onChange={(e) => setbust(e.target.value)}
                      />
                      <div className="notation">см</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Обхват талии <span className="red"> (см)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="waist"
                        required
                        value={waist}
                        onChange={(e) => setwaist(e.target.value)}
                      />
                      <div className="notation">см</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Обхват бедер <span className="red"> (см)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="hips"
                        required
                        value={hips}
                        onChange={(e) => sethips(e.target.value)}
                      />
                      <div className="notation">см</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <h2>Основных типов фигуры выделяется пять:</h2>
          <img className="img-body" src="/body-type.jpg" alt="фигуры" />

          <ul>
            <li>
              <strong>Песочные часы</strong> - тип, о котором мы слышим с
              телеэкранов, самый желанный и привлекательный. Его
              характеристиками являются равные грудь и бедра с четко выраженной
              узкой талией, отсюда и схожесть с одноименным предметом.
            </li>
            <li>
              <strong>Треугольник или груша</strong> - грушу часто путают с
              песочными часами, но для этого типа характерен более массивный низ
              при узкой талии и хрупких плечах. Завидной обладательницей груши
              является всем известная Ким Кардашьян.
            </li>
            <li>
              <strong>Перевернутый треугольник</strong> - такая модель фигуры
              присуща спортивным девушкам, но нередко закладывается и от
              природы. Этот тип называют еще "атлетичным" за счет схожести с
              мужской фигурой - широкие плечи и узкий таз.
            </li>
            <li>
              <strong>Прямоугольник</strong> - грудь и бедра имеют одинаковые
              охваты, а талия практически не выражена или не выделяется вовсе.
              Фигура действительно выглядит совершенно прямоугольной, без
              выраженных отдельных форм.
            </li>
            <li>
              <strong>Яблоко или круг</strong> - такой тип фигуры
              характеризуется пышностью в верхней части - грудь, живот, руки, но
              при стройных зачастую ногах. К сожалению, свидетельствует такое
              положение дел о наличии избыточного веса и опасного жирового
              фартука вокруг талии.
            </li>
          </ul>

          <table className="body-shape-table">
            <thead>
              <tr>
                <th>Тип фигуры</th>
                <th>Основные характеристики</th>
                <th>Примеры знаменитостей</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Песочные часы</td>
                <td>Равные грудь и бедра, узкая талия</td>
                <td>Изабель Гулар, Скарлетт Йоханссон</td>
              </tr>
              <tr>
                <td>Треугольник (груша)</td>
                <td>
                  Узкая талия, более массивные бедра по сравнению с плечами
                </td>
                <td>Ким Кардашьян, Дженнифер Лопес</td>
              </tr>
              <tr>
                <td>Перевернутый треугольник</td>
                <td>Широкие плечи, узкий таз, спортивная фигура</td>
                <td>Кейт Аптон, Серена Уильямс</td>
              </tr>
              <tr>
                <td>Прямоугольник</td>
                <td>
                  Равные охваты груди, талии и бедер, мало выраженная талия
                </td>
                <td>Кейт Мосс, Кейт Хадсон</td>
              </tr>
              <tr>
                <td>Яблоко (круг)</td>
                <td>
                  Пышная верхняя часть тела, меньше выраженные бедра и ноги
                </td>
                <td>Мелисса МакКарти, Опра Уинфри</td>
              </tr>
            </tbody>
          </table>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default PercentNum;
