"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const useDecemberCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const today = new Date();
      const nextDecember = new Date(today.getFullYear(), 11, 1); // Next December
      if (today > nextDecember) {
        nextDecember.setFullYear(nextDecember.getFullYear() + 1); // Move to next year if December has passed
      }

      let timeUntilDecember = nextDecember - today; // Time until next December in milliseconds

      // Convert milliseconds to days, hours, minutes, seconds
      const days = Math.floor(timeUntilDecember / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeUntilDecember % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeUntilDecember % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeUntilDecember % (1000 * 60)) / 1000);

      return {
        days,
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

const DecemberCountdownTimer = () => {
  const timeLeft = useDecemberCountdownTimer();

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={"зимы"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                осталось до зимы
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      Декабрь
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
            Представьте себе, что наступает осень, и вы задаетесь вопросом:
            сколько же дней осталось до наступления зимы? Не волнуйтесь, теперь
            существует онлайн калькулятор, который решит эту задачу за вас. Этот
            калькулятор не только сообщит вам количество дней до зимы, но и
            произведет подробный обратный отсчет до самого начала этого сезона.
          </p>
          <p>
            Этот инновационный калькулятор был специально разработан для тех,
            кто хочет быть в курсе времени и событий. Просто введите текущую
            дату, и калькулятор автоматически определит, сколько дней, часов,
            минут и секунд осталось до первого декабря, стартовой точки зимнего
            сезона. Благодаря этому вы всегда будете знать, сколько времени
            остается до наступления холодов.
          </p>
          <p>
            Не только это! Калькулятор также может быть полезным инструментом
            для планирования и подготовки к зиме. Зная точное количество дней до
            ее начала, вы сможете своевременно приготовиться к изменению погоды,
            планировать зимние активности или даже начать свой праздничный сезон
            с уверенностью и пониманием оставшегося времени.
          </p>
          <p>
            Так что не теряйте времени и воспользуйтесь этим удобным онлайн
            калькулятором, чтобы всегда быть в курсе, сколько дней осталось до
            зимы. Подготовьтесь заранее и наслаждайтесь этим волшебным временем
            года с уверенностью и спокойствием.
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

export default DecemberCountdownTimer;
