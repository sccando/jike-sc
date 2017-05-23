module.exports = function(grunt) {

  // 任务配置
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/baidu.js',
        dest: 'build/baidu.min.js'
      }
    },
    concat:{
      bar:{
        src:['build/*.js'],
        dest:'dest/all.min.js'
      }
    },
    watch:{
      files:['js/baidu.js'],
      tasks:['uglilfy','concat']
    }
  });

  // 加载任务插件
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // 默认被执行的任务列表
  grunt.registerTask('default', ['uglify','concat','watch']);

};