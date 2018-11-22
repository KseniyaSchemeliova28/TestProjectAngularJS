import {AircraftModel} from "./aircraft.model";

export default  class riskDetailsCaptureService {
    constructor($http, $q) {
        'ngInject';
        this._$http = $http;
        this._$q = $q;
        this.url = 'assets/test-data/data.json';
        this.aicraftModels = [];
    }

    getRisks() {
        var deferred = this._$q.defer();
        this._$http.get(this.url).then((riskDetails)=>{
            this.riskDetailsCapture = riskDetails.data.result;
            riskDetails.data.result.forEach((risk) => {
                this.aicraftModels.push(new AircraftModel(risk)) ;
            });
            deferred.resolve(this.aicraftModels);
        }, (response) => {
            deferred.reject(response.status);
        }) ;
        return deferred.promise;
    }

    getLoadedRisks() {
        return this.aicraftModels;
        //return angular.copy(this.riskDetailsCapture);
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