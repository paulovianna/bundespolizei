module.exports = function(grunt) {

	grunt.initConfig({

  	// Project variables
  	pkg 			: grunt.file.readJSON('package.json'),
  	sass_dir 		: 'src/sass/',
  	js_dir 			: 'src/js/',
  	components_dir 	: 'src/components/',
  	jquery			: '<%= components_dir %>' + 'jquery/',
  	bootstrap		: '<%= components_dir %>' + 'sass-bootstrap/',
  	chartjs			: '<%= components_dir %>' + 'nnnick-chartjs/',
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
    			//noLineComments: true,
    			outputStyle: 'expanded',
    		}
    	},
    },

    // Concat will join CSS and JS files into one.
    concat: {
    	css:{
    		src: ['src/css/*.css', '!src/css/<%= pkg.name %>.css'],
    		dest: 'src/css/<%= pkg.name %>.css'
    	},
    	js:{
    		options: {
    			separator: ';',
    			banner: '<%= banner %>',
    		},
    		src: ['src/js/*.js', '!src/js/<%= pkg.name %>.js'],
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
    	components:{
    		files:[
    		{ expand: true, flatten: true, src:'<%= bootstrap %>**/bootstrap.min.js', dest:'src/js/' },
    		{ expand: true, flatten: true, src:'<%= bootstrap %>**/fonts/*.*', dest:'assets/fonts/' },
    		{ expand: true, flatten: true, src:'<%= jquery %>**/jquery.min.js', dest:'src/js/' },
    		{ expand: true, flatten: true, src:'<%= chartjs %>**/Chart.min.js', dest:'src/js/' }
    		]
    	}
    },

    // Uglify will minify JS files and put on distribution folder.
    uglify: {
    	js:{
    		files:{
    			'assets/js/<%= pkg.name %>.min.js': 'src/js/<%= pkg.name %>.js',
    		}
    	}
    },

    // Watch will monitor changes and run tasks.
    watch: {
    	css: {
    		files: 'src/sass/*.scss',
    		tasks: ['compass:css', 'concat:css', 'cssmin:cs',],
    	},
    	bootstrap: {
    		files: 'src/sass/framework/*.scss',
    		tasks: ['compass:bootstrap', 'concat:css', 'cssmin:cs',]
    	},
    	js: {
    		files: 'src/js/*.js',
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
grunt.registerTask('build', ['compass:css', 'copy', 'concat', 'cssmin', 'uglify', ]);
grunt.registerTask('components', ['copy', 'concat:js', 'uglify']);
grunt.registerTask('css', ['compass:css', 'concat:css', 'cssmin',]);
grunt.registerTask('js', ['concat:js', 'uglify']);
grunt.registerTask('dev', ['watch',]);

};