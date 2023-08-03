import logo from '../images/logo.svg'

function Nav() {

    const navItems = [
        {
            id: 1,
            item: 'Home',
            link: '/'
        },
        {
            id: 2,
            item: 'About',
            link: '/about'
        },
        {
            id: 3,
            item: 'Menu',
            link: '/'
        },
        {
            id: 4,
            item: 'Reservations',
            link: '/reservations'
        },
        {
            id: 5,
            item: 'Order Online',
            link: '/'
        },
        {
            id: 6,
            item: 'Login',
            link: '/'
        },
        
    ]
    
    return(
        <nav>
            <img src={logo} alt="logo for Little Lemon" id="main-logo"/>
            {
                navItems.map((navItem) => {
                    return (
                    <ul>
                        <li key={navItem.id}><a href={navItem.link}>{navItem.item}</a></li>
                    </ul>
                    )
                })
            }
        </nav>
    )
}

export default Nav;