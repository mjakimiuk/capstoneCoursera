import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/navbar/navbar.route-component";
import Home from "./routes/home/home.route-component";
import UnderConstruction from "./routes/underConstruction/underConstruction";
import BookingPage from "./routes/booking/booking.route-component";
import ConfirmedBooking from "./components/form/BookingConfirmation.component";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="reservations" element={<BookingPage />} />
        <Route path="reservations/success" element={<ConfirmedBooking />} />
        <Route path="*" element={<UnderConstruction />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
