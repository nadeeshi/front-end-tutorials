var app = angular.module('myApp', []);
app.controller('userController', function ($scope, $http, $timeout, customService) {

    $http.get('user.html').then(function (response) {
        //$scope.welcomeMsg = response.data;
        $scope.welcomeMsg = 'Kamal';
    });

    // After 2s header will change
    $scope.userHeader = 'Initial Header';
    $timeout(function () {
        $scope.userHeader = "User Header Changed";
    }, 2000);

    //use custom service
    $scope.hexValue = customService.convertHexa(455);
});

app.service('customService', function () {
   this.convertHexa = function (input) {
       return input.toString(16); // convert number to a hexadecimal number
   }
});