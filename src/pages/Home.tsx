import logo from '../assets/logo/M2 Merka2s Construction Logo.png';
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to M2 Merka2s Construction</h1>

            <img
                src={logo}
                alt="Company Logo"
                className="home-logo"
            />

            <h2>Built On Trust. Built By Family. Built To Last.</h2>
            <h2>A Family Business You Can Trust.</h2>

            <h3>Contact Information:</h3>
            <h3>586-894-3206</h3>
            <h3>lobitoman1@live.com</h3>
        </div>
    );
}

export default Home;