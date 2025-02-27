import React from 'react';
import "../css/aboutUs.css"
import Header from './Header';
import pf1 from "../assets/profielpic.jpeg"
import pf2 from "../assets/profilepic2.jpeg"
import pf3 from "../assets/profilepic3.jpeg"


const AboutUs: React.FC = () => {

  
  return (
    <> <Header />
    <div className="about-us">
     
      <section className="hero">
       
        <h1>About Lanka Travel Hub </h1>
        <p>Discover our passion for exceptional travel experiences</p>
      </section>

      <section className="company-info">
        <div className="container">
          <h2>Our Story</h2>
          <p>
            Lanka Travel Hub was founded in 2010 with a mission to provide exceptional travel experiences to our clients. Our team of experienced travel experts is dedicated to crafting unique and unforgettable journeys that cater to your every need.
          </p>
          <p>
            Over the years, we have established ourselves as a leading travel agency in the region, known for our attention to detail, personalized service, and commitment to sustainable tourism. We believe that travel is not just about reaching a destination, but about the journey itself – the memories, the discoveries, and the connections made along the way.
          </p>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="member">
              <img src={pf1} alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
            <div className="member">
              <img src={pf2} alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Travel Consultant</p>
            </div>
            <div className="member">
              <img src={pf3} alt="Team Member 3" />
              <h3>Michael Johnson</h3>
              <p>Operations Manager</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Lanka Travel Hub. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
  
};

export default AboutUs;
