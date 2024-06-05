import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="bgColorMain">
      <Navigation />
      <Carousel />
      <h1 className="styleTitleH1">Bienvenue</h1>
      <Footer />
    </main>
  );
}

export default App;
