ng-banner
=========

Sticky banner using Angular directive

This is an angular directive to add a sticky banner at top of the page.

Steps to use:
============

1. Add angular.js file to your page
2. Add the banner.js directive file to the page
  
  <script type="text/javascript" src="banner.js"></script>

3. Add the banner.css styles file to the page

  <link rel="stylesheet" type="text/css" href="banner.css">  

4. Add the banner dependency to your angular app

  var app = angular.module('app', ['banner']);

5. Add the <sticky-banner> element with the required attributes. 

  <div ng-app="app">
		<sticky-banner text="Awesome sticky banner 1" background="blue" size="30"></sticky-banner>
		<sticky-banner text="Awesome sticky banner 2" background="#b7d84b" size="35"></sticky-banner>
		<sticky-banner text="Awesome sticky banner 3" background="#44accf" size="35"></sticky-banner>
		<sticky-banner text="Awesome sticky banner 3" background="#ee3e64" size="35"></sticky-banner>
	</div>
	
	The implementation can be checked here: http://jsbin.com/qexoduhajoyi/1/edit?html,output
