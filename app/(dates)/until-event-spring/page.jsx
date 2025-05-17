"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const useMarchCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const nextMarch = new Date(today.getFullYear(), 2, 1); // Next March
      if (today > nextMarch) {
        nextMarch.setFullYear(nextMarch.getFullYear() + 1); // Move to next year if March has passed
      }

      let timeUntilMarch = nextMarch - today; // Time until next March in milliseconds

      // Convert milliseconds to days, hours, minutes, seconds
      const days = Math.floor(timeUntilMarch / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntilMarch % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeUntilMarch % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeUntilMarch % (1000 * 60)) / 1000);

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

const MarchCountdownTimer = () => {
  const timeLeft = useMarchCountdownTimer();

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={"весны"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                осталось до весны
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      Март
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
            Как только зима подходит к концу, мы начинаем ждать прихода весны с
            нетерпением. Но сколько же дней осталось до того момента, когда
            природа начнет оживать и цвести? Теперь вы можете легко узнать ответ
            на этот вопрос, благодаря специальному онлайн калькулятору, который
            рассчитает время до начала весны. Этот калькулятор обеспечит вас не
            только количеством дней до весны, но и проведет подробный обратный
            отсчет до этого момента.
          </p>
          <p>
            Инновационный калькулятор создан для тех, кто хочет быть в курсе
            времени и событий приближающегося сезона. Просто введите текущую
            дату, и калькулятор моментально определит, сколько дней, часов,
            минут и секунд осталось до прихода весны. Благодаря этому вы всегда
            будете в курсе, сколько времени остается до начала этого прекрасного
            времени года.
          </p>
          <p>
            Кроме того, этот калькулятор может стать важным инструментом для
            планирования и подготовки к весне. Зная точное количество дней до ее
            начала, вы сможете своевременно подготовиться к изменению погоды,
            планировать весенние мероприятия или даже начать свой сезонный уход
            за садом и растениями. Все это можно сделать с уверенностью и
            пониманием оставшегося времени.
          </p>
          <p>
            Не упустите возможность воспользоваться этим удобным онлайн
            калькулятором, чтобы всегда быть в курсе, сколько дней осталось до
            начала весны. Подготовьтесь заранее и наслаждайтесь этим прекрасным
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

export default MarchCountdownTimer;
