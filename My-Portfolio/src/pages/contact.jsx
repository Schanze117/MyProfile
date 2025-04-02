import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [error, setError] = useState({
        name: false,
        email: false,
        message: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newError = {
            name: formData.name.trim() === '',
            email: formData.email.trim() === '' || !emailRegex.test(formData.email),
            message: formData.message.trim() === ''
        };
        setError(newError);

        if (!Object.values(newError).includes((error) => error === true)) {

            console.log('Form submitted:', formData);
        }
    };

    // Handle form submission logic here

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit} noValidate>
                {error.name && <span className="error">Name is required</span>}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    {error.email && <span className="error">Valid email is required</span>}
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    {error.message && <span className="error">Message is required</span>}
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <p> Contact me at ~~~ aaronschanzenbach@gmail.com</p>
        </div>
    );
}

export default Contact;