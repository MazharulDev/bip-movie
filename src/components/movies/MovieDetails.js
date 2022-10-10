import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [MovieDetails, setMovieDetails] = useState({})
    useEffect(() => {
        const url = `https://movie-task.vercel.app/api/movie?movieId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMovieDetails(data.data))
    }, [id])
    const { name } = MovieDetails
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default MovieDetails;
