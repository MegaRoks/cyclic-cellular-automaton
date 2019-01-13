const create = (animationLoop) => {
  let requestId
  const loop = () => {
    animationLoop()
    requestId && next()
  }
  const next = () => requestAnimationFrame(loop)
  const start = () => requestId = requestId || next()
  const stop = () => requestId = cancelAnimationFrame(requestId)
  return {
    start,
    stop
  }
}

export default create