"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const useAprilCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const nextApril = new Date(today.getFullYear(), 3, 1); // Next April
      if (today > nextApril) {
        nextApril.setFullYear(nextApril.getFullYear() + 1); // Move to next year if April has passed
      }

      let timeUntilApril = nextApril - today; // Time until next April in milliseconds

      // Convert milliseconds to days, hours, minutes, seconds
      const days = Math.floor(timeUntilApril / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntilApril % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeUntilApril % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeUntilApril % (1000 * 60)) / 1000);

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

const AprilCountdownTimer = () => {
  const timeLeft = useAprilCountdownTimer();

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={"апреля"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                осталось до апреля
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      Апрель
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
            осталось до наступления апреля. Этот удобный инструмент производит
            обратный отсчет до 1 апреля, а также определяет, сколько осталось
            дней, часов, минут и секунд до начала нового месяца.
          </p>
          <p>
            Сколько дней до апреля? Этот вопрос интересует многих, особенно
            когда наступает конец марта. Онлайн калькулятор поможет вам точно
            определить, сколько времени осталось до этого знаменательного
            события. Просто введите текущую дату, и вы узнаете, сколько дней
            осталось до 1 апреля.
          </p>
          <p>
            Таймер обратного отсчета - это не только удобный инструмент для тех,
            кто ждет апреля. Он также может пригодиться, если вы планируете
            важное событие или просто хотите следить за временем. Например, вы
            можете установить таймер до начала апреля и следить за тем, сколько
            времени осталось.
          </p>
          <p>
            Важно помнить, что 1 апреля - это не только начало нового месяца, но
            и начало нового этапа в году. Пусть этот обратный отсчет напомнит
            вам о предстоящих планах, надеждах и возможностях! 🌟
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

export default AprilCountdownTimer;
