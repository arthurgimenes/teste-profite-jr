module.exports = function( grunt ) {

  "user strict";

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    uglify : {
      options : {
        mangle : false
      },

      my_target : {
        files : {
          'assets/js/main.js' : [ 'assets/_js/script.js']
        }
      }
    }, // uglify

    imagemin: {
      static:{
        files: [{
          expand: true,
          cwd: 'assets/img',
          src: ['**/*.{png, jpg, gif}'],
          dest: 'assets/img'
        }]
      }
    }, //imagemin

    sass : {
      dist : {
        options : { style : 'compressed' },
        files : {
          'assets/css/style.css' : 'assets/scss/style.scss'
        }
      }
    }, // sass

    watch : {
      dist : {
        files : [
          'assets/_js/**/*',
          'assets/img/**/*',
          'assets/scss/style.scss
        ],

        tasks : [ 'uglify', 'imagemin', 'sass' ]
      }
    } // watch

  });


  // Plugins do Grunt
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );

  // Tarefas que serão executadas
  grunt.registerTask( 'default', [ 'uglify', 'imagemin', 'sass'] );

  //Tarefa Watch
  grunt.registerTask( 'w', [ 'watch' ] );

};
