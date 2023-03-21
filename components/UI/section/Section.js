
import { useState } from "react";
import Search from "../search/Search";
import WeatherCard from "../card/WeatherCard";
import Tab from "../tab/Tab";
import Slider from "../slide/Slider";

const api = {
  key: "73863d50e6415a9af087e1a18e267d86",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Section() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });


  };

  return (
    <div className="flex mt-4  response items-center  flex-col gap-4">
      <Search searchPressed={searchPressed} setSearch={setSearch}/>
      <WeatherCard weather={weather}/>
      <Slider/>
      
      
    </div>
  );
}

export default Section;