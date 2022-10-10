import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [MovieDetails, setMovieDetails] = useState({})
    useEffect(() => {
        setLoading(true)
        const url = `https://movie-task.vercel.app/api/movie?movieId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovieDetails(data.data)
                setLoading(false)
            })
    }, [id])
    const { original_title, poster_path, vote_count, release_date, overview, genres, belongs_to_collection, backdrop_path, runtime, production_companies, spoken_languages, status } = MovieDetails
    console.log(MovieDetails);
    return (
        <>
            {
                loading ? <p className='font-bold h-screen text-2xl flex justify-center items-center'>Loading...</p> : <div className='w-4/5 mx-auto mt-2'>
                    <div className='flex justify-start gap-5 border-b-2 p-4'>
                        <img className='w-48' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="" />
                        <div>
                            <h2 className='text-4xl '>{original_title}</h2>
                            <p className='text-gray-400 my-3'>{release_date}</p>
                            <div className='flex justify-start items-center gap-4'>
                                {
                                    genres?.map(genre => <div key={genre.id} >
                                        <p>{genre.name}</p>
                                    </div>)
                                }
                            </div>
                            <p>Duration: {runtime} Min</p>
                            <div className='flex justify-start items-center gap-3'>
                                <p className='font-bold'>Language:</p>
                                {
                                    spoken_languages?.map(language => <div>
                                        <p>{language.english_name}</p>
                                    </div>)
                                }
                            </div>
                            <p>Release Status: {status}</p>
                            <p>Vote: {vote_count}</p>
                        </div>

                    </div>
                    <div className='mt-3 border-b-2 pb-4'>
                        <p className='text-xl font-bold py-3'>Synopsis</p>
                        {
                            belongs_to_collection?.backdrop_path ? <img className='w-4/6 h-5/6 mb-4' src={`https://image.tmdb.org/t/p/original${belongs_to_collection?.backdrop_path}`} alt="" /> : <p></p>
                        }

                        <img className='w-4/6 h-5/6' src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt="" />
                        <p className='font-bold mt-4'>Movie Overview</p>
                        <p className='my-4 text-gray-700'>{overview}</p>
                        <div>
                            <p className='font-bold text-lg mt-4'>Production Company</p>
                            <div className='mt-2'>
                                {
                                    production_companies?.map(production => <div key={production.id} className="mb-2">
                                        <img className='w-24' src={`https://image.tmdb.org/t/p/original${production.logo_path}`} alt="" />
                                        <p>{production.name}</p>
                                    </div>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default MovieDetails;
