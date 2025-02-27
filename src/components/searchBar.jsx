import React, { useState } from 'react'
import { useWeather } from '../hooks/useWeather'
import Input from './ui/input.jsx'
import Button from './ui/button.jsx'

const SearchBar = () => {
    const [city, setCity] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        try {
            const { response, error, loading } = useWeather(city)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
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