import greekSalad from '../images/greek salad.jpg'
import bruschetta from '../images/bruchetta.svg'
import lemonDessert from '../images/lemon dessert.jpg'

function Specials() {

    const weeklySpecials = [
        {
            foodPic: greekSalad,
            item: 'Greek Salad',
            price: '$12.00',
            description: 'A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese.'
        },
        {
            foodPic: bruschetta,
            item: 'Bruschetta',
            price: '$8.00',
            description: 'Bruschetta is an antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt. Variations may include toppings of tomato, vegetables, beans, cured meat, or cheese.'
        },
        {
            foodPic: lemonDessert,
            item: 'Lemon Dessert',
            price: '$6.00',
            description: "This Lemon Lush Dessert is made up of shortbread crust that's layered with a lemon cream cheese filling, lemon pudding, and whipped cream."
        },
    ]

    return (
        <>
        <div id="specials-title-container">
            <h2>This Week's Specials</h2>
        </div>
        <div className="specials-cards-container"> 
            {
                weeklySpecials.map((special) => {
                    return (
                   <div className='special-card'>
                        <img src={special.foodPic} alt={special.item} className='special-foodPic'/>
                        <div id="item-price-container">
                            <h3>{special.item}</h3>
                            <h3 id="item-price">{special.price}</h3>
                        </div>
                        <p id="item-description">{special.description}</p>
                        <p id="order-delivery-card">Order Delivery</p>
                    </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Specials;