import logo from '../images/logo.svg'

function Footer() {

    return(
        <footer>
            <div id="footer-container">
                <div id="footer-logo-container">
                    <img src={logo} alt="Little Lemon logo"/>
                </div>
                <div id="doormat-nav">
                    <h4>Navigation</h4>
                    <ul className='footer-ul'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/reservations">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>
                <div id="footer-contact">
                    <h4>Contact</h4>
                    <ul className='footer-ul'>
                        <li>123 Restaurant Way, Chicago</li>
                        <li>(555) 555-5555</li>
                        <li>little.lemon@email.com</li>
                    </ul>
                </div>
                <div id="footer-socials">
                    <h4>Social Media Links</h4>
                    <ul className='footer-ul'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;