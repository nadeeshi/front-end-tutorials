var app = angular.module('myApp', []);
app.controller('userFormController', function ($scope) {

    $scope.initialUser = {
        firstName: 'John',
        lastName: "Perera",
        age: 30
    };

    $scope.reset = function () {
        $scope.user = angular.copy($scope.initialUser);
    }

    $scope.reset();
});