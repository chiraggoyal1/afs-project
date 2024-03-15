import React, { useState } from 'react';
import axios from 'axios';

import './Contact.css'
export default function Contact() {
    
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
    
        const handleChange = (e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
    
            try {
                await axios.post('/send-email', formData);
                alert('Message sent successfully!');
            } catch (error) {
                console.error('Error sending message:', error);
                alert('Failed to send message. Please try again later.');
            }
        };
    return (
        
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Please fill out the form below to get in touch with us:</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
}