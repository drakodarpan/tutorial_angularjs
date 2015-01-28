var app = angular.module("app", ["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/rutas', {
        templateUrl: 'rutas.html',
        controller: 'rutas'
    })
    .when('/otrasrutas', {
        templateUrl: 'otrasrutas.html',
        controller: 'otrasrutas'
    })
    .otherwise({ redirectTo: '/' });
}]);

app.controller('rutas', ['$scope', function ($scope) {
    $scope.mensaje = "Hola desde rutas";
    $scope.otrocontrolador = "otrasrutas";
}]);

app.controller('otrasrutas', ['$scope', function ($scope) {
    $scope.mensaje = "Hola desde otrasrutas";
    $scope.otrocontrolador = "rutas";
}]);