import React from "react";
import l from "./Main.module.css";
import MainOne from "./mainone/MainOne";
import MainThree from "./mainthree/MainThree";
function Main() {
  return (
    <div className={l.main}>
      <MainOne />
      <MainThree />
    </div>
  );
}

export default Main;
