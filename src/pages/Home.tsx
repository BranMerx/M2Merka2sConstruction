import logo from '../assets/logo/M2 Merka2s Construction Logo.png'

function Home() {
    return (
        <div>
            <img src={logo} 
                alt="Company Logo" 
                style={{border: '4px solid #ebca25', borderRadius:'8px'}}
                width="200"/>
            <h1>Welcome to M2 Merka2s Construction</h1>
            <h2>Built On Trust. Built By Family. Built To Last.</h2>
            <h2>A Family Business You can Trust.</h2>
            <h3>Contact Information:</h3>
            <h3>586-894-3206</h3>
            <h3>lobitoman1@live.com</h3>
        </div>
    );
}

export default Home;