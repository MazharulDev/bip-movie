import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://movie-task.vercel.app/api/popular?page=1')
            .then(res => res.json())
            .then(data => {
                setMovies(data.data.results)
                setLoading(false)
            })
    }, [])
    return (
        <>
            {
                loading ? <p className='font-bold h-screen text-2xl flex justify-center items-center'>Loading...</p> : <div className='grid grid-cols-2 gap-3 w-fit mx-auto'>
                    {
                        movies.map(movie => <Movie movie={movie} key={movie.id} />)
                    }
                </div>
            }
        </>
    );
};

export default Movies;