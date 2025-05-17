"use client";

import { useReducer, useState } from "react";

import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import "./percent.css";

function PercentNum() {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const [d, setd] = useState("");
  const obj = {
    a: Number(a),
    b: Number(b),
    c: Number(c),
    d: Number(d),
    type: "brahmagupta",
  };
  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Часто возникает потребность узнать площадь помещения. Это можно сделать самостоятельно или воспользоваться онлайн калькулятором для расчета."
        }
        span={"площади комнаты"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/area"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <div className="test-input">
                  <div className="content">
                    <label className="numrange">
                      <span>
                        Сторона <span className="red"> (A)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={a}
                        onChange={(e) => seta(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Сторона<span className="red"> (B)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="waist"
                        required
                        value={b}
                        onChange={(e) => setb(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Сторона<span className="red"> (C)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="hips"
                        required
                        value={c}
                        onChange={(e) => setc(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Сторона<span className="red"> (D)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="hips"
                        required
                        value={d}
                        onChange={(e) => setd(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <h2>Основная формула для прямоугольных и квадратных комнат</h2>
          <p>
            Для расчета площади прямоугольной или квадратной комнаты
            используется простая формула:
          </p>
          <p className="formula">Площадь = Длина × Ширина</p>
          <p>
            Например, если длина комнаты составляет 5 метров, а ширина - 4
            метра, то площадь будет равна:
          </p>
          <p className="formula">5м × 4м = 20м²</p>

          <h2>Расчет площади комнат сложной формы</h2>
          <p>
            Если комната имеет нестандартную форму, её можно разделить на
            несколько прямоугольников и вычислить площадь каждого из них
            отдельно. Затем, суммировав полученные площади, вы получите общую
            площадь комнаты.
          </p>

          <h3>Пример сложной комнаты</h3>
          <p>
            Предположим, у вас комната в форме буквы «Г». Разделите её на два
            прямоугольника. Первый имеет размеры 4 м на 3 м, второй – 2 м на 3
            м. Площадь первого:
          </p>
          <p className="formula">4м × 3м = 12м²</p>
          <p className="centre-p">Площадь второго:</p>
          <p className="formula">2м × 3м = 6м²</p>
          <p className="centre-p">Общая площадь:</p>
          <p className="formula">12м² + 6м² = 18м²</p>

          <h2>Использование онлайн-калькулятора</h2>
          <p>
            Онлайн-калькуляторы площади комнаты значительно упрощают процесс
            вычисления. Вам нужно только ввести длину и ширину каждой части
            комнаты, и калькулятор автоматически произведёт все расчёты.
          </p>

          <h2>Преимущества онлайн-калькуляторов</h2>
          <p>
            Основные преимущества использования онлайн-калькуляторов включают
            быстроту, точность и удобство. Вы можете использовать такие
            калькуляторы на любом устройстве с доступом в интернет, что
            позволяет быстро получить результаты, не прибегая к ручным расчетам.
          </p>

          <h2>Дополнительные функции калькуляторов</h2>
          <p>
            Многие онлайн-калькуляторы также предлагают дополнительные функции,
            такие как вычисление периметра, определение объема помещения и
            расчет площади стен для покраски или оклейки обоями. Это делает их
            универсальными инструментами для планирования ремонта.
          </p>

          <h2>Как выбрать калькулятор</h2>
          <p>
            При выборе онлайн-калькулятора площади комнаты обращайте внимание на
            его функциональность, простоту использования и наличие отзывов
            пользователей. Хороший калькулятор должен иметь интуитивно понятный
            интерфейс и предоставлять точные результаты.
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
