import './App.css';
import Banner from './Banner/Banner';
import Creations from './Creations/Creations';
import Footer from './Footer/Footer';
import IntroSection from './IntroSection/IntroSection';

function App() {
  return (
    <div className="App">
      <Banner/>
      <IntroSection/>
      <Creations/>
      <Footer/>
    </div>
  );
}

export default App;
