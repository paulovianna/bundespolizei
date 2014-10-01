module.exports = function(grunt) {

	grunt.initConfig({

  	// Project variables
  	pkg 			: grunt.file.readJSON('package.json'),
  	sass_dir 		: 'src/sass/',
  	js_dir 			: 'src/js/',
  	components_dir 	: 'src/components/',
  	jquery			: '<%= components_dir %>' + 'jquery/',
  	bootstrap		: '<%= components_dir %>' + 'sass-bootstrap/',
    // Banner to be included on compressed and compiled files
    banner 			: '/**\n' +
    				  '* <%= pkg.name %> v<%= pkg.version %> \n' +
    				  '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.name %> \n' +
    				  '* @contributors: { \n*    <%= pkg.contributors.join(",\\n*    ") %> \n* }\n' +
    				  '*/\n',

    //* Tasks Configurations: *//

    // Compass task will compile the SCSS code to CSS.
    compass: {
    	css:{
    		options: {
    			config: 'config.rb',
                specify: ['src/sass/base.scss', 'src/sass/responsive.scss'],
                noLineComments: true,
    		}
    	},
        bootstrap:{
            options:{
                config: 'config.rb',
                specify: 'src/sass/bootstrap/bootstrap.scss',
                noLineComments: true,
            }
        }
    },

    // Concat will join CSS and JS files into one.
    concat: {
    	css:{
    		src: [ 'src/css/bootstrap/bootstrap.css', 'src/css/base.css', 'src/css/responsive.css', '!src/css/<%= pkg.name %>.css', 'src/css/chosen.css'],
    		dest: 'src/css/<%= pkg.name %>.css'
    	},
    	js:{
    		options: {
    			separator: ';',
    			banner: '<%= banner %>',
    		},
    		src: ['src/js/*.js', '!src/js/<%= pkg.name %>.js', '!src/js/jquery.min.js'],
    		dest: 'src/js/<%= pkg.name %>.js'
    	}
    },

    //CSSMin task will minify the main CSS file and put on distribution folder.
    cssmin: {     
    	css: {
    		options: {
    			banner: '<%= banner %>',
    			keepSpecialComments: '*'
    		},
    		files:{
    			'assets/css/<%= pkg.name %>.min.css': ['src/css/<%= pkg.name %>.css']
    		}
    	}
    },

    // Copy will copy JS files from bower to src folder.
    copy: {
        bootstrap:{
            files:[
                { expand: true, flatten: true, src:'<%= bootstrap %>fonts/*.*', dest:'assets/fonts/' },
                { expand: true, flatten: true, src:'<%= bootstrap %>**/bootstrap.min.js', dest:'src/js/' },
            ]
        },
        jquery:{
    		files:[
    		{ expand: true, flatten: true, src:'<%= jquery %>**/jquery.min.js', dest:'assets/js/' },
    		]
    	}
    },

    // Uglify will minify JS files and put on distribution folder.
    uglify: {
    	js:{
    		files:{
    			'assets/js/<%= pkg.name %>.min.js': ['src/js/<%= pkg.name %>.js'],
    		}
    	}
    },

    // Watch will monitor changes and run tasks.
    watch: {
    	css: {
    		files: ['src/sass/**/*.scss', '!(src/sass/boostrap/*.scss)'],
    		tasks: ['compass:css', 'concat:css', 'cssmin:css',],
    	},
    	bootstrap: {
    		files: 'src/sass/bootstrap/*.scss',
    		tasks: ['compass:bootstrap', 'concat:css', 'cssmin:css',]
    	},
    	js: {
    		files: ['src/js/*.js', '!src/js/<%= pkg.name %>.js'],
    		tasks: ['concat:js','uglify:js',]
    	},
    	components:{
    		files:[
    		'<%= bootstrap %>**/bootstrap.min.js',
    		'<%= jquery %>**/jquery.min.js',
    		'<%= chartjs %>**/Chart.min.js'
    		],
    		tasks: ['copy:components',]
    	}
    }

});

// Loading Tasks
grunt.loadNpmTasks('grunt-contrib-compass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-uglify');

// Registering Task groups to call with command line
grunt.registerTask('default', '');  
grunt.registerTask('build', ['compass', 'copy', 'concat', 'cssmin', 'uglify', ]);
grunt.registerTask('components', ['copy', 'concat:js', 'uglify']);
grunt.registerTask('bootstrap', ['compass:bootstrap', 'concat:css', 'cssmin',]);
grunt.registerTask('css', ['compass:css', 'concat:css', 'cssmin',]);
grunt.registerTask('js', ['concat:js', 'uglify']);
grunt.registerTask('dev', ['watch',]);

};