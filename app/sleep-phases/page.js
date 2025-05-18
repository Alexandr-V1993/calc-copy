"use client";

import { useState } from "react";
import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "./SleepCalculator.css";
import SleepForm from "./SleepForm";

const SleepCalculator = () => {
  const [wakeHour, setWakeHour] = useState("06");
  const [wakeMin, setWakeMin] = useState("00");
  const [sleepHour, setSleepHour] = useState("22");
  const [sleepMin, setSleepMin] = useState("00");
  const [result, setResult] = useState(null);

  const handleWakeTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "wake_hour") setWakeHour(value);
    if (name === "wake_min") setWakeMin(value);
  };

  const handleSleepTimeChange = (e) => {
    const { name, value } = e.target;
    if (name === "sleep_hour") setSleepHour(value);
    if (name === "sleep_min") setSleepMin(value);
  };
  const calculateWakeUpTimes = () => {
    const wakeTime = new Date();
    wakeTime.setHours(parseInt(wakeHour), parseInt(wakeMin), 0, 0);

    // Рассчитываем время для засыпания
    const sleepTimes = [9, 7.5, 6, 4.5, 3, 1.5].map((hours) => {
      const sleepTime = new Date(wakeTime);
      sleepTime.setHours(wakeTime.getHours() - Math.floor(hours));
      sleepTime.setMinutes(wakeTime.getMinutes() - (hours % 1) * 60);
      return sleepTime.toTimeString().slice(0, 5);
    });

    setResult({
      type: "wake_up",
      times: sleepTimes,
    });
  };

  const calculateSleepTimes = () => {
    const sleepTime = new Date();
    sleepTime.setHours(parseInt(sleepHour), parseInt(sleepMin), 0, 0);

    // Рассчитываем время для пробуждения
    const wakeTimes = [1.5, 3, 4.5, 6, 7.5, 9].map((hours) => {
      const wakeTime = new Date(sleepTime);
      wakeTime.setHours(sleepTime.getHours() + Math.floor(hours));
      wakeTime.setMinutes(sleepTime.getMinutes() + (hours % 1) * 60 + 15); // Добавляем 15 минут
      return wakeTime.toTimeString().slice(0, 5);
    });

    setResult({
      type: "sleep",
      times: wakeTimes,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.nativeEvent.submitter.name === "wake_up") {
      calculateWakeUpTimes();
    } else {
      calculateSleepTimes();
    }
  };

  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор сна"}
        description={
          "Онлайн-калькулятор поможет рассчитать оптимальное время для сна и пробуждения, учитывая 90-минутные циклы сна."
        }
        span={"сна"}
      >
        <SleepForm onSubmit={handleSubmit}>
          <div className="title first">
            Выберите время, когда вы хотите проснуться
          </div>
          <div className="row-wake_up">
            <select
              className="bottom-s"
              name="wake_hour"
              value={wakeHour}
              onChange={handleWakeTimeChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              className="bottom-s"
              name="wake_min"
              value={wakeMin}
              onChange={handleWakeTimeChange}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <button type="submit" name="wake_up">
              Рассчитать
            </button>
          </div>

          <div className="title">
            Выберите время, когда вы хотите лечь спать
          </div>
          <div className="row-sleep">
            <select
              className="bottom-s"
              name="sleep_hour"
              value={sleepHour}
              onChange={handleSleepTimeChange}
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <select
              className="bottom-s"
              name="sleep_min"
              value={sleepMin}
              onChange={handleSleepTimeChange}
            >
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={String(i).padStart(2, "0")}>
                  {String(i).padStart(2, "0")}
                </option>
              ))}
            </select>
            <button type="submit" name="sleep">
              Рассчитать
            </button>
          </div>
          {result && (
            <div className="script-place">
              <div className="title first">
                {result.type === "wake_up"
                  ? `Если вы хотите проснуться в ${wakeHour}:${wakeMin}, то нужно лечь спать в:`
                  : `Если вы хотите лечь спать в ${sleepHour}:${sleepMin}, то вам нужно проснуться в:`}
              </div>
              <div className="row-result">
                {result.times.slice(0, 4).join(" ")}
                <br />
                {result.times.slice(4).join(" ")}
              </div>
              <div className="row-desc">
                Обратите внимание: результат рассчитан без учета времени на
                засыпание. Отнимите еще 10-20 минут, в течение которых вы
                засыпаете.
              </div>
              <div>
                <a href="/sleep-calculator">Рассчитать снова</a>
              </div>
            </div>
          )}
        </SleepForm>

        <Contents>
          <h2>Как правильно рассчитать время сна?</h2>

          <p>
            Здоровый сон — это не только длительность, но и момент пробуждения в
            правильной фазе. Калькулятор сна помогает определить, когда лучше
            лечь спать или проснуться, чтобы чувствовать себя свежо и выспанно.
            Это особенно важно тем, кто часто страдает от усталости после
            ночного отдыха.
          </p>

          <h3>Что такое фазы сна?</h3>

          <p>
            Сон человека состоит из нескольких фаз, которые повторяются каждые
            90 минут. Лучше всего просыпаться в конце цикла — тогда вы
            почувствуете себя более бодрым и восстановленным. Если пробуждение
            происходит в середине цикла, велика вероятность ощущения разбитости
            и усталости.
          </p>

          <h3>Как работает калькулятор?</h3>

          <p>
            Калькулятор учитывает стандартные 90-минутные циклы и предлагает
            несколько вариантов:
          </p>

          <ul>
            <li>
              <strong>Если вы хотите проснуться в конкретное время:</strong> он
              рассчитает, во сколько лучше лечь спать.
            </li>
            <li>
              <strong>Если вы ложитесь спать сейчас:</strong> покажет, в какое
              время лучше проснуться.
            </li>
          </ul>

          <p>
            Такой подход помогает организму завершить полный цикл сна и
            минимизировать эффект «сонливости» утром.
          </p>

          <h3>Зачем нужен калькулятор сна?</h3>

          <p>Он полезен:</p>

          <ul>
            <li>
              <strong>Для работы:</strong> если вам нужно быть бодрым утром;
            </li>
            <li>
              <strong>Для учебы:</strong> чтобы хорошо себя чувствовать днем и
              концентрироваться;
            </li>
            <li>
              <strong>Для здоровья:</strong> регулярный сон улучшает иммунитет и
              настроение;
            </li>
            <li>
              <strong>Для красоты:</strong> полноценный ночной отдых влияет на
              состояние кожи и волос;
            </li>
            <li>
              <strong>Для самочувствия:</strong> просыпаться легко — значит
              начать день правильно.
            </li>
          </ul>

          <h3>Какие данные нужны для расчёта?</h3>

          <p>Чтобы получить точный результат, достаточно указать:</p>

          <ul>
            <li>
              <strong>Время пробуждения</strong> или{" "}
              <strong>время засыпания</strong>;
            </li>
            <li>
              <strong>Примерную продолжительность одного цикла:</strong> обычно
              90 минут;
            </li>
            <li>
              <strong>Небольшой запас:</strong> на то, чтобы уснуть (обычно
              10–15 минут).
            </li>
          </ul>

          <p>
            После этого система предложит несколько вариантов, основываясь на
            количестве полных циклов.
          </p>

          <h3>Почему важны циклы сна?</h3>

          <p>Человеческий сон проходит через несколько этапов:</p>

          <ul>
            <li>
              <strong>Фаза засыпания:</strong> переход в легкое дремание;
            </li>
            <li>
              <strong>Легкий сон:</strong> организм начинает расслабляться;
            </li>
            <li>
              <strong>Глубокий сон:</strong> восстановление тела;
            </li>
            <li>
              <strong>Быстрый сон (REM):</strong> восстановление мозга и
              эмоциональное восстановление.
            </li>
          </ul>

          <p>
            Пробуждение в фазе REM или перед её началом — лучший вариант для
            бодрого старта дня.
          </p>

          <h3>Какие ошибки чаще всего возникают?</h3>

          <p>Распространенные проблемы:</p>

          <ul>
            <li>
              <strong>Слишком раннее пробуждение:</strong> до окончания цикла;
            </li>
            <li>
              <strong>Неверное время засыпания:</strong> поздний ужин, экраны и
              стресс замедляют процесс;
            </li>
            <li>
              <strong>Переутомление:</strong> снижает качество сна;
            </li>
            <li>
              <strong>Игнорирование фаз:</strong> пробуждение в середине
              глубокого сна приводит к сонливости;
            </li>
            <li>
              <strong>Отсутствие режима:</strong> каждый день разное время сна —
              плохо для биологических ритмов.
            </li>
          </ul>

          <h3>Как использовать калькулятор?</h3>

          <p>Вот как работать с калькулятором:</p>

          <ol>
            <li>
              <strong>Выберите цель:</strong> узнать время пробуждения или
              время, когда стоит ложиться;
            </li>
            <li>
              <strong>Введите известное время:</strong> например, 7:00 — время,
              когда вам нужно вставать;
            </li>
            <li>
              <strong>Укажите количество циклов:</strong> от 1 до 6 (от 1.5 до 9
              часов);
            </li>
            <li>
              <strong>Получите рекомендации:</strong> калькулятор покажет
              оптимальные часы для начала сна;
            </li>
            <li>
              <strong>Планируйте свой день:</strong> чтобы обеспечить себе
              полноценный отдых.
            </li>
          </ol>

          <h3>Как проверить точность?</h3>

          <p>
            Вы можете сравнить полученные значения с другими калькуляторами или
            вести дневник сна. Также можно использовать фитнес-трекеры или
            мобильные приложения, которые анализируют ваш сон и показывают фазы.
            Главное — соблюдать режим и давать организму возможность отдыхать в
            одно и то же время.
          </p>

          <h3>Какие еще параметры влияют на сон?</h3>

          <p>Важно помнить, что кроме времени сна на качество отдыха влияют:</p>

          <ul>
            <li>
              <strong>Температура в комнате:</strong> комфортная — 18–22°C;
            </li>
            <li>
              <strong>Освещение:</strong> чем темнее, тем лучше для выработки
              мелатонина;
            </li>
            <li>
              <strong>Питание:</strong> последний прием пищи за 2–3 часа до сна;
            </li>
            <li>
              <strong>Экраны:</strong> ограничьте использование гаджетов за час
              до сна;
            </li>
            <li>
              <strong>Медитация:</strong> помогает быстрее заснуть и улучшить
              его качество.
            </li>
          </ul>

          <h3>Как выбрать правильный калькулятор сна?</h3>

          <p>Хороший калькулятор должен:</p>

          <ul>
            <li>
              <strong>Учитывать циклы сна:</strong> 90-минутные периоды;
            </li>
            <li>
              <strong>Поддерживать разные режимы:</strong> утреннее пробуждение,
              ночное засыпание;
            </li>
            <li>
              <strong>Уметь рассчитывать вперед и назад:</strong> удобно для
              разных ситуаций;
            </li>
            <li>
              <strong>Не требовать регистрации:</strong> доступность без
              барьеров;
            </li>
            <li>
              <strong>Быть бесплатным:</strong> без подписок и платных функций.
            </li>
          </ul>

          <h3>Какие преимущества у онлайн-калькулятора сна?</h3>

          <p>Онлайн-инструменты:</p>

          <ul>
            <li>
              <strong>Точные:</strong> учитывают фазы и циклы;
            </li>
            <li>
              <strong>Мгновенные:</strong> результат готов сразу;
            </li>
            <li>
              <strong>Универсальные:</strong> подходит всем — от школьников до
              пенсионеров;
            </li>
            <li>
              <strong>Мобильные:</strong> работают с телефона, планшета,
              компьютера;
            </li>
            <li>
              <strong>Простые:</strong> понятный интерфейс даже для новичков.
            </li>
          </ul>

          <h3>Полезные советы для хорошего сна</h3>

          <p>Вот что можно сделать, чтобы улучшить качество сна:</p>

          <ul>
            <li>
              <strong>Спите в темноте:</strong> это стимулирует выработку
              мелатонина;
            </li>
            <li>
              <strong>Выключайте гаджеты:</strong> синий свет мешает засыпанию;
            </li>
            <li>
              <strong>Пейте травяные чаи:</strong> ромашка, мята, мелисса —
              помогают расслабиться;
            </li>
            <li>
              <strong>Избегайте кофеина:</strong> особенно вечером;
            </li>
            <li>
              <strong>Создайте режим:</strong> ложитесь и вставайте в одно и то
              же время.
            </li>
          </ul>

          <h3>Какие еще инструменты могут помочь?</h3>

          <p>В дополнение к калькулятору сна, вы можете использовать:</p>

          <ul>
            <li>
              <strong>Фитнес-браслеты:</strong> следят за фазами сна;
            </li>
            <li>
              <strong>Мобильные приложения:</strong> такие как Sleep Cycle,
              Sleep as Android;
            </li>
            <li>
              <strong>Шумовые маски:</strong> белый шум улучшает засыпание;
            </li>
            <li>
              <strong>Специальные режимы освещения:</strong> теплый свет перед
              сном;
            </li>
            <li>
              <strong>Аудиотреки и медитации:</strong> помогают расслабиться и
              подготовиться ко сну.
            </li>
          </ul>

          <h3>Интересные факты о сне</h3>

          <p>
            Интересно, что человек проводит около трети своей жизни во сне. За
            всю жизнь мы проводим во сне примерно 25 лет. При этом сон влияет на
            память, обучаемость и эмоциональное состояние. Наш калькулятор
            помогает сделать этот важный период максимально эффективным.
          </p>

          <h3>Часто задаваемые вопросы</h3>

          <p>
            <strong>1. Какова продолжительность одного цикла сна?</strong>
          </p>
          <p>
            Обычно один цикл составляет 90 минут, но может варьироваться от 80
            до 100 минут.
          </p>

          <p>
            <strong>2. Можно ли проснуться раньше?</strong>
          </p>
          <p>
            Да, но лучше делать это в конце цикла, иначе возможна сонливость и
            раздражительность.
          </p>

          <p>
            <strong>3. Что такое фаза REM?</strong>
          </p>
          <p>
            REM — это фаза быстрого движения глаз. Именно в это время мы видим
            сны и восстанавливаем когнитивные способности.
          </p>

          <p>
            <strong>4. Нужно ли всегда спать 8 часов?</strong>
          </p>
          <p>
            Не обязательно. Важно, чтобы сон был целым числом циклов: 1.5, 3,
            4.5, 6, 7.5 и так далее.
          </p>

          <p>
            <strong>5. Поможет ли калькулятор при смене часовых поясов?</strong>
          </p>
          <p>
            Да, особенно при перелетах и акклиматизации. Вы можете заранее
            скорректировать режим.
          </p>

          <h3>Итог</h3>

          <p>
            Качественный сон — это не просто время, проведенное в кровати. Это
            слаженная работа организма, основанная на циклах и фазах.
            Онлайн-калькулятор помогает улучшить качество сна, просыпаться
            бодрым и чувствовать себя лучше. Используйте его ежедневно — и вы
            заметите, как изменится ваше самочувствие и продуктивность.
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

export default SleepCalculator;
