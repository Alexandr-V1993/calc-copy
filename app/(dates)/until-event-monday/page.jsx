"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const getNextMonday = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (воскресенье) до 6 (суббота)
  const daysUntilMonday = dayOfWeek === 0 ? 1 : 8 - dayOfWeek; // сколько дней осталось до понедельника
  const nextMonday = new Date(
    currentDate.getTime() + daysUntilMonday * 24 * 60 * 60 * 1000
  );
  nextMonday.setHours(0, 0, 0, 0); // сбросить время до полуночи
  return nextMonday;
};

const CountdownTimerToNextMonday = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextMondayDate, setNextMondayDate] = useState(getNextMonday());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +nextMondayDate - +new Date();
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
        const nextMonday = getNextMonday();
        setNextMondayDate(nextMonday);
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }
    };

    const updateTimer = () => {
      const nextMonday = getNextMonday();
      setNextMondayDate(nextMonday);
      setTimeLeft(calculateTimeLeft());
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const millisecondsUntilNextMonday =
      +nextMondayDate - +new Date() + dayInMilliseconds;
    const mondayTimer = setTimeout(() => {
      updateTimer();
      clearInterval(timer);
    }, millisecondsUntilNextMonday);

    return () => {
      clearInterval(timer);
      clearTimeout(mondayTimer);
    };
  }, [nextMondayDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько времени осталось до"} span={" понедельника"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько времени понедельника
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
                      }).format(nextMondayDate)}
                    </div>
                    <time
                      dateTime={nextMondayDate.toISOString()}
                      className="big-date-day"
                    >
                      {nextMondayDate.getDate()}
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
            Наш онлайн калькулятор обеспечивает точное определение количества
            дней, оставшихся до наступления понедельника. Это позволяет
            пользователям планировать свои дела и мероприятия, учитывая точное
            время до этого дня недели.
          </p>
          <p>
            Таймер обеспечивает динамичный обратный отсчет до прихода
            понедельника. В режиме реального времени он показывает, сколько
            дней, часов, минут и секунд осталось до наступления этого важного
            момента, обеспечивая пользователям ясное представление о времени,
            которое им остается.
          </p>
          <p>
            Используя наш калькулятор и таймер, пользователи становятся более
            информированными о времени и легче организуют свое расписание.
            Знание того, сколько времени остается до понедельника, позволяет им
            более эффективно распределять свои задачи и обязательства.
          </p>
          <p>
            Предоставление возможности отслеживать время до понедельника
            помогает пользователям более эффективно использовать свои временные
            ресурсы. Это способствует планированию и организации их дел заранее,
            что, в конечном итоге, увеличивает их продуктивность и помогает
            достигать поставленных целей.
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

export default CountdownTimerToNextMonday;
