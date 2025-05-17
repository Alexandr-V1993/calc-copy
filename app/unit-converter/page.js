"use client";

import { useState } from "react";
import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "./FuelCost.css";
import FuelCostForm from "./FuelCostForm";

// Объекты с коэффициентами для конвертации
const lengthConversions = {
  m: 1, // Метр (базовая единица)
  km: 1000, // Километр
  dm: 0.1, // Дециметр
  cm: 0.01, // Сантиметр
  mm: 0.001, // Миллиметр
  µm: 0.000001, // Микрометр
  nm: 0.000000001, // Нанометр
  mi: 1609.34, // Миля
  yd: 0.9144, // Ярд
  ft: 0.3048, // Фут
  in: 0.0254, // Дюйм
  ly: 9460730472580800, // Световой год
};

const massConversions = {
  kg: 1, // Килограмм (базовая единица)
  g: 0.001, // Грамм
  mg: 0.000001, // Миллиграмм
  mkg: 0.000000001, // Микрограмм
  t: 1000, // Тонна
  ust: 907.185, // Тонна (США)
  ukt: 1016.05, // Тонна (Англия)
  st: 6.35029, // Стоун
  kt: 1000000, // Килотонна
  lb: 0.453592, // Фунт
  oz: 0.0283495, // Унция
};

// Объекты для отображения русских названий единиц измерения
const lengthLabels = {
  m: "Метр (м)",
  km: "Километр (км)",
  dm: "Дециметр (дм)",
  cm: "Сантиметр (см)",
  mm: "Миллиметр (мм)",
  µm: "Микрометр (мкм)",
  nm: "Нанометр (нм)",
  mi: "Миля (mi)",
  yd: "Ярд (yd)",
  ft: "Фут (ft)",
  in: "Дюйм (inch)",
  ly: "Световой год (ly)",
};

const massLabels = {
  kg: "Килограмм (кг)",
  g: "Грамм (г)",
  mg: "Миллиграмм (мг)",
  mkg: "Микрограмм (мкг)",
  t: "Тонна (т)",
  ust: "Тонна (США) (т)",
  ukt: "Тонна (Англия) (т)",
  st: "Стоун (st)",
  kt: "Килотонна (кт)",
  lb: "Фунт (lbs)",
  oz: "Унция (oz)",
};

