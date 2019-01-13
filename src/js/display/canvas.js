const createCanvas = (container, width, height, scale = 1) => {
  const setSize = (width, height, scale = 1) => {
    domElement.setAttribute('width', width)
    domElement.setAttribute('height', height)
    domElement.setAttribute('style', `width: ${width*scale}; height: ${height*scale}; image-rendering: pixelated;`)
  }

  const domElement = document.createElement('canvas')
  setSize(width, height, scale)
  container.appendChild(domElement)

  return {
    domElement,
    setSize
  }
}

export default createCanvas