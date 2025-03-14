import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main"; //Home
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/buyer_dashboard/b_dashboard" element={<buyer_dashboard />} />
        <Route path="/" element={<><Header /><Main /><Footer /></>} />
        <Route path="/register" element={<><Register /><Footer /></>} />
        <Route path="/login" element={<><Login /><Footer /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  </Router>
  );
} 

export default App;