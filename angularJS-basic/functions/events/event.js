var app = angular.module('myApp', []);
app.controller('eventController', function ($scope) {
    $scope.count = 0;

    $scope.userFunction = function (event) {
        $scope.x = event.clientX;
        $scope.y = event.clientY;
    }
});