module.exports = function(grunt) {

	grunt.initConfig({
		//Remove a cópia do projeto antes de iniciar uma nova.
		clean: {
			main: ['build']
		},
		//Cria uma cópia do projeto.
		copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**', '!**/*.sass', '!**/*.scss'],
                    dest: 'build/'
                }]
            }
		},
		//Minificação das imagens.
		imagemin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['*.{png,jpg,gif}'],
                    dest: 'build/arquivos/'
                }]
            }
		},
		//Minificação CSS
	    cssmin: {
            main: {
                expand: true,
                cwd: 'src/styles/',
                src: ['*.css'],
                dest: 'build/'
            }
        },
		//
		sass: {
            
            build : {
                options : { 
                    style : 'compressed' 
                },
                files : {
                    'build/styles/teste-profite-jr.css' : 'src/styles/teste-profite-jr.scss'
                }
            }	
		},
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                force: true,
                globals: {
                    jQuery: true
                }
            },
            main: [
                'src/scripts/**/*.js',
            ]
        },
        uglify: {
            options: {
                compress: {
                    drop_console: false
                }
            },
            main: {
                src: [                    
                    'node_modules/jquery/dist/jquery.js',
                    'node_modules/jquery-migrate/dist/jquery-migrate.min.js',
                    'node_modules/slick-carousel/slick/slick.min.js',
                    'src/scripts/teste-profite-jr.js'                  
                ],
                dest: 'build/scripts/teste-profite-jr.js'
            }
        },
        concat: {
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/jquery-migrate/dist/jquery-migrate.min.js',
                    'node_modules/slick-carousel/slick/slick.min.js',
                    'src/scripts/**/*.js'
                ],
                dest: 'build/scripts/teste-profite-jr.js'
            },
        },
		//
        watch: {
            options: {
                livereload: true
            },
            images: {
                files: ['src/**/*.{png,jpg,gif}'],
                tasks: ['imagemin']
            },
            css: {
                files: ['build/**/*.css']
            },
            sass: {
                files: ['src/**/*.{scss,sass}'],
                tasks: ['sass']            	
            },
            main: {
                files: ['src/**/*.html', 'src/**/*.scss'],
                tasks: ['copy', 'concat']
            },
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['jshint', 'uglify']
            },
            grunt: {
                files: ['Gruntfile.js']
            }
        },
		//
		jshint: {

			js: {
				src: ['src/scripts/**/*.js']
			}
		}
	});
	//Automatiza tarefas.
	grunt.registerTask('build', ['clean', 'imagemin', 'jshint', 'uglify', 'sass']);
    grunt.registerTask('devJs', ['concat']);
	grunt.registerTask('default', ['build', 'watch']);
	//Carrega tasks.
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
}