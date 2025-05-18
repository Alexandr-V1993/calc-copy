"use client";
import React, { useState, useEffect } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import CalorieForm from "./CalorieForm";
import "./stag.css";

function Compound() {
  const [vel, setVel] = useState("м");
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [initial, setInitial] = useState({
    value: "",
    round: 2,
    type: "radius",
    height: "",
  });

  const handleTabClick = (tab) => {
    let type = "radius";
    if (tab === "tab2") type = "diameter";
    if (tab === "tab3") type = "area";

    setSelectedTab(tab);
    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  };

  useEffect(() => {
    let type = "radius";
    if (selectedTab === "tab2") type = "diameter";
    if (selectedTab === "tab3") type = "area";

    setInitial((prevState) => ({
      ...prevState,
      type: type,
    }));
  }, [selectedTab]);

  const handleChange = (e) => {
    setInitial({
      ...initial,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleRoundChange = (e) => {
    setInitial({
      ...initial,
      round: Number(e.target.value),
    });
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Онлайн калькулятор объема цилиндра поможет рассчитать объем на основе радиуса и высоты. Простой и точный инструмент для учебы, работы и повседневного использования."
        }
        span={"объема цилиндра"}
      >
        <CalorieForm
          vel={vel}
          selectedTab={selectedTab}
          obj={initial}
          url={"https://boxcalculators.ru/api/calculate/volume-cylinder"}
        >
          <div className="test-input">
            <div className="tabs">
              <div className="flex-row">
                <div className="centre-flex">
                  {" "}
                  <span>Известная величина</span>
                </div>
                <div className="right-all-gap">
                  <span
                    className={selectedTab === "tab1" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab1")}
                  >
                    Радиус
                  </span>
                  <span
                    className={selectedTab === "tab2" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab2")}
                  >
                    Диаметр
                  </span>
                  <span
                    className={selectedTab === "tab3" ? "active" : "noact"}
                    onClick={() => handleTabClick("tab3")}
                  >
                    Площадь
                  </span>
                </div>
              </div>
            </div>

            <div className="content">
              {initial.type === "radius" && (
                <>
                  <label className="numrange">
                    <span>
                      Радиус, <span className="red">r</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="value"
                      value={initial.value}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      name="height"
                      value={initial.height}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {initial.type === "diameter" && (
                <>
                  <label className="numrange">
                    <span>
                      Диаметр, <span className="red">d</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="value"
                      value={initial.value}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      name="height"
                      value={initial.height}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              {initial.type === "area" && (
                <>
                  <label className="numrange">
                    <span>
                      Площадь, <span className="red">S</span>
                    </span>
                    <input
                      type="number"
                      className="input"
                      name="value"
                      value={initial.value}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="numrange">
                    <span>Высота</span>
                    <input
                      type="number"
                      className="input"
                      name="height"
                      value={initial.height}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </>
              )}
              <label className="numrange">
                <span>Округлять до (знаков после запятой)</span>
                <select
                  name="round"
                  className="calc-inp"
                  value={initial.round}
                  onChange={handleRoundChange}
                >
                  {[...Array(11).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </label>
              <label className="numrange">
                <span>Единица измерения</span>
                <select
                  name="unit"
                  className="calc-inp"
                  value={vel}
                  onChange={(e) => setVel(e.target.value)}
                >
                  <option value="м">м</option>
                  <option value="см">см</option>
                  <option value="мм">мм</option>
                </select>
              </label>
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <h2>Как узнать объем цилиндра?</h2>

          <p>
            Цилиндр — это одна из самых распространенных геометрических форм,
            которую можно встретить как в учебниках, так и в реальной жизни.
            Понимание того, как определить его объем, может быть полезным в
            строительстве, производстве, образовании и даже при ремонте дома.
            Онлайн-калькулятор делает этот процесс простым и понятным даже
            новичкам.
          </p>

          <h3>Зачем нужно знать объем цилиндра?</h3>

          <p>Это может понадобиться в различных ситуациях:</p>

          <ul>
            <li>
              <strong>В учебе:</strong> школьники и студенты часто сталкиваются
              с задачами, где требуется найти объем.
            </li>
            <li>
              <strong>На работе:</strong> проектирование емкостей, труб, баков и
              других изделий.
            </li>
            <li>
              <strong>В быту:</strong> например, при изготовлении самодельной
              бочки или коптильни.
            </li>
            <li>
              <strong>В строительстве:</strong> для определения вместимости
              колодцев, труб, колонн.
            </li>
            <li>
              <strong>В хобби:</strong> если вы занимаетесь ландшафтным дизайном
              или мастерите что-то своими руками.
            </li>
          </ul>

          <h3>Как работает калькулятор объема цилиндра?</h3>

          <p>
            Калькулятор запрашивает у пользователя два значения: размер
            основания и высоту цилиндра. После этого система автоматически
            рассчитывает, сколько внутреннего пространства может поместиться
            внутри этой фигуры. Все вычисления происходят за доли секунды — вам
            не нужно вспоминать формулы или использовать лист бумаги.
          </p>

          <p>
            Такой подход особенно полезен тем, кто далек от математики, но хочет
            получить точный результат.
          </p>

          <h3>Где еще может пригодиться такой калькулятор?</h3>

          <p>
            Онлайн-инструменты, которые точно рассчитывают объем цилиндрической
            формы, могут быть полезны:
          </p>

          <ul>
            <li>
              <strong>Для водопроводчиков:</strong> при выборе трубы нужного
              диаметра;
            </li>
            <li>
              <strong>Для фермеров:</strong> при оценке вместимости силосной
              башни или бочки;
            </li>
            <li>
              <strong>Для кондитеров:</strong> при замесе теста в цилиндрической
              форме;
            </li>
            <li>
              <strong>Для инженеров:</strong> при проектировании машин и
              механизмов;
            </li>
            <li>
              <strong>Для дизайнеров:</strong> при создании предметов мебели и
              декора.
            </li>
          </ul>

          <h3>Что такое цилиндр?</h3>

          <p>
            Цилиндр — это трехмерная форма, которая имеет круглое основание и
            прямые стенки, идущие вверх до определенной высоты. Форма
            встречается повсюду: от банок и бочек до бетонных опор и колонн.
            Знание объема помогает понять, сколько жидкости, сыпучих материалов
            или воздуха помещается внутрь такой конструкции.
          </p>

          <h3>Как пользоваться калькулятором?</h3>

          <p>
            Чтобы воспользоваться калькулятором, просто выполните несколько
            шагов:
          </p>

          <ol>
            <li>
              <strong>Измерьте основание:</strong> определите ширину или радиус
              круга внизу.
            </li>
            <li>
              <strong>Измерьте высоту:</strong> насколько высокий объект вы
              хотите рассчитать.
            </li>
            <li>
              <strong>Выберите единицы измерения:</strong> сантиметры, метры или
              дюймы — главное, чтобы они были одинаковые.
            </li>
            <li>
              <strong>Нажмите «Рассчитать»:</strong> и получите готовое значение
              объема.
            </li>
          </ol>

          <h3>Как проверить точность результата?</h3>

          <p>
            Вы можете сравнить результат с другими калькуляторами или сделать
            контрольный расчет вручную. Также можно использовать Excel или
            мобильное приложение для сверки. Главное — правильно ввести данные и
            не перепутать радиус с диаметром.
          </p>

          <h3>Какие ошибки чаще всего встречаются?</h3>

          <p>
            Вот самые распространенные неточности при использовании
            калькулятора:
          </p>

          <ul>
            <li>
              <strong>Перепутаны радиус и диаметр:</strong> от этого зависит
              точность расчета.
            </li>
            <li>
              <strong>Неверные единицы измерения:</strong> важно указывать все
              значения в одних и тех же единицах (все в см или в м).
            </li>
            <li>
              <strong>Ошибка ввода:</strong> случайно добавлен лишний ноль или
              точка вместо запятой.
            </li>
            <li>
              <strong>Игнорирование формы:</strong> если цилиндр не идеален
              (например, слегка конусный), погрешность будет.
            </li>
            <li>
              <strong>Отсутствие запаса:</strong> если вы планируете заполнение
              веществом, лучше закладывайте небольшой запас.
            </li>
          </ul>

          <h3>Какие ещё параметры можно рассчитать?</h3>

          <p>Помимо объема, можно также найти:</p>

          <ul>
            <li>
              <strong>Площадь основания:</strong> чтобы знать, какая площадь у
              дна и крышки.
            </li>
            <li>
              <strong>Площадь поверхности:</strong> важно при окрашивании,
              покрытии или утеплении.
            </li>
            <li>
              <strong>Вместимость:</strong> сколько воды, песка или другого
              вещества поместится внутрь.
            </li>
            <li>
              <strong>Вес содержимого:</strong> если известна плотность вещества
              внутри цилиндра.
            </li>
            <li>
              <strong>Высоту при известном объеме:</strong> полезно при
              проектировании ёмкостей.
            </li>
          </ul>

          <h3>Как выбрать правильный калькулятор?</h3>

          <p>Хороший калькулятор должен:</p>

          <ul>
            <li>
              <strong>Поддерживать разные единицы:</strong> см, м, мм, дюймы.
            </li>
            <li>
              <strong>Уметь считать разные варианты:</strong> по радиусу,
              диаметру, высоте.
            </li>
            <li>
              <strong>Иметь четкий интерфейс:</strong> понятный и удобный даже
              для новичков.
            </li>
            <li>
              <strong>Сохранять историю:</strong> чтобы не вводить заново
              предыдущие значения.
            </li>
            <li>
              <strong>Быть бесплатным:</strong> всё необходимое должно быть
              доступно без оплаты.
            </li>
          </ul>

          <h3>Какие материалы можно рассчитать через объем?</h3>

          <p>Объем цилиндра может понадобиться для определения:</p>

          <ul>
            <li>
              <strong>Сколько воды поместится в бочку;</strong>
            </li>
            <li>
              <strong>Какой объем бетона нужен для колонны;</strong>
            </li>
            <li>
              <strong>
                Сколько зерна или удобрений вмещает силосная башня;
              </strong>
            </li>
            <li>
              <strong>Какое количество масла в двигателе;</strong>
            </li>
            <li>
              <strong>Сколько топлива в цилиндрическом баке.</strong>
            </li>
          </ul>

          <h3>Интересные факты о цилиндрах</h3>

          <p>
            Интересно, что цилиндрическая форма используется во многих сферах,
            потому что она устойчива к давлению и равномерно распределяет
            нагрузку. Благодаря этому цилиндры применяются в авиации,
            машиностроении, архитектуре и даже в быту. С помощью нашего
            калькулятора вы сможете быстро освоить эту важную величину и
            применять её в жизни.
          </p>

          <h3>Какие ещё есть формы, связанные с цилиндром?</h3>

          <p>Похожие формы, которые тоже можно рассчитать:</p>

          <ul>
            <li>
              <strong>Конус:</strong> как цилиндр, но сужающийся к вершине.
            </li>
            <li>
              <strong>Шар:</strong> объём рассчитывается по-другому, но тоже
              популярная форма.
            </li>
            <li>
              <strong>Куб или параллелепипед:</strong> для прямоугольных
              емкостей.
            </li>
            <li>
              <strong>Призма:</strong> цилиндр — частный случай круговой призмы.
            </li>
            <li>
              <strong>Кольцо:</strong> цилиндр с вырезанным внутренним
              цилиндром.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-калькулятора?</h3>

          <p>
            Онлайн-калькулятор объема цилиндра предлагает множество преимуществ:
          </p>

          <ul>
            <li>
              <strong>Точность:</strong> алгоритмы учитывают все стандартные
              правила.
            </li>
            <li>
              <strong>Скорость:</strong> результат готов почти мгновенно.
            </li>
            <li>
              <strong>Универсальность:</strong> подходит как для учёбы, так и
              для практики.
            </li>
            <li>
              <strong>Доступность:</strong> работает на любом устройстве с
              интернетом.
            </li>
            <li>
              <strong>Простота:</strong> не нужно ничего вычислять — только ввод
              данных.
            </li>
          </ul>

          <h3>Полезные советы по измерению</h3>

          <p>Чтобы результат был максимально точным, следуйте этим советам:</p>

          <ul>
            <li>
              <strong>Измеряйте правильно:</strong> радиус — это половина
              диаметра.
            </li>
            <li>
              <strong>Проверьте единицы:</strong> все значения должны быть в
              одной системе (например, в сантиметрах).
            </li>
            <li>
              <strong>Убедитесь в правильной форме:</strong> если объект немного
              сплющен или искажён, результат будет приблизительным.
            </li>
            <li>
              <strong>Добавьте запас:</strong> особенно важно при покупке
              веществ или материалов.
            </li>
            <li>
              <strong>Не забудьте о толщине стенок:</strong> если вы
              рассчитываете внешние размеры, внутренний объем может отличаться.
            </li>
          </ul>

          <h3>Часто задаваемые вопросы</h3>

          <p>
            <strong>
              Можно ли использовать калькулятор для разных материалов?
            </strong>
          </p>
          <p>
            Да, калькулятор рассчитывает чистый объем, который подходит для
            любого вещества — воды, бетона, песка и других.
          </p>

          <p>
            <strong>Как рассчитывается вместимость?</strong>
          </p>
          <p>
            Объем показывает, сколько материала может поместиться внутри
            цилиндра — будь то жидкость, газ или сыпучее вещество.
          </p>

          <p>
            <strong>Нужно ли учитывать толщину стенок?</strong>
          </p>
          <p>
            Если вы знаете толщину стенок, можно ввести внутренние размеры —
            тогда расчет будет точнее.
          </p>

          <h3>Итог</h3>

          <p>
            Расчёт объема цилиндра — важный этап в самых разных задачах: от
            школьного урока до строительного проекта. Онлайн-калькулятор делает
            этот процесс простым и доступным каждому. Независимо от вашей
            профессии или возраста — он станет вашим надежным помощником.
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
