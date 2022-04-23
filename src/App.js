import About from './Components/About';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <About></About>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
