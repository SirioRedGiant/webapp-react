import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import MovieList from "../pages/movies/MovieList";
import MovieDetail from "../pages/movies/MovieDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index Component={HomePage} />
        <Route path="/movies" Component={MovieList} />
        <Route path="/movies/:id" Component={MovieDetail} />
      </Routes>
    </BrowserRouter>
  );
}
