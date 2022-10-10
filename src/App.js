import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import MovieDetails from './components/movies/MovieDetails';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie-details/:id' element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
