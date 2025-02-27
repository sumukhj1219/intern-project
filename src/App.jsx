import React from 'react'
import { useWeather } from './hooks/useWeather'
import Card from './components/ui/card.jsx'
import SearchBar from './components/searchBar.jsx'

const App = () => {
  const {response, error, loading} = useWeather("Mumbai")
  console.log(response)
  return (
    <div>
      <SearchBar />
        <Card />
    </div>
  )
}

export default App