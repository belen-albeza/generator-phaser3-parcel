import Phaser from 'phaser'

import { SCREEN_WIDTH, SCREEN_HEIGHT } from './utils/constants'
import LoadingScene from './scenes/loading-scene'
import MainScene from './scenes/main-scene'

const config = {
  type: Phaser.AUTO,
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
  scale: {
    min: {
      width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT,
    },
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  <%= isPixelArt
    ? `pixelArt: true, // set to false for non-pixel games\n  zoom: 3, // set to 1 to keep original size\n  `
    : ''
  %>physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: [LoadingScene, MainScene],
}

window.onload = () => {
  // eslint-disable-next-line no-new
  new Phaser.Game(config)
}
