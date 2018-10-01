Array.from(document.getElementsByTagName('render'), elem => {
  const scriptBody = elem.textContent
  elem.textContent = ''
  Promise.resolve((new Function(scriptBody))())
    .then(expression => {
      elem.textContent = expression
      elem.classList.add('rendered')
    })
    .catch(err => {
      console.warn(`Render error: ${err}`)
    })
})

Array.from(document.getElementsByTagName('norender'), elem => {
  elem.style.display = 'none'
})
