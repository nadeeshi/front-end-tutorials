var app = angular.module('myApp', []);
app.controller('userController', function ($scope, $http) {

    // Option1 - using one then block
    $http.get('http://localhost:63342/angularJS-basic/services/http/user.html')
        .then(function (response) {
        $scope.welcomeMsg = response.data;
        //  $scope.welcomeMsg = 'Kamal';
    });

    // Option2 - using success and error blocks
    $http({
        method: 'GET',
        url: 'user.html'
    }).then(function success(response) {
        $scope.userMsg = response.data;
        $scope.statusCode = response.status;
    }, function error(reason) {
        $scope.userMsg = reason.statusText;
    });

    // Option3 - using success and error handlers
    $http.get("user.html")
        .then(function (response) {
            $scope.content = response.data; // success handler
        }, function (response) {
            $scope.content = "Something Wrong"; // error handler
        });
});

