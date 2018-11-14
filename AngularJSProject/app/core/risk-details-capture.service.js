export default  class riskDetailsCaptureService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
        this.url = 'assets/test-data/data.json';
    }

    getRisks() {
        this._$http.get(this.url).then((riskDetails)=>{
            this.riskDetailsCapture = riskDetails.data.result; // COMMENT: Please add 'return' statemens
        });
        return this._$http.get(this.url); // COMMENT: I think u need to delete duplicate code
    }

    getLoadedRisks() {
        return angular.copy(this.riskDetailsCapture); // COMMENT: Do u need the 'angular.copy'
    }

    saveRisks(riskDetailsPage) {
        riskDetailsPage.forEach((riskDetails)=> {
            var risk = this.riskDetailsCapture.find(y => y.aircraftId === riskDetails.aircraftId); // COMMENT: please avoid 'var'
            if(risk) { // COMMENT: please give meaningful name to 'y'
                risk = riskDetails; // COMMENT: It's doesn't work
            }
        });
    }
}
