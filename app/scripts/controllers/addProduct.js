'use strict';

angular.module('ComparandeandoApp')
  .controller('AddproductCtrl', function ($scope, $http) {

    $scope.submitProduct = function(){
      if($scope.form.$valid){
        $http.post('/api/product_new', $scope.formProduct)
          .success(function(data){
            alert('Agregado con exito! =)');
            $http.get('#/products');
          }).error(function(data){alert('Ocurrio un problema al agregar =(')})
        }
      }

  });
