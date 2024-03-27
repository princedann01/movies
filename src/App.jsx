import Layout from "./Layout";
import DetailsPage from "./sandox/DetailsPage";
import Home from "./sandox/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayTrailer from "./sandox/PlayTrailer";


function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<DetailsPage />} />
          <Route path="PlayTrailer/:id" element={<PlayTrailer />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
