import './App.css';
import Header from './components/Header';
import FoodList from './components/FoodList';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <FoodList />
      <About />
      <Footer />
    </div>
  );
}

export default App;