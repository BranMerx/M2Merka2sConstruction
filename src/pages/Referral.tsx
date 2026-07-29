import ReferralForm from "../components/ReferralForm/ReferralForm";

function Referral() {
    return (
        <main className = "referral-page">
            <h1>Request a Free Estimate</h1>
            <p>
                Fill out the form below and we'll contact you as soon as possible.
            </p>

            <ReferralForm/>
        </main>
    );
}

export default Referral;