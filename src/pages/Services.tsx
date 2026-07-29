function Services() {
    const services = ["Drywall", "Tile", "Showers", "Painting", "Framing", "Basement Finish", "Outdoor Patios", "Pergolas"];
    return (
        <ul>
            {services.map((service, index) => (
                <li key = {index}>{service}</li>
            ))}
        </ul>
    );
}

export default Services;