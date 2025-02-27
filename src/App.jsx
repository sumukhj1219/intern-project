import React from 'react'
import Card from './components/ui/card.jsx'
import SearchBar from './components/searchBar.jsx'
import { WeatherProvider } from './context/context.jsx'

const App = () => {
  return (
    <WeatherProvider>
      <div>
        <SearchBar />
        <Card />
      </div>
    </WeatherProvider>

  )
}

export default App