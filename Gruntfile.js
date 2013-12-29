module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: ['*.js', 'src/**/*.js', 'test/**/*.js', 'spec/**/*.js'],
      options: {
        node: true,
        globals: {
          console: true,
          module: true,
          document: true
        }
      }
    },
    concat: {
      options: {
        separator: "\n",
        stripBanners: true,
        banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '<%= pkg.description %> */\n\n',
      },
      dist: {
        src: [
          'src/jsTester.js'
          ],
        dest: 'dist/jsTester.js',
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('dist', ['concat']);
  grunt.registerTask('default', ['jshint', 'concat']);
};
