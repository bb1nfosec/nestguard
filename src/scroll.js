// Scroll to top via Lenis when available (smooth momentum), else native.
export function scrollToTop() {
  if (window.__lenis) window.__lenis.scrollTo(0)
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
