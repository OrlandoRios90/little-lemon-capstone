import logo from "../images/logo.svg"

function Header() {


    return(
        <header>
            <meta name="description" content="Little Lemon, a locally owned Chicago based restaurant"/>
            <meta name="og:title" content="Little Lemon Restaurant Hommepage"/>
            <meta name="og:description" content="Little Lemon, a locally owned Chicago based restaurant"/>
            <meta name="og:image" content={logo} />
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@500&display=swap');
            </style>

        </header>
    )
}

export default Header;