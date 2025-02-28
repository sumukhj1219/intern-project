import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext(null);

const backgrounds = {
    day: "https://cdn.pixabay.com/photo/2022/05/18/14/46/sunrise-7205460_1280.png",
    night: "https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844231_1280.png",
    rain: "https://cdn.pixabay.com/photo/2022/05/21/22/14/fog-7212392_1280.png"
};

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [bg, setBg] = useState(backgrounds.day); 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (location) => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
                params: {
                    key: "cb778abb39de4583867161618252702",
                    q: location
                }
            });

            setWeatherData(data); 
            setError(null);
        } catch (error) {
            setError(error.message);
            setWeatherData(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(`${latitude},${longitude}`); 
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    fetchWeather("Mumbai"); 
                }
            );
        } else {
            fetchWeather("Mumbai");
        }
    }, []);

    useEffect(() => {
        if (weatherData?.current) {
            const condition = weatherData.current.condition.text.toLowerCase();
            
            if (condition.includes("rain")) {
                setBg(backgrounds.rain);
            } else {
                setBg(weatherData.current.is_day ? backgrounds.day : backgrounds.night);
            }
        }
    }, [weatherData]); 

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error, fetchWeather, bg }}>
            {children}
        </WeatherContext.Provider>
    );
};

export const useWeather = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeather must be used within a WeatherProvider");
    }
    return context;
};
