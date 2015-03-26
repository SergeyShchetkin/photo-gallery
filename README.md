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

Copyright (c) 2015, Sergei Shchetkin All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of
conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
may be used to endorse or promote products derived from this software without specific prior written permission.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.