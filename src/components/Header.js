import logo from "../images/logo.svg"

function Header() {

    return(
        <header>
            <meta name="description" content="Little Lemon, a locally owned Chicago based restaurant"/>
            <meta name="og:title" content="Little Lemon Restaurant Hommepage"/>
            <meta name="og:description" content="Little Lemon, a locally owned Chicago based restaurant"/>
            <meta name="og:image" content={logo} />
        </header>
    )
}

export default Header;