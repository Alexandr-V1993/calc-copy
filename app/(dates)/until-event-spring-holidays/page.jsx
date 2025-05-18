"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const SpringBreakCountdownTimer = () => {
  const springBreakDate = new Date("2025-03-25T00:00:00"); // Дата начала весенних каникул
  const [timeLeft, setTimeLeft] = useState(springBreakDate - new Date());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +springBreakDate - +new Date();
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
        const nextSpringBreakDate = new Date(
          springBreakDate.getFullYear() + 1,
          2,
          25
        );
        const nextDifference = +nextSpringBreakDate - +new Date();
        return {
          days: String(
            Math.floor(nextDifference / (1000 * 60 * 60 * 24))
          ).padStart(2, "0"),
          hours: String(
            Math.floor((nextDifference / (1000 * 60 * 60)) % 24)
          ).padStart(2, "0"),
          minutes: String(
            Math.floor((nextDifference / 1000 / 60) % 60)
          ).padStart(2, "0"),
          seconds: String(Math.floor((nextDifference / 1000) % 60)).padStart(
            2,
            "0"
          ),
        };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Эффект запускается только один раз при монтировании

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={" весенних каникул"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько дней до весенних каникул
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      март
                    </div>
                    <time dateTime="2025-03-25" className="big-date-day">
                      25
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
            Весенние каникулы — это прекрасное время для отдыха и развлечений.
            Планируйте свои каникулы заранее и наслаждайтесь этими днями!
          </p>
          <p>
            Это время, когда можно полностью расслабиться и забыть о
            повседневных заботах. Планируйте свои дни так, чтобы каждый из них
            был наполнен яркими впечатлениями и радостными моментами. Ведь
            весенние каникулы — это время для себя и для отдыха!
          </p>
          <p>
            Одним из самых приятных аспектов весенних каникул является
            возможность провести больше времени на свежем воздухе. Организуйте
            пикники, прогулки по паркам или просто наслаждайтесь теплым весенним
            солнцем на своем балконе. Время каникул — это время для приятных
            моментов и новых впечатлений!
          </p>
          <p>
            Весенние каникулы также предоставляют отличный шанс для саморазвития
            и обучения. Запишитесь на интересные мастер-классы, курсы или
            тренинги, которые давно хотели посетить. Это отличная возможность
            расширить свои знания и навыки, а также встретить новых интересных
            людей.
          </p>
          <p>
            {" "}
            Не забывайте и о заботе о себе! Ведь весенние каникулы — это время
            для того, чтобы побаловать себя заслуженным отдыхом и заботой о
            своем здоровье. Уделите время спорту, йоге, медитации или просто
            уютному чтению книги в тишине и умиротворении. Пусть эти дни станут
            для вас настоящими праздниками души и тела, наполненными радостью,
            гармонией и новыми впечатлениями!
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

export default SpringBreakCountdownTimer;
