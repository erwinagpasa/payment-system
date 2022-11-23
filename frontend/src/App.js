
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./components/ui/Home";
import Dashboard from "./components/ui/Dashboard";
import Errorpage from "./components/ui/Errorpage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Errorpage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
