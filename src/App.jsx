import Layout from "./Layout";
import DetailsPage from "./sandox/DetailsPage";
import Home from "./sandox/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayTrailer from "./sandox/PlayTrailer";
import Login from "./sandox/login";
import Search from "./component/search";
import PlayTrailer2 from "./sandox/playTrailer2";
import DetailsPage2 from "./sandox/detailspage2";


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<DetailsPage />} />
          <Route path="/movie2/:id" element={<DetailsPage2 />} />
          <Route path="/PlayTrailer/:id" element={<PlayTrailer />} />
          <Route path="/PlayTrailer2/:id" element={<PlayTrailer2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
