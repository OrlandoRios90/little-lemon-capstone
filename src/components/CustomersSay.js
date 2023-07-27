import person1 from '../images/addison richardson.jpg'
import person2 from '../images/gary hughes.jpg'
import person3 from '../images/linda bryant.jpg'
import person4 from '../images/priscilla jackson.jpg'


function CustomersSay() {

    const customers = [
        {
            name: 'Addison R.',
            avatar: person1,
            comment: 'The food was really great, would come back again.',
            rating: 5
        },
        {
            name: 'Gary H.',
            avatar: person2,
            comment: 'Had the greek salad and it was perfect.',
            rating: 5
        },
        {
            name: 'Linda B.',
            avatar: person3,
            comment: 'Buschetta was a little salty but overall great experience',
            rating: 4
        },
        {
            name: 'Priscilla J.',
            avatar: person4,
            comment: 'I come here all the time for lunch',
            rating: 5
        }
    ]

    const starRating = (rating) => {

        switch (rating) {
            case 1: 
                return <>⭐
                      </>
            case 2:
                return <>⭐⭐
                       </>
            case 3:
                return <>⭐⭐⭐
                       </>
            case 4:
                return <>⭐⭐⭐⭐
                       </>
            case 5:
                return <>⭐⭐⭐⭐⭐
                       </>
        }
    }
    

    return (
        <div id="customers-say-container">
            <h2 id="customers-say-title">What our customers say!</h2>
            
            <div className="customer-cards-container"> 
            {
                customers.map((customer) => {
                    return (
                   <div className='customer-card'>
                        <div id="rating">{
                            starRating(customer.rating)
                        }</div>
                        <img src={customer.avatar} id='customer-avatar'/>
                        <h5>{customer.name}</h5>
                        <p id="customer-comment">{customer.comment}</p>
                        
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default CustomersSay;