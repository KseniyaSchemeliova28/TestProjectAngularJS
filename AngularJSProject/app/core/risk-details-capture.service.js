export default  class riskDetailsCaptureService {
    constructor($http) {
        'ngInject';
        this._$http = $http;
        this.url = 'assets/test-data/data.json';
    }

    getRisks() {
        this._$http.get(this.url).then((riskDetails)=>{
            this.riskDetailsCapture = riskDetails.data.result;
        });
        return this._$http.get(this.url);
    }

    getLoadedRisks() {
        return angular.copy(this.riskDetailsCapture);
    }

    saveRisks(riskDetailsPage) {
        riskDetailsPage.forEach((riskDetails)=> {
            let risk = this.riskDetailsCapture.find(y => y.aircraftId === riskDetails.aircraftId);
            if(risk) {
                risk = riskDetails;
            }
        });
    }
}