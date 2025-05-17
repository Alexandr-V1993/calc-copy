"use client";
import React, { useEffect, useReducer, useState } from "react";

const obj = {
  total: null,
  click: false,
  passwords: [],
};

function reducer(state, action) {
  console.log(state.passwords);
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "passwords":
      return { ...state, passwords: action.payload };

    default:
      return state;
  }
}

function SecondForm({ children, obj, url }) {
  const [state, dispatch] = useReducer(reducer, obj);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();

      dispatch({ type: "total", payload: responseData });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (state?.total?.data?.passwords) {
      dispatch({
        type: "passwords",
        payload: state.total.data.passwords,
      });
    }
  }, [state.total]);

  function click() {
    dispatch({ type: "click", payload: true });
  }
  setTimeout(() => {
    setCopiedIndex(null);
  }, 3000);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
  };

  return (
    <form
      className="inlinecalculators"
      onSubmit={handleSubmit}
      style={{ wordBreak: "break-all" }}
    >
      <div className="row-res">
        {" "}
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={click}>
            Рассчитать
          </button>
        </div>
        {state?.click && (
          <div id="res">
            <div className="password-start">
              {state?.passwords?.map((el, index) => (
                <div
                  key={index}
                  className={`password-end ${
                    copiedIndex === index ? "copied" : ""
                  }`}
                  onClick={() => handleCopy(el, index)}
                >
                  <span className="span-el">{el}</span>
                  {copiedIndex === index && (
                    <span className="copy-message">Скопировано</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default SecondForm;
