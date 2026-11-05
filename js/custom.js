(function () {
  const rightside = document.getElementById('rightside')
  if (!rightside) return

  let lastY = window.scrollY
  let ticking = false

  window.addEventListener('scroll', () => {
    if (ticking) return
    ticking = true
    window.requestAnimationFrame(() => {
      const y = window.scrollY
      if (window.innerWidth <= 768 && y > 200 && y > lastY + 6) {
        rightside.classList.add('rightside-hidden')
      } else if (y < lastY - 6 || y <= 200) {
        rightside.classList.remove('rightside-hidden')
      }
      lastY = y
      ticking = false
    })
  }, { passive: true })
})()
