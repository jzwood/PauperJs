Array.from(document.getElementsByTagName('render'), jsElem => {
  const content = jsElem.textContent
  jsElem.textContent = ' '
  Promise.resolve((new Function(content))())
    .then(expression => {
      jsElem.textContent = expression
    })
    .catch(err => {
      console.warn(`Render error: ${err}`)
    })
})
