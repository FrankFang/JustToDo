module.exports = (grunt) ->
    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'
        coffee:
            compile:
                expand: true
                flatten: true
                cwd: 'convertor'
                src: ['*.coffee']
                dest: 'convertor/'
                ext: '.js'
        watch:
            files:['convertor/*.coffee']
            tasks:['coffee']

    grunt.loadNpmTasks 'grunt-contrib-coffee'
    grunt.loadNpmTasks 'grunt-contrib-watch'

    grunt.registerTask 'default',['coffee','watch']

    return
