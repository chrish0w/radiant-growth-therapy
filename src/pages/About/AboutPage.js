import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
    const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);
  // List of YouTube video URLs
  const videos = [
    "https://www.youtube.com/embed/UjhgHEDG0NU?si=7OmjUVVXEOOHy45K",
    "https://www.youtube.com/embed/eqIijgUmvX8?si=Tx1yCUYTK2x5K2TU",
    "https://www.youtube.com/embed/LGnWyS2Y4r8?si=ggrsmNHhKD5DFf5F",
  ];

  // Function to go to the next video
  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Function to go to the previous video
  const prevVideo = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + videos.length) % videos.length
    );
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="about-hero">
        <h1 className="about-title">About Us</h1>
        <div className="hero-image-container">
          <img src="/musictherapy.jpg" alt="Team" className="hero-image" />
        </div>
      </div>

      {/* About Content Section */}
      <div className="about-content" id="who-we-are">
        <div className="about-text">
          <h2>Who we are</h2>
          <p>
            Here at Radiant Growth Therapy and Learning, we're your local haven
            for fostering growth and connection through the transformative
            medium of music. Our welcoming space and dedicated team of
            therapists are committed to providing personalized programs tailored
            to your family's unique needs, whether you're seeking support for
            developmental milestones or enhancing well-being. With a genuine
            warmth and understanding, we strive to create a nurturing community
            where every individual can thrive, sharing in moments of harmony and
            radiant joy together.
          </p>
        </div>
        <div className="about-image-container">
          <img src="/radiant_logo.png" alt="About Us" className="about-image" />
        </div>
      </div>

      {/* Meet The Team Section */}
      <div className="team-section">
        <h2 className="team-title">Meet The Team</h2>
        <div className="team-container">
          <div className="team-image-container">
            <img
              src="/michelle_profile.jpg"
              alt="Michelle"
              className="team-image"
            />
            <p className="team-qualifications">
              AMTA Registered Music Therapist, Master of Music Therapy <br />
              Bachelor of Music (Contemporary Performance), AMusA (Hons)
            </p>
          </div>
          <div className="team-text">
            <p>
              Michelle is a Registered Music Therapist who graduated with a
              Master of Music Therapy from the University of Melbourne. Prior to
              this, she completed a Bachelor of Music in Contemporary
              Performance. Michelle’s interest in music therapy stems from her
              background in providing piano lessons to children and adolescents
              as well as facilitating intergenerational music programs involving
              children and seniors at aged care facilities. In particular, her
              time teaching children with autism inspired her to pursue a career
              in music therapy. Her music therapy experiences span across
              various fields including special schools, adult disability
              centres, aged care facilities and the Royal Children’s Hospital in
              Melbourne.
            </p>
            <p>
              Combining her experiences and university training, Michelle
              integrates a holistic, family-centred and evidence-based approach
              in her work. Her sessions are tailored to each individual’s needs
              with a focus on self-expression, emotional validation and
              relatedness to others through music. Michelle is empathetic and
              approachable with a passion for working with children and
              families, particularly in providing support to improve a child’s
              developmental outcomes through early intervention. She also enjoys
              working with adolescents – empowering young people to share their
              stories through the creative use of music and equipping
              individuals with resources to understand and improve their mental
              health.
            </p>
            <p>
              Michelle is also fluent in Mandarin and is happy to deliver
              therapy in a bilingual mode.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="what-we-do-section" id="what-we-do">
        <h2 className="what-we-do-title">What We Do</h2>
        <p className="what-we-do-text">
          At Radiant Growth Therapy and Learning, we use music as a therapeutic
          tool to foster emotional well-being, social connection, and personal
          growth. Our services range from individual therapy sessions to
          community-based workshops that cater to people of all ages and
          abilities.
        </p>

        {/* YouTube Video Carousel */}
        <div className="video-carousel">
          <button className="carousel-button left" onClick={prevVideo}>
            &lt;
          </button>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src={videos[currentIndex]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <button className="carousel-button right" onClick={nextVideo}>
            &gt;
          </button>
        </div>
      </div>
      {/* Why We Do It Section */}
      <div className="why-we-do-section" id="why-we-do-it">
        <div className="why-text">
          <h2>Why We Do It</h2>
          <p>
            Here at Radiant Growth Therapy, we focus on the "why." Music
            therapists often emphasize what they are doing and how they will
            achieve it, but the deeper purpose—the reason behind their work—is
            just as important.
          </p>
          <p>
            We believe that music is more than just a tool for therapy; it is a
            universal language that transcends barriers, bringing comfort,
            connection, and healing. Our work is rooted in the belief that
            everyone deserves a space to express themselves, be heard, and
            experience joy through music.
          </p>
          <p>
            Our "why" is about making a meaningful impact—helping individuals
            find their voice, build confidence, and navigate life’s challenges
            through the power of music. Whether it’s a child discovering new
            ways to communicate, a senior reconnecting with cherished memories,
            or an individual using music as an emotional outlet, our purpose is
            to inspire and uplift through every note, every session, and every
            shared moment.
          </p>
        </div>
        <div className="why-image-container">
          <img src="/disabled.jpeg" alt="Why We Do It" className="why-image" />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
