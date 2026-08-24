import "../components/ServiceCard/Services.css";
import logo from "../assets/logo/M2 Merka2s Construction Logo.png";

function Services() {
    const indoor_services = [
        "Attic Remodels",
        "Basements Remodels",
        "Countertops",
        "Pillars",
        "Drywall",
        "Tile",
        "Shower Remodels"
    ];

    const outdoor_services = [
        "Outdoor Patios",
        "Pergolas",
        "Downspouts",
        "Mulching",
        "Stone Veneer",
        "Railing",
        "Fencing"
    ];

    return (
        <div className="services-container">
            <h1>List of Common Services Provided:</h1>

            <img
                src={logo}
                alt="Company Logo"
                className="services-logo"
            />

            <div className="services-lists">
                <div className="service-list">
                    <h2>Indoor Services</h2>
                    <ul>
                        {indoor_services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>

                <div className="service-list">
                    <h2>Outdoor Services</h2>
                    <ul>
                        {outdoor_services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className ="additional-info">
                <h2>We offer these services and many more!</h2>
                <p>Once final pricing is agreed upon, a 30% non-refundable down payment will be required.</p>
            </div>
        </div>
    );
}

export default Services;