import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/navbar.tsx'
import Footer from './components/footer/footer.tsx'
import Home from './pages/home/home.tsx'
import About from './pages/about/about.tsx'
import Services from './pages/services/services.tsx'
import Projects from './pages/projects/project.tsx'
import Contact from './pages/contact/contact.tsx';
import NotFound from './pages/not-found/not-found.tsx';
import Login from './pages/loginForm/login/login.tsx';
import Signup from './pages/loginForm/signup/signup.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
 