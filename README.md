Photo-Gallery
=============

Photo-Gallery - photo gallery using the framework [ReactJS](dev-server.js).

At the root of the project need to create a configuration file node-server `dev-server.js`, can be used as a basis for `dev-server-sample.js`.
To deploy the project to first carry out the assembly and installation of all components necessary for operation.

To do this, you must have installed `Node.JS` system.

__Installation:__

```sh
$ npm install
$ bower install
```

The result will be formed two directories:

1. vendor - components bower.

2. node-modules - components npm.

__Building:__

Building packages implemented using [Webpack](http://webpack.github.io/).

```sh
$ node build.js
```

As a result, the directory will be created `build/` and `dist/`, containing all components necessary for operation.

__Project structure:__

```
photo-gallery/
    /- src/
        /- js/
        /- jsx/
        /- styles/
        /- index.html
    /- .bowerrc
    /- bower.json
    /- build.config.js
    /- build.js
    /- copy-settings.js
    /- dev-server-sample.js
    /- package.json
    /- webpack.config.js
```

__Starting the server:__

```sh
$ node dev-server.js
```

License
-------

GPL v3