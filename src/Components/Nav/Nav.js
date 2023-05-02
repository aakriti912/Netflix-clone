import React, { useEffect, useState } from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);

  const animation = () => {
    if (window.screenY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", animation);
    // return () => window.removeEventListener("scroll", animation);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="contents">
        <img
          className="nav_logo"
          src="https://uploads-ssl.webflow.com/602157ad10cc4531453de902/602157ad10cc45079b3de94e_netflix-logo-5-p-800.png"
        ></img>
        <img
          className="nav_avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        ></img>
      </div>
      <div className="Links">
        <a>Tvshows</a>
        <a>Movies</a>
        <a>Recently added</a>
        <a>My list</a>
      </div>
      {/* <div>
        <Link to="/Tvshows"> Tvshows</Link>
        <Link to="/Movies"> Movies</Link>
        <Link to="/recentlyadded"> Recently added</Link>
        <Link to="/Mylist"> Mylist</Link>
      </div> */}
    </div>
  );
}

export default Nav;
