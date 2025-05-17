// pages/fraction.js
"use client";
import FractionForm from "./FractionForm";
import HeaderModal from "../components/HeaderModal";
import TopForm from "../components/TopForm";
import Contents from "../components/Contents";
import Footer from "../components/Footer";
import "./alco.css";

function Fraction() {
  return (
    <>
      <HeaderModal />
      <TopForm title={"Калькулятор "} description={""} span={"дробей"}>
        <FractionForm />
      </TopForm>
      <Contents>
        <p>
          <a href="/">Выбрать другой калькулятор</a>
        </p>
      </Contents>
      <Footer />
    </>
  );
}

export default Fraction;
