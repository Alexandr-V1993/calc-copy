"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const getNextSunday = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (воскресенье) до 6 (суббота)
  const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek; // сколько дней осталось до воскресенья
  const nextSunday = new Date(
    currentDate.getTime() + daysUntilSunday * 24 * 60 * 60 * 1000
  );
  nextSunday.setHours(0, 0, 0, 0); // сбросить время до полуночи
  return nextSunday;
};

const CountdownTimerToNextSunday = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextSundayDate, setNextSundayDate] = useState(getNextSunday());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +nextSundayDate - +new Date();
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
        const nextSunday = getNextSunday();
        setNextSundayDate(nextSunday);
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [nextSundayDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько времени осталось до"} span={" воскресенья"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько времени до воскресенья
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
                      }).format(nextSundayDate)}
                    </div>
                    <time
                      dateTime={nextSundayDate.toISOString()}
                      className="big-date-day"
                    >
                      {nextSundayDate.getDate()}
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
            Онлайн калькулятор представляет собой удобный инструмент для расчета
            времени до наступления определенного события. В данном случае, он
            предназначен для определения количества дней, оставшихся до
            воскресенья. Этот инструмент помогает пользователям планировать свои
            дела и активности, имея точное представление о времени до начала
            новой недели.
          </p>
          <p>
            Таймер, работающий в режиме обратного отсчета, подсчитывает
            оставшееся время до наступления воскресенья. Он точно определяет
            количество дней, часов, минут и секунд, оставшихся до начала новой
            недели. Это позволяет пользователям эффективно планировать свое
            время и действия, имея представление о скором наступлении
            воскресенья.
          </p>
          <p>
            Калькулятор и таймер предоставляют точную и надежную информацию о
            времени до воскресенья, что помогает пользователям быть
            организованными и предвидеть свои планы. Их простота использования
            делает эти инструменты доступными для широкого круга пользователей,
            не зависимо от их уровня опыта в работе с подобными приложениями.
          </p>
          <p>
            С помощью этого онлайн калькулятора и таймера, пользователи могут
            легко и точно определить, сколько времени осталось до воскресенья,
            что способствует эффективному планированию и организации их будущих
            действий и событий.
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

export default CountdownTimerToNextSunday;
