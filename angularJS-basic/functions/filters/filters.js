var app = angular.module('myApp', []);
app.controller('filterController', function ($scope) {
   $scope.userName = "Kamal Perera";
   $scope.price = 100;

   $scope.animals = [
       {type: 'Cat', age: 2},
       {type: 'Dog', age: 5},
       {type: 'Dog', age: 2},
       {type: 'Cat', age: 1}
   ];

   $scope.names = ['Kamal', 'Lip', 'Joshi', 'Marry', 'Nini'];

    $scope.users = [
        {name: 'Joshi', city: 'Lisbon'},
        {name: 'Nina', city: 'Colombo'},
        {name: 'Tharaka', city: 'London'},
        {name: 'Mary', city: 'England'},
        {name: 'Hege', city: 'Denmark'}
    ];

    $scope.orderByName = function (filter) {
        $scope.customOrderBy = filter;
    }
});