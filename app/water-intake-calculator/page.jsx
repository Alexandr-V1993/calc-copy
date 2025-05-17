"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";
import { number } from "mathjs";

function Water() {
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null); // Добавлено состояние для роста
  const [activity, setActivity] = useState("sedentary");
  const [tab, setTab] = useState("male");
  const [initial, setInitial] = useState({
    age: null,
    weight: null,

    gender: "male",
    activity: "sedentary",
  });

  useEffect(() => {
    setInitial({
      age: Number(age),
      weight: Number(weight),

      gender: tab,
      activity: activity,
    });
  }, [age, weight, tab, activity]);

  const handleTabClick = (tabType) => {
    setTab(tabType);
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор суточного"}
        description={
          "Калькулятор воды поможет рассчитать оптимальное количество жидкости, помимо чая, кофе, соков или других напитков, необходимое для поддержания водного баланса."
        }
        span={" потребления воды"}
      >
        <CalorieForm
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/water-intake"}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="img-flex">
                <span className="color-grey">Пол </span>
                <span>
                  <img src="/baby2.png" alt="пол ребенка" />
                </span>
              </div>
              <span
                className={
                  tab === "male" ? "active underline male-underline" : ""
                }
                onClick={() => handleTabClick("male")}
              >
                Мужской
              </span>
              <span
                className={
                  tab === "female" ? "active underline female-underline" : ""
                }
                onClick={() => handleTabClick("female")}
              >
                Женский
              </span>
            </div>

            <div className="content">
              {(tab === "male" || tab === "female") && (
                <div className="male">
                  <label className="numrange">
                    <span>
                      Возраст <span className="red">(лет)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={age || ""}
                      onChange={(e) => setAge(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Рост <span className="red">(см)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={height || ""}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Вес <span className="red">(кг)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={weight || ""}
                      onChange={(e) => setWeight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>Уровень активности</span>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                    >
                      <option value="sedentary">Сидячий</option>
                      <option value="lightly">Слабо активный</option>
                      <option value="moderately">Умеренно активный</option>
                      <option value="veryActive">Очень активный</option>
                      <option value="extraActive">Экстра активный</option>
                    </select>
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <div>
            <h2>Сколько воды нужно пить ежедневно?</h2>
            <p>
              Вода — это основа жизни человека. Наш организм состоит из воды
              примерно на 70%, что делает её незаменимой для поддержания
              здоровья и жизнедеятельности. В течение дня мы теряем жидкость
              через пот, дыхание и другие процессы, поэтому важно регулярно
              восполнять её запасы.
            </p>

            <h2>Калькулятор ежедневной нормы воды</h2>
            <p>
              С помощью калькулятора воды можно определить оптимальное
              количество жидкости, необходимое для поддержания водного баланса.
              Учитываются такие параметры, как вес, рост, возраст, пол и уровень
              физической активности. Это помогает рассчитать индивидуальную
              норму потребления воды.
            </p>

            <h2>Рекомендации по потреблению воды</h2>
            <p>
              Норма воды зависит от множества факторов: климата, уровня
              физической активности и состояния здоровья. Согласно
              исследованиям, взрослому человеку рекомендуется выпивать от 2 до 3
              литров воды в день. Однако эта цифра может варьироваться в
              зависимости от индивидуальных особенностей.
            </p>

            <h2>Важность гидратации</h2>
            <p>
              Гидратация — это процесс поддержания оптимального уровня жидкости
              в организме. Вода участвует в обмене веществ, регулирует
              температуру тела, поддерживает работу мозга и других органов.
              Недостаток воды может привести к обезвоживанию, которое
              проявляется в виде головных болей, усталости и раздражительности.
            </p>
            <p>
              Чтобы поддерживать водный баланс, важно не только пить воду, но и
              употреблять продукты с высоким содержанием жидкости, такие как
              фрукты и овощи.
            </p>

            <h2>Как рассчитать свою норму воды?</h2>
            <p>
              Существует несколько способов расчёта нормы воды. Один из самых
              популярных методов — это расчёт на основе массы тела и уровня
              активности. Коэффициент активности зависит от вашего образа жизни:
            </p>
            <ul>
              <li>Сидячий образ жизни: 0.2–0.3</li>
              <li>Лёгкая активность (1–3 тренировки в неделю): 0.3–0.5</li>
              <li>Умеренная активность (3–5 тренировок в неделю): 0.5–0.7</li>
              <li>
                Высокая активность (ежедневные тренировки или физическая
                работа): 0.7
              </li>
            </ul>

            <h3>Формула для мужчин:</h3>
            <p>Норма воды = вес тела × 35 × коэффициент активности</p>
            <p>Пример: для мужчины весом 80 кг норма составит 2.8 литра </p>
            <p className="formula">(80 × 35 = 2800 мл).</p>

            <h3>Формула для женщин:</h3>
            <p>Норма воды = вес тела × 31 × коэффициент активности</p>
            <p>
              Пример: для женщины весом 60 кг норма составит около 1.9 литра{" "}
            </p>
            <p className="formula">(60 × 31 = 1860 мл).</p>

            <p>
              Эти расчёты являются ориентировочными и могут не учитывать
              индивидуальные особенности организма. Для более точного
              определения нормы воды рекомендуется проконсультироваться с
              врачом.
            </p>
          </div>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Water;
