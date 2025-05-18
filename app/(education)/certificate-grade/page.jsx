"use client";
import { useState, useEffect } from "react";
import HeaderModal from "@/app/components/NewModal";
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
          "Инструмент для точного расчёта среднего балла вашего школьного аттестата. Полезен для выпускников 9 и 11 классов, абитуриентов, родителей и учителей."
        }
        span={" аттестата"}
      >
        <AlcoForm
          obj={state}
          url={"https://boxcalculators.ru/api/calculate/attestation"}
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
            Калькулятор среднего балла аттестата помогает школьникам,
            заканчивающим 9 или 11 класс, точно рассчитать успеваемость за всё
            время обучения. Это особенно важно при поступлении в колледжи,
            техникумы или университеты.
          </p>

          <div id="calculatorWidget"></div>

          <h2>Почему важен средний балл аттестата?</h2>
          <p>
            Средний балл аттестата — это один из главных показателей вашей
            успеваемости за школьные годы. Он может влиять на ваши шансы при
            поступлении в ВУЗ или колледж.
          </p>

          <ul>
            <li>
              <strong>Бюджетные места:</strong> при равных результатах ЕГЭ
              учитывается средний балл;
            </li>
            <li>
              <strong>Целевой набор:</strong> в медицинских и других
              специализированных ВУЗах он может быть решающим фактором;
            </li>
            <li>
              <strong>Творческие специальности:</strong> такие заведения, как
              Щукинское училище или ВГИК, суммируют балл аттестата с творческим
              конкурсом.
            </li>
          </ul>

          <h2>Какие оценки учитываются?</h2>
          <p>
            По приказу Минпросвещения РФ, средний балл аттестата рассчитывается
            по всем предметам, которые вы изучали:
          </p>
          <ul>
            <li>
              <strong>Обязательные:</strong> русский язык, математика;
            </li>
            <li>
              <strong>По выбору:</strong> история, физика, биология,
              обществознание;
            </li>
            <li>
              <strong>Творческие и спортивные:</strong> музыка, ИЗО, физкультура
              и другие.
            </li>
          </ul>

          <p>
            Некоторые учебные заведения могут учитывать только профильные
            дисциплины (например, физика и математика для технических
            специальностей).
          </p>

          <h2>Как использовать калькулятор?</h2>
          <p>Наш калькулятор прост в использовании:</p>
          <ol>
            <li>Добавьте список предметов, которые были в вашем аттестате;</li>
            <li>Удалите ненужные или добавьте недостающие;</li>
            <li>Введите итоговые оценки по каждому предмету;</li>
            <li>Нажмите «Рассчитать» и получите свой средний балл.</li>
          </ol>

          <p>Результат будет рассчитан по формуле:</p>
          <p className="formula">
            Средний балл = (Сумма всех оценок) / (Количество предметов)
          </p>

          <h2>Как аттестат влияет на поступление?</h2>
          <p>Вот основные ситуации, где средний балл имеет значение:</p>
          <ul>
            <li>
              <strong>Бюджетные места:</strong> если ЕГЭ у нескольких
              абитуриентов совпадают, учитывается аттестат;
            </li>
            <li>
              <strong>Целевые направления:</strong> в некоторых ВУЗах (особенно
              медицинских) аттестат играет ключевую роль;
            </li>
            <li>
              <strong>Творческие специальности:</strong> балл аттестата
              складывается с результатами конкурса;
            </li>
            <li>
              <strong>Колледжи и техникумы:</strong> часто принимают решения на
              основе аттестата без ЕГЭ.
            </li>
          </ul>

          <h2>Советы по повышению среднего балла</h2>
          <p>
            Если вы еще не закончили школу, но хотите повысить балл аттестата:
          </p>
          <ul>
            <li>
              <strong>Не пренебрегайте слабыми предметами:</strong> даже
              творческие дисциплины влияют на общий балл;
            </li>
            <li>
              <strong>Фокусируйтесь на профильных дисциплинах:</strong> если вы
              планируете поступать в технический ВУЗ, математика и физика
              особенно важны;
            </li>
            <li>
              <strong>Избегайте троек:</strong> они снижают общий показатель;
            </li>
            <li>
              <strong>Дополнительные занятия:</strong> помогут подтянуть оценки;
            </li>
            <li>
              <strong>Советуйтесь с учителями:</strong> они могут помочь
              улучшить результаты перед выставлением итоговых оценок.
            </li>
          </ul>

          <h2>Как работает калькулятор?</h2>
          <p>
            После ввода данных калькулятор автоматически рассчитывает средний
            балл, используя стандартную формулу:
          </p>
          <p className="example">
            <span className="page-bolt">
              Средний балл = (5 + 4 + 4 + 5 + 3 + 5 + 4 + 5) / 8 = 4.375
            </span>
          </p>

          <p>
            Вы можете экспериментировать с разными вариантами: например, понять,
            как изменится балл, если заменить одну тройку на четвёрку.
          </p>

          <h2>Важные моменты</h2>
          <ul>
            <li>Аттестат 9 класса выдается тем, кто не поступил в 10 класс;</li>
            <li>
              В 11 классе аттестат формируется из годовых оценок по всем
              предметам;
            </li>
            <li>
              Если вы планируете поступать в вуз, обратите внимание на
              требования конкретного факультета;
            </li>
            <li>
              Калькулятор поможет вам заранее понять, хватает ли баллов для
              поступления.
            </li>
          </ul>

          <h2>Почему стоит выбрать наш калькулятор?</h2>
          <p>Наш калькулятор:</p>
          <ul>
            <li>
              <strong>Бесплатный:</strong> никаких подписок или регистраций;
            </li>
            <li>
              <strong>Точный:</strong> соответствует правилам Минпросвещения РФ;
            </li>
            <li>
              <strong>Универсальный:</strong> подходит как для 9, так и для 11
              класса;
            </li>
            <li>
              <strong>Простой интерфейс:</strong> удобно пользоваться с любого
              устройства;
            </li>
            <li>
              <strong>Практическая польза:</strong> позволяет планировать
              поступление и корректировать учебный процесс.
            </li>
          </ul>

          <h2>Часто задаваемые вопросы</h2>
          <h3>Влияет ли физкультура или музыка на средний балл?</h3>
          <p>
            Да, все предметы учитываются при расчете общего балла, даже
            творческие и спортивные.
          </p>

          <h3>Можно ли удалить какие-то оценки из расчета?</h3>
          <p>
            В реальных условиях — нет, но в калькуляторе вы можете временно
            исключить предметы, чтобы проверить гипотетический результат.
          </p>

          <h3>Какой балл считается хорошим?</h3>
          <p>
            Для бюджетных мест в престижных вузах рекомендуется иметь средний
            балл не ниже 4.5–4.8.
          </p>

          <h3>Какие предметы самые важные?</h3>
          <p>
            Профильные дисциплины имеют больший вес при поступлении. Например,
            для IT-специальностей — математика и информатика.
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
