// app.js

requirejs.config({
	//By default load any module IDs from js/lib
	baseUrl: window.app.js_filepath,
	//except, if the module ID starts with "app",
	//load it from the js/app directory. paths
	//config is relative to the baseUrl, and
	//never includes a ".js" extension since
	//the paths config could be for a directory.
	paths: {
		jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
		common: ['modules/common']
	},
	shim: {
		common:['jquery']
	},
	waitSeconds: 0
});
//Start common file
define(['common'],function(){});