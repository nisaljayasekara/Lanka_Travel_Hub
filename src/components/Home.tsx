import React from 'react';
import homeimage from '../assets/home.webp'
import "../css/Home.css"
import Header from './Header';
const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <section className="hero" style={{ backgroundImage: `url(${homeimage})` }}>
        <h1>Unveil the Beauty of Sri Lanka</h1>
        <p>From Beaches to Mountains, Your Adventure Awaits</p>
        <a href="#" className="cta-btn">See more destinations</a>
      </section>

      {/* Uncomment if needed */}
      {/* <section className="booking-form">
        <h2>Book Your Next Adventure</h2>
        <BookingForm />
      </section> */}
    </div>
  );
};

export default Home;