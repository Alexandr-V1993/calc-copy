"use client";

import { useEffect, useState } from "react";
import HeaderModal from "../components/NewModal";
import Footer from "../components/Footer";
import "./nds.css";
import Contents from "../components/Contents";
function Nds() {
  const [rate, setRate] = useState("");
  const [mode, setMode] = useState("allocate");
  const [amount, setAmount] = useState("");
  const [total, setTotal] = useState("");
  const [beforeAmount, setBeforeAmount] = useState("");
  const [afterAmount, setAfterAmount] = useState("");
  const [vat, setVat] = useState("");

  useEffect(() => {
    setAmount("");
    setRate("");
    setBeforeAmount("");
    setAfterAmount("");
    setVat("");
  }, [mode]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      rate: rate,
      mode: mode,
      amount: amount,
    };

    const response = await fetch(
      "https://boxcalculators.ru/api/calculate/vat",
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
    console.log(responseData);
  };

  useEffect(() => {
    if (total.data?.beforeAmount) {
      setBeforeAmount(total.data?.beforeAmount);
    }
    if (total.data?.vat) {
      setVat(total.data?.vat);
    }
    if (total.data?.afterAmount) {
      setAfterAmount(total.data?.afterAmount);
    }
  }, [total]);

  return (
    <>
      <HeaderModal />

      <section className="topform ">
        <div className="topformdesc">
          <h1>
            Калькулятор <span>НДС</span>
          </h1>
          <p itemprop="description">
            Рассчитайте сумму налога или выделите его из общей стоимости товара
            или услуги.
          </p>
        </div>
        <form
          className="inlinecalculator"
          style={{ wordBreak: "break-all" }}
          onSubmit={handleSubmit}
        >
          <label className="row-2">
            <span>Что сделать</span>
            <div className="select">
              <select
                name="age"
                id="actionnds"
                className="input"
                value={mode}
                onChange={(e) => setMode(e.target.value)}
              >
                <option value="allocate">Выделить НДС</option>
                <option value="accrual">Начислить НДС</option>
              </select>
            </div>
          </label>
          <label className="numrange plusvarrange row-2 stavka">
            <span>Ставка налога</span>
            <input
              type="number"
              className="input"
              id="ntax"
              min="0"
              max="100"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <div className="notation">%</div>
          </label>

          <label className="numrange row-1 labels-width">
            <span>Цена</span>
            <input
              type="number"
              className="input"
              id="nprice"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="notation">р.</div>
          </label>

          <div id="result">
            <p>Расчёт НДС: </p>
            <div className="resultmoreinfo">
              <div className="centre">
                <span className="resspans items1">Без налога:</span>{" "}
                <strong id="resultnet">
                  {new Intl.NumberFormat("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(beforeAmount)}
                </strong>{" "}
                <br />
                <span className="topstest items1">Налог:</span>{" "}
                <strong id="resulttax">
                  {new Intl.NumberFormat("ru-RU", {
                    style: "currency",
                    currency: "RUB",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(vat)}
                </strong>{" "}
                <br />
                <b className="itogotax">
                  <span className="bolted">Итого:</span>{" "}
                  <strong id="resultgross">
                    {new Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }).format(afterAmount)}
                  </strong>
                </b>
              </div>
            </div>
            <p className="resultdopinfo"></p>
          </div>
          <div className="div-button">
            <button className="btns" onSubmit={handleSubmit}>
              Рассчитать
            </button>
          </div>
        </form>
      </section>
      <Contents>
        <h2 id="1">Что такое налог на стоимость?</h2>
        <p className="opredelenie">
          <strong>Налог на стоимость</strong> — это косвенный налог, который
          взимается с продавцов товаров или услуг и включается в конечную цену,
          которую платит покупатель.
        </p>
        <p>
          В этой системе компания собирает налог с клиентов, но платит в бюджет
          только ту часть, которая относится к добавленной ею стоимости. Это
          позволяет избежать двойного налогообложения и точно определить долю
          каждого участника рынка в формировании налоговой базы.
        </p>
        <p>
          Чтобы понять, как работает этот механизм, рассмотрим формулу расчёта
          налога.
        </p>

        <h2>Формула расчета налога</h2>
        <p>Расчёт налога производится по следующей формуле:</p>
        <p className="formula">Налог = Базовая сумма × Ставка налога</p>
        <p>
          Например, если цена товара составляет 100 рублей, а ставка налога —
          20%, то сумма налога будет равна 20 рублям. Таким образом, конечная
          цена составит 120 рублей. Эта формула лежит в основе работы
          онлайн-калькулятора выше.
        </p>

        <p>
          Налог может применяться к разным типам товаров и услуг. Он может быть
          фиксированным или зависеть от категории продукта, региона или типа
          сделки. Калькулятор позволяет быстро рассчитать налог по заданным
          параметрам.
        </p>

        <p>
          Кто платит налог? Обычно плательщиками являются юридические лица и ИП,
          реализующие товары, услуги или получающие предоплату. Однако
          фактически бремя налога несет конечный потребитель, поскольку налог
          уже включен в цену.
        </p>

        <p>
          Как рассчитать налог в России? Применяется стандартная формула:
          <br />
          <span className="formula">
            Налог = Сумма без налога × Ставка / (100 + Ставка)
          </span>
          .
          <br />
          Например, если сумма составляет 1000 рублей, а ставка — 20%, то налог
          будет равен примерно 166,67 рублей. Ставки могут отличаться в
          зависимости от типа продукции или услуги.
        </p>

        <p>
          <a href="/">Выбрать другой калькулятор</a>
        </p>
      </Contents>

      <Footer />
    </>
  );
}

export default Nds;
