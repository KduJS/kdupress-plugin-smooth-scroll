import { Route } from 'kdu-router'
import '../styles/index.styl'

export default ({ Kdu, router }) => {
  router.options.scrollBehavior = (to: Route, from: Route, savedPosition: { x: number, y: number} | null) => {
    if (savedPosition) {
      return window.scrollTo({
        top: savedPosition.y,
        behavior: 'smooth',
      })
    } else if (to.hash) {
      if (Kdu.$kdupress.$get('disableScrollBehavior')) {
        return false
      }

      const targetElement = document.querySelector(to.hash)

      if (targetElement) {
        return window.scrollTo({
          top: getElementPosition(targetElement).y,
          behavior: 'smooth',
        })
      }

      return false
    } else {
      return window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
  }
}

function getElementPosition (el: Element) {
  const docEl = document.documentElement
  const docRect = docEl.getBoundingClientRect()
  const elRect = el.getBoundingClientRect()
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top,
  }
}
