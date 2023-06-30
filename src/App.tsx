import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/app.scss';
import Header from './components/Header';
import IndexPage from './pages/Index';
import DemoPage from './pages/Demo';
import ContactUsPage from './pages/ContactUs';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 0);
    });
  }, []);

  return (
    <BrowserRouter>
      <Header scrolled={scrolled}/>
      
      <Routes>
        <Route path="/">
          <Route index element={<IndexPage />} />
          <Route path="demo" element={<DemoPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )  
}

export default App
