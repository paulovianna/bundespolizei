module.exports = function(grunt) {

    grunt.initConfig({

        // Project variables
        pkg: grunt.file.readJSON('package.json'),


        //* Tasks Configurations: *//

        // Compass task will compile the SCSS code to CSS.
        compass: {
            css:{
                options: {
                    config: 'config.rb',
                    noLineComments: true
                }
            }
        },


        //CSSMin task will minify the main CSS file and put on distribution folder.
        cssmin: {
            css: {
                options: {
                    report: 'min',
                    keepSpecialComments: 0
                },
                files:{
                    'assets/css/<%= pkg.name %>.min.css': ['assets/css/truss.css']
                }
            }
        },


        // Concat will join JS files into one.
        concat: {
            js:{
                src: 'src/js/*.js',
                dest: 'assets/js/<%= pkg.name %>.js'
            }
        },


        // Uglify will minify JS files and put on distribution folder.
        uglify: {
            js:{
                options:{
                    report: 'min'
                },
                files:{
                    'assets/js/<%= pkg.name %>.min.js': ['assets/js/<%= pkg.name %>.js']
                }
            }
        },

        // Imagemmin will compress images size.
        imagemin: {

            build: {
                options:{
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'src/img',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'assets/img'
                }]
            }
        },

        htmlmin: {
            geoliberty: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'geoliberty/templates/home.html' : 'src/html/home.html',
                    'geoliberty/templates/base.html' : 'src/html/base.html',
                    'geoliberty/templates/inicio.html' : 'src/html/inicio.html',
                    'geoliberty/templates/lista.html' : 'src/html/lista.html',
                    'geoliberty/templates/mapa.html' : 'src/html/mapa.html',
                    'geoliberty/templates/regiao_geopolitica.html' : 'src/html/regiao_geopolitica.html',
                    'geoliberty/templates/regioes_geopoliticas.html' : 'src/html/regioes_geopoliticas.html',
                }
            },
          },


        // Watch will monitor changes and run tasks.
        watch: {
            html:{
                files: 'src/html/*.html',
                tasks: 'htmlmin',
            },
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['compass:css', 'cssmin:css']
            },
            js: {
                files: ['src/js/*.js'],
                tasks: ['concat:js','uglify:js']
            },
            img: {
                files: ['src/img/*.png', 'src/img/*.jpg'],
                tasks: 'imagemin'
            }
        }

    });

    // Loading Tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Registering Task groups to call with command line
    grunt.registerTask('build', ['compass', 'cssmin', 'concat', 'uglify', 'imagemin', 'htmlmin']);
    grunt.registerTask('css', ['compass:css', 'cssmin']);
    grunt.registerTask('js', ['concat:js', 'uglify:js']);
    grunt.registerTask('dev', 'watch');
    grunt.registerTask('default', 'build');

};
