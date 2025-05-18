"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({});

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    let newInitial;
    if (selectedTab === "tab1") {
      newInitial = {
        density: 1500,
        type: "volume",
        volume: 10,
      };
    } else if (selectedTab === "tab2") {
      newInitial = {
        density: 1500,
        type: "dimension",
        depth: 1,
        length: 10,
        width: 2,
      };
    } else if (selectedTab === "tab3") {
      newInitial = {
        area: 10,
        density: 1500,
        depth: 1,
        type: "area",
      };
    }
    setInitial(newInitial);
  }, [selectedTab]);

  const handleChange = (e) => {
    let value = e.target.value;
    // Заменяем запятую на точку и удаляем все символы, кроме цифр и точки
    value = value.replace(/,/g, ".").replace(/[^\d.]/g, "");
    // Удаляем лишние точки, оставляя только первую
    const parts = value.split(".");
    if (parts.length > 2) {
      value = parts[0] + "." + parts.slice(1).join("");
    }

    setInitial({
      ...initial,
      [e.target.name]: value === "" ? "" : value,
    });
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Точный расчет объема и веса песка с учетом типа материала (речной, карьерный, кварцевый) и влажности. Быстрый перевод между м³, тоннами и килограммами."
        }
        span={"песка"}
      >
        <CalorieForm
          selectedTab={selectedTab}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/sand"}
        >
          <div className="test-input">
            <div className="tabs">
              <span
                className={selectedTab === "tab1" ? "active" : "noact"}
                onClick={() => handleTabClick("tab1")}
              >
                Объем
              </span>
              <span
                className={selectedTab === "tab2" ? "active" : "noact"}
                onClick={() => handleTabClick("tab2")}
              >
                Длина, ширина и глубина
              </span>
              <span
                className={selectedTab === "tab3" ? "active" : "noact"}
                onClick={() => handleTabClick("tab3")}
              >
                Площадь и глубина
              </span>
            </div>

            <div className="content">
              {selectedTab === "tab1" && (
                <h3>Рассчитать песок, используя объем</h3>
              )}
              {selectedTab === "tab2" && (
                <h3>Рассчитать песок, используя размеры</h3>
              )}
              {selectedTab === "tab3" && (
                <h3>Рассчитать песок, используя площадь и глубину</h3>
              )}

              <label className="numrange">
                <span>Тип песка</span>
                <select
                  name="density"
                  className="calc-inp w-100"
                  value={initial.density}
                  onChange={handleChange}
                >
                  <option value="1500">Строительный (1500)</option>
                  <option value="1440">Строительный сухой рыхлый (1440)</option>
                  <option value="1680">
                    Строительный сухой утрамбованный (1680)
                  </option>
                  <option value="1920">Строительный мокрый (1920)</option>
                  <option value="2545">
                    Строительный мокрый утрамбованный (2545)
                  </option>
                  <option value="1710">Формовочный ГОСТ 2138-91 (1710)</option>
                  <option value="1630">Речной (1630)</option>
                  <option value="1500">Речной мытый (1500)</option>
                  <option value="1590">Речной утрамбованный (1590)</option>
                  <option value="1650">Кварцевый (1650)</option>
                  <option value="1500">Кварцевый сухой (1500)</option>
                  <option value="1650">Кварцевый утрамбованный (1650)</option>
                  <option value="1500">Карьерный (1500)</option>
                  <option value="1800">Карьерный мелкозернистый (1800)</option>
                  <option value="1400">Овражный (1400)</option>
                  <option value="1540">Горный (1540)</option>
                  <option value="1620">Морской (1620)</option>
                  <option value="1700">Гравелистый (1700)</option>
                  <option value="1600">Пылеватый (1600)</option>
                  <option value="3100">Водонасыщенный (3100)</option>
                </select>
              </label>
              <label className="numrange">
                <span>Плотность насыпи (кг/м3)</span>
                <input
                  type="text"
                  className="input"
                  name="density"
                  value={initial.density}
                  onChange={handleChange}
                />
              </label>
              {selectedTab === "tab1" && (
                <label className="numrange">
                  <span>Объем</span>
                  <input
                    min={0}
                    max={9999}
                    type="text"
                    className="input"
                    name="volume"
                    value={initial.volume}
                    onChange={handleChange}
                    required
                  />
                  <div className="notation">м3</div>
                </label>
              )}

              {selectedTab === "tab2" && (
                <>
                  <label className="numrange">
                    <span>Длина</span>
                    <input
                      type="text"
                      className="input"
                      required
                      name="length"
                      value={initial.length}
                      onChange={handleChange}
                    />
                    <div className="notation">м</div>
                  </label>
                  <label className="numrange">
                    <span>Ширина</span>
                    <input
                      type="text"
                      className="input"
                      required
                      name="width"
                      value={initial.width}
                      onChange={handleChange}
                    />
                    <div className="notation">м</div>
                  </label>
                  <label className="numrange">
                    <span>Глубина</span>
                    <input
                      type="text"
                      className="input"
                      required
                      name="depth"
                      value={initial.depth}
                      onChange={handleChange}
                    />
                    <div className="notation">м</div>
                  </label>
                </>
              )}
              {selectedTab === "tab3" && (
                <>
                  <label className="numrange">
                    <span>Площадь</span>
                    <input
                      type="text"
                      className="input"
                      required
                      name="area"
                      value={initial.area}
                      onChange={handleChange}
                    />
                    <div className="notation">м2</div>
                  </label>
                  <label className="numrange">
                    <span>Глубина</span>
                    <input
                      type="text"
                      className="input"
                      required
                      name="depth"
                      value={initial.depth}
                      onChange={handleChange}
                    />
                    <div className="notation">м</div>
                  </label>
                </>
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h1>Калькулятор объема и веса песка</h1>

          <h2>Профессиональный расчет сыпучих материалов</h2>

          <p>
            Наш калькулятор позволяет точно пересчитывать объем песка между
            кубическими метрами, тоннами и килограммами с учетом типа материала
            и его характеристик.
          </p>

          <div className="features">
            <h3>Основные возможности:</h3>
            <ul>
              <li>Перевод м³ ↔ тонны ↔ килограммы</li>
              <li>Учет 8 различных типов песка</li>
              <li>Корректировка расчетов по влажности</li>
              <li>Расчет для разных фракций</li>
              <li>Автоматический пересчет при изменении параметров</li>
            </ul>
          </div>

          <h3>Как пользоваться калькулятором</h3>

          <ol>
            <li>Выберите тип песка (речной, карьерный и др.)</li>
            <li>Укажите объем или вес</li>
            <li>При необходимости задайте влажность</li>
            <li>Получите точные значения в других единицах измерения</li>
          </ol>

          <h3>Плотность различных видов песка</h3>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Тип песка</th>
                  <th>Плотность (т/м³)</th>
                  <th>Область применения</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Речной сухой</td>
                  <td>1,4-1,65</td>
                  <td>Строительные смеси, бетон</td>
                </tr>
                <tr>
                  <td>Карьерный</td>
                  <td>1,5-1,7</td>
                  <td>Фундаменты, дорожные работы</td>
                </tr>
                <tr>
                  <td>Кварцевый</td>
                  <td>1,4-1,6</td>
                  <td>Декоративные покрытия, фильтры</td>
                </tr>
                <tr>
                  <td>Морской</td>
                  <td>1,6-1,8</td>
                  <td>Дорожное строительство</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Формулы расчета</h3>

          <p>
            <strong>Перевод объема в вес:</strong>
          </p>
          <p className="formula">
            Вес (т) = Объем (м³) × Плотность (т/м³) × (1 + Влажность/100)
          </p>

          <p>
            <strong>Перевод веса в объем:</strong>
          </p>
          <p className="formula">
            Объем (м³) = Вес (т) / [Плотность (т/м³) × (1 + Влажность/100)]
          </p>

          <h3>Практические советы</h3>

          <ul>
            <li>При заказе песка учитывайте 5-10% запас на уплотнение</li>
            <li>Влажный песок может весить на 15-20% больше сухого</li>
            <li>
              Для точных расчетов запрашивайте паспорт материала у поставщика
            </li>
          </ul>

          <div className="notice">
            <p>
              <strong>Важно:</strong> Фактическая плотность может отличаться в
              зависимости от месторождения и условий хранения.
            </p>
          </div>

          <h3>Частые вопросы</h3>

          <div className="faq">
            <h4>Сколько тонн в кубе песка?</h4>
            <p>В среднем 1,4-1,7 тонн в 1 м³ в зависимости от типа песка.</p>

            <h4>Как влажность влияет на вес песка?</h4>
            <p>При влажности 10% вес увеличивается примерно на 8-12%.</p>

            <h4>Какой песок лучше для бетона?</h4>
            <p>Речной или мытый карьерный песок средней фракции.</p>
          </div>

          <p className="other-calculators">
            <a href="/">Все калькуляторы строительных материалов →</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default Compound;
