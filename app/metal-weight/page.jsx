"use client";
import React, { useReducer, useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import CalorieForm from "./CalorieForm";
import Armatura from "../components/metall/Armatura";
import BalkaDvutavr from "../components/metall/BalkaDvutavr";
import Shveller from "../components/metall/Shveller";
import Ugolok from "../components/metall/Ugolok";
import TrubaKruglaya from "../components/metall/TrubaKruglaya";
import TrubaProfilnaya from "../components/metall/TrubaProfilnaya";
import Krug from "../components/metall/Krug";
import Kvadrat from "../components/metall/Kvadrat";
import List from "../components/metall/List";
import Lenta from "../components/metall/Lenta";
import Shestigrannik from "../components/metall/Shestigrannik";
import "./calorie.css";

const initial = {};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_SELECTED_OBJECT":
      return { ...state, selectedObject: action.payload };
    default:
      return state;
  }
}

function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const [selectedProrate, setSelectedProrate] = useState("Арматура");

  const handleProrateSelection = (prorateType) => {
    setSelectedProrate(prorateType);
    dispatch({
      type: "UPDATE_SELECTED_OBJECT",
      payload: { type: prorateType },
    });
  };

  const handleDataUpdate = (data) => {
    dispatch({ type: "UPDATE_SELECTED_OBJECT", payload: data });
  };

  return (
    <>
      <HeaderModal />
      <TopForm
        title={"Калькулятор "}
        description={
          "Онлайн-калькулятор металлопроката BoxCalculators обеспечивает точный расчет веса, длины и стоимости изделий из стали, соответствующий российским ГОСТам и техническим условиям. Полезен при строительстве, производстве и закупке материалов."
        }
        span={"Металла"}
      >
        <CalorieForm
          obj={state.selectedObject}
          url={"https://boxcalculators.ru/api/calculate/metal"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <label className="label-top">
                <span>Тип проката</span>
                <div className="row">
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Арматура" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Арматура")}
                  >
                    <span className="align-middle">Арматура</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Балка/двутавр" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Балка/двутавр")}
                  >
                    <span className="align-middle">Балка/двутавр</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Швеллер" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Швеллер")}
                  >
                    <span className="align-middle">Швеллер</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Уголок" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Уголок")}
                  >
                    <span className="align-middle">Уголок</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Труба круглая" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Труба круглая")}
                  >
                    <span className="align-middle">Труба круглая</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Труба профильная" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Труба профильная")}
                  >
                    <span className="align-middle test-p">
                      Труба профильная
                    </span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Круг" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Круг")}
                  >
                    <span className="align-middle">Круг</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Квадрат" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Квадрат")}
                  >
                    <span className="align-middle">Квадрат</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Лист" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Лист")}
                  >
                    <span className="align-middle">Лист</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 col-lg-4 ${
                      selectedProrate === "Лента" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Лента")}
                  >
                    <span className="align-middle">Лента</span>
                  </button>
                  <button
                    type="button"
                    className={`calc-toggle-button col-6 col-md-4 test-h col-lg-4 ${
                      selectedProrate === "Шестигранник" ? "current" : ""
                    }`}
                    onClick={() => handleProrateSelection("Шестигранник")}
                  >
                    <span className="align-middle">Шестигранник</span>
                  </button>
                </div>
              </label>
              {/* Условные рендеры для компонентов */}
              {selectedProrate === "Арматура" && (
                <Armatura onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Балка/двутавр" && (
                <BalkaDvutavr onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Швеллер" && (
                <Shveller onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Уголок" && (
                <Ugolok onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Труба круглая" && (
                <TrubaKruglaya onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Труба профильная" && (
                <TrubaProfilnaya onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Круг" && (
                <Krug onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Квадрат" && (
                <Kvadrat onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Лист" && (
                <List onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Лента" && (
                <Lenta onDataUpdate={handleDataUpdate} />
              )}
              {selectedProrate === "Шестигранник" && (
                <Shestigrannik onDataUpdate={handleDataUpdate} />
              )}
            </div>
          </div>
        </CalorieForm>
        <Contents>
          <div className="sidebar">
            <div className="sidebar-header">
              <img className="sidebar-logo" src="/stroika2.svg" alt="дата" />
              <span className="sidebar-title">Строительные калькуляторы</span>
            </div>
            <div className="sidebar-links">
              <a href="/metal-calculator-armature" className="sidebar-link ">
                Вес арматуры
              </a>
              <a href="/metal-calculator-angle" className="sidebar-link">
                Вес уголка
              </a>
              <a href="/metal-calculator-circle" className="sidebar-link">
                Вес круга
              </a>
              <a href="/metal-calculator-square" className="sidebar-link">
                Вес квадрата
              </a>
              <a href="/metal-calculator-pipe" className="sidebar-link">
                Вес круглой трубы
              </a>
              <a href="/metal-calculator-shaped-tube" className="sidebar-link">
                Вес профильной трубы
              </a>
              <a href="/metal-calculator-beam" className="sidebar-link ">
                Вес балки двутавровой
              </a>
              <a href="/metal-calculator-channel" className="sidebar-link">
                Вес швеллера
              </a>
              <a href="/metal-calculator-sheet" className="sidebar-link">
                Вес листа
              </a>
              <a href="/metal-calculator-strip" className="sidebar-link">
                Вес полосы
              </a>
              <a href="/metal-calculator-hex" className="sidebar-link">
                Вес шестигранника
              </a>
              <a href="/metallocalculator" className="sidebar-link">
                Металлокалькулятор
              </a>
            </div>
          </div>

          <p>
            Калькулятор веса металла — это незаменимый инструмент для всех, кто
            работает с металлопрокатом, будь то строитель, сварщик, инженер или
            частное лицо. Он позволяет быстро и точно рассчитать массу, длину,
            количество погонных метров и стоимость различных видов стального
            проката, включая трубы, уголки, балки, листы и многое другое.
          </p>

          <h2>Что можно рассчитать?</h2>
          <p>Наш калькулятор поддерживает широкий спектр задач:</p>
          <ul>
            <li>
              <strong>Вес металла:</strong> по заданным размерам и марке стали;
            </li>
            <li>
              <strong>Длину по весу:</strong> если известна масса и нужно
              определить длину;
            </li>
            <li>
              <strong>Количество метров в тонне:</strong> полезно при закупках;
            </li>
            <li>
              <strong>Стоимость партии:</strong> с учетом цен за килограммы или
              метры.
            </li>
          </ul>

          <h2>Какие материалы поддерживаются?</h2>
          <p>Калькулятор работает с основными типами металлопроката:</p>
          <ul>
            <li>арматура</li>
            <li>листовая сталь</li>
            <li>круг, квадрат, шестигранник</li>
            <li>уголок, швеллер, двутавр</li>
            <li>трубы круглые, профильные</li>
            <li>сетка, проволока, катанка</li>
          </ul>

          <p>
            Также поддерживаются различные марки стали, включая углеродистые,
            легированные и нержавеющие.
          </p>

          <h2>Как работает калькулятор?</h2>
          <p>Для расчета используется формула:</p>
          <div className="formula">
            <span>Вес = Плотность × Объем</span>
          </div>
          <p>
            Плотность зависит от типа материала (например, для стали — 7,85
            г/см³), а объем рассчитывается по геометрии выбранного проката.
          </p>

          <p>
            Выберите тип металла, его форму и размеры — и калькулятор мгновенно
            выдаст вам нужные значения.
          </p>

          <h2>Зачем нужен калькулятор веса металла?</h2>
          <ul>
            <li>
              <strong>Строительство:</strong> определение массы конструкций;
            </li>
            <li>
              <strong>Производство:</strong> планирование расхода материалов;
            </li>
            <li>
              <strong>Покупка металла:</strong> перевод тонн в метры и обратно;
            </li>
            <li>
              <strong>Логистика:</strong> оценка транспортных затрат;
            </li>
            <li>
              <strong>Складской учёт:</strong> контроль запасов и заказов.
            </li>
          </ul>

          <h2>Преимущества использования</h2>
          <p>В отличие от справочных таблиц и ручного подсчёта:</p>
          <ul>
            <li>
              <strong>Высокая точность:</strong> используем актуальные данные по
              ГОСТ и ТУ;
            </li>
            <li>
              <strong>Скорость:</strong> мгновенный результат без ошибок;
            </li>
            <li>
              <strong>Гибкость:</strong> поддержка разных типов проката и марок;
            </li>
            <li>
              <strong>Удобство:</strong> всё в одном месте — масса, длина,
              стоимость;
            </li>
            <li>
              <strong>Доступность:</strong> бесплатно, без регистрации, с любого
              устройства.
            </li>
          </ul>

          <h2>Почему важна точность?</h2>
          <p>
            При работе с металлоконструкциями даже небольшая неточность может
            привести к перерасходу материалов, увеличению нагрузки или снижению
            прочности. Поэтому важно использовать надежные источники данных и
            проверенные методики.
          </p>

          <p>
            Наш калькулятор учитывает плотность материала, геометрию профиля и
            действующие нормативы, чтобы вы получали максимально корректные
            результаты.
          </p>

          <h2>Какие ГОСТы и ТУ используются?</h2>
          <p>Расчёты основаны на следующих стандартах:</p>
          <ul>
            <li>ГОСТ 5336-80 — проволока;</li>
            <li>ГОСТ 8509-93 — равнополочный уголок;</li>
            <li>ГОСТ 8510-86 — неравнополочный уголок;</li>
            <li>ГОСТ 8559-75 — двутавр;</li>
            <li>ГОСТ 8511-75 — швеллер;</li>
            <li>ГОСТ 31447-2012 — стальная арматура;</li>
            <li>ГОСТ 10704-76 — электросварные трубы;</li>
            <li>ГОСТ 19903-2017 — горячекатаные листы;</li>
            <li>ГОСТ 103-2016 — стальной квадрат;</li>
            <li>ГОСТ 2590-2016 — круглая сталь.</li>
          </ul>

          <h2>Как использовать калькулятор?</h2>
          <p>Чтобы выполнить расчет:</p>
          <ol>
            <li>Выберите тип металла (например, «круг», «труба», «лист»);</li>
            <li>Укажите марку стали;</li>
            <li>Введите параметры (диаметр, толщину стенки, длину и т.д.);</li>
            <li>
              Нажмите «Рассчитать» и получите точный вес, объём и стоимость.
            </li>
          </ol>

          <h2>Пример расчёта</h2>
          <p>
            Допустим, вы хотите узнать, сколько весит 1 метр стального круга
            диаметром 20 мм:
          </p>
          <div className="example">
            <span className="page-bolt">Формула:</span> π × r² × длина ×
            плотность
          </div>
          <div className="example">
            <span className="page-bolt">Результат:</span> ~2.47 кг
          </div>

          <p>
            Это значит, что 1 метр стального круга диаметром 20 мм весит около
            2.47 кг.
          </p>

          <h2>Для кого этот калькулятор?</h2>
          <ul>
            <li>
              <strong>👷 Инженеры:</strong> для проектных расчетов и
              проектирования;
            </li>
            <li>
              <strong>🏭 Производственники:</strong> контроль расхода
              материалов;
            </li>
            <li>
              <strong>🚚 Закупщики:</strong> работа с поставщиками и отгрузка;
            </li>
            <li>
              <strong>🛠️ Мастера и сварщики:</strong> точные расчёты для
              изготовления;
            </li>
            <li>
              <strong>🏠 Частные лица:</strong> ремонт, забор, беседка и т.п.
            </li>
          </ul>

          <h2>Почему стоит выбрать наш калькулятор?</h2>
          <p>Наш калькулятор:</p>
          <ul>
            <li>основан на реальных ГОСТах и ТУ;</li>
            <li>поддерживает все распространённые виды проката;</li>
            <li>дает возможность рассчитать не только вес, но и стоимость;</li>
            <li>работает мгновенно и без ошибок;</li>
            <li>совместим с любыми устройствами и браузерами.</li>
          </ul>

          <h2>Важно!</h2>
          <p>
            Если вы работаете с большими объемами или в условиях ограниченного
            бюджета, точный расчет поможет избежать лишних затрат и сэкономить
            время. Особенно важно знать вес металла при заказе автокрана,
            доставке, составлении спецификаций и чертежей.
          </p>

          <h2>Сплавы металлов</h2>
          <p>Наш сервис позволяет рассчитать массу различных металлов:</p>
          <ul>
            <li>сталь</li>
            <li>алюминий</li>
            <li>латунь</li>
            <li>медь</li>
            <li>бронза</li>
            <li>титан</li>
            <li>чугун</li>
            <li>золото</li>
            <li>свинец</li>
            <li>магний</li>
            <li>никель</li>
            <li>палладий</li>
            <li>платина</li>
            <li>серебро</li>
            <li>олово</li>
            <li>цинк</li>
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

export default Compound;
