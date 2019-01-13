import createSimulation from './js/simulation'
import './scss/style.scss'

const simulation = createSimulation({
  n: 10,
  container: document.getElementById('container'),
  width: 600,
  height: 400,
  scale: 1
})

simulation.start()