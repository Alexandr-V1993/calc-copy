"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const getNextSaturday = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (воскресенье) до 6 (суббота)
  const daysUntilSaturday = dayOfWeek === 6 ? 7 : 6 - dayOfWeek; // сколько дней осталось до субботы
  const nextSaturday = new Date(
    currentDate.getTime() + daysUntilSaturday * 24 * 60 * 60 * 1000
  );
  nextSaturday.setHours(0, 0, 0, 0); // сбросить время до полуночи
  return nextSaturday;
};

const CountdownTimerToNextWeekends = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextSaturdayDate, setNextSaturdayDate] = useState(getNextSaturday());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +nextSaturdayDate - +new Date();
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
        const nextSaturday = getNextSaturday();
        setNextSaturdayDate(nextSaturday);
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [nextSaturdayDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько времени осталось до"} span={" выходных"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько времени до выходных
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
                      }).format(nextSaturdayDate)}
                    </div>
                    <time
                      dateTime={nextSaturdayDate.toISOString()}
                      className="big-date-day"
                    >
                      {nextSaturdayDate.getDate()}
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
            Онлайн калькулятор, разработанный в данном проекте, осуществляет
            точные вычисления, определяя количество дней, оставшихся до начала
            выходных. Этот инструмент позволяет пользователям в удобной форме
            получить информацию о времени, оставшемся до начала выходного дня.
            Независимо от текущего дня недели, калькулятор обеспечивает точные
            данные о времени до ближайших выходных, учитывая даже возможные
            временные сдвиги.
          </p>
          <p>
            Таймер, реализованный в данном приложении, обеспечивает наглядный
            обратный отсчет времени до начала выходных. Он предоставляет
            информацию о том, сколько дней, часов, минут и секунд остается до
            этого важного события. Этот функционал позволяет пользователям быть
            в курсе оставшегося времени до начала уик-энда, что может быть
            полезным для планирования и организации своего времени.
          </p>
          <p>
            Точные вычисления таймера позволяют получать актуальную информацию о
            времени, оставшемся до начала выходных, в режиме реального времени.
            Каждую секунду таймер обновляет отображаемые данные, обеспечивая
            точность и достоверность информации. Это позволяет пользователям
            всегда быть в курсе оставшегося времени до начала выходных и
            планировать свои дела с максимальной эффективностью.
          </p>
          <p>
            Таким образом, функционал онлайн калькулятора и таймера позволяет
            пользователям вовремя подготовиться к наступлению выходных,
            обеспечивая точные вычисления и информацию о времени до этого
            важного события.
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

export default CountdownTimerToNextWeekends;
