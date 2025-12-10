import React from 'react';
import './Testimonials.css';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Computer Science Student",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
            quote: "This platform changed my career trajectory. I found an amazing internship at a top tech company within two weeks!",
            rating: 5
        },
        {
            id: 2,
            name: "David Chen",
            role: "HR Manager at TechFlow",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            quote: "We've hired three interns through this portal. The quality of candidates is consistently impressive.",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "Design Intern",
            avatar: "https://randomuser.me/api/portraits/women/65.jpg",
            quote: "The interface is so easy to use. I loved the instant alerts for new openings in my field.",
            rating: 4
        }
    ];

    return (
        <section className="testimonials">
            <div className="testimonials__container">
                <h2 className="testimonials__title">What Our Users <span className="highlight">Say</span></h2>
                <p className="testimonials__subtitle">Join thousands of satisfied students and recruiters.</p>

                <div className="testimonials__grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card">
                            <FaQuoteLeft className="quote-icon" />
                            <p className="testimonial-text">"{item.quote}"</p>

                            <div className="testimonial-rating">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} className="star-icon" />
                                ))}
                            </div>

                            <div className="testimonial-user">
                                <img src={item.avatar} alt={item.name} className="user-avatar" />
                                <div className="user-info">
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
