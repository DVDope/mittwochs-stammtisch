var app = angular.module('Mittwochs-Stammtisch', ['ngMaterial', 'ngMessages']);
// var app = angular.module('VizAlgorithms', []);


app.controller('beerpongController', function ($scope) {

    $scope.searching = {}
    $scope.searching.maxLength = 10
    $scope.searching.maxNumber = 10
})