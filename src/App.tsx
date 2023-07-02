import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './styles/app.scss';
import { routeCodes } from './routes'

import Header from './components/Header';
import IndexPage from './pages/Index';
import DemoPage from './pages/Demo';
import ContactUsPage from './pages/ContactUs';
import VerifyPage from './pages/Verify'

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
        <Route path={routeCodes.HOME}>
          <Route index element={<IndexPage />} />
          <Route path={routeCodes.DEMO} element={<DemoPage />} />
          <Route path={routeCodes.VERIFY} element={<VerifyPage />} />
          <Route path={routeCodes.CONTACT} element={<ContactUsPage />} />
        </Route>
      </Routes>

    </BrowserRouter>
  )  
}

export default App
