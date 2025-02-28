import React from "react";
import Card from "./components/ui/card.jsx";
import SearchBar from "./components/searchBar.jsx";
import { useWeather } from "./context/context.jsx";

const App = () => {
  const { bg, weatherData } = useWeather();
  console.log(weatherData, bg);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844231_1280.png)`,
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

export default App;
