module.exports = function(grunt) {
  grunt.initConfig({
    stylus: {
      compile: {
        files: {
          'stylesheets/style.css': 'stylesheets/style.styl'
        }
      }
    },

    watch:  {
      styles: {
        files: 'stylesheets/*.styl',
        tasks: ['default']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['stylus']);
}
