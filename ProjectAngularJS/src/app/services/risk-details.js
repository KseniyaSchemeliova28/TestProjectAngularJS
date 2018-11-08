export default  class RiskDetailsService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
    }

    getRisks() {
        return this._$http.get('response.json');
    }
}