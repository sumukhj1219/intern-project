import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WeatherContext = createContext(null);

const backgrounds = [
    "https://cdn.pixabay.com/photo/2016/11/21/03/56/landscape-1844231_1280.png",
    "https://cdn.pixabay.com/photo/2022/05/18/14/46/sunrise-7205460_1280.png"
]

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [bg, setBg] = useState(null); 
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
            setBg(weatherData.current.is_day ? backgrounds[1] : backgrounds[0]);
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
