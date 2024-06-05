import { useLoaderData } from "react-router-dom";
import Navigation from "./components/Navigation";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const carouselData = useLoaderData();
  return (
    <main className="bgColorMain">
      <Navigation />
      <Carousel carouselData={carouselData} />
      <h1 className="styleTitleH1">Bienvenue</h1>
      <Footer />
    </main>
  );
}

export default App;
