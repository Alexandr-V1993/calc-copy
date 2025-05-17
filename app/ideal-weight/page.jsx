"use client";

import { useState } from "react";

import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import "./percent.css";

function PercentNum() {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(20);
  const [gender, setGender] = useState("male"); // Установить по умолчанию "male"
  const obj = {
    height: Number(height),
    weight: Number(weight),
    age: Number(age),
    gender: gender,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Определение идеального веса является ключевым аспектом здорового образа жизни, помогая человеку поддерживать оптимальный индекс массы тела. Наш инструмент позволит вам вычислить приблизительный идеальный вес, учитывая ваш пол, возраст и рост."
        }
        span={"идеального веса"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/ideal-weight"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <div className="test-input">
                  <div className="content">
                    <label className="inline">
                      <span> Пол:</span>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        defaultChecked // Установить выбранным по умолчанию
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Мужской
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={(e) => setGender(e.target.value)}
                      />{" "}
                      Женский
                    </label>
                    <label className="numrange">
                      <span>
                        Рост <span className="red"> (см)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                      />
                    </label>
                    <label className="numrange">
                      <span>
                        Текущий Вес
                        <span className="red"> (кг)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="waist"
                        required
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </label>
                    <label className="numrange">
                      <span>
                        Возраст <span className="red"> (лет)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="hips"
                        required
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <em>
            Добро пожаловать в наш калькулятор идеального веса, который поможет
            вам определить оптимальный вес для вашего тела с учетом роста,
            возраста и пола. Независимо от того, являетесь ли вы мужчиной или
            женщиной, поддержание здорового веса является ключом к долгой и
            активной жизни.
          </em>

          <h3>Почему важно знать свой идеальный вес?</h3>
          <p>Знание вашего идеального веса может помочь вам:</p>
          <ul>
            <li>Улучшить общее состояние здоровья.</li>
            <li>
              Снизить риск заболеваний, таких как диабет, гипертония и
              сердечно-сосудистые болезни.
            </li>
            <li>Повысить уровень энергии и улучшить самочувствие.</li>
            <li>Улучшить физическую форму и выносливость.</li>
          </ul>

          <h3>Как рассчитывается идеальный вес?</h3>
          <p>
            Наш калькулятор использует общепринятые формулы для определения
            идеального веса. Для мужчин и женщин эти формулы учитывают различные
            физиологические особенности:
          </p>
          <ul>
            <li>
              <strong>Для мужчин:</strong> Идеальный вес мужчин обычно
              рассчитывается с учетом большего объема мышечной массы и меньшего
              процента жира.
            </li>
            <li>
              <strong>Для женщин:</strong> Формулы для женщин учитывают
              естественно более высокий процент жира, необходимого для
              поддержания репродуктивных функций и общего здоровья.
            </li>
          </ul>

          <h3>Полезные советы по поддержанию идеального веса</h3>
          <ul>
            <li>
              <strong>Правильное питание:</strong> Сбалансированное питание с
              учетом всех необходимых макро- и микроэлементов поможет вам
              поддерживать здоровый вес.
            </li>
            <li>
              <strong>Регулярные физические нагрузки:</strong> Умеренные
              упражнения, такие как ходьба, бег, плавание или йога, способствуют
              сжиганию калорий и поддержанию мышечной массы.
            </li>
            <li>
              <strong>Гидратация:</strong> Пить достаточное количество воды
              каждый день важно для всех функций организма, включая метаболизм и
              пищеварение.
            </li>
            <li>
              <strong>Сон:</strong> Качественный сон не менее 7-8 часов в сутки
              играет важную роль в поддержании веса и общего здоровья.
            </li>
            <li>
              <strong>Контроль стресса:</strong> Хронический стресс может
              привести к набору веса, поэтому важно практиковать методы
              расслабления, такие как медитация или дыхательные упражнения.
            </li>
          </ul>

          <h3>Как пользоваться калькулятором</h3>
          <ol>
            <li>
              <strong>Выберите пол:</strong> Укажите ваш пол (мужской или
              женский).
            </li>
            <li>
              <strong>Введите рост:</strong> Укажите ваш рост в сантиметрах.
            </li>
            <li>
              <strong>Введите вес:</strong> Укажите ваш текущий вес в
              килограммах.
            </li>
            <li>
              <strong>Введите возраст:</strong> Укажите ваш возраст в годах.
            </li>
          </ol>
          <p>
            После ввода всех данных нажмите кнопку для расчета, и вы получите
            ваш идеальный вес. Помните, что этот калькулятор предоставляет
            ориентировочные данные, и для получения более точных рекомендаций
            лучше обратиться к врачу или диетологу.
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
