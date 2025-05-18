"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const VacationCountdownTimer = () => {
  const getNextVacationDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const nextVacationDate = new Date(currentYear, 5, 1); // 1 июня текущего года

    if (now > nextVacationDate) {
      nextVacationDate.setFullYear(currentYear + 1); // Если 1 июня уже прошло, устанавливаем на следующий год
    }

    return nextVacationDate;
  };

  const [vacationDate, setVacationDate] = useState(getNextVacationDate());
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +vacationDate - +new Date();
      if (difference > 0) {
        return {
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0"
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
            2,
            "0"
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      } else {
        // Если время истекло, обновляем дату на следующий год
        setVacationDate(getNextVacationDate());
        return { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [vacationDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={" начала каникул"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько дней до начала каникул
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      июнь
                    </div>
                    <time dateTime="2024-06-01" className="big-date-day">
                      1
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
          <p>Отпразднуйте начало каникул, которые начинаются 1 июня.</p>
          <p>
            Каникулы - это время, когда студенты и школьники могут отдохнуть от
            учебы и насладиться свободным временем. Это время, когда можно
            путешествовать, заниматься хобби, встречаться с друзьями и семьей.
          </p>
          <p>
            Начало каникул всегда приносит радость и ощущение свободы. Это
            время, когда можно забыть о школьных и учебных обязанностях и просто
            наслаждаться моментом.
          </p>
          <p>
            Планируйте свои каникулы заранее, чтобы получить максимальное
            удовольствие от этого времени. И не забудьте использовать наш
            таймер, чтобы отслеживать, сколько дней осталось до начала каникул.
          </p>
          <p>
            Наслаждайтесь каждым моментом каникул и запомните эти дни как время,
            проведенное с пользой и удовольствием.
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

export default VacationCountdownTimer;
