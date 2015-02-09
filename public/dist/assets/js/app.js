/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * gulp
 * Last Update: Mon Feb 09 2015 16:04:45 GMT-0600 (CST) 
 * @author David Nuñez
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
requirejs.config({baseUrl:window.app.js_filepath,paths:{jquery:"http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min",common:["modules/common"]},shim:{common:["jquery"]},waitSeconds:0}),define(["common"],function(){});