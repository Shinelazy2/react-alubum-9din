import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "@pages/";
import AboutPage from "@pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/about/:id" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
