import React from 'react'
import searchIcon from "../assets/public/search.svg"

const Search = ({searchTerm , setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src={searchIcon} alt="search" />
            <input
             type="text"
             placeholder='Search through thoussands of movies'
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Search