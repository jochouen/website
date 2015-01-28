/*
**
*/

var app = angular.module('myApp', ['ngRoute','ngResource','controllers','directives', function($interpolateProvider){
	$interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
}]);


app.config(['$routeProvider', '$locationProvider',
            function($routeProvider, $locationProvider) {
                $routeProvider
                .when('/sample1', {
                    templateUrl: 'parts/sample1.html',
                    controller: 'Sample1Ctrl'
                })
                .when('/sample2', {
                    templateUrl: 'parts/sample2.html',
                    controller: 'Sample2Ctrl'
                })
                .when('/sample3', {
                    templateUrl: 'parts/sample3.html',
                    controller: 'Sample3Ctrl'
                })
                .when('/contact', {
                    templateUrl: 'parts/contact.html',
                    controller: 'ContactCtrl'
                })
                .otherwise({
                    redirectTo: '/contact'
                });
            }
        ]);
