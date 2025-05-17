"use client";

import { useReducer } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import SecondForm from "./SecondForm";
import "./Second.css";
import Link from "next/link";
const obj = {
  volume: null,
  strengthStart: null,
  strengthEnd: null,
  heads: null,
  tails: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "volume":
      return { ...state, volume: action.payload };
    case "strengthStart":
      return { ...state, strengthStart: action.payload };
    case "strengthEnd":
      return { ...state, strengthEnd: action.payload };
    case "heads":
      return { ...state, heads: action.payload };
    case "tails":
      return { ...state, tails: action.payload };

    default:
      return state;
  }
}

function SecondFrac() {
  const [state, dispatch] = useReducer(reducer, obj);
  const initial = { ...state };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор второй перегонки спирта сырца и отбора "}
        description={""}
        span={"голов и хвостов"}
      >
        <SecondForm
          obj={initial}
          url={
            "https://calcoffee.ru/api/calculate/second-fractional-distillation"
          }
        >
          <div className="label-row">
            <label className="numrange five">
              <span>Объем спирта-сырца</span>
              <input
                type="number"
                className="input"
                id="nheight"
                min="0"
                onChange={(e) =>
                  dispatch({ type: "volume", payload: Number(e.target.value) })
                }
                required
              />
              <div className="notation">л.</div>
            </label>
            <label className="numrange five">
              <span>Крепость спирта-сырца</span>
              <input
                type="number"
                className="input"
                id="nheight"
                min={0}
                max={100}
                onChange={(e) =>
                  dispatch({
                    type: "strengthStart",
                    payload: Number(e.target.value),
                  })
                }
                required
              />
              <div className="notation">°</div>
            </label>
            <label className="numrange five">
              <span>Крепость на выходе</span>
              <input
                type="number"
                className="input"
                id="nheight"
                min={0}
                max={100}
                onChange={(e) =>
                  dispatch({
                    type: "strengthEnd",
                    payload: Number(e.target.value),
                  })
                }
                required
              />
              <div className="notation">°</div>
            </label>
            <label className="numrange five">
              <span>Доля «голов»</span>
              <input
                type="number"
                className="input"
                id="nheight"
                min={0}
                max={100}
                onChange={(e) =>
                  dispatch({ type: "heads", payload: Number(e.target.value) })
                }
                required
              />
              <div className="notation">%</div>
            </label>
            <label className="numrange five">
              <span>Доля «хвостов» »</span>
              <input
                type="number"
                className="input"
                id="nheight"
                min={0}
                max={100}
                onChange={(e) =>
                  dispatch({ type: "tails", payload: Number(e.target.value) })
                }
                required
              />
              <div className="notation">%</div>
            </label>
          </div>
        </SecondForm>

        <Contents>
          <ul className="alcohol-list">
            <Link href={"/diluting-alcohol"} className="underline">
              <li className="alcohol-item">
                <h5>Онлайн калькулятор разбавление самогона водой</h5>
              </li>
            </Link>
            <Link href={"/sugar-braga"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор расчет сахарной браги</h5>
              </li>
            </Link>
            <Link href={"/areometer-correction"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор коррекции показаний ареометра</h5>
              </li>
            </Link>
            <Link href={"/head-selection"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор абсолютного спирта и отбора голов</h5>
              </li>
            </Link>
            <Link href={"/replacement-sugar"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор замены сахара глюкозой</h5>
              </li>
            </Link>
            <Link href={"/moonshiner-calculator"} className="underline">
              <li className="alcohol-item">
                <h5>Калькулятор смешивания спиртов</h5>
              </li>
            </Link>
          </ul>
          <h3 className="tops-content">
            Расчет спирта сырца для второй перегонки
          </h3>
          <p>
            Значение второго дробного перегона в производстве самогона нельзя
            недооценить, так как именно на этом этапе формируется дистиллят,
            который станет основой для качественного напитка. Эффективность
            процесса зависит от тщательного разделения голов и хвостов. Повысьте
            уровень точности дистилляции и обеспечьте производство
            высококлассного самогона с использованием нашего уникального
            онлайн-калькулятора.
          </p>
          <p>
            Для максимальной эффективности использования калькулятора голов и
            хвостов самогонщика, необходимо провести определенные замеры,
            включая:
          </p>
          <ol>
            <li>Точное определение объема спирта-сырца.</li>
            <li>Измерение крепости спирта-сырца.</li>
            <li>Расчет спирта-сырца для второй перегонки.</li>
          </ol>
          <p>
            При определении баланса между "головами" и "хвостами" в процессе
            дистилляции воспользуйтесь эффективностью и точностью нашего
            калькулятора самогонщика. Опытные самогонщики, особенно те, кто
            предпочитает фракционный отбор, также полагаются на сенсорные
            сигналы, такие как аромат, визуальные показатели и вкус.
          </p>
          <p>
            Головные фракции, характеризующиеся неприятным запахом, содержат
            вредные примеси, включая метанол. Отделите их во время второго
            перегона для обеспечения безопасности и высокого качества конечного
            продукта. Хвостовые фракции, состоящие из вязких сивушных масел,
            могут негативно влиять на вкус, аромат и прозрачность напитка.
          </p>
          <p>
            Наш уникальный самогонный калькулятор обеспечивает быстрый и точный
            расчет голов и хвостов, делая его неотъемлемым инструментом для
            создания выдающихся домашних алкогольных напитков во время второй
            перегонки.
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

export default SecondFrac;
