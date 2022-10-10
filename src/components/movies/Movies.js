import React from 'react';
import useMoviesData from '../../hooks/useMoviesData';
import Movie from './Movie';

const Movies = () => {
    const [movies] = useMoviesData();
    return (
        <div className='grid grid-cols-2 gap-3 w-fit mx-auto'>
            {
                movies.map(movie => <Movie movie={movie} key={movie.id} />)
            }
        </div>
    );
};

export default Movies;