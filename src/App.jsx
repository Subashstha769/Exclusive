import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Contact", path: "/contact" },
    { id: 3, name: "About", path: "/about" },
    { id: 4, name: "Sign Up", path: "/sign" }
  ];
  return (
    <BrowserRouter>
      <Header navLinks={navLinks} />
       <main className="w-screen ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </main> 
      <Footer />
    </BrowserRouter>




  );
}
export default App;