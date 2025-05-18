"use client";

import { useReducer, useState } from "react";

import HeaderModal from "@/app/components/NewModal";
import TopForm from "@/app/components/TopForm";
import Contents from "@/app/components/Contents";
import Footer from "@/app/components/Footer";
import PercentNumForm from "./PercentNumForm";

import "./percent.css";

function PercentNum() {
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const [d, setd] = useState("");
  const obj = {
    a: Number(a),
    b: Number(b),
    c: Number(c),
    d: Number(d),
    type: "brahmagupta",
  };
  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор "}
        description={
          "Быстро узнайте площадь вашей комнаты в квадратных метрах. Воспользуйтесь нашим онлайн-калькулятором и введите длину и ширину помещения для мгновенного результата."
        }
        span={"площади комнаты"}
      >
        <PercentNumForm
          obj={obj}
          url={"https://boxcalculators.ru/api/calculate/area"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <div className="test-input">
                  <div className="content">
                    <label className="numrange">
                      <span>
                        Сторона <span className="red"> (A)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        required
                        value={a}
                        onChange={(e) => seta(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Сторона<span className="red"> (B)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="waist"
                        required
                        value={b}
                        onChange={(e) => setb(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Сторона<span className="red"> (C)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="hips"
                        required
                        value={c}
                        onChange={(e) => setc(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                    <label className="numrange">
                      <span>
                        Сторона<span className="red"> (D)</span>
                      </span>
                      <input
                        type="number"
                        className="input"
                        name="hips"
                        required
                        value={d}
                        onChange={(e) => setd(e.target.value)}
                      />
                      <div className="notation">м</div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PercentNumForm>

        <Contents>
          <h2>Как рассчитать площадь комнаты?</h2>

          <p>
            Расчёт площади помещения — важный этап при планировании ремонта,
            покупке напольных покрытий или мебели. Онлайн-калькулятор позволяет
            выполнить вычисления быстро и точно, даже если у вас нет опыта в
            строительстве или дизайне интерьера.
          </p>

          <h3>Формула для стандартной прямоугольной комнаты</h3>

          <p>
            Для простых комнат правильной формы используется следующая формула:
          </p>

          <p className="formula">Площадь = Длина × Ширина</p>

          <p>
            Например, если длина комнаты составляет 6 метров, а ширина — 3
            метра, то:
          </p>

          <p className="formula">6м × 3м = 18 м²</p>

          <h3>Как рассчитать площадь комнаты сложной формы?</h3>

          <p>
            Если комната имеет нестандартную форму — Г-образную, многогранную
            или с нишами — её можно разделить на несколько простых
            геометрических фигур: прямоугольники или треугольники. Рассчитайте
            площадь каждого участка по отдельности и сложите полученные
            значения.
          </p>

          <p>
            Например, Г-образная комната может быть разделена на два
            прямоугольника:
          </p>

          <ul>
            <li>Первый: 4 м × 2 м = 8 м²</li>
            <li>Второй: 3 м × 2 м = 6 м²</li>
            <li>
              <strong>Итого:</strong> 8 м² + 6 м² = 14 м²
            </li>
          </ul>

          <h3>Зачем нужен калькулятор площади комнаты?</h3>

          <p>Онлайн-калькулятор помогает:</p>

          <ul>
            <li>Упростить процесс расчётов;</li>
            <li>Избежать ошибок при самостоятельном подсчёте;</li>
            <li>Сэкономить время и нервы;</li>
            <li>Получить точные данные для закупки материалов;</li>
            <li>Планировать ремонт более эффективно.</li>
          </ul>

          <h3>Дополнительные функции калькулятора</h3>

          <p>Некоторые калькуляторы позволяют:</p>

          <ul>
            <li>Вычислить периметр комнаты;</li>
            <li>Рассчитать объем помещения для отопления или вентиляции;</li>
            <li>Учесть окна и двери при расчёте площади стен;</li>
            <li>Определить необходимое количество обоев, плитки или краски.</li>
          </ul>

          <h3>Пример использования калькулятора</h3>

          <p>
            Представьте, что вам нужно рассчитать площадь комнаты для укладки
            ламината. Укажите длину и ширину комнаты в калькуляторе, и он
            покажет, сколько квадратных метров материала вам понадобится. Также
            можно добавить небольшой запас — обычно 5–10% на подрезку и брак.
          </p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Параметр</th>
                  <th>Значение</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Длина комнаты</td>
                  <td>5 м</td>
                </tr>
                <tr>
                  <td>Ширина комнаты</td>
                  <td>3 м</td>
                </tr>
                <tr>
                  <td>Площадь</td>
                  <td>15 м²</td>
                </tr>
                <tr>
                  <td>Запас материала (10%)</td>
                  <td>+1,5 м²</td>
                </tr>
                <tr>
                  <td>Общий расход</td>
                  <td>16,5 м²</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Как пользоваться калькулятором площади комнаты?</h3>

          <p>
            Чтобы воспользоваться калькулятором, выполните всего несколько
            шагов:
          </p>

          <ol>
            <li>
              <strong>Измерьте параметры комнаты:</strong> длину, ширину и
              высоту, если необходимо.
            </li>
            <li>
              <strong>Выберите тип помещения:</strong> прямоугольное,
              квадратное, Г-образное и т.д.
            </li>
            <li>
              <strong>Введите размеры:</strong> в поля ввода укажите длину и
              ширину каждой зоны.
            </li>
            <li>
              <strong>Нажмите кнопку «Рассчитать»:</strong> система
              автоматически выдаст площадь и другие полезные параметры.
            </li>
          </ol>

          <h3>Советы по замеру комнаты</h3>

          <p>Перед использованием калькулятора сделайте точные замеры:</p>

          <ul>
            <li>Используйте рулетку или лазерный дальномер;</li>
            <li>Измеряйте длину и ширину по полу, а не по стенам;</li>
            <li>Если есть ниши или выступы, измеряйте их отдельно;</li>
            <li>Проверьте углы на прямолинейность с помощью уровня.</li>
          </ul>

          <h3>Почему стоит доверять онлайн-калькулятору?</h3>

          <p>Онлайн-инструменты обеспечивают:</p>

          <ul>
            <li>
              <strong>Точность:</strong> алгоритмы учитывают все нюансы и
              правила расчёта;
            </li>
            <li>
              <strong>Удобство:</strong> интерфейс понятен даже новичкам;
            </li>
            <li>
              <strong>Доступность:</strong> работает с любого устройства, где
              есть интернет;
            </li>
            <li>
              <strong>Скорость:</strong> результат готов за секунду после ввода
              данных.
            </li>
          </ul>

          <h3>Часто задаваемые вопросы</h3>

          <p>
            <strong>Как рассчитывается площадь стены?</strong>
          </p>
          <p>
            Площадь стены рассчитывается по формуле: высота × ширина. Если есть
            окна или двери — их площадь вычитается из общего значения.
          </p>

          <p>
            <strong>Можно ли рассчитать объём комнаты?</strong>
          </p>
          <p>
            Да, достаточно знать длину, ширину и высоту помещения. Формула:
            длина × ширина × высота.
          </p>

          <p>
            <strong>Какой калькулятор выбрать?</strong>
          </p>
          <p>
            Обратите внимание на те, которые имеют четкий интерфейс, возможность
            ввода нескольких зон и вывод дополнительных параметров, таких как
            периметр и объём.
          </p>

          <p>
            <a href="/">Выбрать другой калькулятор</a>
          </p>
        </Contents>
      </TopForm>
      <Footer />
    </>
  );
}

export default PercentNum;
