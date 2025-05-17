"use client";
import { useState, useEffect } from "react";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import AlcoForm from "./AlcoForm";
import "./alco.css";

const beveragesList = [
  {
    name: "Русский язык",
    value: 0,
  },
  {
    name: "Литература",
    value: 0,
  },
  {
    name: "Родной язык",
    value: 0,
  },
  {
    name: "Родная литература",
    value: 0,
  },
  {
    name: "Иностранный язык",
    value: 0,
  },
  {
    name: "Второй иностранный",
    value: 0,
  },
  {
    name: "Математика",
    value: 0,
  },
  {
    name: "Информатика",
    value: 0,
  },
  {
    name: "История",
    value: 0,
  },
  {
    name: "Обществознание",
    value: 0,
  },
  {
    name: "География",
    value: 0,
  },
  {
    name: "Физика",
    value: 0,
  },
  {
    name: "Биология",
    value: 0,
  },
  {
    name: "Химия",
    value: 0,
  },
  {
    name: "Музыка",
    value: 0,
  },
  {
    name: "ИЗО",
    value: 0,
  },
  {
    name: "Технология",
    value: 0,
  },
  {
    name: "Физкультура",
    value: 0,
  },
  {
    name: "ОБЖ",
    value: 0,
  },
];

function Alco() {
  const [state, setState] = useState({
    subjects: beveragesList.map((beverage) => ({
      ...beverage,
    })),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const script1 = document.createElement("script");
      script1.src = "https://aflt.market.yandex.ru/widget/script/api";
      script1.async = true;
      script1.type = "text/javascript";
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.text = `
        (function (w) {
          function start() {
            w.removeEventListener("YaMarketAffiliateLoad", start);
            w.YaMarketAffiliate.createWidget({
              type:"models",
              containerId:"marketWidget",
              fallback:true,
              params:{
                clid:12722024,
                erid:"5jtCeReNx12oajvEYxg956x",
                searchText:"ответы егэ",
                themeId:5
              }
            });
          }
          w.YaMarketAffiliate
            ? start()
            : w.addEventListener("YaMarketAffiliateLoad", start);
        })(window);
      `;
      document.body.appendChild(script2);
    }, 20000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  function handleSubjectChange(index, key, value) {
    // Если вводится число, то удаляем ведущие нули
    if (key === "value" && /^\d+$/.test(value)) {
      value = parseInt(value); // Преобразуем строку в число
    }

    const updatedSubjects = [...state.subjects];
    updatedSubjects[index][key] = value;
    setState({ ...state, subjects: updatedSubjects });
  }

  function handleAddBeverage() {
    setState({
      ...state,
      subjects: [...state.subjects, { name: "", value: 0 }], // Установим начальное значение оценки как 0
    });
  }

  function handleRemoveBeverage(index) {
    const updatedSubjects = [...state.subjects];
    updatedSubjects.splice(index, 1);
    setState({ ...state, subjects: updatedSubjects });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор среднего балла"}
        description={
          "Калькулятор аттестата предоставляет возможность точно расчитать средний балл вашего аттестата.Оканчиваете вы 9 или 11 класс или ведете подготовку к поступлению."
        }
        span={" аттестата"}
      >
        <AlcoForm
          obj={state}
          url={"https://calcoffee.ru/api/calculate/attestation"}
        >
          <div className="label-row">
            <span className="nap-span">Предметы</span>
            {state.subjects.map((subject, index) => (
              <div key={index} className="row-vans-bottom">
                <div className="all">
                  <label className="numrange row-1 van">
                    <input
                      type="text"
                      className="input"
                      value={subject.name}
                      onChange={(e) =>
                        handleSubjectChange(index, "name", e.target.value)
                      }
                    />
                    <div className="notation"></div>
                  </label>

                  <label className="numrange row-1 two">
                    <input
                      type="number"
                      className="input"
                      value={subject.value !== 0 ? subject.value : ""}
                      placeholder={subject.value === 0 ? "Оценка" : ""}
                      onChange={(e) =>
                        handleSubjectChange(index, "value", e.target.value)
                      }
                    />
                    <div className="notation"></div>
                  </label>
                  <button
                    className="button-del"
                    onClick={() => handleRemoveBeverage(index)}
                  >
                    <span className="del">×</span>
                  </button>
                </div>
              </div>
            ))}
            <div className="print-none">
              <span>+</span>
              <button
                className="add-new-button"
                onClick={handleAddBeverage}
                type="button"
              >
                Добавить предмет
              </button>
            </div>
          </div>
        </AlcoForm>

        <Contents>
          <p>
            Школьникам по окончании 9, 11 класса и абитуриентам при поступлении
            в университет, техникум, колледж необходимо знать средний балл
            аттестата. Учесть все моменты, не допустить случайных ошибок и
            сократить время на подсчеты вручную поможет онлайн калькулятор
            аттестата.
          </p>
          <div id="marketWidget"></div>
          <h2>В чем польза калькулятора аттестата?</h2>
          <p>
            Целевая задача онлайн калькулятора — посчитать средний балл на
            основании всех итоговых оценок по предметам школьной программы. Выше
            балл — больше шансов претендовать на бюджетные места в престижных
            колледжах и ВУЗах.
          </p>
          <p>
            На основании приказа Минпросвещения РФ, средний балл рассчитывается
            по всем пройденным предметам за период обучения:
          </p>
          <ul>
            <li>Обязательные — математика, русский язык;</li>
            <li>Дисциплины по выбору — биология, физика, история и др.;</li>
            <li>Творческие, спортивные — музыка, ИЗО, физкультура.</li>
          </ul>
          <p>
            Ряд учебных заведений могут устанавливать свои правила. К примеру,
            при поступлении в техникумы весомое значение имеют оценки по
            профильным дисциплинам (физика, математика). На калькуляторе можно
            уточнить, хватает ли баллов для поступления в конкретное заведение.
          </p>
          <p>Средний балл аттестата влияет на итоги ЕГЭ в следующих случаях:</p>
          <ol>
            <li>
              Бюджетные места. Приоритет у ЕГЭ, но при равных результатах
              рассматривают средний балл аттестата.
            </li>
            <li>
              Целевые направления. В ряде ВУЗов (к примеру, медицинских)
              аттестат становится решающим фактором.
            </li>
            <li>
              Творческие профессии. Щукинское училище, ВГИК прибавляют средний
              балл к результатам творческого конкурса.
            </li>
          </ol>

          <h2>Как действует онлайн калькулятор аттестата?</h2>
          <p>
            Калькулятор среднего балла аттестата содержит две строки ввода
            данных — название предмета и полученная по нему оценка. После ввода
            оценок по всем выбранным дисциплинам программа автоматически выдаст
            средний балл.
          </p>
          <p>Для получения корректного результата:</p>
          <ol>
            <li>
              Оставьте в списке необходимые предметы для 9 или 11 класса —
              удалите лишние, добавьте недостающие.
            </li>
            <li>
              Укажите итоговые оценки по каждому предмету за время обучения.
            </li>
            <li>Нажмите «Рассчитать» и выясните свой средний балл.</li>
          </ol>
          <p>
            Калькулятор безошибочно высчитает средний балл аттестата — ваш
            параметр успеваемости за весь период обучения.
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

export default Alco;
