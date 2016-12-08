// JavaScript Document
$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}
var neck = $.urlParam('neck');
var waist = $.urlParam('waist');
var chest = $.urlParam('chest');
var hips = $.urlParam('hips');

var larm = $.urlParam('larm');
var rarm = $.urlParam('rarm');
var lforearm = $.urlParam('lforearm');
var rforearm = $.urlParam('rforearm');

var lleg = $.urlParam('lleg');
var rleg = $.urlParam('rleg');
var lcalf = $.urlParam('lcalf');
var rcalf = $.urlParam('rcalf');

var dt = $.urlParam('dt');