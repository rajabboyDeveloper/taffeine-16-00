import React from "react";
import l from "./OwlCard.module.css";
function OwlCard(props) {
  return (
    <div className={l.owlcard} style={{ backgroundImage: `url(${props.img})` }}>
      <div className="container">
        <h1 className={l.title}>{props.title}</h1>
        <p className={l.text}>{props.text}</p>
        <button type="button" className={l.btn}>
          Узнать больше
        </button>
      </div>
    </div>
  );
}

export default OwlCard;
