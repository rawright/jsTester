module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['*.js', 'public/**/*.js', 'test/**/*.js'],
      options: {
        node: true,
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('default', ['jshint']);
};
