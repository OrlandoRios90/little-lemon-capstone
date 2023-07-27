import { useState } from "react";


function BookingForm() {

    const [name, setName] = useState("");
    const [date,setDate] = useState("2023-01-01");
    const [time,setTime] = useState("16:00");
    const [numGuests, setNumGuests] = useState("2");
    const [occasion, setOccasion] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${name}, your table is reserved for ${date} at ${time}.`);
        setName("");
        setDate("2023-01-01");
        setTime("16:00");
        setNumGuests("2");
        setOccasion("");
    }

    const isFormValid = () => {
        return (
            name && 
            date !== "2023-01-01"
        )
    }

    return (
        <div className="booking-form-container">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div id="reservation-name">
                        <label>*Name: </label>
                            <input type="text" id="name" value={name} placeholder="John Doe"
                            onChange={(e) => {setName(e.target.value)}} required />
                    </div>
                    <div id="reservation-date">
                        <label>*Date of reservation: </label>
                            <input type="date" id="date" value={date} min="2023-07-23" max="2023-12-31" 
                            onChange={(e) => {setDate(e.target.value)}} required />
                    </div>
                    <div id="reservation-time">
                        <label>*Time of reservation: </label>
                            <input type="time" id="time" value={time} min="11:00" max="20:00" 
                            onChange={(e) => {setTime(e.target.value)}} required />
                    </div>
                    <div id="num-guests">
                        <label>*Number of guests: </label>
                            <input type="number" id="numGuests" value={numGuests} min="2" max="12" 
                            onChange={(e) => {setNumGuests(e.target.value)}} required />
                    </div>
                    <div id="occasion">
                        <label>Occasion: </label>
                            <input type="text" id="occasion" value={occasion} placeholder="Birthday"
                            onChange={(e) => {setOccasion(e.target.value)}} />
                    </div>
                    <div id="reservation-disclaimer">
                        <h4>Fields marked with an asterisk are required. Reservation may be cancelled if 
                            guests do not arrive 15 minutes after selected date and time.
                        </h4>
                    </div>
                    <button type="submit" disabled={!isFormValid()}>Create reseervation</button>
                </fieldset>
            </form>
        </div>
    )
}

export default BookingForm;