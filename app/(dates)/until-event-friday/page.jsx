"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const getNextFriday = () => {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay(); // 0 (воскресенье) до 6 (суббота)
  const daysUntilFriday =
    dayOfWeek === 5 ? 7 : dayOfWeek === 6 ? 6 : 5 - dayOfWeek; // сколько дней осталось до пятницы
  const nextFriday = new Date(
    currentDate.getTime() + daysUntilFriday * 24 * 60 * 60 * 1000
  );
  nextFriday.setHours(0, 0, 0, 0); // сбросить время до полуночи
  return nextFriday;
};

const CountdownTimerToNextFriday = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [nextFridayDate, setNextFridayDate] = useState(getNextFriday());

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +nextFridayDate - +new Date();
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
        const nextFriday = getNextFriday();
        setNextFridayDate(nextFriday);
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [nextFridayDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько времени осталось до"} span={" пятницы"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://boxcalculators.ru/">boxcalculators.ru</a> /
                Сколько времени до пятницы
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
                      }).format(nextFridayDate)}
                    </div>
                    <time
                      dateTime={nextFridayDate.toISOString()}
                      className="big-date-day"
                    >
                      {nextFridayDate.getDate()}
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
            Сегодняшняя цифра времени становится все более значимой с каждым
            мигом, особенно когда дело касается ожидания наступления пятницы.
            Онлайн калькулятор предоставляет нам простой и эффективный способ
            отслеживать этот момент. Вводя текущую дату, мы получаем точное
            количество дней, часов, минут и секунд, оставшихся до прихода этого
            долгожданного дня недели.
          </p>
          <p>
            Для тех, кто ждет окончания рабочей недели с нетерпением, таймер,
            который отсчитывает время до пятницы, становится настоящим
            спасением. Этот инструмент не только показывает, сколько дней
            осталось до недели, но и дает представление о том, сколько времени
            осталось на каждом этапе этого ожидания.
          </p>
          <p>
            Подсчитывая каждую минуту и секунду до наступления пятницы, мы можем
            более осознанно управлять нашим временем и планировать будущие
            события. Такой таймер становится не просто инструментом для
            отслеживания времени, но и мотивационным средством, помогающим
            дождаться заветного конца недели с более ярким настроением и
            эффективным использованием времени.
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

export default CountdownTimerToNextFriday;
