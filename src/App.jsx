import React, { useState, useEffect } from 'react'
import { useDebounce } from "react-use"
import Hero from "./assets/public/hero.png"
import Search from './components/Search'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { updateSearchCount, getTrendingMovies } from './appwrite';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deboucedSearchTerm, setDeboucedSearchTerm] = useState('');

  //debouces the search term and waits for 500ms and prevents unnecessary API calls.
  useDebounce(() => setDeboucedSearchTerm(search), 500, [search]);

  const fetchMovies = async (query = '') => {
    setLoading(true);

    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
        : `${API_BASE_URL}/discover/movie?sort_by=popularity=desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error(`Error loading movies.`)
      }
      const data = await response.json();
      if (data === 'False') {
        setError(data.error || `Failed to fetch movies`);
        setMovieList([]);
        return;
      }
      setMovieList(data.results || []);
      setLoading(false);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0])
      }
    } catch (error) {
      console.error(`Error loading API , ${error.message}`);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);

    } catch (err) { console.error(err) }
  }

  useEffect(() => {
    fetchMovies(deboucedSearchTerm);
  }, [deboucedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
    console.log(trendingMovies)
  }, [])

  return (
    <main>
      <div className='pattern' />
      <div className="wrapper">
        <img src={Hero} alt="" className='w-sm mx-auto' />
        <header>
          <h1 >
            Find the <span className='text-gradient'>Movies</span> you like wihtout any hassle.
          </h1>
          <Search searchTerm={search} setSearchTerm={setSearch} />
          {
          trendingMovies.length > 0 && (
            <section className='trending'>
              <h2>Trending movies</h2>
              <ul>
                    {trendingMovies.map((movie , index) => (
                      <li key={movie.$id}>
                        <p>{index+1}</p>
                        <img src={movie.poster_url} alt="" />
                      </li>
                    ))}
              </ul>
            </section>
           )
      }
        </header>

        

        <section className='all-movies'>
          <h2 className='mt-[20px]'>All Movies</h2>
          {loading ?
            <Spinner /> : error ?
              <p className='text-red-600'>{error}</p> :
              <ul>
                {movieList.map(movie => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
              </ul>
          }
        </section>
      </div>
    </main>
  )
}

export default App