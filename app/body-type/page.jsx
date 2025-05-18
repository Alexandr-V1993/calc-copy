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
          "Узнайте свой тип женской фигуры онлайн — точный расчет и рекомендации по стилю и одежде. Песочные часы, груша, прямоугольник, яблоко или перевернутый треугольник — узнайте, какая форма вам подходит больше всего."
        }
        span={"типа фигуры"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/body-shape"}
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
          <h2>Как определить тип своей фигуры?</h2>

          <p>
            Красота — понятие субъективное, но при этом у каждой женщины есть
            своя уникальная форма тела, которая может быть классифицирована.
            Знание своего типа фигуры поможет подбирать одежду, которая выгодно
            подчеркнет достоинства и скроет недостатки.
          </p>

          <h3>Почему важно знать свой тип фигуры?</h3>

          <p>
            Одеваться красиво — это не про идеальные параметры, а про понимание
            пропорций и формы тела. Зная свой тип фигуры, вы сможете:
          </p>

          <ul>
            <li>Выбирать одежду, которая подчеркнет ваши достоинства;</li>
            <li>Создавать более гармоничные образы;</li>
            <li>Лучше понимать, какие фасоны вам подходят;</li>
            <li>Правильно расставлять акценты в образе.</li>
          </ul>

          <h3>Основные типы женских фигур:</h3>

          <img
            className="img-body"
            src="/body-type.jpg"
            alt="Типы женских фигур"
          />

          <ul>
            <li>
              <strong>Песочные часы</strong> — самая сбалансированная форма.
              Отличается равными объемами бедер и груди, четко выраженной
              талией. Такая фигура считается эталонной, но встречается редко.
            </li>
            <li>
              <strong>Груша (треугольник)</strong> — характеризуется узкими
              плечами и широкими бедрами. Талия обычно выражена. Хорошо
              смотрятся модели с декорированным верхом и лаконичным низом.
            </li>
            <li>
              <strong>Перевернутый треугольник</strong> — широкие плечи и узкие
              бедра. Часто встречается у спортсменок. Акцент стоит делать на
              нижней части тела, чтобы уравновесить силуэт.
            </li>
            <li>
              <strong>Прямоугольник</strong> — почти одинаковые объемы груди,
              талии и бедер. Фигура кажется немного «плоской». Подходят фасоны с
              поясами, драпировками и яркими деталями.
            </li>
            <li>
              <strong>Яблоко (круг)</strong> — основной объем сосредоточен в
              верхней части тела: живот, грудь, руки. Ноги, как правило,
              стройные. Рекомендуется акцентировать внимание на ногах и выбирать
              свободные силуэты.
            </li>
          </ul>

          <h3>Звездные примеры типов фигур</h3>

          <table className="body-shape-table">
            <thead>
              <tr>
                <th>Тип фигуры</th>
                <th>Характеристики</th>
                <th>Известные представительницы</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Песочные часы</td>
                <td>Четко выраженная талия, равные грудь и бедра</td>
                <td>Скарлетт Йоханссон, София Верга</td>
              </tr>
              <tr>
                <td>Груша</td>
                <td>Широкие бедра, узкие плечи</td>
                <td>Ким Кардашьян, Бейонсе</td>
              </tr>
              <tr>
                <td>Перевернутый треугольник</td>
                <td>Широкие плечи, узкий таз</td>
                <td>Кейт Аптон, Серена Уильямс</td>
              </tr>
              <tr>
                <td>Прямоугольник</td>
                <td>Минимальная выраженность талии</td>
                <td>Кейт Мосс, Натали Портман</td>
              </tr>
              <tr>
                <td>Яблоко</td>
                <td>Объем в области талии, стройные ноги</td>
                <td>Опра Уинфри, Мелисса МакКарти</td>
              </tr>
            </tbody>
          </table>

          <h3>Как выбрать стиль под свой тип фигуры?</h3>

          <p>
            Стилисты советуют следовать простым правилам, чтобы подчеркнуть
            преимущества вашей фигуры:
          </p>

          <ul>
            <li>
              <strong>Песочные часы:</strong> Не прячьте талию — используйте
              пояса, облегающие силуэты.
            </li>
            <li>
              <strong>Груша:</strong> Акцентируйте верх — выбирайте интересные
              рукава и вырезы.
            </li>
            <li>
              <strong>Перевернутый треугольник:</strong> Добавьте объем внизу —
              пышные юбки, широкие брюки.
            </li>
            <li>
              <strong>Прямоугольник:</strong> Создавайте форму — используйте
              драпировки и пояса.
            </li>
            <li>
              <strong>Яблоко:</strong> Скрывайте живот — V-образные вырезы,
              длинные кардиганы, высокая посадка.
            </li>
          </ul>

          <h3>Интересные факты о типах фигур</h3>

          <p>
            Интересно, что идеалы красоты менялись на протяжении истории. В
            эпоху Возрождения ценится пышная форма, сегодня — спортивная
            стройность. Но главное — чувствовать себя уверенно и комфортно в
            собственном теле.
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

export default PercentNum;
