"use client";
import React, { useState } from "react";

import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Footer from "../components/Footer";
import Contents from "../components/Contents";
import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [type, settype] = useState("pants");
  const [size, setsize] = useState(40);
  const [height, setheight] = useState(164);
  const [quantity, setquantity] = useState(1);
  const [width, setwidth] = useState(180);
  const [density, setdensity] = useState(240);
  const [cost, setcost] = useState(null);
  const [tab, setTab] = useState("adult");

  const initial = {
    type: type,
    size: size,
    height: height,
    quantity: quantity,
    width: width,
    density: density,
    cost: cost,
    subtype: tab === "adult" ? "adult" : "kid",
  };

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
    if (selectedTab === "kid") {
      setsize(0);
      setheight(50);
    } else {
      setsize(40); // Или другое исходное значение для взрослого
      setheight(164);
    }
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Калькулятор ткани — это полезный инструмент, который позволит начинающим швеям легко определить необходимое количество материала для пошива изделий, а опытным мастерам — избежать использования сложных расчетных таблиц."
        }
        span={"расчета ткани"}
      >
        <CalorieForm
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/fabric"}
        >
          <div className="test-input">
            <div className="tabs">
              <span
                className={tab === "adult" ? "active" : ""}
                onClick={() => handleTabClick("adult")}
              >
                Взрослый
              </span>
              <span
                className={tab === "kid" ? "active" : ""}
                onClick={() => handleTabClick("kid")}
              >
                Ребенок
              </span>
            </div>

            <div className="content">
              {tab === "adult" && (
                <div className="adult">
                  <label className="numrange">
                    <span>Вид одежды</span>
                    <select
                      className="calc-inp w-100"
                      id="type"
                      onChange={(e) => settype(e.target.value)}
                    >
                      <option value="pants">Брюки</option>
                      <option value="turtleneck">Водолазка</option>
                      <option value="t-shirt">Майка</option>
                      <option value="short-sleeve-dress">
                        Платье с коротким рукавом
                      </option>
                      <option value="long-sleeve-dress">
                        Платье с длинным рукавом
                      </option>
                      <option value="sweatshirt">Свитшот</option>
                      <option value="hoodless-sweatshirt">
                        Толстовка без капюшона
                      </option>
                      <option value="hooded-sweatshirt">
                        Толстовка с капюшоном
                      </option>
                      <option value="underpants">Трусы</option>
                      <option value="tunic">Туника</option>
                      <option value="short-sleeve-t-shirt">
                        Футболка с коротким рукавом
                      </option>
                      <option value="long-sleeve-t-shirt">
                        Футболка с длинным рукавом
                      </option>
                      <option value="long-sleeve-robe">
                        Халат с длинным рукавом
                      </option>
                      <option value="cap">Шапочка</option>
                      <option value="shorts">Шорты</option>
                      <option value="cuffed-pants">Штаны на манжетах</option>
                      <option value="leggings">Леггинсы</option>
                      <option value="skirt">Юбка</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Размер</span>
                    <select
                      className="calc-inp w-100"
                      id="size"
                      value={size}
                      onChange={(e) => setsize(e.target.value)}
                    >
                      <option value="40">40</option>
                      <option value="42">42</option>
                      <option value="44">44</option>
                      <option value="46">46</option>
                      <option value="48">48</option>
                      <option value="50">50</option>
                      <option value="52">52</option>
                      <option value="54">54</option>
                      <option value="56">56</option>
                      <option value="58">58</option>
                      <option value="60">60</option>
                      <option value="62">62</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Рост</span>
                    <select
                      className="calc-inp w-100"
                      id="height"
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    >
                      <option value="164">164</option>
                      <option value="166">166</option>
                      <option value="168">168</option>
                      <option value="170">170</option>
                      <option value="172">172</option>
                      <option value="174">174</option>
                      <option value="176">176</option>
                      <option value="178">178</option>
                      <option value="180">180</option>
                      <option value="182">182</option>
                      <option value="184">184</option>
                      <option value="186">186</option>
                      <option value="188">188</option>
                      <option value="190">190</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Кол-во</span>
                    <input
                      type="number"
                      className="input"
                      value={quantity}
                      onChange={(e) => setquantity(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Ширина рулона <span className="red"> (см)</span>
                    </span>
                    <select
                      className="calc-inp"
                      id="width"
                      value={width}
                      onChange={(e) => setwidth(e.target.value)}
                    >
                      <option value="180">180</option>
                      <option value="145">145</option>
                      <option value="130">130</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>
                      Плотность ткани <span className="red"> (г/м2)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={density}
                      onChange={(e) => setdensity(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Цена ткани, 1м2 <span className="red"> (₽)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      onChange={(e) => setcost(e.target.value)}
                    />
                  </label>
                </div>
              )}
              {tab === "kid" && (
                <div className="kids">
                  <label className="numrange">
                    <span>Вид одежды</span>
                    <select
                      className="calc-inp w-100"
                      id="type"
                      onChange={(e) => settype(e.target.value)}
                    >
                      <option value="pants">Брюки</option>
                      <option value="t-shirt">Майка</option>
                      <option value="short-sleeve-dress">
                        Платье с коротким рукавом
                      </option>
                      <option value="long-sleeve-dress">
                        Платье с длинным рукавом
                      </option>
                      <option value="sweatshirt">Свитшот</option>
                      <option value="tunic">Туника</option>
                      <option value="short-sleeve-t-shirt">
                        Футболка с коротким рукавом
                      </option>
                      <option value="long-sleeve-t-shirt">
                        Футболка с длинным рукавом
                      </option>
                      <option value="cap">Шапочка</option>
                      <option value="shorts">Шорты</option>
                      <option value="leggings">Леггинсы</option>
                      <option value="skirt">Юбка</option>
                      <option value="romper">Ромпер</option>
                      <option value="short-sleeve-romper">
                        Ромпер с коротким рукавом
                      </option>
                      <option value="long-sleeve-romper">
                        Ромпер с длинным рукавом
                      </option>
                      <option value="slip">Слип</option>
                      <option value="warm-overalls">Комбинезон теплый</option>
                      <option value="sweater">Кофта</option>
                      <option value="hoodie">Толстовка</option>
                      <option value="trousers">Штаны</option>
                      <option value="diaper">Пеленка</option>
                      <option value="sliders">Ползунки</option>
                      <option value="sliders-straps">Ползунки на лямках</option>
                      <option value="spreader">Распашонка</option>
                      <option value="hoody">Худи</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Рост</span>
                    <select
                      className="calc-inp w-100"
                      id="height"
                      value={height}
                      onChange={(e) => setheight(e.target.value)}
                    >
                      <option value="50">50</option>
                      <option value="56">56</option>
                      <option value="62">62</option>
                      <option value="68">68</option>
                      <option value="74">74</option>
                      <option value="80">80</option>
                      <option value="86">86</option>
                      <option value="92">92</option>
                      <option value="98">98</option>
                      <option value="104">104</option>
                      <option value="110">110</option>
                      <option value="116">116</option>
                      <option value="122">122</option>
                      <option value="128">128</option>
                      <option value="134">134</option>
                      <option value="140">140</option>
                      <option value="146">146</option>
                      <option value="152">152</option>
                      <option value="158">158</option>
                      <option value="164">164</option>
                      <option value="170">170</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>Кол-во</span>
                    <input
                      type="number"
                      className="input"
                      value={quantity}
                      onChange={(e) => setquantity(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Ширина рулона <span className="red"> (см)</span>
                    </span>
                    <select
                      className="calc-inp"
                      id="width"
                      value={width}
                      onChange={(e) => setwidth(e.target.value)}
                    >
                      <option value="180">180</option>
                      <option value="145">145</option>
                      <option value="130">130</option>
                    </select>
                  </label>
                  <label className="numrange">
                    <span>
                      Плотность ткани <span className="red"> (г/м2)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      value={density}
                      onChange={(e) => setdensity(e.target.value)}
                    />
                  </label>
                  <label className="numrange">
                    <span>
                      Цена ткани, 1м2 <span className="red"> (₽)</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      required
                      onChange={(e) => setcost(e.target.value)}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>
            Калькулятор расчета ткани: Ваш незаменимый инструмент для точного
            шитья
          </h2>
          <p>
            Если вы увлекаетесь шитьем или занимаетесь этим профессионально, то
            знаете, как важно точно рассчитывать количество необходимой ткани.
            Калькулятор расчета ткани — это ваш надежный помощник, который
            упрощает этот процесс и помогает избежать ошибок. Этот инструмент не
            только экономит ваше время, но и обеспечивает точность, необходимую
            для успешного завершения любого проекта.
          </p>
          <h3>Почему вам нужен калькулятор расчета ткани?</h3>
          <p>
            Использование калькулятора расчета ткани имеет множество
            преимуществ. Этот инструмент помогает определить точное количество
            материала, необходимого для вашего проекта, что особенно важно при
            создании одежды, штор, постельного белья и других изделий. Основные
            преимущества включают:
          </p>
          <ul>
            <li>Избежание излишков и дефицита ткани.</li>
            <li>Экономия денег благодаря точному расчету материала.</li>
            <li>Эффективное планирование и организация проектов.</li>
          </ul>
          <h3>Как использовать калькулятор расчета ткани?</h3>
          <p>
            Для использования калькулятора вам необходимо ввести несколько
            ключевых параметров:
          </p>
          <ol>
            <li>Длина и ширина изделия.</li>
            <li>Ширина ткани.</li>
            <li>
              Дополнительные параметры, такие как припуски на швы и усадка ткани
              (при необходимости).
            </li>
          </ol>
          <p>
            После ввода этих данных калькулятор автоматически произведет расчеты
            и предоставит вам точное количество ткани, необходимое для вашего
            проекта. Это позволяет избежать лишних трат и ошибок при покупке
            материалов.
          </p>
          <h3>Преимущества использования онлайн калькуляторов расчета ткани</h3>
          <p>
            Современные онлайн калькуляторы расчета ткани обладают рядом
            существенных преимуществ:
          </p>
          <ul>
            <li>
              Доступность: вы можете использовать их в любое время и в любом
              месте, где есть интернет.
            </li>
            <li>
              Простота использования: интуитивно понятный интерфейс делает
              процесс расчета быстрым и легким.
            </li>
            <li>
              Точность: современные алгоритмы обеспечивают высокую точность
              расчетов.
            </li>
          </ul>
          <p>
            Используя онлайн калькулятор расчета ткани, вы можете
            сосредоточиться на творческом процессе и не беспокоиться о
            технических деталях. Этот инструмент станет вашим незаменимым
            помощником в мире шитья и текстильного творчества.
          </p>
          <h2>Заключение</h2>
          <p>
            Калькулятор расчета ткани — это важный инструмент для каждого, кто
            занимается шитьем. Он помогает избежать ошибок, экономит время и
            деньги, а также обеспечивает точность и удобство в работе.
            Воспользуйтесь этим полезным инструментом и сделайте ваш следующий
            проект еще успешнее!
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

export default Compound;
