
import restaurant from '../images/restaurant.jpg'


function BookingForm(props) {


    function handleDateChange(e) {
        
        props.setDate(e.target.value);
    
        let stringDate = e.target.value;
        let chosenDate = new Date(stringDate+"T00:00:00");

        props.updateTimes(chosenDate);
        
        props.setFinalTimes(props.availableTimes.map((aTime) => {
            return <option>{aTime}</option> 
        }));

    }

    function handleTimeChange(e) {
        props.setTime(e.target.value);
    }

    function handleSubmit() {
        props.submitForm(true);
    }

    const isFormValid = () => {
        return (
            props.name && 
            props.date 
        )
    }

    return (
        <div className="booking-form-container">
            
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div id="reservation-title">
                        <h2 id="res-title">Reserve a table</h2>
                    </div>
                    <div id="reservation-name">
                        <label htmlFor="name">*Name: </label>
                            <input type="text" id="name" value={props.name} placeholder="John Doe"
                            onChange={(e) => {props.setName(e.target.value)}} required alt="name-field"/>
                    </div>
                    <div id="reservation-date">
                        <label htmlFor="date">*Date of reservation: </label>
                            <input type="date" id="date" value={props.date} 
                            onChange={handleDateChange} required alt="date-field"/>
                    </div>
                    <div id="reservation-time">
                        <label htmlFor="time">*Time of reservation: </label>
                            <select id="time" value={props.time} onChange={handleTimeChange}>
                               {props.finalTimes}
                            </select>
                    </div>
                    <div id="num-guests">
                        <label htmlFor="number of guests">*Number of guests: </label>
                            <input type="number" id="numGuests" value={props.numGuests} min="2" max="10" 
                            onChange={(e) => {props.setNumGuests(e.target.value)}} required />
                    </div>
                    <div id="occasion">
                        <label htmlFor="occasion">Occasion: </label>
                            <input type="text" id="occasion" value={props.occasion} placeholder="Birthday"
                            onChange={(e) => {props.setOccasion(e.target.value)}} maxLength={25}/>
                    </div>
                    <div id="reservation-disclaimer">
                        <p>Fields marked with an asterisk are required.<br/>Reservation may be cancelled if 
                            guests do not arrive 15 minutes after selected date and time.
                        </p>
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