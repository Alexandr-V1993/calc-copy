"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const useJuneCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const nextJune = new Date(today.getFullYear(), 5, 1); // Next June
      if (today > nextJune) {
        nextJune.setFullYear(nextJune.getFullYear() + 1); // Move to next year if June has passed
      }

      let timeUntilJune = nextJune - today; // Time until next June in milliseconds

      // Convert milliseconds to days, hours, minutes, seconds
      const days = Math.floor(timeUntilJune / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntilJune % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeUntilJune % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeUntilJune % (1000 * 60)) / 1000);

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

const JuneCountdownTimer = () => {
  const timeLeft = useJuneCountdownTimer();

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={"лета"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько дней осталось до лета
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      Июнь
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
            С приближением весны многие из нас уже начинают мечтать о лете -
            времени отпусков, отдыха на природе и солнечных дней. Но сколько же
            дней осталось до самого первого дня лета? Теперь вы можете легко
            узнать это, благодаря специальному онлайн калькулятору, который
            рассчитывает количество дней до начала лета. Этот калькулятор не
            только сообщит вам количество дней до этого долгожданного времени
            года, но и проведет обратный отсчет до этого момента.
          </p>
          <p>
            Инновационный калькулятор создан для тех, кто хочет быть в курсе
            времени и событий предстоящего сезона. Просто введите текущую дату,
            и калькулятор мгновенно определит, сколько дней, часов, минут и
            секунд осталось до начала лета. Благодаря этому вы всегда будете в
            курсе, сколько времени остается до наступления этого яркого и
            теплого времени года.
          </p>
          <p>
            Кроме того, этот калькулятор может стать полезным инструментом для
            планирования и подготовки к летнему сезону. Зная точное количество
            дней до его начала, вы сможете своевременно запланировать отпуск,
            подготовиться к пляжным поездкам или даже начать работу над летними
            проектами с уверенностью и пониманием оставшегося времени.
          </p>
          <p>
            Не упустите шанс воспользоваться этим удобным онлайн калькулятором,
            чтобы всегда быть в курсе, сколько дней осталось до начала лета.
            Подготовьтесь заранее и наслаждайтесь этим ярким и незабываемым
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

export default JuneCountdownTimer;
