"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import MicroForm from "./MicroForm";
import Input from "../components/Input";
import Select from "../components/Select";
import CheckBox from "../components/CheckBox";

import "./microloan.css";
const initial = {
  amount: null,
  period: null,
  rateUnit: "day",
  rate: null,
  click: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "amount":
      return { ...state, amount: +action.payload };
    case "period":
      return { ...state, period: +action.payload };
    case "rate":
      return { ...state, rate: +action.payload };
    case "rateUnit":
      return { ...state, rateUnit: action.payload };
    case "click":
      return { ...state, click: !state.click };
    case "overdueDays":
      return { ...state, overdueDays: +action.payload };
    case "overdueRate":
      return { ...state, overdueRate: +action.payload };
    case "overdueFee":
      return { ...state, overdueFee: +action.payload };

    default:
      break;
  }
}

function Microloun() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  const period = state.period;
  const amount = state.amount;
  const overdueDays = state.overdueDays;
  const overduePerDay = state.overduePerDay;
  const overdueFee = state.overdueFee;
  const click = state.click;
  const overdueOverpayment = state.overdueOverpayment;
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }
  function hadleSelect(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }
  function handleCheck(typeDispatch) {
    dispatch({ type: typeDispatch });
  }

  let stavca;
  switch (state.rateUnit) {
    case "day":
      stavca = "Ставка в день";
      break;
    case "week":
      stavca = "Ставка в неделю";
      break;
    case "month":
      stavca = "Ставка в месяц";
      break;
    case "year":
      stavca = "Ставка в год";
      break;

    default:
      break;
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Микрозайм — это небольшие кредиты, предназначенные для частных лиц, предпринимателей и малых предприятий, чтобы получить доступ к ограниченным суммам капитала."
        }
        span={"Микрозаймов"}
      >
        <MicroForm
          overdueDays={overdueDays}
          overPerDay={overduePerDay}
          overdueOverpayment={overdueOverpayment}
          overdueFee={overdueFee}
          amount={amount}
          period={period}
          click={click}
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/microloan"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <Input
                  type={"number"}
                  labelTitle={"Сумма"}
                  notation={"руб."}
                  dispatch={dispatch}
                  typeDispatch={"amount"}
                  hadleInput={hadleInput}
                  max={55000000}
                />
                <Input
                  type={"number"}
                  labelTitle={"Срок займа"}
                  notation={"дней"}
                  typeDispatch={"period"}
                  hadleInput={hadleInput}
                  max={180}
                />
              </div>
              <div className="row-select">
                <Input
                  type={"number"}
                  labelTitle={"Ставка"}
                  notation={"%"}
                  typeDispatch={"rate"}
                  hadleInput={hadleInput}
                />
                <Select
                  optionVan={"в день"}
                  optionTwo={"в неделю"}
                  optionThree={"в месяц"}
                  optionFour={"в год"}
                  hadleSelect={hadleSelect}
                  typeDispatch={"rateUnit"}
                  valueVan={"day"}
                  valueTwo={"week"}
                  valueThree={"month"}
                  valueFour={"year"}
                />
              </div>
              <CheckBox
                typeDispatch={"click"}
                handleCheck={handleCheck}
                titleCheck={"Имеется прострочка"}
              />
              {state.click && (
                <div>
                  <Input
                    type={"number"}
                    labelTitle={"Просрочка"}
                    notation={"дней"}
                    typeDispatch={"overdueDays"}
                    hadleInput={hadleInput}
                  />
                  <Input
                    type={"number"}
                    labelTitle={stavca}
                    notation={"%"}
                    typeDispatch={"overdueRate"}
                    hadleInput={hadleInput}
                  />
                  <Input
                    type={"number"}
                    labelTitle={"Сумма штрафа"}
                    notation={"руб."}
                    typeDispatch={"overdueFee"}
                    hadleInput={hadleInput}
                  />
                </div>
              )}
            </div>
          </div>
        </MicroForm>

        <Contents>
          <h2 className="tops-content">Что такое микрозаймы?</h2>

          <p>
            Микрозаймы — это небольшие кредиты, которые предоставляются частным
            лицам, предпринимателям и малым предприятиям для получения доступа к
            скромным суммам капитала. Как правило, они выдаются без жестких
            требований к залогу или кредитной истории.
          </p>

          <p>
            Обычно такие займы составляют от нескольких тысяч до нескольких
            сотен тысяч рублей. Они особенно полезны в экстренных ситуациях,
            когда нужна помощь, но нет возможности пройти сложную процедуру
            одобрения в банке.
          </p>

          <p>
            В отличие от традиционных банковских продуктов, микрофинансовые
            организации (МФО) работают с более простыми условиями, чтобы помочь
            тем, кто не имеет доступа к классическим кредитам. Иногда
            организация может предложить советы или обучение обращению с займом,
            чтобы минимизировать риски.
          </p>

          <h3>Как регулируется сфера МФО?</h3>
          <p>
            Для защиты прав заемщиков и обеспечения прозрачности, деятельность
            микрофинансовых организаций регулируется законодательством РФ.
            Основные аспекты регулирования включают:
          </p>

          <ul>
            <li>
              <strong>Лицензирование:</strong> все легальные МФО должны быть
              зарегистрированы и соблюдать установленные нормы.
            </li>
            <li>
              <strong>Ограничения по ставкам:</strong> максимальный размер
              процентов контролируется государством, чтобы избежать чрезмерного
              роста задолженности.
            </li>
            <li>
              <strong>Обязательства по информированию:</strong> компании обязаны
              ясно указывать все условия, включая ставки, сроки и штрафы.
            </li>
            <li>
              <strong>Защита потребителей:</strong> законы направлены на борьбу
              с недобросовестными практиками и обеспечение справедливости в
              отношениях между заемщиками и кредиторами.
            </li>
            <li>
              <strong>Финансовая отчетность:</strong> МФО обязаны отчитываться
              перед надзорными органами и проходить проверки на финансовую
              устойчивость.
            </li>
          </ul>

          <h3>Преимущества микрозаймов</h3>
          <ul>
            <li>
              <strong>Доступность:</strong> оформить можно даже при отсутствии
              залога и хорошей кредитной истории.
            </li>
            <li>
              <strong>Скорость:</strong> деньги можно получить за 15–20 минут,
              часто на карту или кошелек.
            </li>
            <li>
              <strong>Гибкость:</strong> идеально подходят для небольших целей —
              ремонт, покупка техники, стартап.
            </li>
            <li>
              <strong>Право досрочного погашения:</strong> по закону, вы можете
              вернуть микрозайм в течение 14 дней, заплатив только фактические
              проценты.
            </li>
          </ul>

          <h3>Недостатки микрозаймов</h3>
          <ul>
            <li>
              <strong>Высокие процентные ставки:</strong> могут быть выше, чем у
              банков, что увеличивает общую стоимость кредита.
            </li>
            <li>
              <strong>Риск долговой зависимости:</strong> если не следить за
              выплатами, легко попасть в замкнутый круг долгов.
            </li>
            <li>
              <strong>Угроза мошенничества:</strong> не все МФО добросовестны —
              важно выбирать проверенные платформы.
            </li>
          </ul>

          <h3>Когда стоит брать микрозайм?</h3>
          <p>Микрозаймы — хороший вариант в следующих случаях:</p>
          <ul>
            <li>Неожиданные расходы (медицинские услуги, аварийный ремонт);</li>
            <li>Старт бизнеса с минимальным бюджетом;</li>
            <li>Дефицит оборотных средств у малого бизнеса;</li>
            <li>Краткосрочные цели, которые вы планируете погасить вовремя.</li>
          </ul>

          <h3>Как не стать жертвой мошенников?</h3>
          <p>Чтобы защитить себя от недобросовестных МФО:</p>
          <ul>
            <li>Проверьте компанию через отзывы и реестры ЦБ;</li>
            <li>Избегайте сайтов с поддельными сертификатами безопасности;</li>
            <li>Не передавайте личные данные без уверенности в надежности;</li>
            <li>
              Изучите договор до мелочей — обратите внимание на скрытые платежи
              и условия;
            </li>
            <li>
              Если давление на вас оказывается слишком сильное — лучше
              отказаться.
            </li>
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

export default Microloun;
