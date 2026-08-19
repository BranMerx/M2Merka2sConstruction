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

            <div className='contact-info'>
                <h3>Contact Information:</h3>
                <p>586-894-3206</p>
                <p>info@m2merka2sconstruction.com</p>
                
            </div>
        </div>
    );
}

export default Home;