"use client";
import React, { useEffect, useReducer, useState } from "react";
import "./slugyfy.css";

const obj = {
  total: null,
  click: false,
  slug: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "slug":
      return { ...state, slug: action.payload };
    default:
      return state;
  }
}

function SlugyForm({ children, obj, url, domen }) {
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
    if (state?.total?.data) {
      dispatch({
        type: "slug",
        payload: state.total.data.slug,
      });
    }
  }, [state.total]);

  function click() {
    dispatch({ type: "click", payload: true });
  }

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={click}>
            Рассчитать
          </button>
        </div>
        {state?.click && (
          <div id="res" style={{ wordBreak: "break-all", maxWidth: "100%" }}>
            <div className="test-res">
              <p className="title-p">
                <span className="span-title">ЧПУ</span>
                <span className="span-waight">
                  {" "}
                  <span
                    onClick={() => handleCopy(state.slug, 1)}
                    className={copiedIndex === 1 ? "copied" : ""}
                  >
                    {state.slug}
                    {copiedIndex === 1 && (
                      <span className="copy-message">Скопировано!</span>
                    )}
                  </span>
                  <span
                    className="copy"
                    aria-label="Копировать"
                    title="Копировать"
                    onClick={() => handleCopy(state.slug, 1)}
                  >
                    <img
                      src={"./copy2.svg"}
                      alt="Копировать"
                      style={{ width: "23px", height: "23px" }}
                    />{" "}
                  </span>
                </span>
              </p>
              {domen === "" ? (
                ""
              ) : (
                <p className="title-p">
                  <span className="span-title">URL</span>
                  <span className="span-waight">
                    {" "}
                    <span
                      onClick={() => handleCopy(domen + state?.slug, 2)}
                      className={copiedIndex === 2 ? "copied" : ""}
                    >
                      {domen + state?.slug}
                      {copiedIndex === 2 && (
                        <span className="copy-message">Скопировано!</span>
                      )}
                    </span>
                    <span
                      className="copy"
                      aria-label="Копировать"
                      title="Копировать"
                      onClick={() => handleCopy(domen + state?.slug, 2)}
                    >
                      <img
                        src={"./copy2.svg"}
                        alt="Копировать"
                        style={{ width: "23px", height: "23px" }}
                      />{" "}
                    </span>
                  </span>
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default SlugyForm;
