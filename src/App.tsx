import {} from 'react';
import Header from './components/Header';
import DestinationList from './components/DestinationList';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Our Travel Agency</h1>
        <DestinationList />
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
