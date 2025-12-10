import React, { useState } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaQuestionCircle } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        // Add logic to send email or save message
    };

    return (
        <div className="contact">
            <div className="contact__bg-shape contact__bg-shape--1"></div>
            <div className="contact__bg-shape contact__bg-shape--2"></div>

            <div className="contact__container">
                <div className="contact__header">
                    <h1 className="contact__title">Get in <span className="contact__title-highlight">Touch</span></h1>
                    <p className="contact__subtitle">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__info-item">
                            <div className="contact__info-icon"><FaMapMarkerAlt /></div>
                            <div>
                                <h3>Our Office</h3>
                                <p>123 Internship Avenue, Tech City, TC 90210</p>
                            </div>
                        </div>
                        <div className="contact__info-item">
                            <div className="contact__info-icon"><FaPhone /></div>
                            <div>
                                <h3>Phone</h3>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="contact__info-item">
                            <div className="contact__info-icon"><FaEnvelope /></div>
                            <div>
                                <h3>Email</h3>
                                <p>support@internshipmanager.com</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__input-group">
                            <FaUser className="contact__input-icon" />
                            <input
                                type="text"
                                name="name"
                                className="contact__input"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__input-group">
                            <FaEnvelope className="contact__input-icon" />
                            <input
                                type="email"
                                name="email"
                                className="contact__input"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__input-group">
                            <FaQuestionCircle className="contact__input-icon" />
                            <input
                                type="text"
                                name="subject"
                                className="contact__input"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="contact__input-group contact__textarea-group">
                            <textarea
                                name="message"
                                className="contact__input contact__textarea"
                                placeholder="Your Message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="contact__submit">
                            <span>Send Message</span>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
