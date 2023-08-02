import BookingForm from "./BookingForm";
import { useReducer } from "react";
import  {fetchAPI} from './BookingAPI';

function BookingPage() {

    // const [availableTimes, setAvailableTimes] = useState(["17:00","18:00","19:00","20:00","21:00","22:00"]);

    function updateTimes(date) {
        return fetchAPI(Date(date));
    }

    let initializeTimes = fetchAPI(new Date());
    
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);

    return (
        <>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch}/>
        </>
    )
}

export default BookingPage;