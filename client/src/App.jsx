import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import NewsCard from "./components/NewsHome";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="bgColorMain bgSizeWeb">
      <Navigation />
      <Carousel />
      <NewsCard />
      <Footer />
    </main>
  );
}

export default App;
