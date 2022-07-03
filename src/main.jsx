import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
            index
            element={
                <Home />
            }
            />
              <Route path="about_saintdom" element={<About />} />
              <Route path="contact_saintdom" element={<Contact />} />
      </Route>
    </Routes>
    <Footer />
  </BrowserRouter>
)
