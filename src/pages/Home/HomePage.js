import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [selectedBubble, setSelectedBubble] = useState(null);

  // Content associated with each bubble
  const bubbleContent = {
    1: "At Radiant Growth Therapy and Learning, we foster growth and connection through the transformative power of music. Our dedicated therapists provide personalized programs tailored to support development and well-being.",
    2: "We provide personalized music therapy programs designed to support individuals of all ages. Our sessions aim to enhance emotional well-being, developmental milestones, and social connection through music.",
    3: "We believe in the power of music as a universal language that can heal, connect, and transform lives. Our passion drives us to create a nurturing environment where everyone can express themselves freely.",
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/radiant_background.jpg`}
          alt="background"
          className="background"
        />
        <div className="text-overlay">
          <h2 className="fade-in-text">Empowering Through Therapy</h2>
          <p className="fade-in-text">
            Unlock your potential with expert guidance. Discover comprehensive
            music therapy solutions for all ages through Radiant Growth Therapy.
          </p>
          <button
            className="view-services-btn"
            onClick={() => navigate("/services")}
          >
            View Services
          </button>
        </div>
      </div>

      {/* About Preview Section */}
      <div className="about-preview">
        <img
          src={`${process.env.PUBLIC_URL}/stock_photo.jpg`}
          alt="therapy session"
          className="about-preview-image"
        />
        <div className="about-preview-text">
          <h2>About Radiant Growth Therapy</h2>
          <p>
            At Radiant Growth Therapy and Learning, we foster growth and
            connection through the transformative power of music. Our dedicated
            therapists provide personalized programs tailored to support
            development and well-being.
          </p>

          {/* Bubble Section - Now inside the text div */}
          <div className="bubble-container">
            <div className="bubble-item">
              <span className="bubble-title">Who We Are</span>
              <div className="bubble" onClick={() => setSelectedBubble(1)}>
                <img src={`${process.env.PUBLIC_URL}/whoweare.jpeg`} alt="Who We Are" />
              </div>
            </div>
            <div className="bubble-item">
              <span className="bubble-title">What We Do</span>
              <div className="bubble" onClick={() => setSelectedBubble(2)}>
                <img src={`${process.env.PUBLIC_URL}/whatwedo.jpeg`} alt="What We Do" />
              </div>
            </div>
            <div className="bubble-item">
              <span className="bubble-title">Why We Do It</span>
              <div className="bubble" onClick={() => setSelectedBubble(3)}>
                <img src={`${process.env.PUBLIC_URL}/whywedoit.jpeg`} alt="Why We Do It" />
              </div>
            </div>
          </div>

          {/* Dynamic Text Section - Now inside the right text section */}
          <div className={`bubble-text ${selectedBubble ? "show" : ""}`}>
            {selectedBubble && (
              <>
                <p>{bubbleContent[selectedBubble]}</p>
                <button
                  className="view-more-btn"
                  onClick={() =>
                    navigate(
                      selectedBubble === 1
                        ? "/about#who-we-are"
                        : selectedBubble === 2
                        ? "/about#what-we-do"
                        : "/about#why-we-do-it"
                    )
                  }
                >
                  View More
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-text">
          <h2>Want to know more?</h2>
          <p>Reach out to us!</p>
          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
        <div className="contact-image">
          <img src={`${process.env.PUBLIC_URL}/michelle_profile.jpg`} alt="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
