import { Route, Routes } from "react-router-dom";
import "./App.css";
import { MainPage, NotFound } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
