
var app = angular.module('myWebApp', [
 , 'ngRoute'
 , 'app.controllers'
 , 'app.factories'
]);

app.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: './ng/views/home.html',
        controller: 'homeCtrlr'
    }).
    when('/products', {
        templateUrl: './ng/views/products.html',
        controller: 'productsCtrlr'
    }).
    when('/products/:id', {
        templateUrl: './ng/views/products-edit.html',
        controller: 'productsCtrlr'
    }).
    otherwise({
        redirectTo: '/'
    });
});