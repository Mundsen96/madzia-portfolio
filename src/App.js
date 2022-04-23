import About from './Components/About';
import Footer from './Components/Footer';
import Gallery from './Components/Gallery';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="relative scroll-smooth font-mono">
      <Navbar></Navbar>
      <About></About>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
