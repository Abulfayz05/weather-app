import React, { useState } from "react";
import "./Sunny.css";
import Search from "./Search";
import Request from "./Request";

export default function Sunny() {
  const API = "fa4217aa51cc4e3497c92751222305";
  const [searchResults, setSearchResults] = useState("Toshkent");
  const url = `https://api.weatherapi.com/v1/current.json?key=${API}&q=${searchResults}&aqi=no`;
  const { data } = Request(url);

  return (

    <div>
      {Object.keys(data).length !== 0 && (
          <>
       <div className='back'>
      <div className="card">
      
            <Search searchResults={setSearchResults} place={searchResults} />

            <div className="weather">
              <h2>
                {" "}
                {data.location.country}, {data.location.name},
              </h2>

              <h2>{data.current.temp_c}°C </h2>
              <h2>
                {data.current.condition.text}{" "}
                <img src={data.current.condition.icon} alt='condition' />
              </h2>
              <div className="desc">
                <h3>Namlik: {data.current.humidity} %</h3>
                <h3>Shamol tezligi: {data.current.wind_kph} km/h</h3>
              </div>
            </div>
        
        
      </div>
    </div>
    </>
    )}


    </div>
    
  );
}
