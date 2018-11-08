riskApp.factory('RiskDetailsService', function ($http, $q) {
    return {
        getRisks: function () {
            var deferred = $q.defer();
            $http({method: 'GET', url: 'response.json'}).then(function success(response) {
                deferred.resolve(response);
            }, function error(response) {
                deferred.reject(response.status);
            });
            return deferred.promise;
        }
    }
});