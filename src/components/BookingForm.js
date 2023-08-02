import { useState } from "react";
import restaurant from '../images/restaurant.jpg'


function BookingForm({availableTimes, updateTimes}) {

    const [name, setName] = useState("");
    const [date,setDate] = useState("");
    const [time,setTime] = useState("17:00");
    const [numGuests, setNumGuests] = useState("2");
    const [occasion, setOccasion] = useState("");
    const [finalTimes, setFinalTimes] = useState("");

    function handleDateChange(e) {
        
        setDate(e.target.value);
    
        let stringDate = e.target.value;
        let chosenDate = new Date(stringDate+"T00:00:00");

        updateTimes(chosenDate);
        
        setFinalTimes(availableTimes.map((aTime) => {
            return <option>{aTime}</option> 
        }));

    }

    function handleTimeChange(e) {
        console.log(e.target.value);
        setTime(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert(`${name}, your table is reserved for ${date} at ${time}.`);
        
        setName("");
        setDate("");
        setTime("");
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
                    <div id="reservation-title">
                        <h3>Reserve a table</h3>
                    </div>
                    <div id="reservation-name">
                        <label>*Name: </label>
                            <input type="text" id="name" value={name} placeholder="John Doe"
                            onChange={(e) => {setName(e.target.value)}} required />
                    </div>
                    <div id="reservation-date">
                        <label>*Date of reservation: </label>
                            <input type="date" id="date" value={date} 
                            onChange={handleDateChange} required />
                    </div>
                    <div id="reservation-time">
                        <label>*Time of reservation: </label>
                            <select id="time" value={time} onChange={handleTimeChange}>
                               {finalTimes}
                            </select>
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
                        <h4>Fields marked with an asterisk are required.<br/>Reservation may be cancelled if 
                            guests do not arrive 15 minutes after selected date and time.
                        </h4>
                    </div>
                    <button type="submit" disabled={!isFormValid()}>Create reservation</button>
                </fieldset>
            </form>
            <div id="reservation-image">
                <img src={restaurant} id="restaurant-img" alt="little lemon restaurant" />
            </div>
        </div>
    )
}

export default BookingForm;