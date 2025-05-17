"use client";
import React, { useState } from "react";
import HeaderModal from "./components/HeaderModal";
import Footer from "./components/Footer";
import Contents from "@/app/components/Contents";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const categories = [
    "all",
    "finance",
    "health",
    "construction",
    "education",
    "conversion",
    "lifestyle",
  ];

  const calculators = [
    {
      id: 1,
      name: "Налоговый калькулятор НДС",
      category: "finance",
      description: "Расчет налога на добавленную стоимость для бизнеса",
      url: "/tax-calculator/",
    },
    {
      id: 2,
      name: "Калькулятор подоходного налога",
      category: "finance",
      description: "Расчет НДФЛ для физических лиц",
      url: "/income-tax/",
    },
    {
      id: 3,
      name: "Конвертер чисел в слова",
      category: "finance",
      description: "Преобразование цифровых значений в текстовый формат",
      url: "/number-to-words",
    },
    {
      id: 4,
      name: "Калькулятор индекса массы тела",
      category: "health",
      description: "Определение соответствия веса росту",
      url: "/bmi-calculator",
    },
    {
      id: 5,
      name: "Финансовый процентный калькулятор",
      category: "finance",
      description: "Расчет процентов по вкладам и кредитам",
      url: "/financial-percent/",
    },
    {
      id: 6,
      name: "Калькулятор даты рождения",
      category: "lifestyle",
      description: "Точный расчет возраста по дате рождения",
      url: "/birth-date-calculator/",
    },
    {
      id: 7,
      name: "Калькулятор крепости напитков",
      category: "lifestyle",
      description: "Расчет крепости и разбавление спиртных напитков",
      url: "/alcohol-strength",
    },
    {
      id: 8,
      name: "Калькулятор цен со скидкой",
      category: "finance",
      description: "Расчет конечной цены с учетом скидки",
      url: "/price-with-discount",
    },
    {
      id: 9,
      name: "Калькулятор расхода топлива",
      category: "lifestyle",
      description: "Расчет стоимости поездки на автомобиле",
      url: "/fuel-consumption",
    },
    {
      id: 10,
      name: "Калькулятор разницы дат",
      category: "conversion",
      description: "Вычисление промежутка между двумя датами",
      url: "/date-difference",
    },
    {
      id: 11,
      name: "Калькулятор микрокредитов",
      category: "finance",
      description: "Расчет переплаты по краткосрочным займам",
      url: "/microloan-calculator",
    },
    {
      id: 12,
      name: "Генератор безопасных паролей",
      category: "conversion",
      description: "Создание сложных паролей для защиты аккаунтов",
      url: "/password-generator",
    },
    {
      id: 13,
      name: "Калькулятор сложных процентов",
      category: "finance",
      description: "Расчет доходности с учетом капитализации",
      url: "/compound-interest",
    },
    {
      id: 14,
      name: "Калькулятор суточных калорий",
      category: "health",
      description: "Расчет необходимого количества калорий в день",
      url: "/daily-calories",
    },
    {
      id: 15,
      name: "Калькулятор содержания алкоголя",
      category: "health",
      description: "Оценка концентрации алкоголя в организме",
      url: "/blood-alcohol",
    },
    {
      id: 16,
      name: "Таймер до события",
      category: "lifestyle",
      description: "Обратный отсчет до важной даты",
      url: "/event-countdown",
    },
    {
      id: 17,
      name: "Калькулятор трудового стажа",
      category: "finance",
      description: "Расчет общего трудового стажа",
      url: "/work-experience",
    },
    {
      id: 18,
      name: "Генератор ЧПУ ссылок",
      category: "conversion",
      description: "Создание человекопонятных URL",
      url: "/slug-generator",
    },
    {
      id: 19,
      name: "Научный калькулятор",
      category: "conversion",
      description: "Выполнение сложных математических операций",
      url: "/scientific-calculator",
    },
    {
      id: 20,
      name: "Калькулятор успеваемости",
      category: "education",
      description: "Расчет среднего балла и качества знаний",
      url: "/academic-performance",
    },
    {
      id: 21,
      name: "Калькулятор среднего балла",
      category: "education",
      description: "Расчет GPA для школьников и студентов",
      url: "/gpa-calculator",
    },
    {
      id: 22,
      name: "Калькулятор аттестационных баллов",
      category: "education",
      description: "Расчет среднего балла аттестата",
      url: "/certificate-grade",
    },
    {
      id: 23,
      name: "Калькулятор веса металла",
      category: "construction",
      description: "Расчет веса металлопроката по размерам",
      url: "/metal-weight",
    },
    {
      id: 24,
      name: "Калькулятор срока беременности",
      category: "health",
      description: "Определение срока беременности и ПДР",
      url: "/pregnancy-term",
    },
    {
      id: 25,
      name: "Конвертер римских чисел",
      category: "conversion",
      description: "Преобразование между римскими и арабскими числами",
      url: "/roman-numerals",
    },
    {
      id: 26,
      name: "Шифратор Цезаря",
      category: "conversion",
      description: "Шифрование текста методом Цезаря",
      url: "/caesar-cipher",
    },
    {
      id: 27,
      name: "Конвертер дат в римские цифры",
      category: "conversion",
      description: "Запись дат римскими цифрами",
      url: "/roman-date",
    },
    {
      id: 28,
      name: "Определитель дня недели",
      category: "conversion",
      description: "Определение дня недели для любой даты",
      url: "/weekday-finder",
    },
    {
      id: 29,
      name: "Определитель знака зодиака",
      category: "lifestyle",
      description: "Определение знака зодиака по дате рождения",
      url: "/zodiac-sign",
    },
    {
      id: 30,
      name: "Калькулятор плитного фундамента",
      category: "construction",
      description: "Расчет материалов для плитного фундамента",
      url: "/slab-foundation",
    },
    {
      id: 31,
      name: "Калькулятор ленточного фундамента",
      category: "construction",
      description: "Расчет материалов для ленточного фундамента",
      url: "/tape-foundation",
    },
    {
      id: 32,
      name: "Калькулятор объема песка",
      category: "construction",
      description: "Расчет необходимого количества песка",
      url: "/sand-volume",
    },
    {
      id: 33,
      name: "Калькулятор пиломатериалов",
      category: "construction",
      description: "Расчет кубатуры досок и бруса",
      url: "/lumber-calculator",
    },
    {
      id: 34,
      name: "Калькулятор объема бруса",
      category: "construction",
      description: "Расчет количества бруса для строительства",
      url: "/timber-volume",
    },
    {
      id: 35,
      name: "Калькулятор кирпичной кладки",
      category: "construction",
      description: "Расчет количества кирпичей для строительства",
      url: "/brickwork-calculator",
    },
    {
      id: 36,
      name: "Калькулятор типа телосложения",
      category: "health",
      description: "Определение типа фигуры по антропометрическим данным",
      url: "/body-type",
    },
    {
      id: 37,
      name: "Калькулятор здорового веса",
      category: "health",
      description: "Расчет идеального веса для вашего роста",
      url: "/healthy-weight",
    },
    {
      id: 38,
      name: "Калькулятор площади помещения",
      category: "construction",
      description: "Расчет площади комнаты для ремонта",
      url: "/room-area",
    },
    {
      id: 39,
      name: "Калькулятор расхода ткани",
      category: "lifestyle",
      description: "Расчет необходимого количества ткани для пошива",
      url: "/fabric-calculator",
    },
    {
      id: 40,
      name: "Калькулятор обоев для стен",
      category: "construction",
      description: "Расчет количества обоев для ремонта",
      url: "/wallpaper-calculator",
    },
    {
      id: 41,
      name: "Калькулятор площади круга",
      category: "conversion",
      description: "Расчет площади круга по радиусу",
      url: "/circle-area",
    },
    {
      id: 42,
      name: "Калькулятор площади треугольника",
      category: "conversion",
      description: "Расчет площади треугольника по разным параметрам",
      url: "/triangle-area",
    },
    {
      id: 43,
      name: "Калькулятор площади цилиндра",
      category: "conversion",
      description: "Расчет площади поверхности цилиндра",
      url: "/cylinder-area",
    },
    {
      id: 44,
      name: "Калькулятор площади трубы",
      category: "construction",
      description: "Расчет площади поверхности труб",
      url: "/pipe-area",
    },
    {
      id: 45,
      name: "Калькулятор роста ребенка",
      category: "health",
      description: "Прогноз роста ребенка на основе генетики",
      url: "/child-height",
    },
    {
      id: 46,
      name: "Калькулятор объема цилиндра",
      category: "conversion",
      description: "Расчет объема цилиндрических объектов",
      url: "/cylinder-volume",
    },
    {
      id: 47,
      name: "Калькулятор объема куба",
      category: "conversion",
      description: "Расчет объема кубических объектов",
      url: "/cube-volume",
    },
    {
      id: 48,
      name: "Калькулятор водного баланса",
      category: "health",
      description: "Расчет суточной нормы потребления воды",
      url: "/water-balance",
    },
    {
      id: 49,
      name: "Конвертер единиц измерения",
      category: "conversion",
      description: "Преобразование различных единиц измерения",
      url: "/unit-converter",
    },
    {
      id: 50,
      name: "Калькулятор фаз сна",
      category: "health",
      description: "Расчет оптимального времени для пробуждения",
      url: "/sleep-phases",
    },
    {
      id: 51,
      name: "Калькулятор калорий Миффлина",
      category: "health",
      description: "Расчет суточной нормы калорий по формуле Миффлина",
      url: "/mifflin-calories",
    },
    {
      id: 52,
      name: "Калькулятор калорий Харриса",
      category: "health",
      description: "Расчет суточной нормы калорий по формуле Харриса",
      url: "/harris-calories",
    },
    {
      id: 53,
      name: "Калькулятор силовых показателей",
      category: "health",
      description: "Расчет одноповторного максимума в жиме лежа",
      url: "/bench-press",
    },
    {
      id: 54,
      name: "Калькулятор ковровых покрытий",
      category: "construction",
      description: "Расчет необходимого количества ковролина",
      url: "/carpet-calculator",
    },
    {
      id: 55,
      name: "Калькулятор линолеума",
      category: "construction",
      description: "Расчет необходимого количества линолеума",
      url: "/linoleum-calculator",
    },
    {
      id: 56,
      name: "Калькулятор возраста питомца",
      category: "lifestyle",
      description: "Перевод возраста кошки в человеческий эквивалент",
      url: "/pet-age",
    },
  ];

  const filteredCalculators = calculators.filter((calculator) => {
    const matchesSearch = calculator.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || calculator.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="modern-theme">
      <HeaderModal />
      <div className="con-bigs">
        <div id="yandex_rtb_R-A-15325606-1"></div>
      </div>

      <section className="hero-s">
        <div className="container">
          <div className="hero">
            <h1>
              Умные калькуляторы для <span>ваших задач</span>
            </h1>
            <p className="subtitle">Быстрые и точные расчеты в один клик</p>

            <div className="search-container">
              <input
                type="text"
                placeholder="Найти калькулятор..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              <button className="search-button">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 21L16.65 16.65"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    activeCategory === category ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === "all"
                    ? "Все"
                    : category === "finance"
                    ? "Финансы"
                    : category === "health"
                    ? "Здоровье"
                    : category === "construction"
                    ? "Строительство"
                    : category === "education"
                    ? "Образование"
                    : category === "conversion"
                    ? "Конвертеры"
                    : "Лайфстайл"}
                </button>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .hero-s {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            color: white;
            padding: 5rem 0 3.5rem;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .hero-s::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: radial-gradient(
              circle at 20% 30%,
              rgba(255, 255, 255, 0.1) 0%,
              transparent 20%
            );
          }

          .container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          .hero-s h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            line-height: 1.3;
          }

          .hero-s h1 span {
            color: #fbbf24;
            position: relative;
          }

          .hero-s h1 span::after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 3px;
            background: currentColor;
            border-radius: 3px;
          }

          .hero-s .subtitle {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-s .search-container {
            display: flex;
            max-width: 600px;
            margin: 0 auto 2rem;
            position: relative;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          .hero-s .search-input {
            flex: 1;
            padding: 0.875rem 1.25rem;
            border: none;
            font-size: 1rem;
            color: #1f2937;
          }

          .hero-s .search-input:focus {
            outline: none;
          }

          .hero-s .search-input::placeholder {
            color: #9ca3af;
          }

          .hero-s .search-button {
            background: transparent;
            border: none;
            padding: 0 1rem;
            color: #6b7280;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.2s ease;
          }

          .hero-s .search-button:hover {
            color: #4f46e5;
          }

          .hero-s .category-filters {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
            margin-top: 1.5rem;
          }

          .hero-s .category-btn {
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            background-color: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: white;
            font-size: 0.875rem;
            cursor: pointer;
            transition: all 0.2s ease;
          }

          .hero-s .category-btn:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }

          .hero-s .category-btn.active {
            background-color: #fbbf24;
            color: #1f2937;
            border-color: #fbbf24;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .hero-s {
              padding: 4rem 0 3rem;
            }

            .hero-s h1 {
              font-size: 2rem;
            }

            .hero-s .subtitle {
              font-size: 1rem;
            }

            .hero-s .category-filters {
              gap: 0.5rem;
            }

            .hero-s .category-btn {
              padding: 0.4rem 0.8rem;
              font-size: 0.8rem;
            }
          }

          @media (max-width: 480px) {
            .hero-s {
              padding: 3rem 0 2.5rem;
            }

            .hero-s h1 {
              font-size: 1.75rem;
            }

            .hero-s .search-container {
              margin-bottom: 1.5rem;
            }
          }
        `}</style>
      </section>

      <section className="calculators-section">
        <div className="container">
          <div className="calculators-grid">
            {filteredCalculators.map((calculator) => (
              <a
                key={calculator.id}
                href={calculator.url}
                className="calculator-card"
                data-category={calculator.category}
              >
                <div className="card-content">
                  <h3>{calculator.name}</h3>
                  <p>{calculator.description}</p>
                </div>
                <div className="card-arrow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {filteredCalculators.length === 0 && (
            <div className="no-results">
              <h3>Ничего не найдено</h3>
              <p>Попробуйте изменить критерии поиска</p>
            </div>
          )}
        </div>
      </section>

      <Contents>
        <h2 className="content-title">
          <span>CalcMaster</span> - ваш универсальный помощник в расчетах
        </h2>
        <div className="content-grid">
          <div className="content-block">
            <h3>Для повседневной жизни</h3>
            <p>
              Наши калькуляторы помогают в решении бытовых задач - от расчета
              скидок в магазине до планирования ремонта.
            </p>
          </div>
          <div className="content-block">
            <h3>Финансовые расчеты</h3>
            <p>
              Точные инструменты для работы с налогами, кредитами, инвестициями.
            </p>
          </div>
          <div className="content-block">
            <h3>Здоровье и спорт</h3>
            <p>Следите за своим здоровьем с помощью наших калькуляторов.</p>
          </div>
          <div className="content-block">
            <h3>Строительство и ремонт</h3>
            <p>
              Точные расчеты материалов для строительства дома или ремонта
              квартиры.
            </p>
          </div>
        </div>
      </Contents>
      <Footer />
    </div>
  );
}

export default Home;
