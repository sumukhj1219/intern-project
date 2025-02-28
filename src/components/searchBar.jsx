import React, { useState } from "react";
import Input from "./ui/input.jsx";
import Button from "./ui/button.jsx";
import { useWeather } from "../context/context.jsx";
import { Search } from "lucide-react";

const SearchBar = () => {
    const [city, setCity] = useState("");
    const { fetchWeather } = useWeather();

    function handleSubmit(e) {
        e.preventDefault();
        if (city.trim()) {
            const formattedCity = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
            fetchWeather(formattedCity);
        }
    }

    return (
        <div className="m-6 p-4  max-w-lg bg-white/10 backdrop-blur-lg shadow-lg rounded-3xl mx-auto">
            <form onSubmit={handleSubmit} className="flex items-center gap-4">
                <Input
                    type="text"
                    placeholder="Enter city name..."
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    className="flex-1 p-3 text-lg rounded-full bg-white/20 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-sky-400"
                />
                
                <Button 
                    type="submit"
                    title={<Search />}
                    color="white"
                    className="bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full text-lg font-semibold transition-all shadow-md"
                />
            </form>
        </div>
    );
};

export default SearchBar;
