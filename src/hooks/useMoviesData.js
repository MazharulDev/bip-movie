import { useEffect, useState } from "react";

const useMoviesData = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://movie-task.vercel.app/api/popular?page=1')
            .then(res => res.json())
            .then(data => setMovies(data.data.results))
    }, [])
    return [movies, setMovies];
}
export default useMoviesData;