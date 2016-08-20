module.exports = function(grunt) {

  grunt.initConfig({

    less: {
      options: {
        cleancss: true
      },
      main: {
        files: {
          'build/css/style.css': 'src/less/style.less'
        }
      }
    },

    copy: {
      main: {
        files: [
          {expand: true, cwd: "node_modules/bootstrap/fonts/", src: '**', dest: 'build/fonts/'},
          {expand: true, cwd: "node_modules/font-awesome/fonts/", src: '**', dest: 'build/fonts/'},
          {expand: true, cwd: "node_modules/octicons/octicons/", src: '*.eot', dest: 'build/fonts/'},
          {expand: true, cwd: "node_modules/octicons/octicons/", src: 'octicons.woff', dest: 'build/fonts/'},
          {expand: true, cwd: "node_modules/octicons/octicons/", src: '*.ttf', dest: 'build/fonts/'},
          {expand: true, cwd: "src/images/", src: '**', dest: 'build/'}
        ]
      },
      dist: {
        files: [
          {expand: true, cwd: ".", src: 'index.html', dest: 'dist/'},
          {expand: true, cwd: "build/css/", src: '**', dest: 'dist/build/css/'},
          {expand: true, cwd: "build/fonts/", src: '**', dest: 'dist/build/fonts/'},
          {expand: true, cwd: "build/js/", src: '**', dest: 'dist/build/js/'}
        ]
      }
    },

    watch: {
      less: {
        files: 'src/less/*',
        tasks: ['less'],
      }
    },

    clean: {
      build: ["build/"],
      dist: ["dist/"]
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['less', 'copy:main']);
  grunt.registerTask('release', ['build']);
  grunt.registerTask('dist', ['release', 'clean:dist', 'copy:dist']);
};