const Converter = () => {
  // Состояния для значений и единиц измерения
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromUnit, setFromUnit] = useState("m");
  const [toUnit, setToUnit] = useState("km");
  const [selectedCategory, setSelectedCategory] = useState("length");

  // Обработчик изменения категории
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setFromUnit(category === "length" ? "m" : "kg");
    setToUnit(category === "length" ? "km" : "g");
    setFromValue("");
    setToValue("");
  };

  // Обработчик изменения значения "из"
  const handleFromValueChange = (e) => {
    const value = e.target.value;
    // Удаляем начальный ноль, если он есть
    const formattedValue = value.replace(/^0+/, "") || "0";
    setFromValue(formattedValue);
    convert(formattedValue, fromUnit, toUnit);
  };

  // Обработчик изменения значения "в"
  const handleToValueChange = (e) => {
    const value = e.target.value;
    // Удаляем начальный ноль, если он есть
    const formattedValue = value.replace(/^0+/, "") || "0";
    setToValue(formattedValue);
    convert(formattedValue, toUnit, fromUnit, true);
  };

  // Обработчик изменения единицы измерения "из"
  const handleFromUnitChange = (e) => {
    const unit = e.target.value;
    setFromUnit(unit);
    convert(fromValue, unit, toUnit);
  };

  // Обработчик изменения единицы измерения "в"
  const handleToUnitChange = (e) => {
    const unit = e.target.value;
    setToUnit(unit);
    convert(fromValue, fromUnit, unit);
  };

  // Функция конвертации
  const convert = (value, from, to, reverse = false) => {
    if (isNaN(value) || value === "") return;

    const conversions =
      selectedCategory === "length" ? lengthConversions : massConversions;
    const fromFactor = conversions[from];
    const toFactor = conversions[to];

    if (reverse) {
      const convertedValue = (parseFloat(value) * toFactor) / fromFactor;
      setFromValue(convertedValue.toString());
    } else {
      const convertedValue = (parseFloat(value) * fromFactor) / toFactor;
      setToValue(convertedValue.toString());
    }
  };

  const currentLabels =
    selectedCategory === "length" ? lengthLabels : massLabels;

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Конвертер "}
        description={
          "Конвертер величин позволяет переводить значения из одной единицы измерения в другую. Выберите исходную и целевую единицы измерения, введите значение и получите результат."
        }
        span={"величин"}
      >
        <FuelCostForm>
          <div className="row-select">
            <div className="unit-container">
              <select
                className="flex outline-none mb-2 w-100 unit-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                <option value="length">Длина</option>
                <option value="mass">Вес и масса</option>
              </select>
              <div className="row-c">
                <div className="unit-row">
                  <input
                    type="text"
                    name="from"
                    id="from"
                    inputMode="numeric"
                    value={fromValue}
                    onChange={handleFromValueChange}
                    placeholder="Введите значение"
                  />
                  <select value={fromUnit} onChange={handleFromUnitChange}>
                    {Object.keys(currentLabels).map((unit) => (
                      <option key={unit} value={unit}>
                        {currentLabels[unit]}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center justify-center w-100 unit-separator">
                  <svg
                    className="cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    style={{ transform: "rotate(90deg)" }}
                  >
                    <path d="M32 34.02V20h-4v14.02h-6L30 42l8-7.98h-6zM18 6l-8 7.98h6V28h4V13.98h6L18 6z"></path>
                  </svg>
                </div>
                <div className="unit-row">
                  <input
                    type="text"
                    name="to"
                    id="to"
                    inputMode="numeric"
                    value={toValue}
                    onChange={handleToValueChange}
                    placeholder="Результат"
                  />
                  <select value={toUnit} onChange={handleToUnitChange}>
                    {Object.keys(currentLabels).map((unit) => (
                      <option key={unit} value={unit}>
                        {currentLabels[unit]}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          {/* Поле для отображения результата */}
          <div className="result-container">
            <p>
              {fromValue} {currentLabels[fromUnit]} = {toValue}{" "}
              {currentLabels[toUnit]}
            </p>
          </div>
        </FuelCostForm>

        <Contents>
          <h2 className="tops-content">Как использовать конвертер величин</h2>
          <p>
            Конвертер величин – это мощный и удобный инструмент, который
            позволяет быстро и точно переводить значения из одной единицы
            измерения в другую. Независимо от того, работаете ли вы с длиной,
            весом, массой или другими физическими величинами, наш калькулятор
            обеспечит точные результаты за считанные секунды. Просто выберите
            нужную категорию, укажите исходную и целевую единицы измерения,
            введите значение – и результат появится мгновенно.
          </p>
          <h3>Преимущества нашего конвертера:</h3>
          <ul>
            <li>
              <strong>Простота использования:</strong> Интуитивно понятный
              интерфейс позволяет легко ориентироваться даже новичкам.
            </li>
            <li>
              <strong>Широкий выбор единиц измерения:</strong> Мы поддерживаем
              множество единиц для длины, веса и массы, включая метрические и
              имперские системы.
            </li>
            <li>
              <strong>Точность расчетов:</strong> Наш конвертер использует
              точные коэффициенты для перевода, чтобы вы могли быть уверены в
              правильности результата.
            </li>
            <li>
              <strong>Мгновенные результаты:</strong> Вам не нужно ждать –
              результат отображается сразу после ввода данных.
            </li>
          </ul>
          <h3>Примеры использования конвертера:</h3>
          <ul>
            <li>
              <strong>Для путешественников:</strong> Переведите мили в
              километры, чтобы точно рассчитать расстояние маршрута.
            </li>
            <li>
              <strong>Для кулинаров:</strong> Переведите граммы в унции или
              фунты, чтобы точно следовать рецепту.
            </li>
            <li>
              <strong>Для строителей:</strong> Переведите метры в футы или дюймы
              для точных расчетов при строительстве.
            </li>
            <li>
              <strong>Для студентов и ученых:</strong> Переведите нанометры в
              микрометры или килограммы в тонны для научных расчетов.
            </li>
            <li>
              <strong>Для повседневных задач:</strong> Переведите килограммы в
              граммы или литры в миллилитры для бытовых нужд.
            </li>
          </ul>
          <h3>Почему выбирают наш конвертер?</h3>
          <p>
            Наш конвертер величин – это не просто инструмент, а надежный
            помощник для решения повседневных и профессиональных задач. Мы
            постоянно улучшаем функциональность, чтобы сделать процесс
            конвертации максимально удобным. Независимо от того, нужен ли вам
            перевод длины, веса или массы, наш калькулятор справится с задачей
            быстро и точно.
          </p>
          <p>
            Попробуйте наш конвертер прямо сейчас и убедитесь, насколько это
            просто и удобно! Если вам нужно решить другие задачи, вы всегда
            можете <a href="/">выбрать другой калькулятор</a> из нашей
            коллекции.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
};

export default Converter;
