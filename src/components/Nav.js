import logo from '../images/logo.svg'

function Nav() {

    const navItems = [
        {
            item: 'Home',
            link: '/'
        },
        {
            item: 'About',
            link: '/about'
        },
        {
            item: 'Menu',
            link: 'https://www.google.com'
        },
        {
            item: 'Reservations',
            link: 'https://www.google.com'
        },
        {
            item: 'Order Online',
            link: 'https://www.google.com'
        },
        {
            item: 'Login',
            link: 'https://www.google.com'
        },
        
    ]
    

    return(
        <nav>
            
            <img src={logo} alt="logo for Little Lemon" id="main-logo"/>
            
            {
                navItems.map((navItem) => {
                    return (
                    <ul>
                        <li><a href={navItem.link}>{navItem.item}</a></li>
                    </ul>
                    )
                })
            }
            
            
        </nav>
    )
}

export default Nav;