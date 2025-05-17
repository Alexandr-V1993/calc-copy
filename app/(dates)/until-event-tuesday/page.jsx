"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const getNextTuesday = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (воскресенье) до 6 (суббота)
  const daysUntilTuesday =
    dayOfWeek === 0 ? 2 : dayOfWeek === 1 ? 1 : 9 - dayOfWeek; // сколько дней осталось до вторника
  const nextTuesday = new Date(
    currentDate.getTime() + daysUntilTuesday * 24 * 60 * 60 * 1000
  );
  nextTuesday.setHours(0, 0, 0, 0); // сбросить время до полуночи
  return nextTuesday;
};

const CountdownTimerToNextTuesday = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextTuesdayDate, setNextTuesdayDate] = useState(getNextTuesday());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +nextTuesdayDate - +new Date();
      if (difference > 0) {
        return {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      } else {
        const nextTuesday = getNextTuesday();
        setNextTuesdayDate(nextTuesday);
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }
    };

    const updateTimer = () => {
      const nextTuesday = getNextTuesday();
      setNextTuesdayDate(nextTuesday);
      setTimeLeft(calculateTimeLeft());
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const millisecondsUntilNextTuesday =
      +nextTuesdayDate - +new Date() + dayInMilliseconds;
    const tuesdayTimer = setTimeout(() => {
      updateTimer();
      clearInterval(timer);
    }, millisecondsUntilNextTuesday);

    return () => {
      clearInterval(timer);
      clearTimeout(tuesdayTimer);
    };
  }, [nextTuesdayDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько времени осталось до"} span={" вторника"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько
                времени до вторника
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      {new Intl.DateTimeFormat("ru-RU", {
                        month: "long",
                      }).format(nextTuesdayDate)}
                    </div>
                    <time
                      dateTime={nextTuesdayDate.toISOString()}
                      className="big-date-day"
                    >
                      {nextTuesdayDate.getDate()}
                    </time>
                  </div>
                  <div className="timer timer-1 calc-fright">
                    <div className="timer__items">
                      <div
                        className="timer__item  timer-days"
                        data-title="дней"
                      >
                        <span>{timeLeft.days}</span>
                        <span className="d">дней</span>
                      </div>
                      <div
                        className="timer__item  timer-hours"
                        data-title="часов"
                      >
                        <span>{timeLeft.hours}</span>
                        <span className="d">часов</span>
                      </div>
                      <div
                        className="timer__item  timer-minutes"
                        data-title="минут"
                      >
                        <span>{timeLeft.minutes}</span>
                        <span className="d">минут</span>
                      </div>
                      <div
                        className="timer__item  timer-seconds"
                        data-title="секунд"
                      >
                        <span>{timeLeft.seconds}</span>
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
            Наш онлайн калькулятор точно определяет количество дней, оставшихся
            до наступления вторника. Это дает пользователям возможность более
            точно планировать свои будни и события, учитывая оставшееся время до
            этого дня недели.
          </p>
          <p>
            Таймер обеспечивает динамичный обратный отсчет до наступления
            вторника. В режиме реального времени он отображает сколько дней,
            часов, минут и секунд осталось до наступления этого ключевого
            момента, предоставляя пользователям ясное представление о времени,
            которое им остается.
          </p>
          <p>
            Используя наш калькулятор и таймер, пользователи становятся более
            информированными о времени и легче организуют свое расписание. Зная,
            сколько времени остается до вторника, они могут эффективнее
            планировать свои задачи и обязательства.
          </p>
          <p>
            Предоставление пользователю возможности отслеживать время до
            вторника помогает им более эффективно использовать свои временные
            ресурсы. Это способствует планированию и организации их задач
            заранее, что в конечном итоге повышает их продуктивность и помогает
            достичь поставленных целей.
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

export default CountdownTimerToNextTuesday;
