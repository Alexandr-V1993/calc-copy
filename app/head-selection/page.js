"use client";
import TopForm from "@/app/components/TopForm";
import HeaderModal from "@/app/components/HeaderModal";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import { useState } from "react";
import Contents from "@/app/components/Contents";
import "./selection.css";
import Link from "next/link";
function Heads() {
  const [heads, setHeads] = useState("");
  const [strength, setStrength] = useState("");
  const [volume, setVolume] = useState("");
  const obj = {
    heads: Number(heads),
    strength: Number(strength),
    volume: Number(volume) * 1000,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор абсолютного спирта и "}
        description={
          "Расчет спирта в самогоне необходим для определения оптимального отбора голов для получения качественного продукта без примесей и воды в конечном продукте, сохранив при этом основную фракцию (тело)."
        }
        span={"отбора голов"}
      >
        <Form
          obj={obj}
          url={
            "https://calcoffee.ru/api/calculate/absolute-alcohol-head-selection"
          }
          alcoTitle={"Объем чистого спирта:"}
          crepost={"Объем «голов»:"}
        >
          <label className="numrange row-1 van">
            <span>Объем спирта-сырца</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <div className="notation">л.</div>
          </label>

          <label className="numrange row-1 two">
            <span>Крепость спирта-сырца</span>
            <input
              type="number"
              className="input"
              id="nweight"
              min="0"
              max="100"
              value={strength}
              onChange={(e) => setStrength(e.target.value)}
            />
            <div className="notation"> °</div>
          </label>
          <label className="numrange row-1 two">
            <span>Доля «голов»</span>
            <input
              type="number"
              className="input"
              id="nweight"
              min="0"
              max="100"
              value={heads}
              onChange={(e) => setHeads(e.target.value)}
            />
            <div className="notation">% от общего объема</div>
          </label>
        </Form>

        <Contents>
          <ul className="alcohol-list">
            <Link href={"/diluting-alcohol"} className="underline">
              <li className="alcohol-item">
                <h5>Онлайн калькулятор разбавление самогона водой</h5>
              </li>
            </Link>
            <Link href={"/sugar-braga"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор расчет сахарной браги</h5>
              </li>
            </Link>
            <Link href={"/areometer-correction"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор коррекции показаний ареометра</h5>
              </li>
            </Link>

            <Link href={"/replacement-sugar"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор замены сахара глюкозой</h5>
              </li>
            </Link>
            <Link href={"/moonshiner-calculator"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор смешивания спиртов</h5>
              </li>
            </Link>
            <Link
              href={"/second-fractional-distillation"}
              className="underline"
            >
              <li className="alcohol-item">
                <h5>
                  Калькулятор второй перегонки спирта сырца и отбора голов и
                  хвостов
                </h5>
              </li>
            </Link>
          </ul>
          <h2 className="top-alco">Расчет абсолютного спирта и отбор голов</h2>
          <p>
            В практике домашнего самогоноварения достичь крепости спирта в 100%
            фактически невозможно из-за наличия различных примесей.
          </p>
          <p>
            Расчет содержания спирта в самогоне необходим для определения
            оптимального отбора "голов" с целью получения качественного
            продукта, избегая примесей и воды в конечном напитке, сохраняя при
            этом основную фракцию (тело). Тем не менее, достижение расчетных
            значений в реальном выходе зависит от выбранного метода перегонки.
          </p>
          <p>
            Проведение самостоятельных расчетов абсолютного спирта теоретически
            возможно, но они могут оказаться недостаточно точными. Применение
            калькулятора отбора "голов" позволяет получить моментальные и
            достоверные результаты, экономя время и усилия.
          </p>
          <p>
            Чтобы определить содержание абсолютного спирта с использованием
            онлайн-калькулятора, необходимо ввести следующие параметры:
          </p>
          <ol>
            <li>Объем спирта-сырца в литрах.</li>
            <li>Крепость спирта-сырца.</li>
            <li>Процент отбора "голов".</li>
          </ol>
          <h2>Часто задаваемые вопросы:</h2>
          <ol>
            <li>
              <h3>Что такое абсолютный спирт?</h3>
              <p>
                Абсолютный спирт представляет собой теоретическое значение,
                отражающее максимально возможную выходную дистилляцию из
                имеющегося сырья.
              </p>
            </li>
            <li>
              <h3> Можно ли получить 100% абсолютный спирт дома? </h3>
              <p>
                Нет, в условиях домашнего производства максимальная крепость
                спирта будет ниже 100% из-за наличия примесей и воды.
              </p>
            </li>
            <li>
              <h3> Зачем проводить расчет алкоголя в самогоне? </h3>
              <p>
                Расчет необходим для определения необходимого отделения "голов"
                с целью получения высококачественного продукта, избавленного от
                примесей и воды.
              </p>
            </li>
            <li>
              <h3>
                {" "}
                Почему результаты фактической дистилляции могут отличаться от
                расчетных значений?{" "}
              </h3>
              <p>
                Фактический выход алкоголя зависит от метода дистилляции,
                поэтому результаты могут отличаться от расчетных значений.
              </p>
            </li>
            <li>
              <h3> Какие преимущества у калькулятора для самогоноварения?</h3>
              <p>
                Калькулятор обеспечивает моментальные и точные результаты,
                экономя время и усилия, которые обычно требуются для
                самостоятельных вычислений.
              </p>
            </li>
            <li>
              <h3>
                {" "}
                Какой вклад вносит отделение "голов" в качество конечного
                продукта?
              </h3>
              <p>
                Отделение "голов" положительно влияет на чистоту конечного
                продукта, предотвращая примеси и воду, что обеспечивает высокое
                качество напитка и уменьшает отрицательное воздействие на
                организм.
              </p>
            </li>
            <li>
              <h3>Что значит "Отбор голов"?</h3>
              <p>
                Процедура отделения легких вредных фракций осуществляется во
                время второй фракционной перегонки исходного спирта. Обычно
                отбирается первые 10-15% от общего объема абсолютного спирта.
              </p>
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

export default Heads;
