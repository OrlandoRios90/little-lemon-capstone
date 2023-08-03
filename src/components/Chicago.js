import pictureA from '../images/Mario and Adrian A.jpg'
import pictureB from '../images/Mario and Adrian b.jpg'

function Chicago() {

    return (
        <div id="about-container">
            <div id="about-text">
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>Little Lemon is a Chicago based, locally owned restaurant started by Chefs Mario and Adrian. 
                    We aim to serve the highest quality meditteranean food. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div id="about-pics">
                <img src={pictureA} id="pictureA" alt="owners Mario and Adrian talking to eachother"/>
                <img src={pictureB} id="pictureB" alt="owners Mario and Adrian cooking"/>
            </div>
        </div>
    )
}

export default Chicago;
