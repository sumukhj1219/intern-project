import React, { useState } from 'react'
import Input from './ui/input.jsx'
import Button from './ui/button.jsx'
import { useWeather } from '../context/context.jsx'

const SearchBar = () => {
    const [city, setCity] = useState("")
    const {fetchWeather, weatherData} = useWeather()

    function handleSubmit(e) {
        e.preventDefault()
        if(city.trim()){
            fetchWeather(city)
        }
        console.log(weatherData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex items-center justify-center gap-x-3'>
                <Input type={'text'} placeholder={'Search city'} onChange={(e) => setCity(e.target.value)} value={city} />
                <Button type={'submit'} title={'Search'} color={'black'} />
            </form>
        </div>
    )
}

export default SearchBar