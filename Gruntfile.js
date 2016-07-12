module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        exec: {
            clean: {
                cwd: '',
                cmd: 'git clean -fxd'
            },

            npm: {
                cwd: '',
                cmd: 'npm install'
            }
        },

        webpack: {
            options : {
                stats : {
                    colors  : true,
                    modules : true,
                    reasons : true
                },

                progress    : true,
                failOnError : true,
                devtool     : 'source-map',

                keepAlive : false,
                watch     : false,

                module : {
                    loaders : [
                        {
                            test    : /\.jsx?$/,
                            exclude : /node_modules/,
                            loader  : 'babel?presets[]=react,presets[]=es2015'
                        }
                    ]
                }
            },

            build: {
                entry: {
                    index: './src/index.js'
                },

                output: {
                    path: 'public/js/',
                    filename: '[name]-bundle.js',
                    sourceMapFilename: '[file].map'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-webpack');

    // Default task(s).
    grunt.registerTask('default', [
        'exec:clean',
        'exec:npm',

        'webpack'
    ]);
};
