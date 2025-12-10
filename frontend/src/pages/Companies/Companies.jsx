import React, { useState } from 'react';
import './Companies.css';
import { FaSearch, FaMapMarkerAlt, FaGlobe, FaUsers } from 'react-icons/fa';

const Companies = () => {
    const [searchTerm, setSearchTerm] = useState('');

    // Mock Data
    const companies = [
        {
            id: 1,
            name: 'TechFlow',
            description: 'Leading the way in AI and machine learning solutions for modern businesses.',
            location: 'San Francisco, CA',
            employees: '500+',
            logo: 'TF',
            website: '#',
            color: '#4361ee'
        },
        {
            id: 2,
            name: 'GreenEnergy',
            description: 'Sustainable energy providers committed to a cleaner, greener future.',
            location: 'Berlin, Germany',
            employees: '200-500',
            logo: 'GE',
            website: '#',
            color: '#06d6a0'
        },
        {
            id: 3,
            name: 'CloudScale',
            description: 'Enterprise cloud infrastructure scaling and management platform.',
            location: 'Austin, TX',
            employees: '1000+',
            logo: 'CS',
            website: '#',
            color: '#7209b7'
        },
        {
            id: 4,
            name: 'FinSafe',
            description: 'Next-generation fintech security and banking APIs.',
            location: 'London, UK',
            employees: '100-200',
            logo: 'FS',
            website: '#',
            color: '#ef4444'
        },
        {
            id: 5,
            name: 'HealthPlus',
            description: 'Digital health monitoring and patient care systems.',
            location: 'Toronto, Canada',
            employees: '300+',
            logo: 'HP',
            website: '#',
            color: '#3b82f6'
        },
        {
            id: 6,
            name: 'EduSmart',
            description: 'Interactive e-learning platforms for higher education.',
            location: 'Remote',
            employees: '50-100',
            logo: 'ES',
            website: '#',
            color: '#f59e0b'
        }
    ];

    const filteredCompanies = companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        company.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="companies">
            <div className="companies__bg-shape companies__bg-shape--1"></div>
            <div className="companies__bg-shape companies__bg-shape--2"></div>

            <div className="companies__container">
                <div className="companies__header">
                    <h1 className="companies__title">Top <span className="companies__title-highlight">Companies</span> hiring now</h1>
                    <p className="companies__subtitle">Discover innovative companies and find the perfect culture for your next internship.</p>

                    <div className="companies__search-wrapper">
                        <FaSearch className="companies__search-icon" />
                        <input
                            type="text"
                            className="companies__search-input"
                            placeholder="Search companies by name or keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className="companies__grid">
                    {filteredCompanies.length > 0 ? (
                        filteredCompanies.map(company => (
                            <div key={company.id} className="company-card">
                                <div className="company-card__header">
                                    <div className="company-card__logo" style={{ backgroundColor: company.color }}>
                                        {company.logo}
                                    </div>
                                    <div className="company-card__badges">
                                        <span className="company-card__badge">Hiring</span>
                                    </div>
                                </div>

                                <h3 className="company-card__name">{company.name}</h3>
                                <p className="company-card__description">{company.description}</p>

                                <div className="company-card__meta">
                                    <div className="company-card__meta-item">
                                        <FaMapMarkerAlt /> {company.location}
                                    </div>
                                    <div className="company-card__meta-item">
                                        <FaUsers /> {company.employees}
                                    </div>
                                </div>

                                <div className="company-card__actions">
                                    <a href={company.website} className="company-card__btn">View Openings</a>
                                    <a href="#" className="company-card__link"><FaGlobe /></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="companies__empty">
                            <h3>No companies found</h3>
                            <p>Try adjusting your search terms.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Companies;
