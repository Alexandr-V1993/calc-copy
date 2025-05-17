"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const getNextThursday = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (воскресенье) до 6 (суббота)
  const daysUntilThursday = dayOfWeek <= 3 ? 4 - dayOfWeek : 11 - dayOfWeek; // сколько дней осталось до четверга
  const nextThursday = new Date(
    currentDate.getTime() + daysUntilThursday * 24 * 60 * 60 * 1000
  );
  nextThursday.setHours(0, 0, 0, 0); // сбросить время до полуночи
  return nextThursday;
};

const CountdownTimerToNextThursday = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextThursdayDate, setNextThursdayDate] = useState(getNextThursday());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +nextThursdayDate - +new Date();
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
        const nextThursday = getNextThursday();
        setNextThursdayDate(nextThursday);
        return {
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        };
      }
    };

    const updateTimer = () => {
      const nextThursday = getNextThursday();
      setNextThursdayDate(nextThursday);
      setTimeLeft(calculateTimeLeft());
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const dayInMilliseconds = 24 * 60 * 60 * 1000;
    const millisecondsUntilNextThursday =
      +nextThursdayDate - +new Date() + dayInMilliseconds;
    const thursdayTimer = setTimeout(() => {
      updateTimer();
      clearInterval(timer);
      // Рекурсивно запускаем таймер снова
      thursdayTimer();
    }, millisecondsUntilNextThursday);

    return () => {
      clearInterval(timer);
      clearTimeout(thursdayTimer);
    };
  }, [nextThursdayDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько времени осталось до"} span={" четверга"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько
                времени до четверга
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
                      }).format(nextThursdayDate)}
                    </div>
                    <time
                      dateTime={nextThursdayDate.toISOString()}
                      className="big-date-day"
                    >
                      {nextThursdayDate.getDate()}
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
            до наступления четверга. Это позволяет пользователям аккуратно
            планировать свои обязательства и мероприятия, зная точное время до
            этого дня недели.
          </p>
          <p>
            Таймер обеспечивает динамичный обратный отсчет до прихода четверга.
            В реальном времени он показывает, сколько дней, часов, минут и
            секунд осталось до наступления этого важного дня недели, обеспечивая
            пользователям ясное представление о времени, которое им остается.
          </p>
          <p>
            Используя наш калькулятор и таймер, пользователи становятся более
            информированными о времени и легче организуют свое расписание. Они
            могут лучше планировать свои дела, учитывая, сколько времени
            остается до четверга, и эффективно распределять свои обязательства.
          </p>
          <p>
            Предоставление возможности пользователям отслеживать время до
            четверга помогает им более эффективно использовать свои временные
            ресурсы. Это способствует планированию и организации их задач
            заранее, что в конечном итоге повышает их продуктивность и
            способствует достижению желаемых результатов.
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

export default CountdownTimerToNextThursday;
