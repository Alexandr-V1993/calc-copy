"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const useMayCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const nextMay = new Date(today.getFullYear(), 4, 1); // Next May
      if (today > nextMay) {
        nextMay.setFullYear(nextMay.getFullYear() + 1); // Move to next year if May has passed
      }

      let timeUntilMay = nextMay - today; // Time until next May in milliseconds

      // Convert milliseconds to days, hours, minutes, seconds
      const days = Math.floor(timeUntilMay / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntilMay % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeUntilMay % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeUntilMay % (1000 * 60)) / 1000);

      return {
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(timer);
  }, []); // This effect runs only once on mount

  return timeLeft;
};

const MayCountdownTimer = () => {
  const timeLeft = useMayCountdownTimer();

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={"мая"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                осталось до мая
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      Май
                    </div>
                    <time
                      dateTime={new Date().toISOString()}
                      className="big-date-day"
                    >
                      {1}
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
            Онлайн калькулятор предоставляет возможность вычислить, сколько дней
            осталось до наступления мая. Этот удобный инструмент производит
            обратный отсчет до 1 мая, а также определяет, сколько осталось дней,
            часов, минут и секунд до начала нового месяца.
          </p>
          <p>
            Сколько дней до мая? Этот вопрос интересует многих, особенно когда
            наступает конец апреля. Онлайн калькулятор поможет вам точно
            определить, сколько времени осталось до этого знаменательного
            события. Просто введите текущую дату, и вы узнаете, сколько дней
            осталось до 1 мая.
          </p>
          <p>
            Таймер обратного отсчета - это не только удобный инструмент для тех,
            кто ждет мая. Он также может пригодиться, если вы планируете важное
            событие или просто хотите следить за временем. Например, вы можете
            установить таймер до начала мая и следить за тем, сколько времени
            осталось.
          </p>
          <p>
            Важно помнить, что 1 мая - это не только начало нового месяца, но и
            начало нового этапа в году. Пусть этот обратный отсчет напомнит вам
            о предстоящих планах, надеждах и возможностях! 🎉🌟
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

export default MayCountdownTimer;
