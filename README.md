# generator-phaser3-parcel

A [Yeoman](https://yeoman.io) generator for a [Phaser 3](https://phaser.io) project, with [Parcel](https://parceljs.org/) as bundler. It features ES6, eslint config, and a basic project skeleton with a loading screen.

## How to use

You need to **install globally** both Yeoman client and this generator:

```sh
npm install -g yo
npm install -g generator-phaser3-parcel
```

Then, run the generator with:

```sh
yo phaser3-parcel
```

After you answer some questions about the game you want to make, the following project structure will be created:

```sh
.
├── README.md
├── package.json
└── src
    ├── assets
    │   ├── audio
    │   └── images
    │       ├── character.png
    │       └── loading-bar.png
    ├── index.html
    ├── main.js
    ├── prefabs
    ├── scenes
    │   ├── loading-scene.js
    │   └── main-scene.js
    └── utils
        └── constants.js
```

**Install the dependencies** with your favourite package manager. For example:

```
npm install
```

You can run a **development build** with:

```
npm start
```

Once your game is ready to go, run a production build with:

```
npm run build
```

Happy coding! ✨🕹✨

## License

See `LICENSE` for details.
