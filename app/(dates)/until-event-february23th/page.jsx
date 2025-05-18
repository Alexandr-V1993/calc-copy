"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const February23CountdownTimer = () => {
  const feb23Date = new Date(new Date().getFullYear(), 1, 23); // 23 февраля текущего года
  if (new Date() > feb23Date) {
    // Если текущая дата больше 23 февраля, переходим к следующему году
    feb23Date.setFullYear(feb23Date.getFullYear() + 1);
  }
  const [timeLeft, setTimeLeft] = useState(feb23Date - new Date());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +feb23Date - +new Date();
      if (difference > 0) {
        return {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      } else {
        // Если дата уже прошла, переходим к следующему году
        feb23Date.setFullYear(feb23Date.getFullYear() + 1);
        setTimeLeft(calculateTimeLeft());
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Эффект запускается только один раз при монтировании

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={" 23 февраля"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько дней осталось до 23 февраля
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      февраль
                    </div>
                    <time
                      dateTime={feb23Date.toISOString()}
                      className="big-date-day"
                    >
                      23
                    </time>
                  </div>
                  <div className="timer timer-1 calc-fright">
                    <div className="timer__items">
                      <div
                        className="timer__item  timer-days"
                        data-title="дней"
                      >
                        <span> {timeLeft.days}</span>
                        <span className="d">дней</span>
                      </div>

                      <div
                        className="timer__item  timer-hours"
                        data-title="часов"
                      >
                        <span> {timeLeft.hours}</span>
                        <span className="d">часов</span>
                      </div>
                      <div
                        className="timer__item  timer-minutes"
                        data-title="минут"
                      >
                        <span> {timeLeft.minutes}</span>
                        <span className="d">минут</span>
                      </div>
                      <div
                        className="timer__item  timer-seconds"
                        data-title="секунд"
                      >
                        <span> {timeLeft.seconds}</span>
                        <span className="d">секунд</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href={"./until-event-index"}>
            Посчитай <strong>Сколько осталось До</strong> любого события
          </Link>
          <div id="yandex_rtb_R-A-6286184-2"></div>
          <p>
            История <strong>Дня защитника Отечества</strong> имеет глубокие
            корни и богатое прошлое. Этот праздник не возник внезапно, а имеет
            за собой долгую историю. Он стал традицией чтения и почитания
            сотрудников Вооруженных сил и силовых структур России, которые
            посвятили себя защите родины.
          </p>
          <p>
            Значение этого праздника для нас невероятно велико. Особенно в
            России, где практически в каждой семье есть свои герои, погибшие на
            поле боя. В течение XX века Россия пережила множество разрушительных
            войн, унесших миллионы жизней, и в своей истории впитала идею
            воинской доблести. Роль военных оставалась ключевой от древних
            времен до современности, заслуживая уважения и почета. Как отметил
            <strong> Александр III</strong>, настоящими союзниками России всегда
            были ее армия и флот, защищающие суверенитет страны вместе с ее
            народом.
          </p>
          <p>
            Истоки <strong>Дня защитника Отечества</strong> уходят в далекое
            прошлое. Его предшественником был{" "}
            <strong>День Георгиевских кавалеров</strong>, учрежденный в 1769
            году для почета кавалеров ордена Святого великомученика{" "}
            <strong>Георгия Победоносца.</strong> Однако этот праздник касался
            только носителей этой престижной награды. Более широкое
            празднование, включающее всех защитников Отечества, пришло к нам
            только в наше время.
          </p>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
};

export default February23CountdownTimer;
