import logo from '../assets/logo/M2 Merka2s Construction Logo.png'

function Home() {
    return (
        <div>
            <img src={logo} 
                alt="Company Logo" 
                style={{border: '4px solid #ebca25', borderRadius:'8px'}}
                width="200"/>
            <h1>Welcome to M2 Merka2s Construction</h1>
            <p>Built On Trust. Built By Family. Built To Last.</p>
            <p>A Family Business You can Trust.</p>
        </div>
    );
}

export default Home;