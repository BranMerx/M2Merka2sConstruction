import "../components/ServiceCard/Services.css"
import logo from "../assets/logo/M2 Merka2s Construction Logo.png"
function Services() {
    const services = ["Drywall", "Tile", "Showers", "Painting", "Framing", "Basement Finish", "Outdoor Patios", "Pergolas"];
    return (
        <div>
            <h1>List of Common Services Provided:</h1>
            <img src={logo} 
                alt="Company Logo" 
                style={{border: '4px solid #d4af37', borderRadius:'8px'}}
                width="400"/>
            <ul className="list-services">
                {services.map((service, index) => (
                    <li key = {index}>{service}</li>
                ))}
            </ul>
            <h2>These services and many more!</h2>
        </div>
    );
}

export default Services;