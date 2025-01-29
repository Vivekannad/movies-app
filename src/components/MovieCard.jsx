import React from 'react'
import dummyImg from "../assets/public/no-movie.png"
import star from "../assets/public/star.svg"

const MovieCard = ({ movie:
    { title, vote_average, poster_path, release_date, original_language }
}) => {
    return (
        <div className='movie-card text-white'>
            <img src={poster_path ? `https://images.tmdb.org/t/p/w500/${poster_path}` : dummyImg} alt="" />

        <div className="mt-4">
            <h3>{title}</h3>
        </div>
        
        <div className="content">
            <div className="rating">
                <img src={star} alt="" />
                <p> {vote_average ? vote_average.toFixed(1) : "N/A"}</p>
            </div>

        <span>•</span>
        <p className='lang' > {original_language}</p>

        <span>•</span>
        <p className="year">{release_date ? release_date.split("-")[0] : "N/A"}</p>
        </div>
        </div>
    )
}

export default MovieCard