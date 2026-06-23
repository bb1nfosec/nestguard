import { HouseMark } from '../icons.jsx'
import { PHONE_INTL, PHONE_DISPLAY, EMAIL } from '../data.js'
import { scrollToTop } from '../scroll.js'

export default function Footer() {
  const toTop = (e) => {
    e.preventDefault()
    scrollToTop()
  }
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="col brandcol">
            <button className="brand" onClick={toTop} aria-label="NestGuard home">
              <span className="mark"><HouseMark /></span>NestGuard
            </button>
            <p className="foot-about">Honest, friendly property management for owners, NRIs and busy professionals across Coimbatore &amp; nearby cities. No hidden charges, ever.</p>
          </div>
          <div className="col">
            <h5>Services</h5>
            <a href="#services">Property Management</a>
            <a href="#services">Rental &amp; Lettings</a>
            <a href="#services">Maintenance &amp; Repairs</a>
            <a href="#nri">NRI Services</a>
          </div>
          <div className="col">
            <h5>Get in touch</h5>
            <a href={`tel:+${PHONE_INTL}`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
            <p>Coimbatore, Tamil Nadu</p>
          </div>
        </div>
        <div className="foot">
          <span>© {new Date().getFullYear()} NestGuard · Coimbatore &amp; nearby cities</span>
          <span style={{ color: 'var(--terra-text)', fontWeight: 600 }}>No hidden charges, ever.</span>
        </div>
      </div>
    </footer>
  )
}
