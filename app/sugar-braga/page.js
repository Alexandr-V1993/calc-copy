"use client";
import TopForm from "@/app/components/TopForm";
import HeaderModal from "@/app/components/NewModal";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import { useState } from "react";
import Contents from "@/app/components/Contents";
import "./sugar.css";
import Link from "next/link";
function Sugar() {
  const [weight, setWeight] = useState("");
  const [volume, setVolume] = useState("");

  const obj = {
    weight: Number(weight),

    volume: Number(volume),
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор расчета "}
        description={
          "Определите оптимальное содержание алкоголя в браге, учитывая объем воды и вес сахара."
        }
        span={"сахарной браги"}
      >
        <Form
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/alcohol-sugar-braga"}
          alcoTitle={"Долить литров воды:"}
          crepost={"Крепость браги: "}
        >
          <label className="numrange row-1 van">
            <span>Вес сахара</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <div className="notation">кг.</div>
          </label>

          <label className="numrange row-1 two">
            <span>Раствор, вода + сахар (Гидромодуль)</span>
            <input
              type="number"
              className="input"
              id="nweight"
              min="0"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
            <div className="notation">л.</div>
          </label>
        </Form>

        <Contents>
          <ul className="alcohol-list">
            <Link href={"/diluting-alcohol"} className="underline">
              <li className="alcohol-item">
                <h5>Онлайн калькулятор разбавление самогона водой</h5>
              </li>
            </Link>

            <Link href={"/areometer-correction"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор коррекции показаний ареометра</h5>
              </li>
            </Link>
            <Link href={"/head-selection"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор абсолютного спирта и отбора голов</h5>
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
          <h2 className="top-deluting">Зачем нужен расчет сахарной браги??</h2>
          <p>
            Запуская процесс самогоноварения, первым этапом является подготовка
            браги. Качество и состав этого основного компонента напрямую влияют
            на результат и степень чистоты получаемого напитка после
            дистилляции.
          </p>

          <p>
            Неотъемлемым шагом является правильный расчет гидромодуля, который
            определяет соотношение сахара и воды в браге для самогона. Хотя
            общепринятые пропорции варьируются, в большинстве случаев на 1 кг
            сахара приходится 4,5-5 литров воды. Тем не менее, использование
            калькулятора самогонщика позволяет провести точные расчеты, учитывая
            крепость напитка и необходимый объем воды на основе предоставленных
            параметров.
          </p>
          <p>
            При использовании онлайн-калькулятора самогонщика важно учесть
            несколько факторов: количество сахара в кг и объем сахарного
            раствора в литрах. Подбор правильных пропорций особенно важен,
            учитывая, что дрожжи могут быть чувствительны к содержанию спирта.
            Непрофессиональное увеличение крепости может привести к прекращению
            брожения и недостатку спирта в конечном продукте.
          </p>

          <p>
            Онлайн-калькулятор самогонщика для браги не только помогает
            определить оптимальные пропорции, но также предоставляет возможность
            рассчетов для декстрозы - более дорогостоящего и менее эффективного
            варианта сахара. Стоит отметить, что при использовании декстрозы
            дрожжи вырабатывают меньше побочных продуктов, что положительно
            сказывается на качестве конечного дистиллята.
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

export default Sugar;
