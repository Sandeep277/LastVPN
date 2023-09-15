import './App.css';
import Navbar from './componets/navbar/Navbar';
import Rac from './componets/rectangle/Rac';
import Hero from './hero/Hero';
import FeaturePage from './pages/FeaturePage';
import SocialPosts from './pages/SocialPosts';
import Footer from './pages/footer/Footer';
import Subscribe from './pages/subscribe/Subscribe';
import Testimonials from './pages/testimonials/Testimonials';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div id="about">
          <Hero />
        </div>
        <div id="rac">
          <Rac />
        </div>
        <div id="features">
          <FeaturePage />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="socialposts">
          <SocialPosts />
        </div>
        <div id="subscribe">
          <Subscribe />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
