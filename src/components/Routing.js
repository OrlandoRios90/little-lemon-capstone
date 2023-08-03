import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';

function Routing() {

    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<Chicago />} />
            <Route path="/reservations" element={<BookingPage />} />
            <Route path="/reservation-confirmation" element={<ConfirmedBooking />} />
        </Routes>
    )
}

export default Routing;