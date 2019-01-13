import createCanvas from './display/canvas'
import createRenderer from './display/renderers/canvas'
import createAutomaton from './automaton'
import createAnimation from './display/animation'
import { getPallete } from './utils/colors'

const createSimulation = ({
  n,
  container,
  width,
  height,
  scale
}) => {
  const canvas = createCanvas(container, width, height, scale)
  const renderer = createRenderer(canvas.domElement)
  const automaton = createAutomaton(width, height, n)
  const colors = getPallete(n)
  const animation = createAnimation(() => renderer.render(automaton.next(), colors))

  return {
    start: animation.start,
    stop: animation.stop
  }
}

export default createSimulation