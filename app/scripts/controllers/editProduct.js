'use strict';

angular.module('ComparandeandoApp')
  .controller('EditproductCtrl', function ($scope, $http, $routeParams) {
    $http.get('/api/product/'+$routeParams.id).success(function(product) {
      $scope.formProduct=product;
    });

    $scope.saveProduct = function(){
      if($scope.form.$valid){
        $http.post('/api/product/'+$routeParams.id, $scope.formProduct)
          .success(function(data){
            alert('Modificado con exito! =)');
            $http.get('#/products');
          }).error(function(data){alert('Ocurrio un problema al modificar =(')})
        }
      }


  });
