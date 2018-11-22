import {AircraftModel} from "./aircraft.model";

export default class riskDetailsCaptureService {
    constructor($http, $q) {
        'ngInject';
        this._$http = $http;
        this._$q = $q;
        this.url = 'assets/test-data/data.json';
        this.aircraftModels = [];
    }

    getRisks() {
        let deferred = this._$q.defer();
        this._$http.get(this.url).then((riskDetails) => {
            riskDetails.data.result.forEach((risk) => {
                this.aircraftModels.push(new AircraftModel(risk));
            });
            deferred.resolve(this.aircraftModels);
        }, (response) => {
            deferred.reject(response.status);
        });
        return deferred.promise;
    }

    getLoadedRisks() {
        return angular.copy(this.aircraftModels);
    }

    saveRisks(riskDetailsPage) {
        riskDetailsPage.forEach((riskDetails) => {
            this.aircraftModels = this.aircraftModels.map((aircraftModel) => {
                return aircraftModel.aircraftId === riskDetails.aircraftId ? riskDetails : aircraftModel;
            });
        });
    }
}