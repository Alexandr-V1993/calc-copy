"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const ChristmasCountdownTimer = () => {
  const getNextChristmasDate = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const christmasDate = new Date(currentYear, 0, 7); // 7 января текущего года

    // Если Рождество уже прошло в этом году, устанавливаем дату на следующий год
    if (today > christmasDate) {
      christmasDate.setFullYear(currentYear + 1);
    }

    return christmasDate;
  };

  const calculateTimeLeft = () => {
    const difference = +getNextChristmasDate() - +new Date();
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
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Устанавливаем начальное состояние на клиенте
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={" Рождества"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                до Рождества | Рождество Христово
              </span>
              <div className="d-flex align-items-start mb-4 calc-form">
                <div className="calc-frow">
                  <div className="big-date calc-fleft p-0">
                    <div
                      className="big-date-month small"
                      style={{ textTransform: "capitalize" }}
                    >
                      январь
                    </div>
                    <time dateTime="2025-01-07" className="big-date-day">
                      7
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
            Отпразднуйте Рождество Христово - заветный православный праздник,
            отмечаемый христианами по всему миру. В России этот праздник
            приходится на 7 января, что придает дополнительную радость
            населению, которое не только отмечает это религиозное событие, но и
            наслаждается дополнительным выходным днем, продлевая праздничные
            новогодние каникулы.
          </p>
          <p>
            Чтобы не пропустить подготовку к этому особому дню, воспользуйтесь
            нашим онлайн-таймером, который показывает обратный отсчет до
            Рождества. Откройте для себя семь веских причин следить за днями,
            предшествующими Рождеству Христову:
          </p>
          <ol>
            <li>
              Посещение церковных служб, которые традиционно проводятся 7
              января.
            </li>
            <li>Соблюдайте 40-дневный пост, предшествующий Рождеству.</li>
            <li>
              Наслаждайтесь колядованием, которое обычно проводится 6 января.
            </li>
            <li>
              Участвуйте в рождественских гаданиях, которые, по поверьям, могут
              дать проницательные предсказания.
            </li>
            <li>
              Планируйте праздничные мероприятия и встречи с семьей и друзьями.
            </li>
            <li>
              Приобретайте билеты на концерты и представления с рождественской
              тематикой.
            </li>
            <li>
              Украсьте рождественскую елку, символизирующую защиту и радость.
            </li>
          </ol>
          <p>
            В то время как верующие с нетерпением ждут Рождества из-за его
            религиозного значения, другие, отсчитывают дни по разным причинам,
            например, чтобы спланировать отпуск или насладиться зимними
            развлечениями.
          </p>
          <p>
            Узнайте об истории и традициях Рождества - почитаемого среди
            православных верующих праздника, посвященного рождению Иисуса
            Христа. О скромном рождении Иисуса в уединенной пещере, датируемом 7
            годом до н. э., рассказывается в Библии, которая почитается
            православными как основной текст.
          </p>
          <p>
            В первые века Рождество отмечалось как праздник Богоявления, но в
            России оно выделилось в отдельный праздник, отмечаемый 7 января,
            сопровождаемый церковными службами и торжественными собраниями.
          </p>
          <p>
            Неотъемлемой частью праздничной атмосферы является обмен подарками,
            символизирующими приношения волхвов, и украшение храма ангелами,
            звездами и сосновой тематикой. Наш таймер обратного отсчета времени
            до Рождества предназначен для всех, кто ожидает этого радостного
            событие.
          </p>
          <h3>
            Предлагая удобство отслеживания времени, оставшегося до 7 января,
            наш таймер обладает рядом преимуществ:
          </h3>
          <ol>
            <li>Удобный интерфейс без навязчивых элементов.</li>
            <li>Бесплатный доступ без необходимости регистрации или оплаты.</li>
            <li>Легко делиться с друзьями и близкими.</li>
          </ol>
          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
};

export default ChristmasCountdownTimer;
