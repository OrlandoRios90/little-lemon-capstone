import BookingForm from "./BookingForm";
import { useReducer } from "react";
import  {fetchAPI, submitAPI} from './BookingAPI';
import { useNavigate } from "react-router-dom";

function BookingPage() {

    const navigate = useNavigate();

    //begin code for available times for the booking page
    function updateTimes(date) {
        return fetchAPI(Date(date));
    }

    let initializeTimes = fetchAPI(new Date());
    const [availableTimes, dispatch] = useReducer(updateTimes,initializeTimes);
    //end code for available times for the booking page

    function submitForm(formData) {
        
        if (submitAPI(formData)) {
            navigate("/reservation-confirmation");
        }
    }

    return (
        <>
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
        </>
    )
}

export default BookingPage;