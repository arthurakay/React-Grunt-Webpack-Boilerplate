# React / Grunt / Webpack Boilerplate

A project template for creating React applications using Grunt and webpack.

## Dependencies

The UI is built using React, so you'll need to install Babel to compile the JSX into JavaScript:

    npm install -g babel-cli

The project also use `grunt` for the build process.

    npm install -g grunt-cli

Then install `npm` dependencies and other stuff:

    npm install

To build, run the following command:

    grunt

Build outputs to `public/js/`.

## Running the Example

The general idea is that anything under `/public/` would be your production application. 

Running `grunt` compiles the JSX into browser-readable JavaScript; you'll notice that `/public/index.html` uses the
script `/public/js/index-bundle.js`.

Start a web server in the `/public/` folder and see how things "just work". You'll even have a source-map to debug your
ES2015 code!

## Start your own project

Using Grunt, you can easily clone the bits you'll need to start your own project.

Run `grunt clone` -- this will create a folder `/_clone/` which you can move into your own project.

* Be sure to edit the file `/_clone/package.json` so the information is accurate!
* Modify `/_clone/Gruntfile.js` as needed for your own project
* After moving `/_clone/` to your own project folder, run `npm install` to install the `npm` dependencies
* Start coding your own project!