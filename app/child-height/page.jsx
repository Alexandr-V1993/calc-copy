"use client";
import React, { useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [gender, setGender] = useState("male");
  const [motherHeight, setMotherHeight] = useState(165);
  const [fatherHeight, setFatherHeight] = useState(185);
  const [tab, setTab] = useState("male");

  const handleTabClick = (tabType) => {
    setTab(tabType);
    setGender(tabType);
  };

  const initial = {
    gender: gender,
    motherHeight: motherHeight,
    fatherHeight: fatherHeight,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор роста"}
        description={
          "Предскажите рост вашего ребенка во взрослом возрасте, используя наш калькулятор на основе роста родителей."
        }
        span={" будущего ребенка"}
      >
        <CalorieForm
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/child-height-predictor"}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="img-flex">
                <span className="color-grey">Пол ребенка</span>
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
                Мальчик
              </span>
              <span
                className={
                  tab === "female" ? "active underline female-underline" : ""
                }
                onClick={() => handleTabClick("female")}
              >
                Девочка
              </span>
            </div>

            <div className="content">
              {tab === "male" && (
                <div className="male">
                  <label className="numrange">
                    <span>
                      Рост папы <span className="red">(см)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={fatherHeight}
                      onChange={(e) => setFatherHeight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Рост мамы <span className="red">(см)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={motherHeight}
                      onChange={(e) => setMotherHeight(e.target.value)}
                    />
                  </label>
                </div>
              )}
              {tab === "female" && (
                <div className="female">
                  <label className="numrange">
                    <span>
                      Рост папы <span className="red">(см)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={fatherHeight}
                      onChange={(e) => setFatherHeight(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Рост мамы <span className="red">(см)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      value={motherHeight}
                      onChange={(e) => setMotherHeight(e.target.value)}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <p>
            Добро пожаловать на наш калькулятор роста будущего ребенка —
            уникальный инструмент, который помогает родителям предсказать, каким
            будет рост их ребенка во взрослом возрасте. Этот калькулятор
            учитывает генетические факторы, такие как рост мамы и папы, и
            предоставляет точный прогноз будущего роста ребенка. Знание этого
            параметра может быть полезно при планировании питания, выбора
            спортивных секций и даже при прогнозировании размера одежды и обуви
            на будущее.
          </p>

          <h2>Как работает калькулятор роста ребенка?</h2>

          <p>
            Наш калькулятор роста ребенка основан на проверенной формуле,
            которая учитывает рост обоих родителей и пол ребенка. Формула
            рассчитывает среднее значение роста родителей с добавлением или
            вычитанием определенного значения в зависимости от пола ребенка.
          </p>

          <h3>Формула расчета роста:</h3>

          <p className="formula">
            <strong>Для мальчиков:</strong>
            <br />
            <code>[(Рост папы + Рост мамы + 13) / 2]</code>
            <br />
            <strong>Для девочек:</strong>
            <br />
            <code>[(Рост папы + Рост мамы - 13) / 2]</code>
          </p>

          <h3>Пример расчета:</h3>

          <p className="formula">
            Если рост папы составляет 185 см, а рост мамы — 165 см:
            <br />
            <strong>Для мальчика:</strong>
            <br />
            [(185 + 165 + 13) / 2] = 181 см
            <br />
            <strong>Для девочки:</strong>
            <br />
            [(185 + 165 - 13) / 2] = 168.5 см
          </p>

          <h2>Полезная информация о росте ребенка</h2>

          <p>
            Рост ребенка зависит не только от генетики, но и от ряда других
            факторов, включая питание, физическую активность и общее состояние
            здоровья. Хотя наш калькулятор предоставляет прогноз, важно помнить,
            что это лишь приблизительная оценка.
          </p>

          <h3>Факторы, влияющие на рост ребенка:</h3>
          <ul>
            <li>
              <strong>Генетика:</strong> Основной фактор, определяющий рост
              ребенка.
            </li>
            <li>
              <strong>Питание:</strong> Сбалансированное питание обеспечивает
              необходимые витамины и минералы для роста.
            </li>
            <li>
              <strong>Физическая активность:</strong> Регулярные упражнения
              стимулируют рост костей и мышц.
            </li>
            <li>
              <strong>Здоровье:</strong> Хронические заболевания или недоедание
              могут негативно влиять на рост.
            </li>
            <li>
              <strong>Сон:</strong> Качественный сон способствует нормальному
              росту и развитию.
            </li>
          </ul>

          <h2>Ограничения и точность прогнозов</h2>

          <p>
            Хотя наш калькулятор роста основан на научных данных и генетических
            исследованиях, следует учитывать, что рост ребенка может
            варьироваться. Факторы окружающей среды и индивидуальные особенности
            также играют значительную роль. Поэтому результаты калькулятора
            следует рассматривать как ориентировочные.
          </p>

          <h2>Часто задаваемые вопросы (FAQ)</h2>

          <h3>1. Насколько точен этот калькулятор?</h3>
          <p>
            Калькулятор предоставляет приблизительный прогноз, основанный на
            генетических данных. Для более точной оценки роста рекомендуется
            проконсультироваться с педиатром.
          </p>

          <h3>2. Могут ли другие факторы повлиять на рост моего ребенка?</h3>
          <p>
            Да, такие факторы, как питание, физическая активность, здоровье и
            качество сна, значительно влияют на рост и развитие ребенка.
          </p>

          <h3>
            3. Можно ли использовать этот калькулятор для определения здоровья
            ребенка?
          </h3>
          <p>
            Нет, калькулятор предназначен только для прогнозирования роста и не
            заменяет медицинскую консультацию. Для оценки здоровья ребенка
            обратитесь к специалисту.
          </p>

          <h2>Почему выбрать наш калькулятор роста?</h2>

          <p>
            Наш калькулятор роста ребенка предлагает простоту использования и
            точность прогнозов, основанных на научных методах. Мы стремимся
            предоставить родителям надежный инструмент для планирования и
            понимания развития их детей. Используйте наш калькулятор как часть
            вашего общего подхода к заботе о здоровье и благополучии вашего
            ребенка.
          </p>

          <h2>Сноски</h2>
          <ol>
            <li>
              <strong>Формула:</strong> Mid-Parental Height Formula —
              общепринятая формула для прогнозирования роста ребенка на основе
              роста родителей.
            </li>
            <li>
              <strong>Исследования:</strong> Данные формулы основаны на
              исследованиях, проводившихся в области генетики и педиатрии,
              подтверждающих связь между ростом родителей и ребенка.
            </li>
            <li>
              <strong>Ограничения:</strong> Прогнозы не учитывают все возможные
              факторы, влияющие на рост, такие как заболевания или генетические
              отклонения.
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

export default Compound;
