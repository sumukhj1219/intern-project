import React from "react";
import Card from "./ui/card.jsx";
import SearchBar from "./searchBar.jsx";
import { useWeather } from "../context/context.jsx";

const LandingPage = () => {
  const { bg, weatherData } = useWeather();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 0.5s ease-in-out",
      }}
    >
      <div className="flex flex-col items-center gap-6 w-full">
        <SearchBar />
        {weatherData && (
          <Card
            temp_c={weatherData.current.temp_c}
            temp_f={weatherData.current.temp_f}
            name={weatherData.location.name}
            country={weatherData.location.country}
            region={weatherData.location.region}
            icon={weatherData.current.condition.icon}
          />
        )}
      </div>
    </div>
  );
};

export default LandingPage;
