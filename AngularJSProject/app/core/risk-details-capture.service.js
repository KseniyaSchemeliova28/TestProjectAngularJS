export default  class riskDetailsCaptureService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
    }

    getRisks() {
        return this._$http.get('assets/test-data/data.json');
    }
}