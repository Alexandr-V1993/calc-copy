"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";

import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import CompoundForm from "./CompoundForm";
import "./compound.css";
import Select from "../components/Select";
const initial = {
  investmentPeriodUnit: "y",
  initialInvestment: null,
  investmentPeriod: null,
  interestRate: null,
  reinvestmentPeriod: 0,
  contribution: null,
  contributionPeriod: 0,
  mode: "finalInvestment",
};

function parseNumber(value) {
  if (value === null || value === undefined || value === "") return null;
  const stringValue = String(value).replace(",", ".");
  return parseFloat(stringValue);
}

function reducer(state, action) {
  switch (action.type) {
    case "investmentPeriodUnit":
      return { ...state, investmentPeriodUnit: String(action.payload) };
    case "initialInvestment":
      return { ...state, initialInvestment: parseNumber(action.payload) };
    case "investmentPeriod":
      return { ...state, investmentPeriod: parseNumber(action.payload) };
    case "interestRate":
      return { ...state, interestRate: parseNumber(action.payload) };
    case "reinvestmentPeriod":
      return { ...state, reinvestmentPeriod: Number(action.payload) };
    case "contribution":
      return { ...state, contribution: parseNumber(action.payload) };
    case "contributionPeriod":
      return { ...state, contributionPeriod: Number(action.payload) };
    case "mode":
      return { ...state, mode: "finalInvestment" };
  }
}
function Compound() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }
  function handleCheck(typeDispatch) {
    dispatch({ type: typeDispatch });
  }
  function hadleSelect(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор сложного "}
        description={
          "Калькулятор инвестиций от BoxCalculators позволяет прогнозировать потенциальный доход, указав начальный капитал, ожидаемую ставку, частоту начисления и срок вложения."
        }
        span={"процента с капитализацией"}
      >
        <CompoundForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/compound-interest"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <label className="checkbox">
                <CheckBox handleCheck={handleCheck} typeDispatch={"mode"} />
                <span>Вычислить конечную сумму</span>
              </label>
              <Input
                labelTitle={"Стартовый капитал"}
                notation={"₽"}
                typeDispatch={"initialInvestment"}
                hadleInput={hadleInput}
                type={"text"}
                inputMode={"decimal"}
              />
              <div className="topInput-select">
                <Input
                  labelTitle={"Срок инвестирования"}
                  typeDispatch={"investmentPeriod"}
                  hadleInput={hadleInput}
                  type={"text"}
                  inputMode={"decimal"}
                />
                <Select
                  valueVan={"y"}
                  valueTwo={"m"}
                  optionVan={"лет"}
                  optionTwo={"месяцев"}
                  hadleSelect={hadleSelect}
                  typeDispatch={"investmentPeriodUnit"}
                />
              </div>
              <div className="input-seredina">
                <Input
                  labelTitle={"Ставка"}
                  notation={"%годовых"}
                  typeDispatch={"interestRate"}
                  hadleInput={hadleInput}
                  type={"text"}
                  inputMode={"decimal"}
                />
                <label>
                  <span>Период реинвестирования</span>
                  <Select
                    valueVan={0}
                    valueTwo={1}
                    valueThree={3}
                    valueFour={6}
                    alueFive={12}
                    optionVan={"Не реинвестировать"}
                    optionTwo={"Раз в месяц"}
                    optionThree={"Раз в квартал"}
                    optionFour={"Раз в полгода"}
                    optionFive={"Раз в год"}
                    hadleSelect={hadleSelect}
                    typeDispatch={"reinvestmentPeriod"}
                  />
                </label>
              </div>
              <div className="bottom-select">
                <Input
                  labelTitle={"Дополнительные вложения"}
                  typeDispatch={"contribution"}
                  hadleInput={hadleInput}
                  notation={"₽"}
                  type={"text"}
                  inputMode={"decimal"}
                />
                <Select
                  valueVan={0}
                  valueTwo={1}
                  valueThree={3}
                  valueFour={6}
                  alueFive={12}
                  optionVan={"Без вложений"}
                  optionTwo={"Раз в месяц"}
                  optionThree={"Раз в квартал"}
                  optionFour={"Раз в полгода"}
                  optionFive={"Раз в год"}
                  hadleSelect={hadleSelect}
                  typeDispatch={"contributionPeriod"}
                />
              </div>
            </div>
          </div>
        </CompoundForm>

        <Contents>
          <h2>Что такое сложные проценты?</h2>

          <p>
            Сложные проценты — это способ начисления дохода, при котором
            проценты начисляются не только на первоначальную сумму, но и на уже
            накопленные проценты. Это создаёт эффект "процентов на проценты",
            который может значительно увеличить вашу прибыль.
          </p>

          <p>
            В отличие от простых процентов, которые рассчитываются только от
            начального депозита, сложные проценты позволяют вашему капиталу
            расти экспоненциально. Такой подход особенно популярен в
            долгосрочных инвестициях, банковских вкладах и пенсионном
            планировании.
          </p>

          <h3>Как работает сложный процент?</h3>
          <p>
            Представьте, что вы положили деньги на депозит или вложили их в
            инвестиционный фонд. Каждый месяц, квартал или год вам начисляются
            проценты. Если вы не снимаете эти проценты, а оставляете их на
            счете, то следующий доход будет начисляться уже на большую сумму —
            включая предыдущие проценты.
          </p>

          <p>
            Это явление называется <strong>реинвестированием</strong>, и именно
            оно делает сложные проценты таким мощным финансовым инструментом.
          </p>

          <h3>Формула сложных процентов:</h3>
          <p className="formula">
            A = P × (1 + r / n)<sup>n × t</sup>
          </p>

          <ul>
            <li>
              <strong>A</strong> — конечная сумма (вклад + проценты)
            </li>
            <li>
              <strong>P</strong> — начальная сумма (основной капитал)
            </li>
            <li>
              <strong>r</strong> — годовая процентная ставка (в долях, например,
              0.05 для 5%)
            </li>
            <li>
              <strong>n</strong> — количество раз начисления в год (ежемесячно,
              ежеквартально и т.д.)
            </li>
            <li>
              <strong>t</strong> — количество лет хранения или инвестирования
            </li>
          </ul>

          <h3>Почему стоит использовать этот калькулятор?</h3>
          <p>Наш калькулятор сложных процентов поможет:</p>

          <ul>
            <li>
              <strong>Спрогнозировать рост капитала:</strong> узнайте, сколько
              будет стоить ваш вклад через 1, 5 или 10 лет.
            </li>
            <li>
              <strong>Сравнивать предложения:</strong> легко понять, какой вклад
              или инвестиция принесёт больше прибыли.
            </li>
            <li>
              <strong>Планировать цели:</strong> будь то покупка недвижимости,
              образование или выход на пенсию — вы можете заранее рассчитать,
              сколько денег накопите.
            </li>
            <li>
              <strong>Выбирать стратегию:</strong> решить, стоит ли
              реинвестировать прибыль или выводить её регулярно.
            </li>
          </ul>

          <h3>Где применяется сложный процент?</h3>
          <ul>
            <li>
              <strong>Банковские вклады:</strong> депозиты с капитализацией;
            </li>
            <li>
              <strong>Инвестиции:</strong> акции, облигации, ETF, криптовалюты;
            </li>
            <li>
              <strong>Пенсионные накопления:</strong> долгосрочные программы с
              реинвестированием;
            </li>
            <li>
              <strong>Долговые обязательства:</strong> если вы берете кредит с
              капитализацией процентов, он становится дороже из-за этой формулы.
            </li>
          </ul>

          <h3>Пример расчёта:</h3>
          <p>
            Допустим, вы инвестируете 100 000 рублей под 10% годовых с
            ежемесячной капитализацией на 5 лет:
          </p>

          <p className="example">
            <span className="page-bolt">
              A = 100 000 × (1 + 0.10 / 12)<sup>12 × 5</sup> = ~164 530 руб.
            </span>
          </p>

          <p>
            То есть ваша прибыль составит около 64 530 рублей за 5 лет, а не 50
            000, как при простом начислении. Разница становится ещё заметнее при
            более высоких ставках и длительных сроках.
          </p>

          <h3>Советы по использованию:</h3>
          <ul>
            <li>
              Чем чаще происходит капитализация (ежемесячно, еженедельно), тем
              выше прибыль;
            </li>
            <li>
              Начинайте инвестировать как можно раньше — чем дольше вы держите
              деньги, тем больше они работают на вас;
            </li>
            <li>
              Добавляйте дополнительные взносы — регулярные пополнения усиливают
              эффект сложных процентов;
            </li>
            <li>
              Избегайте снятия — чтобы сохранить рост, лучше реинвестировать
              прибыль;
            </li>
          </ul>

          <h3>Советы по использованию калькулятора:</h3>
          <ul>
            <li>Вводите точные данные: ставка, срок, частота начисления;</li>
            <li>
              Экспериментируйте с разными параметрами, чтобы найти лучший
              вариант;
            </li>
            <li>
              Используйте его для сравнения условий вкладов, инвестиций или
              кредитов;
            </li>
          </ul>

          <h2>Заключение</h2>
          <p>
            Сложные проценты — один из самых эффективных инструментов роста
            капитала. Используя наш калькулятор, вы сможете заранее понять, как
            будет развиваться ваша инвестиция или вклад, и принимать более
            осознанные финансовые решения.
          </p>

          <p>
            Не важно, вы инвестор, студент или начинающий предприниматель —
            знание принципов сложных процентов и использование калькулятора
            помогут вам правильно спланировать бюджет и добиться своих целей.
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
