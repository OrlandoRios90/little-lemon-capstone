import { Routes, Route } from 'react-router-dom';
import Main from './Main';
import Chicago from './Chicago';
import BookingPage from './BookingPage';


function Routing() {

    return (
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<Chicago />} />
            <Route path="/reservations" element={<BookingPage />} />
        </Routes>
    )
}

export default Routing;