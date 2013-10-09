'use strict';

angular.module('ComparandeandoApp')
  .controller('ProductsCtrl', function ($scope, $http) {

    $scope.deleteProduct = function(idToDelete){                          
       console.log(idToDelete);                                                     //alert(idToDelete);
    };                                                                         

    //Get product                                                              
    $http.get('/api/all_products').success(function(product) {
      $scope.products = product;
 
    });

  });
