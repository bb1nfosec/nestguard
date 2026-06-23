import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IcPhone, IcMail, IcPin, Check } from '../icons.jsx'
import { fadeUp } from './Reveal.jsx'
import { PHONE_INTL, PHONE_DISPLAY, EMAIL } from '../data.js'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const f = e.target
    if (!f.checkValidity()) {
      f.reportValidity()
      return
    }
    const fd = new FormData(f)
    const name = (fd.get('name') || '').trim()
    const phone = (fd.get('phone') || '').trim()
    const city = (fd.get('city') || '').trim()
    const service = fd.get('service') || ''
    const message = (fd.get('message') || '').trim()
    if (!name || !phone) {
      f.reportValidity()
      return
    }
    const lines = ['*New enquiry — NestGuard*', '', `Name: ${name}`, `Phone: ${phone}`]
    if (city) lines.push(`City: ${city}`)
    if (service) lines.push(`Service: ${service}`)
    if (message) lines.push('', `Message: ${message}`)
    const url = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section className="pad" id="contact">
      <div className="wrap">
        <motion.div
          className="cta"
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -8% 0px' }}
        >
          <div>
            <h2>Let's take the hassle off your hands.</h2>
            <p className="lead">Tell us about your property and the help you need. We work with owners across Coimbatore &amp; nearby cities — warmly, honestly, transparently.</p>
            <div className="lines">
              <a className="cl" href={`tel:+${PHONE_INTL}`}>
                <span className="ic"><IcPhone /></span>
                <div><small>Phone / WhatsApp</small><b>{PHONE_DISPLAY}</b></div>
              </a>
              <a className="cl" href={`mailto:${EMAIL}`}>
                <span className="ic"><IcMail /></span>
                <div><small>Email</small><b>{EMAIL}</b></div>
              </a>
              <div className="cl">
                <span className="ic"><IcPin /></span>
                <div><small>Location</small><b>Coimbatore, Tamil Nadu</b></div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="ok" className="form-ok" role="status" aria-live="polite"
                  initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="tick"><Check /></div>
                  <h4>Thank you!</h4>
                  <p>WhatsApp should have opened with your enquiry. If it didn't, just call or message us at <b>{PHONE_DISPLAY}</b>.</p>
                </motion.div>
              ) : (
                <motion.div key="fields" exit={{ opacity: 0 }}>
                  <label htmlFor="f-name">Name <span className="req" aria-hidden="true">*</span></label>
                  <input id="f-name" name="name" required aria-required="true" placeholder="Your name" autoComplete="name" />
                  <label htmlFor="f-phone">Phone <span className="req" aria-hidden="true">*</span></label>
                  <input id="f-phone" name="phone" type="tel" required aria-required="true" placeholder="Phone" inputMode="tel" autoComplete="tel" />
                  <label htmlFor="f-city">City</label>
                  <input id="f-city" name="city" placeholder="Your city" autoComplete="address-level2" />
                  <label htmlFor="f-service">I need help with</label>
                  <select id="f-service" name="service" defaultValue="">
                    <option value="">Select a service (optional)</option>
                    <option>Property Management</option>
                    <option>Rental &amp; Lettings</option>
                    <option>Maintenance &amp; Repairs</option>
                    <option>Legal &amp; Documentation</option>
                    <option>NRI Services</option>
                    <option>Investment &amp; Advisory</option>
                  </select>
                  <label htmlFor="f-msg">Message</label>
                  <textarea id="f-msg" name="message" placeholder="Tell us about your property…" />
                  <button className="btn btn-terra" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                    Send enquiry via WhatsApp →
                  </button>
                  <p className="field-hint">Opens WhatsApp with your details ready to send. We'll reply quickly.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
