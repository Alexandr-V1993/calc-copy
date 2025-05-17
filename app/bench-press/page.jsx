"use client";

import { useReducer, useState } from "react";

import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import "./percent.css";

function PercentNum() {
  const [reps, setreps] = useState();
  const [weight, setweight] = useState();
  const obj = {
    reps: Number(reps),
    weight: Number(weight),
  };
  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор"}
        description={
          "Профессиональный инструмент для расчета вашего одноповторного максимума (1ПМ) в жиме лежа. Позволяет точно определить максимальный вес, который вы можете поднять один раз, на основе веса штанги и количества выполненных повторений с субмаксимальным весом."
        }
        span={" жима лежа"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/bench-press"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <div className="test-input">
                  <div className="content">
                    <label className="numrange">
                      <span>
                        Вес штанги
                        <span className="red"> (кг)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={weight}
                        min={1}
                        max={500}
                        onChange={(e) => setweight(e.target.value)}
                      />
                    </label>
                    <label className="numrange">
                      <span>
                        Количество повторений
                        <span className="red"> (раз)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="waist"
                        required
                        value={reps}
                        onChange={(e) => setreps(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <h3>Как работает калькулятор 1ПМ?</h3>
          <p>
            Калькулятор использует научно обоснованные формулы для
            прогнозирования вашего максимального веса в жиме лежа на основе
            выполненных вами повторений с меньшим весом.
          </p>

          <h4>Основные формулы расчета:</h4>
          <p className="formula">
            <strong>Формула Бжицки (Brzycki):</strong> 1ПМ = Вес × (36 / (37 -
            Повторения))
          </p>
          <p className="formula">
            <strong>Формула Эпли (Epley):</strong> 1ПМ = Вес × (1 + 0.0333 ×
            Повторения)
          </p>
          <p className="formula">
            <strong>Формула Лэндера (Lander):</strong> 1ПМ = (100 × Вес) /
            (101.3 - 2.67123 × Повторения)
          </p>

          <h4>Рекомендации по использованию:</h4>
          <ul>
            <li>
              Для наиболее точных результатов используйте вес, с которым можете
              выполнить не более 10 повторений
            </li>
            <li>Тестируйте 1ПМ не чаще 1 раза в 4-6 недель</li>
            <li>
              Всегда используйте страховку при попытке установить новый максимум
            </li>
            <li>
              Лучшее время для тестирования - утро, после полноценной разминки
            </li>
          </ul>

          <h4>Как интерпретировать результаты?</h4>
          <p>
            Ваш расчетный 1ПМ - это ориентировочный показатель. Фактический
            максимум может отличаться на ±5% в зависимости от:
          </p>
          <ul>
            <li>Уровня усталости</li>
            <li>Техники выполнения</li>
            <li>Психоэмоционального состояния</li>
            <li>Внешних условий (температура, влажность)</li>
          </ul>

          <h4>Тренировочные зоны на основе 1ПМ:</h4>
          <div className="table-container">
            <table className="one-rm-table">
              <thead>
                <tr>
                  <th>% от 1ПМ</th>
                  <th>Цель тренировки</th>
                  <th>Кол-во повторов</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>85-100%</td>
                  <td>Развитие максимальной силы</td>
                  <td>1-3</td>
                </tr>
                <tr>
                  <td>70-85%</td>
                  <td>Гипертрофия мышц</td>
                  <td>6-12</td>
                </tr>
                <tr>
                  <td>60-70%</td>
                  <td>Развитие силовой выносливости</td>
                  <td>12-20</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ marginTop: "20px" }}>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default PercentNum;
