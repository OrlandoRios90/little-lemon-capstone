import { useState } from "react";
import restaurant from '../images/restaurant.jpg'


function BookingForm({availableTimes, updateTimes, submitForm}) {

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
        setTime(e.target.value);
    }

    function handleSubmit() {
        submitForm(true);
    }

    const isFormValid = () => {
        return (
            name && 
            date 
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
                        <label htmlFor="name">*Name: </label>
                            <input type="text" id="name" value={name} placeholder="John Doe"
                            onChange={(e) => {setName(e.target.value)}} required alt="name-field"/>
                    </div>
                    <div id="reservation-date">
                        <label htmlFor="date">*Date of reservation: </label>
                            <input type="date" id="date" value={date} 
                            onChange={handleDateChange} required alt="date-field"/>
                    </div>
                    <div id="reservation-time">
                        <label htmlFor="time">*Time of reservation: </label>
                            <select id="time" value={time} onChange={handleTimeChange}>
                               {finalTimes}
                            </select>
                    </div>
                    <div id="num-guests">
                        <label htmlFor="number of guests">*Number of guests: </label>
                            <input type="number" id="numGuests" value={numGuests} min="2" max="10" 
                            onChange={(e) => {setNumGuests(e.target.value)}} required />
                    </div>
                    <div id="occasion">
                        <label htmlFor="occasion">Occasion: </label>
                            <input type="text" id="occasion" value={occasion} placeholder="Birthday"
                            onChange={(e) => {setOccasion(e.target.value)}} maxLength={25}/>
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