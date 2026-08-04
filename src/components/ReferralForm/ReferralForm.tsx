import { useState } from "react";
import "./ReferralForm.css";
import { submitReferral } from "../../services/referralService";

function ReferralForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            await submitReferral(formData);

            setMessage("✅ Thank you! Your estimate request has been submitted.");

            setFormData({
                firstName: "",
                lastName: "",
                phone: "",
                email: "",
                service: "",
            });
        } catch (error) {
            if (error instanceof Error) {
                setMessage(`❌ ${error.message}`);
            } else {
                setMessage("❌ Something went wrong.");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <form className="referral-form" onSubmit={handleSubmit}>

            <label>First Name</label>
            <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
            />

            <label>Last Name</label>
            <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
            />

            <label>Phone Number</label>
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <label>Email Address</label>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label>Service Requested</label>
            <textarea
                name="service"
                rows={4}
                value={formData.service}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                required
            />

            <button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Request Free Estimate"}
            </button>

            {message && (
                <p className="submission-message">
                    {message}
                </p>
            )}

        </form>
    );
}

export default ReferralForm;