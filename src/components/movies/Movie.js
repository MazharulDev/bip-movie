import React from 'react';
import { Link } from 'react-router-dom';
import './movie.css'

const Movie = ({ movie }) => {
    const { backdrop_path, id, original_title, overview, popularity, poster_path, release_date, title, vote_average, vote_count } = movie;
    return (
        <div>
            <div className="movie_card" id="bright">
                <div className="info_section">
                    <div className="movie_header">
                        <img className="locandina" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt='' />
                        <h1>{original_title}</h1>
                        <h4>Release Date: {release_date}</h4>
                        <span className="minutes">Vote: {vote_count}</span>
                    </div>
                    <div className="movie_desc">
                        <p className="text mb-4">
                            {overview.slice(0, 179)}...<span className='text-blue-500'>more</span>
                        </p>
                        <Link to={`/movie-details/${id}`} className='px-4 py-2 bg-blue-400 rounded-xl my-2 text-white hover:bg-blue-500'>Details</Link>
                    </div>
                </div>
                <div className="blur_back bright_back"></div>
            </div>



        </div>
    );
};

export default Movie;