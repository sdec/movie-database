module.exports = function (grunt) {

    //imagemin plugin
    var imageminplugin = require('imagemin-mozjpeg');

    //CONFIGURATION
    grunt.initConfig({
        connect: {
            app:{
                options: {
                    base: 'app',
                    port: 8080,
                    hostname: 'localhost',
                    open: true,
                    livereload: true
                }
            }
        },
        watch: {
            static: {
                files: ['app/**/*.html', 'app/js/**/*.*', 'app/css/**/*.*', 'app/img/**/*.*', '!app/bower_components/**/*'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: ['app/style/*.scss'],
                tasks: ['sass']
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'app/style',
                    src: ['*.scss'],
                    dest: 'app/style',
                    ext: '.css'
                }]
            }
        },
        imagemin: {
            static:{
                options: {
                    optimizationLevel : 3,
                    use: [imageminplugin()]
                }
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['**/*.{png,jpg,jpeg,gif,PNG,JPG,GIF,JPEG}', '!bower_components/**/*.{png,jpg,jpeg,gif,PNG,JPG,GIF,JPEG}'],
                    dest: 'dist/'
                }]
            }
        },
        jshint: {
            options: {
                curly: true,            // Curly brackets verplicht rond blokken code
                eqeqeq: true,           // Altijd === en !== i.p.v. == en !=
                browser: true,          // Houdt rekening met globals
                globals: {              // Voorgedefinieerde globals
                    jQuery: true,
                    angular: true
                }
            },
            uses_defaults: ['app/js/**/*.*']
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [
                    {
                        expand: true,
                        cwd: 'app/',
                        src: ['**/*.html', '!bower_components/**/*.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/js/app.min.js' : 'dist/js/app.js'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: 'app/js/**/*.js',
                dest: 'dist/js/app.js'
            }
        },
        copy: {
            main: {
                src: 'app/robots.txt',
                dest: 'dist/robots.txt'
            }
        }
    });

    //LOAD PLUGINS
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');

    //TASKS
    grunt.registerTask('default', ['jshint', 'connect', 'sass', 'watch']);
    grunt.registerTask('build', ['htmlmin','concat','uglify', 'copy']);
};

