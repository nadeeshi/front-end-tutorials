var app = angular.module('myApp', []);
app.controller('tableController', function ($scope) {
   $scope.users = [
       {name: 'Kamal', city: 'Colombo'},
       {name: 'Joshi', city: 'Lisbon'},
       {name: 'Akbar', city: 'UK'}
   ];
});