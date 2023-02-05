import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking2 from "./pages/Booking2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PassengerDetails from "./pages/PassengerDetails";
import AvailableFlights from "./pages/AvailableFlights";
import ETicket from "./pages/ETicket";
import CancelTicket from "./pages/CancelTicket";
import Admin from "./pages/Admin";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Booking2" element={<Booking2 />} />
          <Route path="/PassengerDetails" element={<PassengerDetails />} />
          <Route path="/AvailableFlights" element={<AvailableFlights />} />
          <Route path="/ETicket" element={<ETicket/>} />
          <Route path="/Cancelticket" element={<CancelTicket/>} />
          <Route path="/Admin" element={<Admin/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
