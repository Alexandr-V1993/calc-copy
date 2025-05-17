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
          "Калькулятор перевода песка из м³ в тонны и обратно – это удобный онлайн инструмент для мгновенного преобразования объема песка из кубических метров в тонны и наоборот."
        }
        span={"песка"}
      >
        <CalorieForm
          selectedTab={selectedTab}
          obj={initial}
          url={"https://calcoffee.ru/api/calculate/sand"}
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
          <h2>Что такое калькулятор песка из м³ в тонны и наоборот?</h2>
          <p>
            Калькулятор перевода песка из м³ в тонны и обратно — это онлайн
            инструмент, который позволяет быстро и легко преобразовать объем
            песка из кубических метров в тонны и наоборот.
          </p>

          <h2>Зачем нужен калькулятор песка из м³ в тонны?</h2>
          <p>
            Этот калькулятор полезен, когда необходимо узнать, сколько тонн
            песка содержится в определенном объеме, выраженном в кубических
            метрах. Конвертация зависит от плотности песка, которая может
            варьироваться в зависимости от его состава и влажности.
          </p>

          <h2>Как перевести объем песка из м³ в тонны и наоборот?</h2>
          <p>
            Для перевода объема песка из кубических метров в метрические тонны
            нужно знать плотность песка. Обычно плотность песка составляет около
            1,5 тонн на кубический метр. Формула для перевода объема песка из
            кубических метров в метрические тонны:
          </p>

          <p className="formula">
            Вес песка (т) = Объем песка (м³) × Плотность песка (т/м³)
          </p>

          <p>Например, чтобы перевести 5 кубических метров песка в тонны:</p>

          <p className="formula">5 м³ × 1,5 т/м³ = 7,5 тонн песка</p>

          <p>
            Для перевода тонн песка в кубические метры используется формула:
          </p>

          <p className="formula">
            Объем песка (м³) = Вес песка (т) / Плотность песка (т/м³)
          </p>
          <p>Например, чтобы перевести 10 тонн песка в кубические метры:</p>

          <p className="formula">10 тонн / 1,5 т/м³ = 6,67 м³ песка</p>

          <p>
            Для точных результатов рекомендуется уточнить плотность песка в
            зависимости от его состава и влажности.
          </p>

          <h2>От чего зависит плотность песка?</h2>
          <p>
            Плотность песка зависит от нескольких факторов, включая его состав,
            размер и форму зерен, а также влажность:
          </p>
          <ul>
            <li>
              <strong>Состав:</strong> Песок может состоять из различных
              материалов (кварц, гранит, песчаник и др.), каждый из которых
              имеет свою плотность.
            </li>
            <li>
              <strong>Размер и форма зерен:</strong> Чем больше зерна, тем
              меньше их количество в единице объема, что приводит к уменьшению
              плотности. Форма зерен также влияет на плотность.
            </li>
            <li>
              <strong>Влажность:</strong> Влажный песок плотнее сухого, так как
              вода заполняет промежутки между зернами.
            </li>
          </ul>

          <h2>Виды песка и их использование</h2>
          <p>
            Существует множество различных видов песка, каждый из которых
            используется в зависимости от своих свойств:
          </p>
          <ul>
            <li>
              <strong>Речной песок:</strong> Используется для строительства
              дорог, железных дорог, аэропортов, а также для производства бетона
              и кирпичей.
            </li>
            <li>
              <strong>Карьерный песок:</strong> Применяется для производства
              бетона, стекла, керамики, а также для асфальтирования дорог и
              создания спортивных площадок.
            </li>
            <li>
              <strong>Морской песок:</strong> Имеет меньшую плотность и
              используется в качестве утеплителя и для создания пляжей.
            </li>
            <li>
              <strong>Пустынный песок:</strong> Используется для создания
              звуконепроницаемых стен и производства стекла.
            </li>
            <li>
              <strong>Фильтровальный песок:</strong> Применяется для очистки
              воды и фильтрации жидкостей.
            </li>
          </ul>
          <p>
            Кроме того, существуют специализированные виды песка для различных
            задач, например, песок для детских песочниц или для литья металла.
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
