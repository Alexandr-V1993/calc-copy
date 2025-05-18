"use client";

import { useReducer } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import SlugyForm from "./SlugyForm";

import CheckBox from "../components/CheckBox";
import "./slugyfy.css";

const initial = {
  options: {
    stopWords: false,
    numbers: false,
  },
  separator: "-",
  text: "",
  domen: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "text":
      return { ...state, text: action.payload };
    case "stopWords":
      return {
        ...state,
        options: {
          ...state.options,
          stopWords: !state.options.stopWords,
        },
      };
    case "numbers":
      return {
        ...state,
        options: {
          ...state.options,
          numbers: !state.options.numbers,
        },
      };
    case "separator":
      return {
        ...state,
        separator: state.separator === "-" ? "_" : "-",
      };
    case "domen":
      return { ...state, domen: action.payload };

    default:
      return state;
  }
}

function Slugyfy() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };

  function handleCheck(typeDispatch) {
    dispatch({ type: typeDispatch });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор Генератор ЧПУ "}
        description={
          "Создавайте читаемые и SEO-оптимизированные URL-слаги быстро и легко. Улучшите навигацию, повысьте релевантность ваших страниц в поисковых системах."
        }
        span={"онлайн"}
      >
        <SlugyForm
          domen={state.domen}
          obj={obj}
          url={"https://boxcalculators.ru/api/generate/slug"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput"></div>
              <div className="checkbox">
                <span className="pre-top">Текст</span>
                <label className="label-row-top">
                  <textarea
                    placeholder="Как сделать ссылку на сайте"
                    onChange={(e) =>
                      dispatch({ type: "text", payload: e.target.value })
                    }
                  ></textarea>
                </label>
                <span className="pre-top">Разделитель</span>
                <label className="label-row-top">
                  <input
                    type="checkbox"
                    className="row-check"
                    checked={state.separator === "-"}
                    onChange={() => handleCheck("separator")}
                  />
                  <span>
                    <span className="span">Dash (-)</span>
                  </span>
                </label>
                <label className="label-row-top">
                  <input
                    type="checkbox"
                    className="row-check"
                    checked={state.separator === "_"}
                    onChange={() => handleCheck("separator")}
                  />
                  <span>
                    <span className="span">Underscore ( _ ) </span>
                  </span>
                </label>

                <span className="pre-top">Используемые символы</span>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"stopWords"}
                    handleCheck={handleCheck}
                  />
                  <span>
                    <span className="span">Удалить стоп-слова</span>{" "}
                    a,an,and,are,how...
                  </span>
                </label>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"numbers"}
                    handleCheck={handleCheck}
                  />
                  <span>
                    {" "}
                    <span className="span">Удалить числа</span> 0123456789
                  </span>
                </label>
              </div>
              <span className="pre-top">Префикс / Домен</span>
              <label className="label-row-top">
                <input
                  type="text"
                  placeholder="Домен"
                  onChange={(e) =>
                    dispatch({ type: "domen", payload: e.target.value })
                  }
                />
              </label>
            </div>
          </div>
        </SlugyForm>

        <Contents>
          <h2>Что такое URL-слаг?</h2>
          <p>
            <strong>URL-слаг</strong>, также известный как ЧПУ (человекопонятная
            ссылка), — это часть веб-адреса, которая делает его более понятным
            не только для людей, но и для поисковых систем.
          </p>

          <p>
            Обычно он следует после домена и представляет собой транслитерацию
            заголовка статьи, товара или страницы:
          </p>
          <p className="example">
            <strong>Пример:</strong> https://boxcalculators.ru/{" "}
            <span className="page-bolt">slug-generator</span>
          </p>

          <h3>Как формируется слаг?</h3>
          <p>
            URL-слаг создаётся из заголовка или описания страницы. Например,
            если ваш заголовок:
          </p>
          <p className="formula">
            «Как рассчитать налог на доходы физических лиц»
          </p>
          <p>То URL будет таким:</p>
          <p className="formula">
            kak-rasschitat-nalog-na-doxody-fizicheskix-lic
          </p>

          <p>
            Он приводится к нижнему регистру, удаляются спецсимволы и стоп-слова
            («на», «в», «и» и т.п.), чтобы сделать его короче и чище.
          </p>

          <h2>Зачем нужен URL-слаг?</h2>
          <ul>
            <li>
              <strong>Для пользователя:</strong> упрощает восприятие ссылки и
              даёт ясное представление о содержании страницы;
            </li>
            <li>
              <strong>Для SEO:</strong> помогает поисковым системам лучше понять
              тематику и повысить релевантность;
            </li>
            <li>
              <strong>Для CMS:</strong> упрощает навигацию и внутреннюю
              организацию контента.
            </li>
          </ul>

          <h2>Как создать идеальный URL-слаг?</h2>
          <p>Вот несколько правил для хорошего URL-слага:</p>
          <ol>
            <li>Короткий (до 5–6 слов);</li>
            <li>В нижнем регистре;</li>
            <li>Наличие ключевого слова;</li>
            <li>Без пробелов, знаков препинания и стоп-слов;</li>
            <li>Легко запоминается и передаёт смысл.</li>
          </ol>

          <h2>Примеры хороших и плохих слагов</h2>
          <p>
            <strong>Хороший слаг:</strong> /vyschaya-matemaika-dlya-studentov
          </p>
          <p>
            <strong>Плохой слаг:</strong>{" "}
            /page_id=123&title=tema%20uroka%20na%20procenty
          </p>

          <h2>Роль URL-слага в SEO</h2>
          <p>
            Поисковые системы, такие как Google и Яндекс, предпочитают читаемые
            и осмысленные URL-адреса. Они влияют на:
          </p>
          <ul>
            <li>
              <strong>Ранжирование:</strong> наличие целевых слов помогает лучше
              попадать в выдачу;
            </li>
            <li>
              <strong>Пользовательский опыт:</strong> пользователи легче узнают,
              на какой странице они окажутся;
            </li>
            <li>
              <strong>Целевую аудиторию:</strong> правильно составленный слаг
              может увеличить кликабельность в выдаче;
            </li>
            <li>
              <strong>Внутреннюю перелинковку:</strong> упрощает использование и
              навигацию внутри сайта.
            </li>
          </ul>

          <h2>Как работает наш генератор URL?</h2>
          <p>
            Введите заголовок, название статьи, продукта или страницы — и
            получите готовый URL-слаг мгновенно:
          </p>
          <ul>
            <li>Убирает лишние символы и пробелы;</li>
            <li>Переводит всё в нижний регистр;</li>
            <li>Транслирует кириллицу в латинскую версию;</li>
            <li>Добавляет дефисы вместо пробелов;</li>
            <li>Удаляет служебные слова без потери смысла.</li>
          </ul>

          <h2>Советы по использованию слагов</h2>
          <p>Вот что стоит учитывать:</p>
          <ul>
            <li>
              <strong>Не злоупотребляйте длинными строками</strong> — чем
              короче, тем лучше;
            </li>
            <li>
              <strong>Используйте ключевые слова</strong> — это помогает в
              продвижении;
            </li>
            <li>
              <strong>Укажите тему строго и ясно</strong> — не должно быть
              двусмысленности;
            </li>
            <li>
              <strong>Убедитесь, что слаг уникален</strong> — избегайте
              дублирования;
            </li>
            <li>
              <strong>Удобство для маркетолога и разработчика</strong> — можно
              использовать в CMS, блогах, интернет-магазинах и других системах.
            </li>
          </ul>

          <p>
            Генератор URL от BoxCalculators поможет вам сэкономить время и
            создать правильную структуру ссылок на сайте, улучшая как SEO, так и
            UX.
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

export default Slugyfy;
