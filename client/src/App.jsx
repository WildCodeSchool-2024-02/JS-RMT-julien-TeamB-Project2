import "./App.css";
import Navigation from "./components/Navigation";
import NewsCard from "./components/NewsHome";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bgColorMain">
      <Navigation />
      <h1 className="styleTitleH1">Bienvenue</h1>
      <NewsCard />
      <Footer />
    </main>
  );
}

export default App;
