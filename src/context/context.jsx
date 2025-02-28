import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext(null);

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [bg, setBg] = useState("./assets/default.png"); // Default background
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        try {
            const { data } = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
                params: {
                    key: "cb778abb39de4583867161618252702",
                    q: city
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
        if (weatherData?.current) {
            console.log("Weather updated:", weatherData.current.is_day); 
            setBg(!weatherData.current.is_day ? "./assets/day.png" : "./assets/night.png");
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
