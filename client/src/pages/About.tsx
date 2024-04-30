import React from 'react';

// Import Font Awesome icons for links
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Import faEnvelope from free-solid-svg-icons
import uImg from "./image/u.jpg";
import sImg from "./image/s.jpg";
import { Container } from '@mui/material';



export const About: React.FC = () => {                         
  const creators = [
    {
      id: 1,
      name: "Utkarsh Kumar",
      position: "Lead developer",
      bio: " 🚀 Introducing Our Lead Developer: Utkarsh Kumar 🚀Meet the driving force behind our AI blog page, Utkarsh Kumar! With a passion for innovation and a keen eye for detail, Utkarsh leads our team in creating cutting-edge content that explores the dynamic world of artificial intelligence. His expertise in coding and deep understanding of AI technologies ensure that every post we publish is not just informative, but also engaging and thought-provoking. Stay tuned as Utkarsh and our team continue to unravel the mysteries of AI and share insights that inspire and inform! 🤖",
      imageUrl: uImg,
      twitterLink:"https://twitter.com/example",
      linkedInLink: "https://linkedin.com/company/example",
      githubLink: "https://github.com/Utkarsh7631",
      emailLink: "mailto:rishiraz005@gmail.com"
    },
    {
      id: 2,
      name: "Sweta Kumari",
      position: "Content writer",
      bio: " 📝 Introducing Our Content Writer: Sweta Kumari 📝Meet Sweta Kumari, the creative mind behind the captivating content on our AI blog page! With a knack for storytelling and a deep understanding of AI concepts, Sweta brings our blog to life with her compelling narratives and insightful analysis. Whether demystifying complex algorithms or exploring the latest AI trends, Sweta's passion for writing shines through in every post. Stay tuned as Sweta continues to craft engaging content that educates and inspires our readers! 🤖",
      imageUrl: sImg,
      twitterLink: "https://twitter.com/example",
      linkedInLink: "https://linkedin.com/company/example",
      githubLink: "https://github.com/example",
      emailLink: "mailto:kumarisweta0761@gmail.com"
    }
  ];

  return (
    <Container sx={{
      padding: "40px 0px 40px",
      marginBottom: 2
    }}>
      <div className="about-section">
      <h2>About Us</h2>
      <p>Welcome to our AI Blog! We are dedicated to providing valuable insights and knowledge about artificial intelligence and its applications.</p>
      <h3>Meet the Team</h3>
      <div className="creators">
        {creators.map(creator => (
          <div key={creator.id} className="creator">
            <img src={creator.imageUrl} alt={creator.name} />
            <div className="creator-details">
              <h4>{creator.name}</h4>
              <p>{creator.position}</p>
              <p>{creator.bio}</p>
              <div className="social-links">
                <a href={creator.twitterLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href={creator.linkedInLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href={creator.githubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href={creator.emailLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p>For more information about our blog and AI topics, feel free to explore our articles.</p>
    </div>
    </Container>
  );
}
