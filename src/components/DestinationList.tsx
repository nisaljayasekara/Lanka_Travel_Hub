import {} from 'react';

import galleImage from '../assets/Galle.jpg';
import allaImage from '../assets/alla.jpg';
import anuradapuraImage from '../assets/Anuradhapura.jpg';

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
];

const DestinationList = () => {
  return (
    <section>
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
