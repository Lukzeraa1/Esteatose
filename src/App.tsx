import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import FoodCategories from './components/FoodCategories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <FoodCategories />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
