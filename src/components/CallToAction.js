import restaurantfood from "../images/restaurantfood.jpg"


function CallToAction() {

    return (
        <div id="call-to-action">
            <div id="empty-div-for-spacing"></div>
            <div id="cta-text">
                <h1 ID="cta-title">Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Little Lemon is a locally owned, Chicago-based restaurant serving fresh Mediterranean food.</p>
            </div>
            
            <img src={restaurantfood} id="cta-img" style={{justifySelf: "center"}} alt="plate of food from Little Lemon"/>
        </div>
    )
}

export default CallToAction;