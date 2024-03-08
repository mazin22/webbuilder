import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RelatedCardsSection from "./sections/RelatedCardsSection";
import WebsiteCardsSection from "./sections/WebsiteCardsSection";
import SignUpSection from "./sections/SignUpSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Header />
        <WebsiteCardsSection />
        <RelatedCardsSection />
        <SignUpSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
