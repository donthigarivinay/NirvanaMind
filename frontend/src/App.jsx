import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "./index.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login"; // Import Login component
import Register from "./pages/Register"; // Import Register component
import Dashboard from "./pages/Dashboard";
import Community from "./pages/Community";
import TherapySessions from "./pages/TherapySessions";
import Profile from "./pages/Profile";

const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route path="/register" element={<Register />} /> {/* Add Register route */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/therapy-sessions" element={<TherapySessions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;