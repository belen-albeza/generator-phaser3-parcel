const Generator = require('yeoman-generator')
const mkdirp = require('mkdirp')

class PhaserGenerator extends Generator {
  constructor(args, options) {
    super(args, options)
  }

  async promptUser() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your game's title?",
        default: 'Awesome Game',
      },
      {
        type: 'confirm',
        name: 'isPixelArt',
        message: 'Does your game use pixel art?',
        default: true,
      },
    ])
  }

  writing() {
    const size = this.answers.isPixelArt
      ? { width: 256, height: 128 }
      : { width: 800, height: 600 }

    const files = [
      { path: 'package.json', data: { packageName: this.appName } },
      { path: 'src/index.html', data: { title: this.answers.name } },
      { path: 'src/main.js', data: { isPixelArt: this.answers.isPixelArt } },
      { path: 'src/utils/constants.js', data: size },
      { path: 'README.md', data: { title: this.answers.name } },
      { path: 'src/scenes/' },
      { path: 'src/assets/images/' },
    ]

    files.forEach(file => {
      if (file.path) {
        this.fs.copyTpl(
          this.templatePath(file.path),
          this.destinationPath(file.path),
          file.data
        )
      } else {
        this.fs.copy(
          this.templatePath(file.path),
          this.destinationPath(file.path)
        )
      }
    })

    // create empty folders
    mkdirp.sync('src/prefabs')
    mkdirp.sync('src/assets/audio')
  }
}

module.exports = PhaserGenerator
