"use client";
import React, { useState } from "react";

function ZodiacdateForm({ children, day, month, year, handleSubmit }) {
  const [state, setState] = useState({ total: null, click: false });

  return (
    <form
      className="inlinecalculators"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(day, month, year);
      }}
    >
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button
            className="btns bst"
            type="submit"
            onClick={() => setState({ ...state, click: true })}
          >
            Рассчитать
          </button>
        </div>
        {state.click && (
          <div id="res">
            <div className="test-res">
              <p className="test-2">
                <span id="rw"></span>
                <span id="resultimt"></span>{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default ZodiacdateForm;
