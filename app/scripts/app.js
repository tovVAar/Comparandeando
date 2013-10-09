'use strict';

angular.module('ComparandeandoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl'
      })
      .when('/places', {
        templateUrl: 'views/places.html',
        controller: 'PlacesCtrl'
      })
      .when('/addProduct', {
        templateUrl: 'views/addProduct.html',
        controller: 'AddproductCtrl'
      })
      .when('/editProduct/:id', {
        templateUrl: 'views/editProduct.html',
        controller: 'EditproductCtrl'
      })
      .when('/addPlace', {
        templateUrl: 'views/addPlace.html',
        controller: 'AddplaceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
