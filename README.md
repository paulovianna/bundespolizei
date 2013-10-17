Bundespolizei
=============

# Requirements

Django 		== 	1.5.4

psycopg2 	== 	2.5.1

Compass		>=	0.12.2

Node 		>= 	0.10.19

# Installing

1. First make sure to have all the requirements installed.
1. Clone the repo.
1. Run "$ npm install" to fetch all node dependencies
1. Run "$ bower install" to fetch all bower dependencies

This will make sure every components and dependecies are installed.

# Grunt Tasks

You can run Grunt tasks by typing "$ grunt <taskname>".

1. Build - It will copy, build and minify all assets for the app
1. Components - It will copy bower components to src folder
1. CSS - It will compile, concat and minify SCSS files
1. JS - It will concat and minify all the JS files
1. Dev - It will enable the Watch task to monitor for changes in files while you code and save


