"use client";
import TopForm from "../components/TopForm";
import HeaderModal from "../components/NewModal";
import Footer from "../components/Footer";
import Form from "../components/Form";
import { useState } from "react";
import Contents from "../components/Contents";
import "./Ndfl.css";
function Ndfl() {
  const [selectSumm, setSelectSumm] = useState("before");
  const [selectSummProcent, setSelectSummProcent] = useState(13);
  const [number, setNumber] = useState("");
  const obj = {
    amount: Number(number),
    mode: selectSumm,
    taxRate: selectSummProcent,
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор"}
        description={
          "Рассчитайте налог на доходы онлайн по разным ставкам: 9%, 13%, 15%, 30%, 35%. Подходит для зарплаты, дивидендов, выигрышей и других видов доходов."
        }
        span={"НДФЛ"}
      >
        <Form
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/pit"}
          formTitle={"Расчет НДФЛ"}
          ndfl={"НДФЛ"}
          summaOblog={"Сумма после налогооблажения"}
          setNumber={setNumber}
          selectSumm={selectSumm}
          selectSummProcent={selectSummProcent}
        >
          <label className="row-2 van">
            <span>Налогообложения</span>
            <div className="select">
              <select
                name="age"
                id="actionnds"
                className="input"
                value={selectSumm}
                onChange={(e) => setSelectSumm(e.target.value)}
              >
                <option value="before">Сумма до налогообложения</option>
                <option value="after">Сумма после налогообложения</option>
              </select>
            </div>
          </label>
          <label className="row-2 two">
            <span>Ставка налога</span>
            <div className="select">
              <select
                name="age"
                id="actionnds"
                className="input"
                onChange={(e) => setSelectSummProcent(e.target.value)}
              >
                <option value="13">Подоходный налог(13% - 15%)</option>
                <option value="13" selected>
                  Налог на дивиденды (13%)
                </option>
                <option value="30">НДФЛ для нерезидентов(30%)</option>
                <option value="35">Налог на выиграши(35%)</option>
              </select>
            </div>
          </label>

          <label className="numrange row-1">
            <span>Сумма</span>
            <input
              type="number"
              className="input"
              id="nprice"
              min="0"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <div className="notation">р.</div>
          </label>
        </Form>

        <Contents>
          <h2 id="1">Что такое налог на доходы физических лиц?</h2>

          <p className="opredelenie">
            <strong>Налог на доходы физических лиц</strong> (ПНД / PIT / Income
            Tax) — это косвенный налог, взимаемый с денежных, натуральных или
            иных видов доходов граждан. Применяется во многих странах как
            основной инструмент налогообложения населения.
          </p>

          <p>
            В Российской Федерации применяются следующие ставки налога:{" "}
            <strong>9%, 13%, 15%, 30%, 35%</strong>. Каждая из них используется
            в зависимости от типа дохода, его размера и статуса
            налогоплательщика.
          </p>

          <p>
            Этот налог рассчитывается отдельно для каждой выплаты, а право на
            налоговые вычеты зависит от конкретного случая. Ниже приведены
            распространенные категории доходов и соответствующие им ставки.
          </p>

          <h3>Ставка 9%</h3>
          <p>
            Эта ставка встречается редко и применяется к специфическим видам
            доходов:
          </p>
          <ul>
            <li>дивиденды, полученные до 1 января 2015 года;</li>
            <li>
              проценты по облигациям с ипотечным покрытием, эмитированным до 1
              января 2007 года;
            </li>
            <li>
              доходы от доверительного управления ипотечным покрытием по
              сертификатам, выданным до 1 января 2007 года.
            </li>
          </ul>

          <h3>Ставка 13%</h3>
          <p>
            Наиболее распространенная ставка, применимая к большинству случаев:
          </p>
          <ul>
            <li>
              заработная плата и вознаграждения за труд при годовом доходе до 5
              млн рублей;
            </li>
            <li>
              доходы высококвалифицированных специалистов-нерезидентов
              (иностранных граждан);
            </li>
            <li>участники госпрограмм по переселению в РФ;</li>
            <li>
              дивиденды для резидентов РФ при годовом доходе до 5 млн рублей.
            </li>
          </ul>

          <h3>Ставка 15%</h3>
          <p>
            Повышенная ставка применяется к доходам свыше 5 миллионов рублей в
            год. При этом облагается только сумма, превышающая этот порог.
          </p>
          <p>
            Например, если годовой доход составляет 12 миллионов рублей, то
            первые 5 млн рублей облагаются по ставке 13%, а оставшиеся 7 млн —
            уже по ставке 15%.
          </p>

          <h3>Ставка 30%</h3>
          <p>Эта ставка применяется к следующим категориям:</p>
          <ul>
            <li>
              доходы от ценных бумаг, если они находятся на счетах иностранного
              номинального держателя;
            </li>
            <li>
              доходы нерезидентов, если они не попадают под ставки 13% или 15%;
            </li>
            <li>
              отсутствие необходимых данных у налогового агента согласно статье
              214.6 НК РФ.
            </li>
          </ul>

          <p>
            Налог рассчитывается отдельно по каждой выплате, и налоговые вычеты
            в таких случаях, как правило, не применяются.
          </p>

          <h3>Ставка 35%</h3>
          <p>
            Максимальная ставка налога применяется к следующим видам доходов:
          </p>
          <ul>
            <li>
              выигрыши в лотереях, конкурсах и других мероприятиях при сумме
              свыше 4 000 рублей;
            </li>
            <li>
              экономия на процентах по займам при превышении установленных
              лимитов;
            </li>
            <li>
              доходы от банковских вкладов, если проценты превышают допустимые
              значения;
            </li>
            <li>
              платы за использование средств пайщиков, процентов по
              сельскохозяйственным кредитам и другим формам кооперативного
              финансирования.
            </li>
          </ul>

          <p>
            Чаще всего эта ставка касается именно выигрышей в лотереях и
            конкурсах.
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

export default Ndfl;
