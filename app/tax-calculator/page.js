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

    const response = await fetch("https://calcoffee.ru/api/calculate/vat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

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
            Выделите сумму НДС из цены или рассчитайте, какой налог нужно
            прибавить.
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
        <h2 id="1">Понятие НДС или «налога на добавленную стоимость»</h2>
        <p className="opredelenie">
          <strong>НДС (налог на добавленную стоимость)</strong> — это налог,
          включенный в стоимость товаров или услуги и перечисляемый в бюджет
          государства как доля добавочной стоимости, созданной в процессе
          производства.
        </p>
        <p>
          Таким образом, покупатель фактически оплачивает этот налог компании, а
          компания передает его государству. Этот метод расчета и взимания
          налога называется косвенным.
        </p>
        <p>
          Однако стоит отметить, что компания уплачивает не весь налог, а
          исключительно ту его часть, которая связана с добавленной стоимостью,
          внесенной компанией в товар. Для более полного понимания этого
          процесса следует обратиться к формуле расчета НДС.
        </p>
        <h2>Формула расчета НДС</h2>
        <p>
          В упрощенной форме формула расчета НДС представляет собой следующее:
        </p>
        <p className="formula">НДС = налоговая база × налоговая ставка</p>
        <p>
          Например, если компания самостоятельно произвела товар, не закупая
          материалы, и планирует получить за его продажу 100 рублей с налоговой
          ставкой 20%, то НДС составит 100 рублей на 20%, что равно 20 рублям.
          Эти 20 рублей добавляются к исходным 100 рублям, формируя
          окончательную цену товара в размере 120 рублей. Именно этой формулой
          оперирует калькулятор, размещенный выше.
        </p>
        <p>
          Налог на добавленную стоимость (НДС) является косвенным налогом,
          взимаемым с продавцов товаров и услуг. НДС облагает разницу между
          выручкой от продаж и затратами на закупку или производство товаров,
          работ или услуг. Идея НДС заключается в том, что налог изначально
          рассчитывается от общей стоимости товара, работы или услуги, а затем
          вычитается сумма налога, уплаченная поставщиками. В результате
          оплачивается налог только на добавленную стоимость.
        </p>
        <p>
          Кто оплачивает НДС? Плательщиками НДС являются компании и
          предприниматели, реализующие товары, работы, услуги или передающие
          права на имущество, а также получающие предоплату за них. При этом
          могут быть плательщиками НДС как продавцы, так и покупатели.
        </p>
        <p>
          Как рассчитать НДС в России? Расчет НДС осуществляется по формуле: НДС
          = Стоимость товаров * НДС ставка / (100% + НДС ставка). Например, если
          стоимость товаров составляет 1000 рублей, а ставка НДС - 20%, то НДС
          будет равен 166,67 рублей (1000 * 20% / (100% + 20%)). Ставки НДС
          могут различаться в зависимости от типа товара или услуги.
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
