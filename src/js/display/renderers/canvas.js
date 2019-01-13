const createRenderer = (canvas) => {
  const {
    width,
    height
  } = canvas
  const context = canvas.getContext('2d')
  context.imageSmoothingEnabled = false
  var imageData = context.getImageData(0, 0, width, height)
  var buf = new ArrayBuffer(imageData.data.length)
  var buf8 = new Uint8ClampedArray(buf)
  var data = new Uint32Array(buf)
  const render = (world, colors) => {
    for (let i = 0; i < world.length; i++)
      data[i] = colors[world[i]]
    imageData.data.set(buf8);
    context.putImageData(imageData, 0, 0)
  }
  return {
    render
  }
}

export default createRenderer