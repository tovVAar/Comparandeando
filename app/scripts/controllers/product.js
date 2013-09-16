'use strict';

exports.index = function (req, res, next) {
  res.send('Funciona!')
}

angular.module('ComparandeandoApp')
  .controller('ProductCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
  });
