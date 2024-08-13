import logo from './logo.svg';
import './App.css';
import Header from "./Header";
import Tinder_cards from './Tinder_cards';

function App() {
  return (
    <div className="app">
      

      {/* Header */}
      <Header />
      {/* Swipe cards */}
      <Tinder_cards />
      {/* Swipe Buttons */}
    </div>
  );
}

export default App;
