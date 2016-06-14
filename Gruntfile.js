module.exports = function(grunt) {
    var config, errorHandler, name, open, pkg, taskArray, taskName, tasks, verbose, _results;
    pkg = grunt.file.readJSON('package.json');
    verbose = grunt.option('verbose');
    storename = pkg.accountName;

    config = {
        clean: {
            main: ['build']
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'src/assets/scss/',
                    cssDir: 'build/assets/css/',
                    imagesDir: 'src/assets/img/',
                    sourcemap: false
                }
            }
        },
        csscss: {
            options: {
                colorize: true,
                verbose: true,
                outputJson: false,
                minMatch: 5
            },
            dist: {
                src: ['src/assets/scss/**/*.scss']
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/js/',
                    src: ['**/*.js', ],
                    dest: 'build/assets/js/',
                    ext: '.js'
                }]
            }
        },
        imagemin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/assets/img'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/cache/',
                        src: ['**'],
                        dest: 'build/assets/cache/'
                    }
                    ]
                }
            },

            watch: {
                options: {
                    livereload: 1337
                },
                compass: {
                    files: ['src/assets/scss/**/*.scss'],
                    tasks: ['compass']
                },


            css: {
                files: ['build/css/**/*.css']
            },
            js: {
                files: ["src/assets/js/**/*.js"],
                tasks: ["uglify"]
            },
            main: {
                files: ['src/cache/**/*.html'],
                tasks: ['copy']
            }
        }
    };

    tasks = {
        build: ['clean', 'uglify','compass', 'csscss', 'imagemin', 'copy'],
        "default": ['build', 'watch']
    };
    grunt.initConfig(config);
    for (name in pkg.devDependencies) {
        if (name.slice(0, 6) === 'grunt-') {
            grunt.loadNpmTasks(name);
        }
    }
    _results = [];
    for (taskName in tasks) {
        taskArray = tasks[taskName];
        _results.push(grunt.registerTask(taskName, taskArray));
    }
    return _results;
};
