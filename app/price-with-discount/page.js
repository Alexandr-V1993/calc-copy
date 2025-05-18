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
          "Онлайн калькулятор скидок: узнайте окончательную цену после применения скидки, размер скидки в процентах или исходную стоимость товара. Просто введите данные и получите точный результат за секунды."
        }
        span={"скидок"}
      >
        <DiscountForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/discount"}
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
          <h2 className="tops-content">Как рассчитать скидку от суммы?</h2>

          <p>
            Калькулятор скидок — это удобный онлайн-инструмент, который
            позволяет быстро определить:
          </p>

          <ul>
            <li>размер скидки в рублях и процентах;</li>
            <li>
              окончательную цену товара или услуги после применения скидки;
            </li>
            <li>
              исходную сумму до скидки, если известны цена со скидкой и процент
              скидки.
            </li>
          </ul>

          <p>
            Просто введите начальную цену и процент скидки — калькулятор
            мгновенно выдаст результат. Инструмент одинаково удобен как для
            покупателей, так и для продавцов.
          </p>

          <h3>Возможности калькулятора:</h3>
          <ul>
            <li>
              <strong>Рассчитать финальную цену:</strong> зная исходную сумму и
              размер скидки;
            </li>
            <li>
              <strong>Узнать процент скидки:</strong> если вы знаете начальную и
              конечную цены;
            </li>
            <li>
              <strong>Найти первоначальную цену:</strong> при известной цене со
              скидкой и процентном значении.
            </li>
          </ul>

          <p>
            Этот инструмент идеально подходит для быстрого расчёта при покупках,
            в маркетинговых задачах, а также в розничном и интернет-бизнесе. Он
            экономит время, минимизирует ошибки и помогает принимать более
            обоснованные финансовые решения.
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

export default Discount;
