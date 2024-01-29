// AboutPage.js
import React from 'react';
import './AboutPage.css';

function AboutPage() {
    return (
        <div>
            <div className='about-section'>
                <h1 className="h1-about-us">About us</h1>
                <img src="/stock_photo.jpg" alt="stock" className="stock_photo" />
                <div className="about-us-text">
                    <h2> Who we are </h2>
                    <p>Here at Radiant Growth Therapy and Learning, we're your local haven for fostering growth and connection through the transformative medium of music. Our welcoming space and dedicated team of therapists are committed to providing personalized programs tailored to your family's unique needs, whether you're seeking support for developmental milestones or enhancing well-being. With a genuine warmth and understanding, we strive to create a nurturing community where every individual can thrive, sharing in moments of harmony and radiant joy together.</p>
                </div>
            </div>
            <div className='team-section'>
                <h1>Meet The Team</h1>
                <img src="/michelle_profile.jpg" alt="profile" className="profile-photo" />
                <div className="team-text" >
                    <p>Michelle is a Registered Music Therapist who graduated with a Master of Music Therapy from the University of Melbourne. Prior to this, she completed a Bachelor of Music in Contemporary Performance. Michelle’s interest in music therapy stems from her background in providing piano lessons to children and adolescents as well as facilitating intergenerational music programs involving children and seniors at aged care facilities. In particular, her time teaching children with autism inspired her to pursue a career in music therapy. Her music therapy experiences span across various fields including special schools, adult disability centres, aged care facilities and the Royal Children’s Hospital in Melbourne.

                        Combining her experiences and university training, Michelle integrates a holistic, family centred and evidence-based approach in her work. Her sessions are tailored to each individual’s needs with a focus on self-expression, emotional validation and relatedness to others through music. Michelle is empathetic and approachable with a passion for working with children and families, particularly in providing support to improve a child’s developmental outcomes through early intervention. She also enjoys working with adolescents – empowering young people to share their stories through the creative use of music and equipping individuals with resources to understand and improve their mental health.

                        Michelle is also fluent in Mandarin and is happy to deliver therapy in a bilingual mode.</p>
                </div>
                <div className='michelle-classification'>
                    <h3>Michelle How</h3>
                    <p>AMTA Registered Music Therapist, Master of Music Therapy <br/>
                    Bachelor of Music (Contemporary Performance), AMusA (Hons)
                    </p>
                </div>

            </div>
        </div>
    );
}

export default AboutPage;
