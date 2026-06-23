// Inline SVG icons used across the site. Kept as small components so markup
// stays readable. `aria-hidden` everywhere — these are decorative.
const s = { 'aria-hidden': true }

export const HouseMark = () => (
  <svg viewBox="0 0 24 24" fill="none" {...s}>
    <path d="M3 11.5 12 4l9 7.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 10v9h14v-9" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const Whatsapp = ({ size = 24, fill = '#fff' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} {...s}>
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .3-3.3-.7s-3.7-3.4-3.8-3.5-1-1.3-1-2.5.6-1.8.9-2 .5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.5c-.2.2-.3.4-.1.7s.7 1.2 1.5 1.9c1 .9 1.8 1.1 2.1 1.3.2.1.4.1.6-.1l.7-.8c.2-.3.4-.2.6-.1l1.9.9c.2.1.4.2.5.3 0 .2 0 .9-.2 1.3Z" />
  </svg>
)

export const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" {...s}><path d="m5 12 5 5L20 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export const HouseLine = ({ stroke = 'currentColor' }) => (
  <svg viewBox="0 0 24 24" fill="none" {...s}><path d="M3 11 12 3l9 8M5 9.5V21h14V9.5M9 21v-6h6v6" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export const Rupee = ({ stroke = '#fff' }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...s}><path d="M12 3v18M7 8h7a3 3 0 0 1 0 6H8" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

export const Shield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...s}><path d="M12 2 4 6v6c0 5 8 8 8 8s8-3 8-8V6l-8-4Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></svg>
)

// Service icons
export const IcManage = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M3 11 12 4l9 7M5 10v10h14V10" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
export const IcRental = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
export const IcRepair = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="m14 6 4 4M3 21l4-1 11-11-3-3L4 17l-1 4Z" stroke="#2C2A26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
export const IcLegal = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M6 3h9l4 4v14H6zM14 3v5h5" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /></svg>)
export const IcNri = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2" /><path d="M2 12h20M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="#fff" strokeWidth="2" /></svg>)
export const IcInvest = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M4 19V9m5 10V5m5 14v-7m5 7V8" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>)

// NRI row icons
export const IcClock = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
export const IcList = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M5 7h14M5 12h14M5 17h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)

// Contact icons
export const IcPhone = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M5 4h3l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>)
export const IcMail = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.8" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.8" /></svg>)
export const IcPin = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.8" /></svg>)

export const Menu = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>)
export const ArrowUp = () => (<svg viewBox="0 0 24 24" fill="none" {...s}><path d="M12 19V5M6 11l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>)
