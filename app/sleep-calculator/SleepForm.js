"use client";
import React from "react";
import "./SleepForm.css";

function SleepForm({ children, onSubmit }) {
  return (
    <form className="inlinecalculator" onSubmit={onSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
      </div>
    </form>
  );
}

export default SleepForm;
