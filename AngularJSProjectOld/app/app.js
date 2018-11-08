var riskApp = angular.module('riskApp', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/riskDetailsCapture', {
        templateUrl: 'riskDetailsCapture/riskDetailsCapture.html',
        controller: 'RiskDetailsCaptureCtrl'
    });

}]);
