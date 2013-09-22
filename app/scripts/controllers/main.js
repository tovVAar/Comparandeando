'use strict';

angular.module('ComparandeandoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $http.get('/api/product/').success(function(algo) {
      $scope.algo = algo;
    });
    $http.post('/api/product/').success(function(algo) {
      $scope.algo = algo;
    });
    $http.get('/api/product_delete').success(function(algo) {
      $scope.algo = algo;
    });
    $http.get('/api/product_new').success(function(algo) {
      $scope.algo = algo;
    });

  });
