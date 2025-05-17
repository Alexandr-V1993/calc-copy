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
          "Калькулятор инвистиций предоставляет пользователям возможность прогнозировать потенциальную прибыль, просто введя переменные как: начальная сумма инвестиций, ожидаемую ставку, частоту и временной горизонт."
        }
        span={"процента с капитализацией"}
      >
        <CompoundForm
          obj={obj}
          url={"https://calcoffee.ru/api/calculate/compound-interest"}
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
          <h2>Что такое сложный процент?</h2>
          <p>
            Сложные проценты представляют собой метод начисления процентов не
            только на первоначальные инвестиции, но также на уже накопленные
            проценты за предыдущие периоды.
          </p>
          <p>
            Тот, кто разбирается в сложных процентах, может на них заработать, в
            то время как тот, кто не разбирается, вынужден выплачивать их.
            Калькулятор инвестиций предоставляет возможность пользователям
            прогнозировать потенциальную прибыль, просто вводя такие переменные,
            как начальная сумма инвестиций, ожидаемая ставка, частота начисления
            процентов и временной период.
          </p>
          <p>
            При реинвестировании калькулятор использует формулу сложного
            процента. В случае отсутствия реинвестирования для вычислений
            применяются простые проценты.
          </p>
          <h2>Расчет сложного процента</h2>
          <p>
            Калькулятор поможет найти конечную сумму при вложении начального
            капитала под определенный процент, введя всего несколько параметров.
            В результате вы получите детальную таблицу реинвестирования и роста
            активов, а также график изменения инвестиций.
          </p>
          <p>
            Вы можете определить доход с реинвестированием один раз в год,
            квартал, месяц, а также без реинвестирования.
          </p>
          <p>
            Калькулятор также поможет вам прогнозировать, через сколько лет вы
            сможете достичь финансовой свободы, получая пенсию из
            инвестиционного потока.
          </p>
          <p>
            Присоединитесь к движению F.I.R.E., используя наш калькулятор
            сложного процента.
          </p>
          <p>
            Формула сложных процентов Формула сложных процентов используется для
            расчета роста инвестиций с течением времени, когда проценты
            начисляются через регулярные промежутки времени. Она учитывает как
            первоначальную сумму, так и уже накопленные проценты за предыдущие
            периоды, что приводит к экспоненциальному росту.
          </p>
          <p>
            Сложные проценты применяются в инвестициях, банковских вкладах, а
            также на накопительных счетах.
          </p>
          <h3>Формула выражается следующим образом:</h3>
          <div className="formula">
            A = P x (1 + r/n)<sup>nt</sup>
          </div>
          <h3>Где:</h3>
          <ul>
            <li>
              <strong>A</strong> - будущая стоимость инвестиций/кредита, включая
              проценты.
            </li>
            <li>
              <strong>P</strong> - основная сумма инвестиций (первоначальная
              сумма денег).
            </li>
            <li>
              <strong> r</strong> - годовая процентная ставка.
            </li>
            <li>
              <strong>n</strong> - количество раз, которое начисляются проценты
              за единицу времени.
            </li>
            <li>
              <strong> t</strong> - время, на которое инвестируются деньги, в
              годах.
            </li>
          </ul>
          <p>
            Формула показывает, как инвестиции увеличиваются экспоненциально с
            течением времени, при этом частота реинвестирования существенно
            влияет на конечную сумму. Чем чаще начисляются сложные проценты, тем
            быстрее растет капитал.
          </p>
          <h3>Преимущества сложных процентов</h3>
          <ul>
            <li>
              Способность ускорять рост капитала за счет реинвестирования
              доходов.
            </li>
            <li>
              В отличие от простых процентов, где начисления происходят только
              на первоначальную сумму, сложные проценты позволяют получать доход
              как от основной суммы, так и от накопленных процентов.
            </li>
            <li>
              Даже небольшие первоначальные инвестиции могут значительно вырасти
              со временем при условии их непрерывного накопления.
            </li>
            <li>Служит страховкой от инфляции.</li>
          </ul>
          <h2>FAQs:</h2>
          <ol>
            <li>
              <h3>Чем сложные проценты отличаются от простых?</h3>
              <p>
                Простые проценты начисляются только на основную сумму, в то
                время как сложные учитывают накопленные проценты, что ускоряет
                рост инвестиций.
              </p>
            </li>
            <li>
              <h3>Какие факторы влияют на сложные проценты?</h3>
              <p>
                Сложные проценты зависят от нескольких факторов: первоначальной
                суммы, процентной ставки, частоты компаундирования (как часто
                проценты добавляются к основному долгу) и времени роста
                инвестиций.
              </p>
            </li>
            <li>
              <h3>Есть ли у сложных процентов недостатки?</h3>
              <p>
                Недостаток заключается в том, что для максимальной выгоды
                требуется длительный инвестиционный горизонт или значительные
                первоначальные вложения. Также они могут быть невыгодны для
                заемщиков с высокими ставками сложных процентов.
              </p>
            </li>
            <li>
              <h3>Как извлечь максимальную выгоду из сложных процентов?</h3>
              <p>
                Начните инвестировать как можно раньше, делайте регулярные
                взносы и реинвестируйте полученные доходы. Такой подход поможет
                вам добиться финансовой стабильности и достичь своих целей.
              </p>
            </li>
          </ol>
          <p>
            Не забывайте, что инвестиции всегда несут определенные риски, и
            важно тщательно изучать свои финансовые стратегии перед принятием
            решений. Удачного вам управления инвестициями и достижения ваших
            финансовых целей!
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
