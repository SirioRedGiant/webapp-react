import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import MovieListPage from "./pages/movies/MovieListPage";
import MovieDetailPage from "./pages/movies/MovieDetailPage";
import DefaultTemplate from "./templates/DefaultTemplate";
import MovieCreatePage from "./pages/MovieCreatePage";
import { LoaderContextProvider } from "./contexts/LoaderContext";
import { AlertContextProvider } from "./contexts/AlertContext";
import Alert from "./components/Alert";
import Loader from "./components/Loader";

export default function App() {
  return (
    <AlertContextProvider>
      <LoaderContextProvider>
        <Loader />
        <Alert />
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultTemplate}>
              {/* SITE ROUTES */}
              <Route index Component={HomePage} />

              {/* BOOK ROUTES */}
              <Route path="movies">
                <Route index Component={MovieListPage} />
                <Route path=":id" Component={MovieDetailPage} />
                <Route path="create" Component={MovieCreatePage} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </LoaderContextProvider>
    </AlertContextProvider>
  );
}
