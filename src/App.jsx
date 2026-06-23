import { MotionConfig } from 'framer-motion'
import SmoothScroll from './components/SmoothScroll.jsx'
import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Strip from './components/Strip.jsx'
import Services from './components/Services.jsx'
import Stats from './components/Stats.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import NRI from './components/NRI.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingActions from './components/FloatingActions.jsx'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll />
      <Cursor />
      <a className="skip" href="#main">Skip to content</a>
      <ScrollProgress />
      <Nav />
      <main id="main">
        <Hero />
        <Strip />
        <Services />
        <Stats />
        <HowItWorks />
        <NRI />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </MotionConfig>
  )
}
