"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const CountdownTimer = () => {
  const currentYear = new Date().getFullYear();
  const endOfYearDate = new Date(currentYear + 1, 0, 1, 0, 0, 0); // Начало следующего года
  endOfYearDate.setDate(endOfYearDate.getDate() - 1); // Уменьшаем на 1 день
  const [timeLeft, setTimeLeft] = useState(endOfYearDate - new Date());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +endOfYearDate - +new Date();
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
        return { days: "00", hours: "00", minutes: "00", seconds: "00" };
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

      <TopForm title={"Сколько дней осталось до"} span={" конца года"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько дней осталось до конца года
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      декабрь
                    </div>
                    <time
                      dateTime={`${currentYear}-12-31`}
                      className="big-date-day"
                    >
                      31
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
            Встречайте конец года с радостью и большим оптимизмом, ведь это
            время наполнено надеждой и ожиданием новых возможностей.
            Празднование конца года - это не только традиционные вечеринки и
            фейерверки, но и время для вдумчивых размышлений о прошлом и
            стратегического планирования на будущее. Этот период приносит с
            собой волнение и радость, озаряя сердца миллионов людей по всему
            миру.
          </p>
          <p>
            Этот онлайн калькулятор вычисляет оставшееся время до наступления
            нового года. Таймер производит обратный отсчёт до 31 декабря
            текущего года и определяет сколько осталось дней, часов, минут и
            секунд до его окончания.
          </p>
          <p>
            Новогодний период является временем вдохновения и радости для
            миллионов людей по всему миру. Это время, когда мы вспоминаем о
            прошлом и планируем будущее, с уверенностью в лучших перспективах.
          </p>
          <p>
            Празднование конца года - это не только время для вечеринок и
            фейерверков, но и момент для размышлений о достижениях и задумок о
            целях на следующий год.
          </p>
          <p>
            Каждый день, каждый час, минута и секунда, которые остаются до
            окончания года, наполняются надеждой и ожиданием новых возможностей
            и радостных событий.
          </p>
          <p>
            Наслаждайтесь этим временем и используйте его для того, чтобы
            встретить новый год с радостью и оптимизмом, готовясь к новым
            высотам и вызовам.
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

export default CountdownTimer;
