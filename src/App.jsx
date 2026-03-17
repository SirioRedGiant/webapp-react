import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "../pages/HomePage";
import MovieList from "../pages/movies/MovieList";
import MovieDetail from "../pages/movies/MovieDetail";
import DefaultTemplate from "./templates/DefaultTemplate";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultTemplate}>
          {/* SITE ROUTES */}
          <Route index Component={HomePage} />

          {/* BOOK ROUTES */}
          <Route path="movies">
            <Route index Component={MovieList} />
            <Route path=":id" Component={MovieDetail} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
