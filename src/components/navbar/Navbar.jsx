import React, { useEffect, useState } from "react";
import l from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
function Navbar() {
  const [val, setval] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/menu").then((resp) => {
      let data = resp.data.data;
      setval(data);
    });
  }, []);

  return (
    <div className={l.navbar}>
      <div className="container">
        <nav className={l.nav}>
          <a href="" className={l.logo}>
            <img src="https://taffeine.com/_nuxt/img/logo.6335003.svg" alt="" />
          </a>
          <ul className={l.item}>
            {val.map((items, index) => {
              return (
                <li className={l.item_list}>
                  <NavLink key={index} to={items.slug} className={l.item_link}>
                    {items.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className={l.btnBox}>
            <button type="button" className={l.btn_one}>
              Купить онлайн
            </button>
            <button type="button" className={l.btn_two}>
              Русский
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
