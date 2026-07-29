import { useState } from "react";
import "./ReferralForm.css";

function ReferralForm() {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        service:"",
});

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        console.log(formData);
        alert("Estimate requestsubmitted!");
    }

    return(
        <form className = "referral-form" onSubmit={handleSubmit}>
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

            <button type="submit">
                Request Free Estimate
            </button>            
        </form>
    );

}

export default ReferralForm;