import React, { useEffect, useState } from "react";
import "./banner.css";
import requests from "../Request";
import axios from "axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  });



  return (
    <div
      className="banner"
      style={{
        backgroundImage: ` url("https://th.bing.com/th/id/OIP.1z4rjQxaLgEcD2HY6PmA7QHaEK?pid=ImgDet&rs=1")`,
      }}
    >
      <div className="banner_title">
        <h1
          style={{
            frontSize: "60px",
            position: "relative",
            top: "20px",
            letterSpacing: "3px",
          }}
        >
          Movie name
        </h1>

        <div className="buttons">
          <button className="play">Play</button>
          <button className="play">My List</button>
        </div>
        <div className="bannner_description">this is description</div>
        <div className="banner--fadebutton"></div>
      </div>
    </div>
  );
}

export default Banner;
