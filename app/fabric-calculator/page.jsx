"use client";
import React, { useState } from "react";

import HeaderModal from "../components/NewModal";
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
          "Онлайн калькулятор поможет точно рассчитать необходимое количество ткани для пошива одежды, постельного белья, штор и других текстильных изделий. Просто введите параметры изделия и получите точный результат за секунду."
        }
        span={"расчета ткани"}
      >
        <CalorieForm
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/fabric"}
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
          <h2>Как рассчитать количество ткани для пошива?</h2>

          <p>
            При пошиве одежды, постельного белья или штор важно заранее
            определить, сколько ткани вам понадобится. Онлайн-калькулятор
            позволяет сделать это быстро, точно и без лишних усилий. Просто
            укажите размеры изделия и ширину ткани — и вы сразу получите готовый
            результат.
          </p>

          <h3>Зачем нужен калькулятор ткани?</h3>

          <p>Точный расчет ткани помогает:</p>

          <ul>
            <li>Избежать перерасхода материала;</li>
            <li>Сэкономить бюджет на покупке лишней ткани;</li>
            <li>Правильно спланировать этапы работы;</li>
            <li>Подобрать оптимальную ширину и тип ткани под ваш проект.</li>
          </ul>

          <h3>Основные параметры для расчёта</h3>

          <p>
            Чтобы рассчитать нужное количество ткани, введите следующие данные:
          </p>

          <ul>
            <li>
              <strong>Длина изделия:</strong> например, длина юбки или платья.
            </li>
            <li>
              <strong>Ширина изделия:</strong> полуобхват, который нужно учесть
              при раскрое.
            </li>
            <li>
              <strong>Ширина ткани:</strong> обычно указывается на этикетке или
              в описании материала (например, 140 см).
            </li>
            <li>
              <strong>Припуски на швы:</strong> добавьте запас, если требуется
              более плотная посадка или декоративные элементы.
            </li>
          </ul>

          <h3>Как работает калькулятор?</h3>

          <p>
            Калькулятор учитывает площадь раскроя и ширину полотна, чтобы
            рассчитать общую длину ткани в метрах. Например, для пошива простого
            платья с длиной 100 см и полуобхватом 50 см при ширине ткани 150 см
            потребуется примерно 2 метра.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Длина изделия</td>
                  <td>100 см</td>
                </tr>
                <tr>
                  <td>Ширина изделия</td>
                  <td>50 см</td>
                </tr>
                <tr>
                  <td>Ширина ткани</td>
                  <td>150 см</td>
                </tr>
                <tr>
                  <td>Требуемая длина ткани</td>
                  <td>2 м</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Что влияет на расход ткани?</h3>

          <p>Несколько факторов могут повлиять на точность расчётов:</p>

          <ul>
            <li>
              <strong>Фасон:</strong> сложные модели требуют больше ткани из-за
              дополнительных деталей.
            </li>
            <li>
              <strong>Крой:</strong> прямой, диагональный или радиальный —
              разные виды кроя увеличивают расход.
            </li>
            <li>
              <strong>Направление рисунка:</strong> если ткань имеет
              направленный принт, важно правильно его ориентировать.
            </li>
            <li>
              <strong>Усадка:</strong> некоторые ткани дают усадку после стирки
              — лучше закладывать небольшой запас.
            </li>
            <li>
              <strong>Припуски:</strong> не забывайте про швы, особенно при
              пошиве детской одежды или изделий на заказ.
            </li>
          </ul>

          <h3>Пример расчёта для пошива одежды</h3>

          <p>
            Допустим, вы хотите сшить прямую юбку длиной 60 см и полуобхватом 45
            см. Используете ткань шириной 140 см. С учетом припусков и
            свободного кроя вам понадобится около 1,5 метра ткани.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Элемент</th>
                  <th>Размер</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Длина юбки</td>
                  <td>60 см</td>
                </tr>
                <tr>
                  <td>Полуобхват</td>
                  <td>45 см</td>
                </tr>
                <tr>
                  <td>Ширина ткани</td>
                  <td>140 см</td>
                </tr>
                <tr>
                  <td>Необходимая длина ткани</td>
                  <td>1.5 м</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Расчёт ткани для постельного белья</h3>

          <p>
            При пошиве комплекта постельного белья важно учитывать размеры
            матраса и пододеяльника. Вот пример для двуспального комплекта:
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Элемент</th>
                  <th>Размеры</th>
                  <th>Расход ткани</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Простыня</td>
                  <td>160x200 см</td>
                  <td>2.5 м</td>
                </tr>
                <tr>
                  <td>Пододеяльник</td>
                  <td>140x200 см</td>
                  <td>2.5 м</td>
                </tr>
                <tr>
                  <td>Наволочка (на 2 шт.)</td>
                  <td>70x50 см</td>
                  <td>1 м</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Как выбрать правильную ткань?</h3>

          <p>Выбор ткани зависит от назначения изделия:</p>

          <ul>
            <li>
              <strong>Хлопок:</strong> идеален для летней одежды и постельного
              белья;
            </li>
            <li>
              <strong>Лен:</strong> натуральная ткань, подходит для легких
              платьев и скатертей;
            </li>
            <li>
              <strong>Шелк:</strong> используется для вечерних нарядов и
              аксессуаров;
            </li>
            <li>
              <strong>Джинсовая ткань:</strong> прочная, подходит для брюк,
              юбок, сумок;
            </li>
            <li>
              <strong>Вискоза:</strong> мягкая и струящаяся, отлично подходит
              для платьев и блузок;
            </li>
            <li>
              <strong>Плотный трикотаж:</strong> для эластичной одежды, которая
              хорошо сидит по фигуре.
            </li>
          </ul>

          <h3>Как пользоваться калькулятором?</h3>

          <p>Пользоваться калькулятором просто:</p>

          <ol>
            <li>
              <strong>Выберите тип изделия:</strong> одежда, белье, шторы и т.д.
            </li>
            <li>
              <strong>Введите размеры:</strong> длину, ширину, полуобхват и
              другие параметры.
            </li>
            <li>
              <strong>Укажите ширину ткани:</strong> это влияет на общий расход.
            </li>
            <li>
              <strong>Нажмите «Рассчитать»:</strong> получите точный результат
              за секунду.
            </li>
          </ol>

          <h3>Советы по экономии ткани</h3>

          <p>Чтобы минимизировать расход:</p>

          <ul>
            <li>Выбирайте фасоны с минимальным количеством деталей;</li>
            <li>Используйте ткань с подходящей шириной;</li>
            <li>Планируйте раскладку деталей заранее;</li>
            <li>Учитывайте направление рисунка и ворса;</li>
            <li>Используйте остатки ткани для отделки или аксессуаров.</li>
          </ul>

          <h3>Как проверить точность расчёта?</h3>

          <p>
            Если вы сомневаетесь в результате, можно сравнить с ручным расчётом
            или обратиться к выкройке. Однако современные онлайн-калькуляторы
            уже учитывают все стандартные припуски и особенности раскроя,
            поэтому их результаты очень близки к реальным.
          </p>

          <h3>Как использовать калькулятор для разных изделий?</h3>

          <p>Калькулятор универсален и подходит:</p>

          <ul>
            <li>
              <strong>Для одежды:</strong> юбки, платья, рубашки, брюки;
            </li>
            <li>
              <strong>Для белья:</strong> простыни, пододеяльники, наволочки;
            </li>
            <li>
              <strong>Для домашнего текстиля:</strong> шторы, скатерти, чехлы на
              мебель;
            </li>
            <li>
              <strong>Для детских изделий:</strong> комбинезоны, платья,
              покрывала.
            </li>
          </ul>

          <h3>Преимущества онлайн-калькулятора</h3>

          <p>
            Онлайн-калькулятор ткани — это удобно, быстро и бесплатно. Он
            подходит как для новичков, так и для профессионалов. Это инструмент,
            который делает процесс пошива проще и доступнее.
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
