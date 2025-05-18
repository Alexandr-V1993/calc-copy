"use client";

import { useState } from "react";
import HeaderModal from "../components/NewModal";
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
          "Онлайн-конвертер величин позволяет быстро и точно переводить значения между различными единицами измерения: метры в футы, граммы в унции, литры в галлоны и другие популярные единицы."
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
          <h2>Как использовать конвертер величин?</h2>

          <p>
            Конвертер величин — это незаменимый инструмент для тех, кто часто
            сталкивается с разными системами измерений. Он помогает быстро и
            точно перевести одни единицы в другие, не прибегая к сложным
            вычислениям или справочникам. Достаточно выбрать тип величины,
            указать исходное значение и нужную единицу — и система сделает всё
            за вас.
          </p>

          <h3>Зачем нужен такой инструмент?</h3>

          <p>
            В повседневной жизни мы часто сталкиваемся с ситуациями, где
            необходимо перевести:
          </p>

          <ul>
            <li>
              <strong>Расстояние:</strong> километры в мили при поездке за
              границу;
            </li>
            <li>
              <strong>Вес:</strong> граммы в унции при готовке по зарубежным
              рецептам;
            </li>
            <li>
              <strong>Температуру:</strong> градусы Цельсия в Фаренгейты при
              чтении зарубежных погодных сводок;
            </li>
            <li>
              <strong>Объем:</strong> литры в галлоны при заправке топливом или
              покупке жидкостей;
            </li>
            <li>
              <strong>Давление, мощность, скорость:</strong> при работе с
              техническими характеристиками.
            </li>
          </ul>

          <h3>Какие категории величин можно перевести?</h3>

          <p>Калькулятор поддерживает множество категорий:</p>

          <ul>
            <li>
              <strong>Длина:</strong> метры, километры, дюймы, футы, мили и
              другие;
            </li>
            <li>
              <strong>Масса:</strong> граммы, килограммы, фунты, унции,
              центнеры;
            </li>
            <li>
              <strong>Объем:</strong> литры, миллилитры, галлоны, кварты,
              баррели;
            </li>
            <li>
              <strong>Температура:</strong> °C, °F, K;
            </li>
            <li>
              <strong>Скорость:</strong> км/ч, м/с, мили/час;
            </li>
            <li>
              <strong>Площадь:</strong> квадратные метры, акры, гектары;
            </li>
            <li>
              <strong>Время:</strong> секунды, минуты, часы, дни, недели;
            </li>
            <li>
              <strong>Давление:</strong> Паскали, атмосферы, бары, psi;
            </li>
            <li>
              <strong>Энергия:</strong> Джоули, ккал, кВт·ч;
            </li>
            <li>
              <strong>Мощность:</strong> Ватты, лошадиные силы, киловатты;
            </li>
          </ul>

          <h3>Где может быть полезен конвертер?</h3>

          <p>Такой инструмент незаменим:</p>

          <ul>
            <li>
              <strong>В путешествии:</strong> чтобы понимать местные единицы
              измерения;
            </li>
            <li>
              <strong>На кухне:</strong> для точного соблюдения рецептов;
            </li>
            <li>
              <strong>В строительстве:</strong> при расчетах материалов и
              размеров;
            </li>
            <li>
              <strong>В учебе:</strong> для решения задач и выполнения домашних
              заданий;
            </li>
            <li>
              <strong>В науке:</strong> при анализе данных и сравнении
              показателей;
            </li>
            <li>
              <strong>В бизнесе:</strong> при работе с иностранными партнерами и
              документами;
            </li>
            <li>
              <strong>В спорте:</strong> для контроля расстояний, скорости и
              веса;
            </li>
            <li>
              <strong>В быту:</strong> для ремонта, закупки товаров,
              планирования.
            </li>
          </ul>

          <h3>Как работает онлайн-конвертер?</h3>

          <p>
            Принцип прост: вы выбираете тип величины, вводите начальное значение
            и указываете, во что хотите его перевести. Система автоматически
            рассчитывает результат, используя точные коэффициенты перевода. Это
            экономит время, минимизирует ошибки и делает жизнь проще.
          </p>

          <h3>Примеры использования</h3>

          <p>Вот несколько реальных примеров:</p>

          <ul>
            <li>
              <strong>Путешествие:</strong> 100 км ≈ 62.14 миль;
            </li>
            <li>
              <strong>Готовка:</strong> 200 г ≈ 7.05 унций;
            </li>
            <li>
              <strong>Строительство:</strong> 10 м ≈ 32.8 фута;
            </li>
            <li>
              <strong>Физика:</strong> 100°C = 212°F;
            </li>
            <li>
              <strong>Спорт:</strong> 10 км = 6.2 миль.
            </li>
          </ul>

          <h3>Как проверить правильность результата?</h3>

          <p>
            Если вы сомневаетесь, можно сделать обратный перевод или
            воспользоваться другим калькулятором для сверки. Также можно
            использовать Excel или мобильное приложение для более точных
            вычислений. Главное — правильно выбрать направление перевода и
            единицы измерения.
          </p>

          <h3>Какие ошибки чаще всего встречаются?</h3>

          <p>Самые распространенные проблемы:</p>

          <ul>
            <li>
              <strong>Перепутаны единицы:</strong> например, унции вместо жидких
              унций;
            </li>
            <li>
              <strong>Ошибка ввода:</strong> лишние символы, буквы или точки
              вместо запятых;
            </li>
            <li>
              <strong>Неправильно выбранная категория:</strong> например, масса
              вместо объема;
            </li>
            <li>
              <strong>Отсутствие запаса:</strong> особенно важно при закупке
              материалов;
            </li>
            <li>
              <strong>Игнорирование форматов:</strong> некоторые системы
              используют разные стандарты округления.
            </li>
          </ul>

          <h3>Какие еще функции могут быть полезны?</h3>

          <p>Некоторые онлайн-конвертеры поддерживают:</p>

          <ul>
            <li>
              <strong>Множественный перевод:</strong> сразу несколько значений;
            </li>
            <li>
              <strong>Историю расчетов:</strong> чтобы не терять предыдущие
              данные;
            </li>
            <li>
              <strong>Автоматическое определение единиц:</strong> на основе
              введенного числа;
            </li>
            <li>
              <strong>Мобильное приложение:</strong> для использования вне дома;
            </li>
            <li>
              <strong>Оффлайн режим:</strong> когда нет интернета, но нужен
              перевод.
            </li>
          </ul>

          <h3>Как выбрать хороший конвертер?</h3>

          <p>Хороший калькулятор должен:</p>

          <ul>
            <li>
              <strong>Поддерживать много единиц:</strong> чем больше — тем
              лучше;
            </li>
            <li>
              <strong>Иметь четкий интерфейс:</strong> чтобы не путаться в меню;
            </li>
            <li>
              <strong>Не требовать регистрации:</strong> доступность без
              барьеров;
            </li>
            <li>
              <strong>Работать быстро:</strong> без задержек и загрузки;
            </li>
            <li>
              <strong>Быть бесплатным:</strong> без скрытых платежей.
            </li>
          </ul>

          <h3>Часто задаваемые вопросы</h3>

          <p>
            <strong>Можно ли доверять онлайн-конвертерам?</strong>
          </p>
          <p>
            Да, если они используют стандартные коэффициенты перевода и
            регулярно обновляются.
          </p>

          <p>
            <strong>Может ли конвертер работать оффлайн?</strong>
          </p>
          <p>
            Некоторые приложения позволяют сохранить данные для
            оффлайн-перевода, но большинство работают только онлайн.
          </p>

          <p>
            <strong>Нужно ли платить за использование?</strong>
          </p>
          <p>Большинство калькуляторов — бесплатны и не требуют подписки.</p>

          <h3>Почему стоит использовать наш конвертер?</h3>

          <p>Мы предлагаем:</p>

          <ul>
            <li>
              <strong>Широкую базу единиц:</strong> десятки вариантов для каждой
              категории;
            </li>
            <li>
              <strong>Удобный интерфейс:</strong> понятный даже новичкам;
            </li>
            <li>
              <strong>Мгновенный результат:</strong> без задержек и долгих
              ожиданий;
            </li>
            <li>
              <strong>Доступность:</strong> работает на любом устройстве с
              интернетом;
            </li>
            <li>
              <strong>Бесплатность:</strong> никаких скрытых платежей или
              ограничений.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-инструментов?</h3>

          <p>Онлайн-конвертеры обеспечивают:</p>

          <ul>
            <li>
              <strong>Точность:</strong> алгоритмы учитывают все стандартные
              правила;
            </li>
            <li>
              <strong>Скорость:</strong> результат готов за доли секунды;
            </li>
            <li>
              <strong>Универсальность:</strong> подходит как для учёбы, так и
              для практики;
            </li>
            <li>
              <strong>Доступность:</strong> работает на любом устройстве с
              интернетом;
            </li>
            <li>
              <strong>Простоту:</strong> не нужно ничего считать в уме —
              достаточно ввести число.
            </li>
          </ul>

          <h3>Интересные факты о системах измерения</h3>

          <p>Интересно, что разные страны используют разные системы:</p>

          <ul>
            <li>
              <strong>Метрическая система:</strong> используется в большинстве
              стран;
            </li>
            <li>
              <strong>Имперская система:</strong> США, Великобритания и
              некоторые другие;
            </li>
            <li>
              <strong>Традиционные системы:</strong> японская, китайская,
              старорусская;
            </li>
            <li>
              <strong>Научные единицы:</strong> световые годы, атомные единицы
              массы;
            </li>
            <li>
              <strong>Специализированные единицы:</strong> баррели, унции
              тройской системы, морские мили.
            </li>
          </ul>

          <h3>Какие ещё параметры можно рассчитать?</h3>

          <p>Многие конвертеры также умеют:</p>

          <ul>
            <li>
              <strong>Переводить валюты:</strong> с учетом курса;
            </li>
            <li>
              <strong>Рассчитывать ИМТ:</strong> для здоровья;
            </li>
            <li>
              <strong>Переводить время:</strong> с поправкой на часовой пояс;
            </li>
            <li>
              <strong>Конвертировать цифровые данные:</strong> байты, гигабайты,
              терабайты;
            </li>
            <li>
              <strong>Переводить площадь:</strong> квадратные метры, акры, сотки
              и другие.
            </li>
          </ul>

          <h3>Как проверить корректность перевода?</h3>

          <p>
            Вы можете сравнить результат с другими калькуляторами или выполнить
            контрольный расчёт вручную. Также можно использовать Excel, Google
            или мобильное приложение для проверки. Главное — правильно ввести
            данные и не перепутать типы величин.
          </p>

          <h3>Полезные советы по использованию</h3>

          <p>Чтобы не ошибиться:</p>

          <ul>
            <li>
              <strong>Проверьте единицы:</strong> не перепутайте граммы с
              каратами или фунтами;
            </li>
            <li>
              <strong>Используйте точные значения:</strong> особенно важно при
              научных или финансовых расчетах;
            </li>
            <li>
              <strong>Добавьте запас:</strong> если перевод связан с закупкой
              или доставкой;
            </li>
            <li>
              <strong>Сохраняйте результат:</strong> чтобы не вводить заново;
            </li>
            <li>
              <strong>Изучите стандартные коэффициенты:</strong> например, 1
              дюйм = 2.54 см, 1 фунт = 0.45 кг.
            </li>
          </ul>

          <h3>Итог</h3>

          <p>
            Онлайн-конвертер величин — это важный инструмент для повседневной
            жизни и профессиональной деятельности. Он помогает избежать ошибок,
            экономит время и делает работу с числами проще и быстрее. Независимо
            от вашей профессии или возраста — этот калькулятор станет вашим
            надёжным помощником.
          </p>

          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
};

export default Converter;
