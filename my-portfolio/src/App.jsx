import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ContactUs from "./components/Contact";
import AboutUs from "./components/About";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <Footer></Footer>
      
    </>
  );
}

export default App;
