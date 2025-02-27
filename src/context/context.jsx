import { createContext, useContext, useState } from "react";
import axios from "axios";

const WeatherContext = createContext()

export const WeatherProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchWeather=async(city)=>{
        setLoading(true)
        try {
            const {data} = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
                params:{
                    key:"cb778abb39de4583867161618252702",
                    q:city
                }
            })
            setWeatherData(data)
            setError(null)
        } catch (error) {
            setError(error.message)
            setWeatherData(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <WeatherContext.Provider value={{weatherData, loading, error, fetchWeather}}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeather=()=>useContext(WeatherContext)