import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import Features from "./pages/Features";
import DoesNotExist from "./pages/DoesNotExist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<Features />} />
          <Route path="*" element={<DoesNotExist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
