import React from "react";
import "./Internships.css";
import { FaClock, FaBriefcase, FaDollarSign, FaMapMarkerAlt, FaBuilding, FaFire, FaStar, FaArrowRight } from "react-icons/fa";

function Internships() {
  const internships = [
   {
  id: 1,
  time: "5 min ago",
  title: "Junior Data Analyst Intern",
  company: "TechNova Analytics",
  category: "Data Science",
  type: "Full time",
  salary: "$1500–$2000 / month",
  location: "Boston, USA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  featured: true,
  urgent: false,
  tags: ["Python", "Data", "Analytics"]
},
{
  id: 2,
  time: "20 min ago",
  title: "Frontend Developer Intern",
  company: "PixelWave Studio",
  category: "IT & Software",
  type: "Part time",
  salary: "$800–$1200 / month",
  location: "Remote",
  logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  featured: false,
  urgent: true,
  tags: ["React", "UI/UX", "JavaScript"]
}
,
    {
      id: 3,
      time: "15 min ago",
      title: "Internal Integration Planner",
      company: "Metz, Quigley and Feest Inc.",
      category: "Construction",
      type: "Full time",
      salary: "$48000–$50000",
      location: "Texas, USA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      featured: true,
      urgent: false,
      tags: ["Planning", "Construction", "Integration"]
    },
    {
      id: 4,
      time: "20 min ago",
      title: "Junior UX/UI Designer",
      company: "TechVision Inc.",
      category: "Design",
      type: "Internship",
      salary: "$25000–$30000",
      location: "Remote",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      featured: true,
      urgent: true,
      tags: ["UX", "UI", "Design", "Remote"]
    },
    {
      id: 5,
      time: "25 min ago",
      title: "Data Science Intern",
      company: "Analytics Pro",
      category: "Technology",
      type: "Full time",
      salary: "$35000–$40000",
      location: "San Francisco, USA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      featured: false,
      urgent: false,
      tags: ["Data", "AI", "Machine Learning"]
    },
    {
      id: 6,
      time: "30 min ago",
      title: "Marketing Coordinator",
      company: "BrandBoost Agency",
      category: "Marketing",
      type: "Part time",
      salary: "$30000–$35000",
      location: "Chicago, USA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      featured: true,
      urgent: false,
      tags: ["Marketing", "Social Media", "Content"]
    },
    {
  id: 3,
  time: "30 min ago",
  title: "Cloud Engineering Intern",
  company: "SkyNet Solutions",
  category: "Cloud & DevOps",
  type: "Full time",
  salary: "$1600–$2200 / month",
  location: "Seattle, USA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  featured: true,
  urgent: true,
  tags: ["AWS", "DevOps", "Kubernetes"]
},
{
  id: 6,
  time: "2 hours ago",
  title: "UI/UX Designer Intern",
  company: "CreativeMind Agency",
  category: "Design",
  type: "Part time",
  salary: "$900–$1400 / month",
  location: "San Francisco, USA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  featured: false,
  urgent: true,
  tags: ["Figma", "Prototyping", "Design System"]
},
{
  id: 5,
  time: "20 min ago",
  title: "Junior Backend Developer",
  company: "Spotify AB",
  category: "Music & Tech",
  type: "Full time",
  salary: "$45000–$52000",
  location: "Stockholm, Sweden",
  logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  featured: false,
  urgent: true,
  tags: ["Node.js", "Backend", "API"]
},
{
  id: 6,
  time: "25 min ago",
  title: "Assistant Marketing Manager",
  company: "Coca-Cola Company",
  category: "Marketing & Communication",
  type: "Full time",
  salary: "$38000–$41000",
  location: "Atlanta, USA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
  featured: true,
  urgent: false,
  tags: ["Marketing", "Branding", "Communication"]
},
{
  id: 7,
  time: "45 min ago",
  title: "IT Support Specialist",
  company: "Microsoft",
  category: "IT & Support",
  type: "Full time",
  salary: "$42000–$47000",
  location: "Seattle, USA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  featured: false,
  urgent: false,
  tags: ["IT", "Support", "Windows"]
},
{
  id: 8,
  time: "1 hour ago",
  title: "Data Analyst",
  company: "Netflix",
  category: "Data & Analytics",
  type: "Remote",
  salary: "$50000–$60000",
  location: "Remote",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  featured: true,
  urgent: true,
  tags: ["Data", "Python", "Analytics"]
},
{
  id: 9,
  time: "2 hours ago",
  title: "Frontend React Developer",
  company: "Airbnb Inc",
  category: "Tech & Travel",
  type: "Full time",
  salary: "$55000–$62000",
  location: "San Francisco, USA",
  logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
  featured: false,
  urgent: false,
  tags: ["React", "Frontend", "JavaScript"]
},
{
  id: 10,
  time: "3 hours ago",
  title: "Junior UI/UX Designer",
  company: "Figma",
  category: "Design",
  type: "Part time",
  salary: "$30000–$35000",
  location: "Remote",
  logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  featured: true,
  urgent: false,
  tags: ["Design", "Figma", "UI/UX"]
}



  ];

  return (
    <section className="internships-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <FaFire className="eyebrow-icon" />
          <span>Latest Opportunities</span>
        </div>
        <h2 className="section-title">
          Discover <span className="highlight">Amazing</span> Internships
        </h2>
        <p className="section-subtitle">
          Browse through our handpicked selection of premium internship opportunities from top companies.
        </p>
      </div>

      <div className="internships-grid">
        {internships.map((job) => (
          <div key={job.id} className={`internship-card ${job.featured ? 'featured' : ''}`}>
            <div className="card-header">
              <div className="time-badge">
                <FaClock className="time-icon" />
                <span>{job.time}</span>
              </div>
              
              <div className="status-badges">
                {job.urgent && (
                  <span className="badge urgent">
                    <FaFire />
                    Urgent
                  </span>
                )}
                {job.featured && (
                  <span className="badge featured-badge">
                    <FaStar />
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="card-content">
              <div className="company-logo-container">
                <img src={job.logo} alt={job.company} className="company-logo" />
                <div className="company-info">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="company-name">
                    <FaBuilding className="company-icon" />
                    <span>{job.company}</span>
                  </div>
                </div>
              </div>

              <div className="job-tags">
                {job.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>

              <div className="job-details">
                <div className="detail-item">
                  <FaBriefcase className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Category</span>
                    <span className="detail-value">{job.category}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaClock className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Type</span>
                    <span className="detail-value">{job.type}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaDollarSign className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Salary</span>
                    <span className="detail-value">{job.salary}</span>
                  </div>
                </div>

                <div className="detail-item">
                  <FaMapMarkerAlt className="detail-icon" />
                  <div className="detail-content">
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{job.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button className="apply-btn btn-gradient">
                <span>Apply Now</span>
                <FaArrowRight className="btn-arrow" />
              </button>
              <button className="details-btn">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="section-footer">
        <button className="view-all-btn btn-gradient">
          <span>View All Internships</span>
          <FaArrowRight className="btn-arrow" />
        </button>
      </div>
    </section>
  );
}

export default Internships;