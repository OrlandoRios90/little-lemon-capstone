import logo from "../images/logo.svg"

function Header() {

    return(
        <header>
            <meta name="description" content="Little Lemon, a locally owned Chicago based restaurant"/>
            <meta name="og:title" content="Little Lemon Restaurant Hommepage"/>
            <meta name="og:description" content="Little Lemon, a locally owned Chicago based restaurant"/>
            <meta name="og:image" content={logo} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Markazi+Text:wght@500&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Karla&family=Markazi+Text:wght@500&display=swap" rel="stylesheet" />
        </header>
    )
}

export default Header;