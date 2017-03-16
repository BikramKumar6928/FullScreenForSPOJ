// ==UserScript==
// @name         Fullscreen spoj
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fullscreen for spoj
// @author       You
// @match        http://www.spoj.com/problem*
// @grant        none
// @noframes

// ==/UserScript==
$(document).ready(function () {
    var a= window.location.pathname;
        var code=a.substring(9,a.length);
        var left="https://www.spoj.com/problems"+code;
        var right="https://www.spoj.com/submit"+code;
	$('body').append('<a id="fullscreen"> Go Fullscreen</a>');
	$('#fullscreen').css('position','fixed').css("right",0).css("top",0);
	$('#fullscreen').click(function(){
		var body=document.getElementsByTagName('body');
        while(body[0].hasChildNodes()){
            body[0].removeChild(body[0].lastChild);
        }
        $('body').append("<iframe id='frame1' class='col-md-6'></iframe>" );
        $('#frame1').attr('src',left);
        $('#frame1').css('overflow-x','hidden');
        $('#frame1').css('height',"100vh");
        $('#frame1').css("width","50%");
        $('body').append("<iframe id='frame2' class='col-md-6'></iframe>" );
        $('#frame2').attr('src',right);
        $('#frame2').css('overflow-x','hidden');
        $('#frame2').css('height',"100vh");
        $('#frame2').css("width","50%");
	});






});
