import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/movies/MovieListPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";
import DefaultTemplate from "./templates/DefaultTemplate";
import MovieCreatePage from "./pages/MovieCreatePage";
import { LoaderContextProvider } from "./contexts/Loadercontext";

export default function App() {
  return (
    <LoaderContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultTemplate}>
            {/* SITE ROUTES */}
            <Route index Component={HomePage} />

            {/* BOOK ROUTES */}
            <Route path="movies">
              <Route index Component={MovieListPage} />
              <Route path=":id" Component={MovieDetailPage} />
              <Route path="/movies/create" Component={MovieCreatePage} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </LoaderContextProvider>
  );
}
