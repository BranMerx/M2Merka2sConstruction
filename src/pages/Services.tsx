import "../components/ServiceCard/Services.css"
function Services() {
    const services = ["Drywall", "Tile", "Showers", "Painting", "Framing", "Basement Finish", "Outdoor Patios", "Pergolas"];
    return (
        <div>
            <h1>List of Common Services Provided:</h1>
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