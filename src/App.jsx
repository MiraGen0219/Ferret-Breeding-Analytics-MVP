import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Ferrets from "./pages/Ferrets";
import Pairings from "./pages/Pairings";
import Litters from "./pages/Litters";
import BreederAnalytics from "./pages/BreederAnalytics";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ferrets" element={<Ferrets />} />
          <Route path="/pairings" element={<Pairings />} />
          <Route path="/litters" element={<Litters />} />
          <Route path="/breederanalytics" element={<BreederAnalytics />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
