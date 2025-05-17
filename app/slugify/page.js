"use client";

import { useReducer } from "react";
import HeaderModal from "../components/HeaderModal";
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
          "Создание ссылок с нашим сервисом становится быстрым и простым процессом, который значительно улучшает опыт пользователей вашего сайта."
        }
        span={"онлайн"}
      >
        <SlugyForm
          domen={state.domen}
          obj={obj}
          url={"https://calcoffee.ru/api/generate/slug"}
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
          <h2>Что такое URL-slug?</h2>
          <p>
            URL-слаг, или ЧПУ (Человекопонятный URL), представляет собой
            уникальный адрес веб-страницы, который находится после доменного
            имени. Этот термин можно сравнить с основным именем файла или
            заголовком страницы, что делает его более понятным для
            пользователей.
          </p>
          <p>
            Обычно URL-слаг формируется на основе заголовка страницы или ее
            основного заголовка (title или H1). Однако в случаях, связанных с
            оптимизацией для поисковых систем, ЧПУ может быть создан вручную
            из-за длинного заголовка статьи или страницы.
          </p>
          <p>
            "Дружественные" URL-адреса обычно состоят из символов нижнего
            регистра, исключая специальные символы и стоп-слова с числами. Это
            делает адрес более удобным для запоминания и обмена, а также более
            читаемым для пользователей.
          </p>
          <p>
            Основное преимущество URL-слага заключается в том, что он облегчает
            поиск нужной страницы в списке URL-адресов, улучшает навигацию и
            понимание для пользователей. Кроме того, слаг быстро передает
            информацию о теме страницы, статьи или товара, когда используется в
            качестве URL-адреса.
          </p>
          <p>
            Для специалистов по SEO URL-слаг является важным инструментом для
            оптимизации веб-сайта. Он помогает создать "дружественный" интерфейс
            для поисковых систем, что способствует улучшению ранжирования и
            привлечению трафика.
          </p>
          <p>
            Роль URL-слага в мире SEO нельзя недооценивать. Поисковые алгоритмы
            отдают предпочтение информативным и легко читаемым ссылкам, так как
            они вызывают большее доверие у пользователей и упрощают навигацию по
            сайту.
          </p>
          <p>
            Поисковые системы также отдают предпочтение читаемым URL-адресам при
            определении релевантности страницы для запросов пользователей.
            Создание информативных адресов упрощает работу поисковых роботов,
            что в свою очередь способствует более успешной адаптации страницы к
            запросам пользователей и повышению ее видимости в поисковых
            результатах.
          </p>
          <p>
            В итоге, использование URL-слага не только повышает удобство для
            пользователей и улучшает SEO-показатели веб-сайта, но и способствует
            общему качеству пользовательского опыта и повышению его
            релевантности для целевой аудитории.
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
