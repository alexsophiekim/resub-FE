module.exports = function(grunt){
    grunt.initConfig({
        // pass in options to plugins, references to files
      jshint: {
          files: ['*.js', 'js/*.js','!js/*.js'],
          options: {
              globals: {
                  jQuery: true
              },
              esversion: 6
          }
      },
      csslint: {
          strict: {
            options: {
              import: 2,
              quiet: true
            },
            src: ['css/style.css']
          },
        },
        cssmin: {
          target: {
              files: [{
                  expand: true,
                  src: ['css/*.css', 'css/!*.min.css'],
                  dest: '',
                  ext: '.min.css'
              }]
          }
        },
        uglify:{
          my_target:{
              files: {
                  'js/script.min.js':['js/script.js']
              }
          }
        },
        watch: {
            css:{
                files: ['css/style.css','!css/*.min.js'],
                tasks: ['csslint']
            },
            js:{
                files: ['js/*.js', '!js/*.min.js'],
                tasks: ['jshint']
            }
        }
    });
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    // register tasks
    grunt.registerTask('checkJS', ['jshint']);
    grunt.registerTask('checkCSS',['csslint']);
    grunt.registerTask('minifyCSS', ['cssmin']);
    grunt.registerTask('minifyJS', ['uglify']);
    grunt.registerTask('runWatch', ['watch']);
};
