import React from "react";

const Card = ({ temp_c, temp_f, name, region, country, condition, icon }) => {
  return (
    <div className="relative max-w-md w-full bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl mx-auto p-6 border border-gray-300">
      <img src={icon} alt="weather condition" className="absolute top-4 right-6 w-24 h-24 opacity-90" />

      <div className="text-center">
        <h2 className="text-5xl font-bold text-black">{temp_c}°c</h2>
        <p className="text-lg text-gray-300">{condition}</p>
      </div>

      <div className="mt-6 text-center">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        <p className="text-sm text-gray-300">{region}, {country}</p>
      </div>
    </div>
  );
};

export default Card;
