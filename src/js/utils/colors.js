const rgbToInt = (r, g, b, a = 255) => (a << 24) | (b << 16) | (g << 8) | r

const hslToRgb = (h, s, l) => {
  if (h === undefined) return [0, 0, 0]

  const chroma = (1 - Math.abs((2 * l) - 1)) * s
  const huePrime = h / 60
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))

  const lightnessAdjustment = l - (chroma / 2)
  const getComponent = (value) => Math.round((value + lightnessAdjustment) * 255)

  const getR = huePrime => [chroma, secondComponent, 0, 0, secondComponent, chroma][huePrime]
  const getG = huePrime => [secondComponent, chroma, chroma, secondComponent, 0, 0][huePrime]
  const getB = huePrime => [0, 0, secondComponent, chroma, chroma, secondComponent][huePrime]

  const flooredPrime = Math.floor(huePrime)
  return [getComponent(getR(flooredPrime)), getComponent(getG(flooredPrime)), getComponent(getB(flooredPrime))]
}

const getPallete = (n) => {
  const difference = 360 / n
  let colors = [rgbToInt(255, 255, 255)]
  for (let i = 0; i < n; i++) {
    colors.push(rgbToInt(...hslToRgb(i * difference, 1, 0.5)))
  }
  return colors
}

export {
  rgbToInt,
  hslToRgb,
  getPallete
}