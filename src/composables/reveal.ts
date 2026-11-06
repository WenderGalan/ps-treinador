import type { Directive } from 'vue'
const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches
let io: IntersectionObserver | null = null
export const vReveal: Directive<HTMLElement, number | undefined> = {
  mounted(el, b) {
    if (reduce()) return
    el.classList.add('rv'); if (b.value) el.style.transitionDelay = `${b.value}ms`
    io ??= new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('rv-in'); io!.unobserve(e.target) } }), { threshold: .15 })
    io.observe(el)
  },
}
