"use client";
import TopForm from "@/app/components/TopForm";
import HeaderModal from "@/app/components/NewModal";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import { useState } from "react";
import Contents from "@/app/components/Contents";
import "./replacement.css";
import Link from "next/link";
function Replacement() {
  const [weight, setWeight] = useState("");

  const obj = {
    weight: Number(weight),
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор замены "}
        description={
          "Калькулятор позволяет определить необходимое количество глюкозы, чтобы без потерь крепости напитка заменить сахар глюкозой придав ему полезных свойств."
        }
        span={"сахара глюкозой"}
      >
        <Form
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/glucose-sugar-replacement"}
          alcoTitle={"Потребуется глюкозы кг. : "}
        >
          <label className="numrange row-1 van">
            <span>Количество сахара</span>
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
            <Link href={"/head-selection"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор абсолютного спирта и отбора голов</h5>
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
          <h2 className="top-alco">Замена сахара глюкозой</h2>
          <p>
            Использование калькулятора для замены сахара глюкозой в
            самогоноварении представляет собой стратегию уменьшения содержания
            обычного сахара в алкогольных напитках. Глюкоза становится
            альтернативой для тех, кто стремится сократить влияние сахара на
            процесс брожения и получить самогон с более чистым или нейтральным
            вкусом.
          </p>
          <p>
            Калькулятор помогает точно определить необходимое количество глюкозы
            для замены сахара без потери крепости напитка, придавая ему
            дополнительные положительные свойства
          </p>
          <p>
            Декстроза, известная также как фруктоза или глюкоза, обладает
            сладким вкусом и отличается от обычного сахара благодаря своей
            простой молекулярной структуре, что делает ее моносахаридом.
          </p>
          <p>
            Замена сахара глюкозой или фруктозой обоснована тем, что упрощает
            питание дрожжей, ускоряет процесс брожения и снижает количество
            побочных продуктов. Такая оптимизация процесса брожения способствует
            получению более чистого конечного продукта.
          </p>
          <h2>Часто задаваемые вопросы:</h2>
          <ol>
            <li>
              <h3>Как влияет глюкоза на вкус и качество самогона?</h3>
              <p>
                Глюкоза может придать самогону более нейтральный вкус и оказать
                влияние на текстуру напитка, создавая более гладкий и мягкий
                вкус.
              </p>
            </li>
            <li>
              <h3>
                Могу ли я использовать другие заменители сахара вместо глюкозы?
              </h3>
              <p>
                Да, некоторые самогонщики экспериментируют с другими
                заменителями сахара, такими как фруктоза или мед. Однако важно
                учитывать, что каждый заменитель может повлиять на процесс
                брожения, вкус и аромат напитка.
              </p>
            </li>
            <li>
              <h3>Что лучше: декстроза или сахар?</h3>
              <p>
                С химической точки зрения, декстроза обладает такой же
                эффективностью, как и обычный сахар, но при этом она ускоряет
                процесс брожения и придает конечному напитку более мягкий вкус,
                чем классический сахар.
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

export default Replacement;
