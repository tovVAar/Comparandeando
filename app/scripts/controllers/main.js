'use strict';

angular.module('ComparandeandoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    //Get product
    $http.get('/api/product/a').success(function(product) {
      $scope.getProduct = product;
    });
    //Update product
    $http.post('/api/product/').success(function(product) {
      $scope.updateProduct = product;
    });
    //Delete product
    $http.get('/api/product_delete').success(function(product) {
      $scope.deleteProduct = product;
    });
    //Create product
    $http.get('/api/product_new').success(function(product) {
      $scope.createProduct = product;
    });
    //Show a product
    $http.get('/api/all_products/a').success(function(product){
      $scope.showProduct = product;
    })
  });
