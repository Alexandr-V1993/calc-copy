"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const useSeptemberCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const nextSeptember = new Date(today.getFullYear(), 8, 1); // Next September
      if (today > nextSeptember) {
        nextSeptember.setFullYear(nextSeptember.getFullYear() + 1); // Move to next year if September has passed
      }

      let timeUntilSeptember = nextSeptember - today; // Time until next September in milliseconds

      // Convert milliseconds to days, hours, minutes, seconds
      const days = Math.floor(timeUntilSeptember / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntilSeptember % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeUntilSeptember % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeUntilSeptember % (1000 * 60)) / 1000);

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

const SeptemberCountdownTimer = () => {
  const timeLeft = useSeptemberCountdownTimer();

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={"осени"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                осталось до осени
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      Сентябрь
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
            Когда лето подходит к концу, многие из нас задаются вопросом:
            сколько дней осталось до начала осени? Не нужно беспокоиться, теперь
            есть специальный онлайн калькулятор, который поможет вам узнать
            точное количество дней до этого замечательного сезона. Этот
            калькулятор обеспечит вас не только информацией о количестве дней до
            осени, но и проведет детальный обратный отсчет до ее начала.
          </p>
          <p>
            Этот инновационный калькулятор разработан для всех, кто хочет быть в
            курсе времени и событий приближающегося сезона. Просто введите
            текущую дату, и калькулятор мгновенно рассчитает, сколько дней,
            часов, минут и секунд осталось до начала осени. Благодаря этому вы
            всегда будете в курсе, сколько времени остается до прихода осенних
            изменений.
          </p>
          <p>
            Этот калькулятор также может быть незаменимым инструментом для
            планирования и подготовки к осени. Зная точное количество дней до ее
            начала, вы сможете своевременно адаптироваться к изменению погоды,
            планировать осенние мероприятия или даже начать приготовления к
            праздничному сезону с уверенностью и пониманием оставшегося времени.
          </p>
          <p>
            Не теряйте времени и воспользуйтесь этим удобным онлайн
            калькулятором, чтобы всегда быть в курсе, сколько дней осталось до
            начала осени. Подготовьтесь заранее и наслаждайтесь этим прекрасным
            сезоном с уверенностью и спокойствием.
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

export default SeptemberCountdownTimer;
