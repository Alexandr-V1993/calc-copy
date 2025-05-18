"use client";
import { useState } from "react";
import HeaderModal from "../components/NewModal";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import "./summ.css";

function Summ() {
  const [total, setTotal] = useState("");
  const [amount, setAmount] = useState("");
  const [clip, setClip] = useState("Скопировать");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      amount: amount,
    };

    try {
      const response = await fetch(
        "https://boxcalculators.ru/api/calculate/number-to-words",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();

      setTotal(responseData);
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      total?.data?.amount.charAt(0).toUpperCase() + total?.data?.amount.slice(1)
    );
    setClip("Скопировано");
  };

  return (
    <>
      <HeaderModal />

      <section className="topform">
        <div className="topformdesc">
          <h1>
            Сумма <span>прописью</span>
          </h1>
          <p itemprop="description">
            Преобразуйте числа в текст — быстро и точно. Используйте результат
            для договоров, счетов и официальных документов.
          </p>
        </div>
        <form className="inlinecalculator formsum" onSubmit={handleSubmit}>
          <label className="numrange row-1 input-width">
            <span>Введите сумму числом</span>
            <input
              type="number"
              className="input num"
              id="nage"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="notation">р.</div>
          </label>

          <label className="numrange row-1"></label>

          <div id="result">
            <p className="sum">Сумма прописью:</p>
            <div>
              {total?.data?.amount &&
                total?.data?.amount.charAt(0).toUpperCase() +
                  total?.data?.amount.slice(1)}
            </div>
            <p className="resultdopinfo ">
              <span
                id="copypass"
                className="copybutton"
                onClick={handleCopy}
                style={{ color: clip === "Скопировано" ? "#27d827" : "grey" }}
              >
                {clip}
              </span>
            </p>
          </div>
          <div className="div-button">
            <button className="btns" type="submit">
              Рассчитать
            </button>
          </div>
        </form>
      </section>

      <Contents>
        <p>
          Этот инструмент предназначен для перевода цифровых значений в формат
          текстовой записи. Он особенно полезен при заполнении финансовых,
          юридических и бухгалтерских документов, где важно соблюдать точность и
          соответствие стандартам оформления.
        </p>

        <h2>Как использовать калькулятор</h2>
        <p>
          Чтобы начать, откройте калькулятор и введите сумму в соответствующее
          поле. Программа автоматически преобразует число в текстовую форму,
          отображая результат ниже. Нет необходимости нажимать дополнительные
          кнопки — всё происходит мгновенно.
        </p>

        <p>
          Текстовая расшифровка соответствует требованиям документооборота:
          рубли указываются прописью, а копейки — в цифровом виде. Например:
        </p>

        <blockquote>
          «Семнадцать тысяч восемьсот пять рублей 91 копейка»
        </blockquote>

        <p>
          Если сумма указывается без копеек, вы можете ввести её как целое число
          (например, «250000») или в десятичном формате («250000.00»,
          «250 000»). Пробелы и разделители не обязательны — калькулятор
          корректно обработает любую запись.
        </p>

        <h3>Варианты вывода:</h3>
        <ul>
          <li>Двести пятьдесят тысяч рублей</li>
          <li>Двести пятьдесят тысяч рублей 00 копеек</li>
        </ul>

        <p>
          При вводе больших чисел рекомендуется быть внимательным, чтобы
          избежать ошибок. Качественный перевод напрямую зависит от правильности
          исходных данных.
        </p>

        <p className="p-bottom">
          <a href="/">Выбрать другой калькулятор</a>
        </p>
      </Contents>

      <Footer />
    </>
  );
}

export default Summ;
