"use strict";var app=angular.module("APP_NAME_HERE",["ui.router"]);app.config(["$locationProvider","$urlRouterProvider",function(t,e){t.html5Mode(!0),e.otherwise("/404")}]),app.config(["$stateProvider",function(t){t.state("404",{url:"/404",templateUrl:"js/404/404.template.min.html"})}]),app.controller("HomeCtrl",["$scope",function(t){}]),app.config(["$stateProvider",function(t){t.state("home",{url:"/",templateUrl:"js/home/home.template.min.html",controller:"HomeCtrl"})}]);
//# sourceMappingURL=main.js.map
