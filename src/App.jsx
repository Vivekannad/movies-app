import React, { useState ,  useEffect } from 'react'
import Hero from "./assets/public/hero.png"
import Search from './components/Search'

const API_BASE_URL ='https://api.themoviedb.org/3' ;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method : 'GET', 
  headers : {
    accept : "application/json",
    Authorization : `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [search, setSearch] = useState("");

  const fetchMovies = async() => {
    const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity=desc`;

    const response = await fetch(endpoint , API_OPTIONS);

    if(!response.ok){
      throw new Error(`Error loading movies.`)
    }
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchMovies();
  },[]);

    return (
        <main>
            <div className='pattern' />
            <div className="wrapper">
              <img src={Hero} alt="" className='w-sm mx-auto' />
                <header>
                    <h1 >
                        Find the <span className='text-gradient'>Movies</span> you like wihtout any hassle.
                    </h1>
                </header>
            </div>
          <Search searchTerm = {search} setSearchTerm = {setSearch} />
          <h1 className='text-white'>{search}</h1>
        </main>
    )
}

export default App