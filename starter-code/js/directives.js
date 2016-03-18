angular.module('myDirectives', [])

// a sample directive
.directive('banana', function() {
  return {
    restrict: 'E',
    scope: {
      bananas: '='
    },
    controller: ['$scope', function($scope) {
      $scope.repetitions = Array($scope.bananas);
    }],
    templateUrl: 'views/banana.html'
  }
})

// define your directives here, and they'll be injected in app.js
