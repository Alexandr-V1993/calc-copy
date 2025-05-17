"use client";

import { useState } from "react";
import DiscountForm from "./DiscountForm";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "./discount.css";
function Discount() {
  const [mode, setMode] = useState("discountedPrice");
  const [discount, setDiscount] = useState();
  const [discountPercentage, setDiscountPercentage] = useState();
  const [price, setPrice] = useState();

  const obj = {
    discount: discount,
    mode: mode,
    price: price,
  };

  if (mode === "discountPercentage") {
    obj.mode = "discountPercentage";
    delete obj.discount;
    obj.discountedPrice = discountPercentage;
  }
  if (mode === "startingPrice") {
    obj.mode = "startingPrice";

    obj.price = price;
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор скидок – онлайн инструмент для быстрого расчета суммы скидки и ее процентного значения от исходной цены. Позволяет узнать сумму скидки и окончательную цену товара или услуги после применения скидки."
        }
        span={"скидок"}
      >
        <DiscountForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/discount"}
          price={"Цена"}
          disconts={"Скидка: "}
          priceDiscount={"Цена со скидкой: "}
          priceBezScidki={"Цена без скидки: "}
          modeSelect={mode}
          setDiscount={setDiscount}
          setDiscountPercentage={setDiscountPercentage}
          setPric={setPrice}
        >
          <div>
            <select id="what" onChange={(e) => setMode(e.target.value)}>
              <option value="discountedPrice" selected>
                Рассчитать цену со скидкой
              </option>
              <option value="discountPercentage">
                Рассчитать процент скидки
              </option>
              <option value="startingPrice">Рассчитать начальную цену</option>
            </select>
          </div>

          {mode !== "startingPrice" && (
            <label className="numrange row-1">
              <span>Цена</span>
              <input
                type="number"
                className="input"
                id="nprice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <div className="notation">₽</div>
            </label>
          )}
          {mode === "startingPrice" && (
            <label className="numrange row-1">
              <span>Цена со скидкой</span>
              <input
                type="number"
                className="input"
                id="nprice"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <div className="notation">₽</div>
            </label>
          )}
          {mode !== "discountPercentage" && (
            <label className="numrange row-1">
              <span>Скидка</span>
              <input
                type="number"
                className="input"
                id="nprice"
                min={0}
                max={100}
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                required
              />
              <div className="notation">%</div>
            </label>
          )}

          {mode === "discountPercentage" && (
            <label className="numrange row-1">
              <span>Цена со скидкой</span>
              <input
                type="number"
                className="input"
                id="nprice"
                value={discountPercentage}
                onChange={(e) => setDiscountPercentage(e.target.value)}
                required
              />
              <div className="notation">₽</div>
            </label>
          )}
        </DiscountForm>

        <Contents>
          <h2 className="tops-content">Рассчет процента скидки от суммы</h2>
          <p>
            Калькулятор скидок – онлайн инструмент для быстрого расчета суммы
            скидки и ее процентного значения от исходной цены. Позволяет узнать
            сумму скидки и окончательную цену товара или услуги после применения
            скидки.
          </p>
          <p>
            Просто введите начальную сумму и процент скидки, чтобы получить
            результат. Удобен для расчета как фиксированных, так и процентных
            скидок.
          </p>
          <h3>
            Калькулятор скидок предоставляет решение для множества вопросов:
          </h3>
          <ul>
            <li>
              С его помощью можно быстро узнать окончательную стоимость товара
              после применения скидки.
            </li>
            <li>
              Выяснить, какая скидка действует на товар, если известна его
              конечная цена.
            </li>
            <li>
              Определить начальную цену товара, если известна его цена со
              скидкой и размер скидки.
            </li>
          </ul>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Discount;
