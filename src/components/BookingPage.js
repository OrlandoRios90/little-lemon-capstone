import BookingForm from "./BookingForm";
import { useState, useReducer } from "react";
import  {fetchAPI, submitAPI} from './BookingAPI';
import { useNavigate } from "react-router-dom";

function BookingPage() {

    const [name, setName] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("17:00");
    const [numGuests, setNumGuests] = useState("2");
    const [occasion, setOccasion] = useState("");
    const [finalTimes, setFinalTimes] = useState("");

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
        <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}
                     name={name} setName={setName} date={date} setDate={setDate} time={time} setTime={setTime}
                     numGuests={numGuests} setNumGuests={setNumGuests} occasion={occasion} setOccasion={setOccasion}
                     finalTimes={finalTimes} setFinalTimes={setFinalTimes} />
        </>
    )
}

export default BookingPage;