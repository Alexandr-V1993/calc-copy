"use client";
import { useState } from "react";
import HeaderModal from "../components/HeaderModal";
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
        "https://calcoffee.ru/api/calculate/number-to-words",
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
            Переведите сумму в виде цифр в сумму прописью - текстом. Сделайте
            расшифровку правильно для договоров и других документов.
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
          Калькулятор &laquo;сумма прописью цифрами&raquo; предназначен для
          перевода цифровых символов в прописные. При заполнении накладных,
          бланков, договоров растет риск орфографических и синтаксических
          ошибок. Использование калькулятора существенно снижает этот риск.
          Пользоваться им очень легко и удобно. Разберем алгоритм действий на
          определенных примерах.
        </p>
        <h2>Как правильно пользоваться калькулятором</h2>
        <p>
          Первым делом необходимо открыть калькулятор. В нем появится
          специальная строка, куда потребуется ввести интересующую сумму
          цифрами. Калькулятор среагирует на заданное значение, мгновенно
          переведет ее и покажет в строке ниже сумму прописью. Чтобы получить
          прописной вариант нужно суммы не требуется дополнительно ничего
          кликать, калькулятор после ввода цифр сделает все сам.
        </p>
        <p>
          Расшифровка прописью указывается в программе в таком виде, в котором
          того требуют документы: рубли всегда записываются прописью, копейки
          цифирными символами. Это правило, которое известно каждому экономисту.
          Заданная сумма указывается с большой буквы. Число, указывающее на
          количество копеек не отделяется точками, запятыми или иными символами.
        </p>
        <p>
          Например: &laquo;Семнадцать тысяч восемьсот пять рублей 91
          копейка&raquo;. Если есть необходимость указать совокупность копеек,
          лучше сделать это через точку либо запятую в составе того же числа.
          Например &laquo;896.56&raquo;.
        </p>
        <p>
          Если нужно перевести прописью сумму без копеек, то нужно просто
          вписать ее без запятых и десятичных показателей. Например
          &laquo;250&nbsp;000&raquo;. Допускается написание таких чисел в виде
          десятичных. Например &laquo;250,00&raquo;. Пробелы при их написании не
          требуются. Калькулятор может предложить несколько вариантов перевода.
          Например &laquo;двести пятьдесят тысяч рублей&raquo;, или
          &laquo;двести пятьдесят тысяч рублей 00 копеек&raquo;.
        </p>
        <p>
          При использовании калькулятора необходимо быть очень внимательным при
          указании исходной суммы в соответствующей строке. Особенно это
          касается случаев, когда нужно указывать большие числа с несколькими
          нулями. Грамотность написания сложных чисел во многом определяет
          достоверность и точность полученного результата.
        </p>
        <p className="p-bottom">&nbsp;</p>
        <p className="p-bottom">
          <a href="/">Выбрать другой калькулятор</a>
        </p>
      </Contents>

      <Footer />
    </>
  );
}

export default Summ;
