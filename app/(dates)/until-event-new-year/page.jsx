"use client";
import { useState, useEffect } from "react";
import "./chris.css";
import HeaderModal from "@/app/components/HeaderModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const NewYearCountdownTimer = () => {
  const getNextNewYearDate = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let nextNewYearDate = new Date(currentYear + 1, 0, 1); // 1 января следующего года

    // Если текущая дата уже после 1 января, устанавливаем на следующий год
    if (now > nextNewYearDate) {
      nextNewYearDate.setFullYear(currentYear + 1);
    }

    return nextNewYearDate;
  };

  const [newYearDate, setNewYearDate] = useState(getNextNewYearDate());
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +newYearDate - +new Date();
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
        setNewYearDate(getNextNewYearDate());
        return { days: "00", hours: "00", minutes: "00", seconds: "00" };
      }
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [newYearDate]);

  return (
    <>
      <HeaderModal />

      <TopForm title={"Сколько дней осталось до"} span={" Нового года"}>
        <Contents>
          <div className="label-row">
            <div className="row-vans-bottom">
              <span className="top-adress">
                <a href="https://calcoffee.ru/">Calcoffee.ru</a> / Сколько дней
                до Нового Года | Таймер онлайн
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
                    <time dateTime="2025-01-01" className="big-date-day">
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
          <p>
            Встречайте Новый год с радостью и оптимизмом, ведь это время
            наполнено надеждой и ожиданием новых возможностей. Празднование
            Нового года - это не только традиционные вечеринки и фейерверки, но
            и время для вдумчивых размышлений о прошлом и стратегического
            планирования на будущее. Этот праздник приносит с собой волнение и
            радость, озаряя сердца миллионов людей по всему миру.
          </p>
          <p>
            Новый год символизирует возможность начать все с чистого листа,
            исправить прошлые ошибки и стремиться к новым высотам. Это время,
            когда мы украшаем наши дома, обмениваемся подарками и наслаждаемся
            вместе проведенным временем с семьей и друзьями. Стремясь к новым
            целям и задумавшись над тем, как сделать следующий год еще лучше, мы
            поддерживаем традицию создания новогодних обещаний и резолюций.
          </p>
          <p>
            Подготовка к празднованию Нового года начинается задолго до его
            наступления: мы планируем вечеринки, выбираем подарки для близких,
            готовим новогодние угощения и декорируем наши дома волшебными огнями
            и украшениями. В этом процессе заложено особое волнение и ожидание,
            когда мы стремимся создать атмосферу волшебства и радости для всех
            вокруг.
          </p>
          <p>
            Новый год также стимулирует нас задуматься о наших ценностях и
            приоритетах в жизни. Это время, когда мы осознаем важность семьи,
            дружбы и взаимоотношений, а также делаем планы на будущее, стремясь
            к лучшей версии себя. Это момент, когда мы останавливаемся на
            мгновение, чтобы оценить все, что у нас есть, и поставить новые цели
            на горизонте.
          </p>
          <p>
            Новый год - это не только время для веселья и празднования, но и
            время для вдумчивых размышлений и саморефлексии. Это момент, когда
            мы смотрим вперед с оптимизмом и верой в лучшее, готовясь встретить
            новые вызовы и возможности, которые принесет с собой следующий год.
            Пусть Новый год принесет вам много радости, удачи и вдохновения для
            новых начинаний!
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

export default NewYearCountdownTimer;
