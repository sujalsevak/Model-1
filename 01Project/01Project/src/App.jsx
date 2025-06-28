import Header from "./Compoents/Header/Header"
import Footer from "./Compoents/Footer/Footer"
import Teachers from "./Compoents/Teachers/Teachers"
import Contact from "./Compoents/Contact/Contect"
import Home from "./Compoents/Home/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </Router>
    </>
      
  )
}

export default App
