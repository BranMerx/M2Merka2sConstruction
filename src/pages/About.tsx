import Owner_and_son from "../assets/logo/M2 Owner and Son.jpg";
import "../styles/About.css";

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-text">
                    <p>
                        Our owner's name is Arturo Mercado-Cancino. He started
                        M2 Merka2s Construction as a company to offer his
                        carpentry expertise to help those in our community and
                        surrounding areas achieve their home renovation goals.
                        Our company is located in Macomb County, specifically
                        in the village of Romeo. However, we also service those
                        in Oakland County and hopefully will be able to expand
                        even further one day in the future.
                    </p>

                    <p>
                        Whether you are looking to start a new project, need
                        help finishing one, or are just shopping around for
                        pricing, we would like to help. We are a registered and
                        insured company. Take advantage of our free consultation
                        offer, and someone from our team will reach out to set
                        up an appointment to discuss the project, associated
                        costs, and desired results.
                    </p>
                </div>

                <div className="about-image">
                    <img
                        src={Owner_and_son}
                        alt="Owner_and_son"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;