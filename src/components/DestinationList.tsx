import {} from 'react';
import Header from './Header';
import "../css/destination.css"
import galleImage from '../assets/Galle.jpg';
import allaImage from '../assets/alla.jpg';
import anuradapuraImage from '../assets/Anuradhapura.jpg';
import yalaImage from '../assets/yala.jpg'
import nuwaraImage from '../assets/Nuwara-Eliya.jpg'
import GalleImage from '../assets/Galle.jpg'


const destinations = [
  { id: 1, name: 'Galle', description: ' The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura was the first historical capital of Sri Lanka' ,
    image : galleImage
    
  },


  { id: 2, name: 'Alla', description: 'The anction city' ,
    image : allaImage
  },


  { id: 3, name: 'Anuradapura', description: 'beautifull city' ,
    image : anuradapuraImage
   },

   { id: 4, name: 'Anuradapura', description: 'beautifull city' ,
    image : yalaImage
   },

   { id: 4, name: 'Anuradapura', description: 'beautifull city' ,
    image : nuwaraImage
   },

   { id: 4, name: 'Anuradapura', description: 'beautifull city' ,
    image : GalleImage
   },




];

const DestinationList = () => {
  return (
    <section>
      <Header />
      <h2>Popular Destinations</h2>
      <ul>
        {destinations.map(destination => (
          <li key={destination.id}>
            <img src={destination.image} alt={destination.name} style={{ width: '300px', height: '200px' }} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
          </li>
        ))}
      </ul>
    </section>
    
  );
};

export default DestinationList;
