import React, { useState } from 'react'
import classes from './SearchBar.module.css'
import Button from '../Bands/Band/Like/Button/Button'
import { ReactComponent as Eye } from '../../assets/icons/eye.svg'

const SearchBar = props => {
  const [showSearch, setShowSearch] = useState(false)
  const { searchInput, setSearchInput } = props

  const toggleSearchHandler = () => {
    setShowSearch(!showSearch)
  }

  let search = <Button clicked={toggleSearchHandler}><Eye /></Button>

  if (showSearch) {
    search = (
      <form
        className={classes.SearchBar}
        onSubmit={event => event.preventDefault()}>
        <input
          type='text'
          placeholder='Search Bands'
          value={searchInput}
          onChange={event => setSearchInput(event.target.value)} />
      </form>
    )
  }

  return search
}

export default SearchBar
