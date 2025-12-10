import React from 'react';
import './About.css';
import { FaRocket, FaLightbulb, FaUsers, FaHandshake } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about">
            <div className="about__bg-shape about__bg-shape--1"></div>
            <div className="about__bg-shape about__bg-shape--2"></div>

            <div className="about__container">
                {/* Hero Section */}
                <section className="about__hero">
                    <h1 className="about__title">Empowering Students, <br /><span className="about__title-highlight">Connecting Futures</span></h1>
                    <p className="about__subtitle">
                        We are bridging the gap between ambitious students and leading companies to build the next generation of workforce talent.
                    </p>
                </section>

                {/* Mission & Vision Cards */}
                <section className="about__mission">
                    <div className="about__card">
                        <div className="about__icon-wrapper">
                            <FaRocket className="about__icon" />
                        </div>
                        <h3>Our Mission</h3>
                        <p>To provide a seamless, transparent, and efficient platform that simplifies the internship search and recruitment process for everyone.</p>
                    </div>

                    <div className="about__card">
                        <div className="about__icon-wrapper">
                            <FaLightbulb className="about__icon" />
                        </div>
                        <h3>Our Vision</h3>
                        <p>A world where every student has access to the best opportunities to kickstart their career, regardless of their background.</p>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="about__stats">
                    <div className="about__stat-item">
                        <span className="about__stat-number">5k+</span>
                        <span className="about__stat-label">Students Placed</span>
                    </div>
                    <div className="about__stat-item">
                        <span className="about__stat-number">200+</span>
                        <span className="about__stat-label">Partner Companies</span>
                    </div>
                    <div className="about__stat-item">
                        <span className="about__stat-number">98%</span>
                        <span className="about__stat-label">Satisfaction Rate</span>
                    </div>
                </section>

                {/* Team Section */}
                <section className="about__team">
                    <h2 className="about__section-title">Meet Our <span className="about__title-highlight">Team</span></h2>
                    <div className="about__team-grid">
                        <div className="about__team-member">
                            <div className="about__team-avatar"></div>
                            <h4>Alex Johnson</h4>
                            <p>Founder & CEO</p>
                        </div>
                        <div className="about__team-member">
                            <div className="about__team-avatar"></div>
                            <h4>Sarah Williams</h4>
                            <p>Head of Operations</p>
                        </div>
                        <div className="about__team-member">
                            <div className="about__team-avatar"></div>
                            <h4>Michael Brown</h4>
                            <p>Lead Developer</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
