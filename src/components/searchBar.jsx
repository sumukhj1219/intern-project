import React, { useState } from 'react';
import Input from './ui/input.jsx';
import Button from './ui/button.jsx';
import { useWeather } from '../context/context.jsx';

const SearchBar = () => {
    const [city, setCity] = useState("");
    const { fetchWeather, weatherData } = useWeather();

    function handleSubmit(e) {
        e.preventDefault();
        if (city.trim()) {
            fetchWeather(city);
        }
        console.log(weatherData);
    }

    return (
        <div className="m-4 p-4  md:w-1/3 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Input
                    type="text"
                    placeholder="Enter city name..."
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="p-2 w-full rounded-full sm:w-64 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Button 
                    type="submit" 
                    title="Search" 
                    color="white" 
                    className="bg-sky-400 hover:bg-sky-500 text-white px-5 py-2 rounded-md transition-all"
                />
            </form>
        </div>
    );
};

export default SearchBar;
