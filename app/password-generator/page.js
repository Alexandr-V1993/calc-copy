"use client";

import { useEffect, useReducer, useState } from "react";

import HeaderModal from "../components/NewModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import PasswordForm from "./PasswordForm";
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import "./password.css";

const initial = {
  length: null,
  quantity: null,
  use: ["similar"],
};

function reducer(state, action) {
  switch (action.type) {
    case "length":
      return { ...state, length: +action.payload };
    case "quantity":
      return { ...state, quantity: +action.payload };
    case "digits":
      return { ...state, use: [...state.use, "digits"] };
    case "uppercase":
      return { ...state, use: [...state.use, "uppercase"] };
    case "lowercase":
      return { ...state, use: [...state.use, "lowercase"] };
    case "special":
      return { ...state, use: [...state.use, "special"] };
    case "advanced":
      return { ...state, use: [...state.use, "advanced"] };
    case "reset-similar":
      return { ...state, use: state.use.filter((item) => item !== "similar") };

    default:
      break;
  }
}
function Password() {
  const [state, dispatch] = useReducer(reducer, initial);
  const obj = { ...state };
  function hadleInput(e, typeDispatch) {
    dispatch({ type: typeDispatch, payload: e.target.value });
  }
  function handleCheck(typeDispatch) {
    dispatch({ type: typeDispatch });
  }
  return (
    <>
      <HeaderModal />

      <TopForm
        title={"Калькулятор генератора "}
        description={
          "В цифровую эпоху пароль играет ключевую роль в защите конфиденциальной информации. Используйте наш генератор паролей, чтобы создать уникальные и безопасные комбинации."
        }
        span={"паролей"}
      >
        <PasswordForm
          obj={obj}
          url={"https://boxcalculators.ru/api/generate/password"}
        >
          <div className="label-row">
            <div className="row-vans-bottom">
              <div className="topInput">
                <Input
                  type={"number"}
                  labelTitle={"Длина пароля"}
                  dispatch={dispatch}
                  typeDispatch={"length"}
                  hadleInput={hadleInput}
                  max={32}
                />
                <Input
                  type={"number"}
                  labelTitle={"Количество паролей"}
                  dispatch={dispatch}
                  typeDispatch={"quantity"}
                  hadleInput={hadleInput}
                  max={100}
                />
              </div>
              <div className="checkbox">
                <label>
                  <span>Используемые символы</span>
                </label>
                <label className="label-row-top">
                  <CheckBox typeDispatch={"digits"} handleCheck={handleCheck} />
                  <span>
                    <span className="span">Цифры</span> 0123456789
                  </span>
                </label>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"uppercase"}
                    handleCheck={handleCheck}
                  />
                  <span>
                    <span className="span">Заглавные буквы </span>
                    ABCDEF...UVWXYZ
                  </span>
                </label>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"lowercase"}
                    handleCheck={handleCheck}
                  />
                  <span>
                    <span className="span">Строчные буквы </span>
                    abcdef...uvwxyz
                  </span>
                </label>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"special"}
                    handleCheck={handleCheck}
                  />
                  <span>
                    <span className="span">Специальные символы</span> !@$%^&*()
                    <></>,.?/[]{}
                  </span>
                </label>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"reset-similar"}
                    handleCheck={handleCheck}
                  />
                  <span>
                    {" "}
                    <span className="span">Исключить похожие символы</span>{" "}
                    iIl1Oo0
                  </span>
                </label>
                <label className="label-row-top">
                  <CheckBox
                    typeDispatch={"advanced"}
                    handleCheck={handleCheck}
                  />
                  <span className="span">Расширенный режим</span>
                </label>
              </div>
            </div>
          </div>
        </PasswordForm>
        <Contents>
          <h2 className="tops-content">Почему важен надёжный пароль?</h2>

          <p>
            В эпоху цифровых технологий пароль становится основным щитом вашей
            личной информации. Он защищает ваши аккаунты от несанкционированного
            доступа, поэтому важно использовать только надёжные и уникальные
            пароли.
          </p>

          <p>
            Многие пользователи до сих пор используют простые комбинации вроде
            «123456», «qwerty» или своих дат рождения. Это делает их аккаунты
            крайне уязвимыми. Чтобы избежать этого, рекомендуется использовать
            генератор паролей, который создаёт стойкие и непредсказуемые
            комбинации.
          </p>

          <h2 className="tops-content">Как сделать пароль безопасным?</h2>

          <p>Безопасность пароля зависит от нескольких факторов:</p>

          <ul>
            <li>
              <strong>Длина:</strong> чем длиннее пароль, тем сложнее его
              взломать;
            </li>
            <li>
              <strong>Разнообразие символов:</strong> используйте буквы разного
              регистра, цифры и специальные знаки;
            </li>
            <li>
              <strong>Уникальность:</strong> не повторяйте пароли для разных
              сервисов;
            </li>
            <li>
              <strong>Непредсказуемость:</strong> избегайте очевидных слов и
              фраз.
            </li>
          </ul>

          <p>
            Также стоит использовать двухфакторную аутентификацию (2FA) и
            хранить пароли в защищенном менеджере, чтобы минимизировать риски.
          </p>

          <h2 className="tops-content">Как работает генератор паролей?</h2>

          <p>
            Генератор паролей — это инструмент, который автоматически создаёт
            случайные строки заданной длины. Вы можете выбрать:
          </p>

          <ul>
            <li>длину пароля (от 8 до 64 символов);</li>
            <li>наличие прописных и строчных букв;</li>
            <li>цифр и специальных символов;</li>
            <li>тип пароля: случайная строка или пассфраза.</li>
          </ul>

          <p>
            Полученные пароли невозможно предсказать, так как они создаются с
            использованием алгоритмов криптографической стойкости.
          </p>

          <h2>Часто задаваемые вопросы</h2>

          <h3>Какой длины должен быть мой пароль?</h3>
          <p>
            Для максимальной безопасности рекомендуется использовать пароли
            длиной не менее 12–16 символов.
          </p>

          <h3>Можно ли использовать специальные символы в пароле?</h3>
          <p>
            Да, использование таких символов, как !, @, #, $ и т.д., значительно
            повышает уровень защиты.
          </p>

          <h3>Лучше использовать пассфразу или случайную комбинацию?</h3>
          <p>
            Пассфразы легче запомнить, например: «Красная кошка спит на
            кровати». Случайные комбинации сложнее взломать, но могут быть
            трудны для запоминания.
          </p>

          <h3>Нужно ли включать цифры в пароль?</h3>
          <p>Цифры увеличивают стойкость пароля к брутфорсу и другим атакам.</p>

          <h3>Как часто нужно менять пароль?</h3>
          <p>
            Лучше всего менять пароли раз в 3–6 месяцев, особенно если вы
            подозреваете утечку данных.
          </p>

          <h3>Можно ли использовать один пароль для всех аккаунтов?</h3>
          <p>
            Категорически не рекомендуется. При взломе одного аккаунта
            злоумышленник получит доступ ко всем остальным.
          </p>

          <h3>Что такое двухфакторная аутентификация (2FA)?</h3>
          <p>
            Это дополнительный уровень защиты, при котором после ввода пароля
            требуется подтверждение через телефон, email или аппаратный ключ.
          </p>

          <h3>Какие требования к паролю обычно у сайтов?</h3>
          <p>
            Большинство сервисов требуют сочетания букв (верхний и нижний
            регистр), цифр и специальных символов, а также минимальной длины от
            8 до 16 символов.
          </p>

          <h3>Какие ошибки чаще всего допускают при создании паролей?</h3>
          <p>Самые распространенные ошибки:</p>
          <ul>
            <li>Использование личных данных (имена, даты рождения);</li>
            <li>Выбор популярных слов или фраз;</li>
            <li>Повтор паролей для разных сервисов;</li>
            <li>Слишком короткие пароли;</li>
            <li>Отсутствие специальных символов.</li>
          </ul>

          <h3>Как запомнить сложные пароли?</h3>
          <p>
            Используйте менеджер паролей, такой как Bitwarden, KeePass или
            1Password. Он поможет не только запоминать, но и безопасно хранить
            пароли.
          </p>

          <h2>Заключение</h2>
          <p>
            Пароли остаются первым уровнем защиты ваших данных. Используя
            генератор паролей, вы сможете быстро создавать стойкие и уникальные
            комбинации для каждого аккаунта. Не забывайте про двухфакторную
            аутентификацию и хранение паролей в защищенном виде.
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

export default Password;
