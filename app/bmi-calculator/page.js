"use client";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/NewModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import "./imt.css";

function Imt() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const obj = {
    height: height,
    weight: weight,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор"}
        description={
          "Определите, находится ли ваш вес в пределах нормы, с помощью индекса массы тела (ИМТ). Подходит для мужчин, женщин, подростков и детей любого возраста."
        }
        span={"ИМТ"}
      >
        <Form
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/bmi"}
          formTitle={"Ваш ИМТ:"}
          all={" кг/м2"}
        >
          <label className="numrange row-1 van">
            <span>Рост</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              max="250"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <div className="notation">см</div>
          </label>

          <label className="numrange row-1 two">
            <span>Вес</span>
            <input
              type="number"
              className="input"
              id="nweight"
              min="0"
              max="250"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <div className="notation">кг</div>
          </label>
        </Form>

        <Contents>
          <h2>Что такое ИМТ или индекс массы тела?</h2>

          <p>
            Индекс массы тела (<strong>ИМТ</strong>), также известный как Body
            Mass Index (BMI) — это числовое значение, которое используется для
            оценки соответствия массы тела человека его росту. Он рассчитывается
            по формуле:
          </p>

          <p className="formula">ИМТ = масса тела (кг) / (рост в метрах)²</p>

          <p>
            Например, если вы мужчина с ростом 185 см (1,85 м) и весом 85 кг,
            расчёт будет следующим:
          </p>
          <p className="example">
            <span className="page-bolt">85 / (1,85 × 1,85) = 24,8</span>
          </p>

          <p>Для женщины с ростом 165 см (1,65 м) и весом 55 кг:</p>
          <p className="example">
            <span className="page-bolt">55 / (1,65 × 1,65) = 20,2</span>
          </p>

          <p>Расчёт ИМТ для ребёнка с весом 25 кг и ростом 125 см:</p>
          <p className="example">
            <span className="page-bolt">25 / (1,25 × 1,25) = 16</span>
          </p>

          <p>
            Ошибки в расчётах часто возникают из-за неправильного перевода
            сантиметров в метры. Будьте внимательны при вводе данных.
          </p>

          <h3>Как интерпретировать результат ИМТ?</h3>
          <p>
            Полученное значение позволяет оценить общее состояние массы тела:
          </p>

          <ul>
            <li>
              <span className="page-bolt">Ниже 18,5</span> — недостаточный вес.
            </li>
            <li>
              <span className="page-bolt">18,5–24,9</span> — нормальная масса
              тела.
            </li>
            <li>
              <span className="page-bolt">25–29,9</span> — избыточный вес
              (предожирение).
            </li>
            <li>
              <span className="page-bolt">30 и выше</span> — ожирение (I, II или
              III степень).
            </li>
          </ul>

          <p>
            Это упрощённая шкала, которая может использоваться как ориентир.
            Однако важно помнить, что ИМТ не учитывает такие факторы, как
            мышечная масса, пол, возраст и телосложение.
          </p>

          <p>
            Недостаточная масса тела может быть связана с риском развития
            заболеваний, таких как диабет, сердечно-сосудистые болезни,
            остеопороз и другие. Избыточный вес повышает вероятность гипертонии,
            сахарного диабета 2 типа, атеросклероза и прочих состояний.
          </p>

          <h3>Важные замечания:</h3>
          <p>
            Для детей и подростков значения ИМТ интерпретируются с учётом
            возрастных норм и пола. Также рекомендуется использовать
            дополнительные методы оценки здоровья: измерение процента жира,
            биоимпедансный анализ и консультации со специалистами.
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

export default Imt;
