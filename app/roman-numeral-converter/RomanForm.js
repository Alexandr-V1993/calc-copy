"use client";
import React, { useEffect, useReducer, useState } from "react";
import "./slugyfy.css";

const obj = {
  total: null,
  click: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };

    default:
      return state;
  }
}

function RomanForm({ children, obj, url, type }) {
  const [state, dispatch] = useReducer(reducer, obj);
  const [copiedIndexes, setCopiedIndexes] = useState([]);

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

  function click() {
    dispatch({ type: "click", payload: true });
  }

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndexes((prevIndexes) => [...prevIndexes, index]);

    // Скрывает иконку копирования
    const copyIcons = document.querySelectorAll(".copy");
    copyIcons[index].classList.add("copying");

    setTimeout(() => {
      setCopiedIndexes((prevIndexes) =>
        prevIndexes.filter((prevIndex) => prevIndex !== index)
      );

      // Показывает иконку копирования после задержки
      copyIcons[index].classList.remove("copying");
    }, 2000);
  };

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={click}>
            Конвертировать
          </button>
        </div>
        {state?.click && (
          <div id="res" style={{ wordBreak: "break-all", maxWidth: "100%" }}>
            <div className="test-res">
              <p
                className="title-p"
                style={{ flexDirection: "column", alignItems: "center" }}
              >
                <span className="span-title">
                  {type === "roman" ? "Римская цифра" : "Арабское число"}
                </span>
                <span
                  className="span-waight"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {state?.total?.data?.value.split(",").map((value, index) => (
                    <span
                      key={index}
                      style={{
                        marginBottom: "5px",
                        position: "relative",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        padding: "5px",
                        background: "#f9f9f9",
                      }}
                    >
                      <span
                        onClick={() => handleCopy(value, index)}
                        className={
                          copiedIndexes.includes(index) ? "copied" : ""
                        }
                        style={{ cursor: "pointer" }}
                      >
                        {value}
                        {copiedIndexes.includes(index) && (
                          <span className="copy-message">Скопировано!</span>
                        )}
                      </span>
                      <span
                        className="copy"
                        aria-label="Копировать"
                        title="Копировать"
                        onClick={() => handleCopy(value, index)}
                        style={{ marginLeft: "5px", cursor: "pointer" }}
                      >
                        <img
                          src={"./copy2.svg"}
                          alt="Копировать"
                          style={{ width: "20px", height: "20px" }}
                        />{" "}
                      </span>
                    </span>
                  ))}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default RomanForm;
