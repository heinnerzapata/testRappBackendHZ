var mainApp = angular.module('mainApp',['ngRoute']);

mainApp.config(function($routeProvider){

  $routeProvider
    .when('/home',{
      templateUrl:'views/home.html',
      controller  : 'homeController'
    })
    .otherwise({
      redirectTo:'/home'
    });

});

mainApp.controller('homeController',function homeController($scope,$http) {

    $scope.inputText ='2\n' +
                      '4 5\n' +
                      'UPDATE 2 2 2 4\n' +
                      'QUERY 1 1 1 3 3 3\n' +
                      'UPDATE 1 1 1 23\n' +
                      'QUERY 2 2 2 4 4 4\n' +
                      'QUERY 1 1 1 3 3 3\n' +
                      '2 4\n' +
                      'UPDATE 2 2 2 1\n' +
                      'QUERY 1 1 1 1 1 1\n' +
                      'QUERY 1 1 1 2 2 2\n' +
                      'QUERY 2 2 2 2 2 2';

    $scope.sendData = function(data){

            $http.post("/api/cubeSummation", {term: data}, {headers: {'Content-Type': 'application/json'} })
               .then(function (response) {
                   return response;
            });

    }


});
