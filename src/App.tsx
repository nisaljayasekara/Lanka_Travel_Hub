import {} from 'react';
import Header from './components/Header';

import BookingForm from './components/BookingForm';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Our Travel Agency</h1>
        
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
