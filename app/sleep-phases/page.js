"use client";

import { useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "./SleepCalculator.css";
import SleepForm from "./SleepForm";

const SleepCalculator = () => {
  const [wakeHour, setWakeHour] = useState("06");
  const [wakeMin, setWakeMin] = useState("00");
  const [sleepHour, setSleepHour] = useState("22");
  const [sleepMin, setSleepMin] = useState("00");
  const [result, setResult] = useState(null);

  const handleWakeTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "wake_hour") setWakeHour(value);
    if (name === "wake_min") setWakeMin(value);
  };

  const handleSleepTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "sleep_hour") setSleepHour(value);
    if (name === "sleep_min") setSleepMin(value);
  };
  const calculateWakeUpTimes = () => {
    const wakeTime = new Date();
    wakeTime.setHours(parseInt(wakeHour), parseInt(wakeMin), 0, 0);

    // Рассчитываем время для засыпания
    const sleepTimes = [9, 7.5, 6, 4.5, 3, 1.5].map((hours) => {
      const sleepTime = new Date(wakeTime);
      sleepTime.setHours(wakeTime.getHours() - Math.floor(hours));
      sleepTime.setMinutes(wakeTime.getMinutes() - (hours % 1) * 60);
      return sleepTime.toTimeString().slice(0, 5);
    });

    setResult({
      type: "wake_up",
      times: sleepTimes,
    });
  };

  const calculateSleepTimes = () => {
    const sleepTime = new Date();
    sleepTime.setHours(parseInt(sleepHour), parseInt(sleepMin), 0, 0);

    // Рассчитываем время для пробуждения
    const wakeTimes = [1.5, 3, 4.5, 6, 7.5, 9].map((hours) => {
      const wakeTime = new Date(sleepTime);
      wakeTime.setHours(sleepTime.getHours() + Math.floor(hours));
      wakeTime.setMinutes(sleepTime.getMinutes() + (hours % 1) * 60 + 15); // Добавляем 15 минут
      return wakeTime.toTimeString().slice(0, 5);
    });

    setResult({
      type: "sleep",
      times: wakeTimes,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "wake_up") {
      calculateWakeUpTimes();
    } else {
      calculateSleepTimes();
    }
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор сна"}
        description={
          "Калькулятор сна помогает рассчитать оптимальное время для пробуждения или засыпания, учитывая циклы сна."
        }
        span={"сна"}
      >
        <SleepForm onSubmit={handleSubmit}>
          <div className="title first">
            Выберите время, когда вы хотите проснуться
          </div>
          <div className="row-wake_up">
            <select
              className="bottom-s"
              name="wake_hour"
              value={wakeHour}
              onChange={handleWakeTimeChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              className="bottom-s"
              name="wake_min"
              value={wakeMin}
              onChange={handleWakeTimeChange}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <button type="submit" name="wake_up">
              Рассчитать
            </button>
          </div>

          <div className="title">
            Выберите время, когда вы хотите лечь спать
          </div>
          <div className="row-sleep">
            <select
              className="bottom-s"
              name="sleep_hour"
              value={sleepHour}
              onChange={handleSleepTimeChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              className="bottom-s"
              name="sleep_min"
              value={sleepMin}
              onChange={handleSleepTimeChange}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <button type="submit" name="sleep">
              Рассчитать
            </button>
          </div>
          {result && (
            <div className="script-place">
              <div className="title first">
                {result.type === "wake_up"
                  ? `Если вы хотите проснуться в ${wakeHour}:${wakeMin}, то нужно лечь спать в:`
                  : `Если вы хотите лечь спать в ${sleepHour}:${sleepMin}, то вам нужно проснуться в:`}
              </div>
              <div className="row-result">
                {result.times.slice(0, 4).join(" ")}
                <br />
                {result.times.slice(4).join(" ")}
              </div>
              <div className="row-desc">
                Обратите внимание: результат рассчитан без учета времени на
                засыпание. Отнимите еще 10-20 минут, в течение которых вы
                засыпаете.
              </div>
              <div>
                <a href="/sleep-calculator">Рассчитать снова</a>
              </div>
            </div>
          )}
        </SleepForm>

        <Contents>
          <h2 className="tops-content">Как использовать калькулятор сна</h2>
          <p>
            Калькулятор сна — это удобный инструмент, который помогает вам
            определить лучшее время для пробуждения или засыпания, основываясь
            на ваших биологических ритмах и циклах сна.
          </p>
          <p>Чтобы воспользоваться калькулятором:</p>
          <ul>
            <li>
              <strong>Если вы хотите проснуться в определенное время:</strong>{" "}
              выберите время пробуждения, нажмите "Рассчитать", и калькулятор
              покажет, в какое время вам лучше лечь спать, чтобы чувствовать
              себя бодрым и отдохнувшим.
            </li>
            <li>
              <strong>Если вы хотите лечь спать сейчас:</strong> выберите
              текущее время, нажмите "Рассчитать", и калькулятор подскажет,
              когда лучше проснуться, чтобы ваш сон был полноценным.
            </li>
          </ul>
          <p>
            Калькулятор учитывает 90-минутные циклы сна, которые являются
            ключевыми для качественного отдыха. Просыпаясь в конце цикла, вы
            чувствуете себя более отдохнувшим, даже если спали меньше.
          </p>
          <p>
            <strong>Совет:</strong> Добавьте 10-15 минут к рассчитанному
            времени, чтобы учесть период засыпания.
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
};

export default SleepCalculator;
