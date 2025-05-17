"use client";
import TopForm from "@/app/components/TopForm";
import HeaderModal from "@/app/components/HeaderModal";
import Footer from "@/app/components/Footer";
import Form from "@/app/components/Form";
import { useState } from "react";
import Contents from "@/app/components/Contents";
import "./moonshiner.css";
import Link from "next/link";
function Areometr() {
  const [volume1, setvolume1] = useState("");
  const [volume2, setVolume2] = useState("");
  const [strength1, setStrength1] = useState("");
  const [strength2, settrength2] = useState("");

  const obj = {
    volume1: Number(volume1),
    volume2: Number(volume2),
    strength1: Number(strength1),
    strength2: Number(strength2),
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор смешивания"}
        description={
          "При смешивании двух разных спиртов разной крепости трудно понять, какой градус будет у конечного продукта. Чтобы знать точный результат, воспользуйтесь калькулятором смешения спиртов"
        }
        span={"спиртов"}
      >
        <Form
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/alcohol-mixing"}
          alcoTitle={"Крепость жидкости:"}
        >
          <label className="numrange row-1 van">
            <span>Объем первой жидкости</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              value={volume1}
              onChange={(e) => setvolume1(e.target.value)}
            />
            <div className="notation">л-в.</div>
          </label>
          <label className="numrange row-1 van">
            <span>Крепость первой жидкости</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              max="100"
              value={strength1}
              onChange={(e) => setStrength1(e.target.value)}
            />
            <div className="notation">°C</div>
          </label>
          <label className="numrange row-1 van">
            <span>Объем второй жидкости</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              value={volume2}
              onChange={(e) => setVolume2(e.target.value)}
            />
            <div className="notation">л-в</div>
          </label>
          <label className="numrange row-1 van">
            <span>Крепость второй жидкости</span>
            <input
              type="number"
              className="input"
              id="nheight"
              min="0"
              max="100"
              value={strength2}
              onChange={(e) => settrength2(e.target.value)}
            />
            <div className="notation">°С</div>
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
            <Link href={"/replacement-sugar"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор замены сахара глюкозой</h5>
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
          <h2 className="top-alco">Смешивание спиртов</h2>
          <p>
            Смешивание напитков с содержанием спирта требует точности и внимания
            к деталям, а процесс весьма схож с разбавлением спирта в воде. Для
            успешного смешивания вам понадобятся определенные инструменты и
            данные:
          </p>
          <ol>
            <li>
              Имейте под рукой стеклянные емкости нужного объема в нужном
              количестве, в зависимости от того, сколько жидкостей вы
              собираетесь смешивать.
            </li>
            <li>
              Используйте лабораторный ареометр, соответствующий ожидаемой
              крепости конечного напитка (например, ареометр АСП-Т 0-60 гр).{" "}
            </li>
            <li>
              Воспользуйтесь термометром с щупом или жидкостным термометром
            </li>
            <li>
              Подготовьте спиртосодержащие жидкости, которые вы планируете
              смешивать.
            </li>
          </ol>
          <h3>Процедура измерений включает в себя следующие шаги:</h3>
          <ol>
            <li>Начните с охлаждения жидкостей в холодильнике на 1-2 часа.</li>
            <li>
              Затем измерьте содержание спирта в каждой емкости при помощи
              ареометра, и внесите результаты в калькулятор.
            </li>
            <li>Укажите точный объем в каждой емкости также в калькуляторе.</li>
            <li>
              Измерьте температуру каждой жидкости при помощи откалиброванного
              термометра.
            </li>
            <li>
              {" "}
              получения результатов в калькуляторе, приступайте к смешиванию.
            </li>
          </ol>
          <p>
            Сам процесс смешивания следует проводить от более крепкой жидкости к
            менее крепкой, например, если в емкости 1 содержится 20% спирта, а в
            емкости 2 - 40%, то следует влить содержимое емкости 2 в емкость 1.
          </p>
          <p>
            При наливании старайтесь поддерживать тонкую струйку, избегая
            воздушных пузырей. После этого аккуратно перемешайте раствор
            стеклянной палочкой, закройте и дайте напитку выстоять в темном и
            прохладном месте 1-2 суток.
          </p>
          <p>
            Важно отметить, что некоторые спиртосодержащие напитки могут
            содержать сахар, патоку и другие подсластители, а также пигменты,
            придающие цвет. Такие жидкости нельзя точно измерить на спиртовое
            содержание с использованием ареометра или спиртометра, за
            исключением случаев, когда они были произведены вами самостоятельно.
            Как определить содержание спирта в домашних винах и других продуктах
            с пигментами и сахарами, читайте в других наших статьях.
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

export default Areometr;
