var app = angular.module('myApp', []);
app.controller('userController', function ($scope, $rootScope) {
   $scope.name = "kamal";
   $scope.age = 30;

   $scope.userName = function () { // controller can have functions/methods
       return $scope.name;
   };


   $rootScope.color = 'yellow'; // if $rootScope variable and $scope variable have same name, then application use the one in the current variable
   $scope.color = 'red';

});