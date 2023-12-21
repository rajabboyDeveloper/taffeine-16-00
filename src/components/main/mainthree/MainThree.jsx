import React, { useState, useEffect } from "react";
import l from "./MainThree.module.css";
import axios from "axios";
function MainThree() {
  const [prod, setProd] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/about_product")
      .then((resp) => {
        let data = resp.data.data;
        setProd(data);
      });
  }, []);

  return (
    <section className={l.MainThree}>
      <div className="container">
        <div className={l.box}>
          <div className={l.box_one}>
            <h1 className={l.title}>{prod.title}</h1>
            <p
              className={l.text}
              dangerouslySetInnerHTML={{ __html: prod.content }}
            ></p>
            <button type="button" className={l.btn}>
              Подробно
            </button>
          </div>
          <div className={l.box_two}>
            <img src={prod.img} className={l.photo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainThree;
