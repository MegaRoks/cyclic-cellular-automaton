import random from '../utils/random'
import { vonNeumann as directions } from './neighborhood'

const generateBeats = (n) => {
  var result = [...Array(n).keys()]
  result[0] = n
  return result
}

const init = (width, height, n) => {
  let generation = 0
  const world = Array(width*height).fill().map(() => random(1, n))
  const beats = generateBeats(n)
  const move = (i, j, direction) => {
    const { x, y } = directions[direction](i, j)
    if(x >= 0 && y >= 0 && x < width && y < height) {
      const attackerIndex = j * width + i
      const defenderIndex = y * width + x
      const attacker = world[attackerIndex]
      const defender = world[defenderIndex]
      if(attacker && (attacker !== defender && beats[defender-1] === attacker) || !defender) 
        world[defenderIndex] = attacker
    }
  }
  const next = () => {
    generation++
    for(let i = 0; i < width; i++)
      for(let j = 0; j < height; j++) {
        move(i, j, random(0, directions.length - 1))
      }
    return world
  }
  return { world, next, generation }
}

export default init
