import React, { useState } from 'react'
import './App.css'
import Heading from './components/Heading/Heading'
import MetalMeta from './components/MetalMeta/MetalMeta'
import SearchBar from './components/SearchBar/SearchBar'
import Bands from './components/Bands/Bands'

const App = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <div className='App'>
      <Heading />
      <MetalMeta />
      <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
      <Bands searchInput={searchInput} />
    </div>
  )
}

export default App
