// JavaScript Document
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}
var carb = $.urlParam('carb');
var fat = $.urlParam('fat');
var protein = $.urlParam('protein');
var dt = $.urlParam('dt');