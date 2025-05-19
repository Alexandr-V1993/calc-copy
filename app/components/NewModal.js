"use client";
import "./HeaderModal.css";
import { useState } from "react";
import SimpleModal from "./SimpleModal/SimpleModal";

function NewModal() {
  const [open, setOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);

  function dates() {
    setDateOpen((date) => !date);
  }

  return (
    <div>
      <header>
        <a href="/">
          <img src="/logo.png" alt="логотип" />
        </a>
        <div className="topright">
          <div className="toprightmenu" onClick={() => setOpen(true)}>
            <img src="/menu.svg" alt="меню" />
          </div>
        </div>
      </header>
      <SimpleModal open={open} setOpen={setOpen}>
        <div className="topright">
          <div className="topmenu active">
            <div className="topmenuwrap">
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img src="/fin.svg" alt="финансы" />
                  </span>{" "}
                  Финансы
                </a>
                <a href="/tax-calculator/" className="sublnk">
                  Налоговый калькулятор НДС
                </a>
                <a href="/income-tax/" className="sublnk">
                  Калькулятор подоходного налога
                </a>
                <a href="/number-to-words" className="sublnk">
                  Конвертер чисел в слова
                </a>
                <a href="/financial-percent/" className="sublnk">
                  Финансовый процентный калькулятор
                </a>
                <a href="/price-with-discount" className="sublnk">
                  Калькулятор цен со скидкой
                </a>
                <a href="/microloan-calculator" className="sublnk">
                  Калькулятор микрокредитов
                </a>
                <a href="/compound-interest" className="sublnk">
                  Калькулятор сложных процентов
                </a>
                <a href="/work-experience" className="sublnk">
                  Калькулятор трудового стажа
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img className="img-width" src="/zd.svg" alt="здоровье" />
                  </span>{" "}
                  Здоровье
                </a>
                <a href="/bmi-calculator" className="sublnk">
                  Калькулятор индекса массы тела
                </a>
                <a href="/daily-calories" className="sublnk">
                  Калькулятор суточных калорий
                </a>
                <a href="/blood-alcohol" className="sublnk">
                  Калькулятор содержания алкоголя
                </a>
                <a href="/pregnancy-term" className="sublnk">
                  Калькулятор срока беременности
                </a>
                <a href="/body-type" className="sublnk">
                  Калькулятор типа телосложения
                </a>
                <a href="/healthy-weight" className="sublnk">
                  Калькулятор здорового веса
                </a>
                <a href="/water-balance" className="sublnk">
                  Калькулятор водного баланса
                </a>
                <a href="/mifflin-calories" className="sublnk">
                  Калькулятор калорий Миффлина
                </a>
                <a href="/harris-calories" className="sublnk">
                  Калькулятор калорий Харриса
                </a>
                <a href="/sleep-phases" className="sublnk">
                  Калькулятор фаз сна
                </a>
                <a href="/bench-press" className="sublnk">
                  Калькулятор силовых показателей
                </a>
                <a href="/child-height" className="sublnk">
                  Калькулятор роста ребенка
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/st.svg"
                      alt="строительство"
                    />
                  </span>{" "}
                  Строительство
                </a>
                <a href="/metal-weight" className="sublnk">
                  Калькулятор веса металла
                </a>
                <a href="/slab-foundation" className="sublnk">
                  Калькулятор плитного фундамента
                </a>
                <a href="/tape-foundation" className="sublnk">
                  Калькулятор ленточного фундамента
                </a>
                <a href="/sand-volume" className="sublnk">
                  Калькулятор объема песка
                </a>
                <a href="/lumber-calculator" className="sublnk">
                  Калькулятор пиломатериалов
                </a>
                <a href="/timber-volume" className="sublnk">
                  Калькулятор объема бруса
                </a>
                <a href="/brickwork-calculator" className="sublnk">
                  Калькулятор кирпичной кладки
                </a>
                <a href="/room-area" className="sublnk">
                  Калькулятор площади помещения
                </a>
                <a href="/pipe-area" className="sublnk">
                  Калькулятор площади трубы
                </a>
                <a href="/wallpaper-calculator" className="sublnk">
                  Калькулятор обоев для стен
                </a>
                <a href="/carpet-calculator" className="sublnk">
                  Калькулятор ковровых покрытий
                </a>
                <a href="/linoleum-calculator" className="sublnk">
                  Калькулятор линолеума
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/ob.svg"
                      alt="образование"
                    />
                  </span>{" "}
                  Образование
                </a>
                <a href="/academic-performance" className="sublnk">
                  Калькулятор успеваемости
                </a>
                <a href="/gpa-calculator" className="sublnk">
                  Калькулятор среднего балла
                </a>
                <a href="/certificate-grade" className="sublnk">
                  Калькулятор аттестационных баллов
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img src="/catalytic.svg" alt="Конвертеры" />
                  </span>{" "}
                  Конвертеры
                </a>
                <a href="/date-difference" className="sublnk">
                  Калькулятор разницы дат
                </a>
                <a href="/password-generator" className="sublnk">
                  Генератор безопасных паролей
                </a>
                <a href="/roman-numerals" className="sublnk">
                  Конвертер римских чисел
                </a>
                <a href="/roman-date" className="sublnk">
                  Конвертер дат в римские цифры
                </a>
                <a href="/weekday-finder" className="sublnk">
                  Определитель дня недели
                </a>
                <a href="/circle-area" className="sublnk">
                  Калькулятор площади круга
                </a>
                <a href="/triangle-area" className="sublnk">
                  Калькулятор площади треугольника
                </a>
                <a href="/cylinder-area" className="sublnk">
                  Калькулятор площади цилиндра
                </a>
                <a href="/cylinder-volume" className="sublnk">
                  Калькулятор объема цилиндра
                </a>
                <a href="/cube-volume" className="sublnk">
                  Калькулятор объема куба
                </a>
                <a href="/unit-converter" className="sublnk">
                  Конвертер единиц измерения
                </a>
                <a href="/caesar-cipher" className="sublnk">
                  Шифратор Цезаря
                </a>
                <a href="/slug-generator" className="sublnk">
                  Генератор ЧПУ ссылок
                </a>
                <a href="/scientific-calculator" className="sublnk">
                  Обычный калькулятор
                </a>
              </div>
              <div className="topmenulink">
                <a className="linkheader linknotanchor">
                  <span className="material-symbols-rounded">
                    <img
                      className="img-width"
                      src="/lf.svg"
                      alt="образ жизни"
                    />
                  </span>{" "}
                  Лайфстайл
                </a>
                <a href="/birth-date-calculator/" className="sublnk">
                  Калькулятор даты рождения
                </a>
                <a href="/alcohol-strength" className="sublnk">
                  Калькулятор крепости напитков
                </a>
                <a href="/fuel-consumption" className="sublnk">
                  Калькулятор расхода топлива
                </a>
                <a href="/until-event-index" className="sublnk">
                  Таймер до события
                </a>
                <a href="/zodiac-sign" className="sublnk">
                  Определитель знака зодиака
                </a>
                <a href="/fabric-calculator" className="sublnk">
                  Калькулятор расхода ткани
                </a>
                <a href="/pet-age" className="sublnk">
                  Калькулятор возраста питомца
                </a>
              </div>

              <span className="close" onClick={() => setOpen(false)}>
                <img src="/close.svg" alt="закрыть" />
              </span>
            </div>
          </div>
        </div>
      </SimpleModal>
    </div>
  );
}

export default NewModal;
