import {AircraftModel} from "./aircraft.model";

export default class riskDetailsCaptureService {
    constructor($http, $q) {
        'ngInject';
        this._$http = $http;
        this._$q = $q;
        this.url = 'assets/test-data/data.json';
        this.aircraftModels = [];
    }

    // get risks
    getRisks() {
        return this._$http.get(this.url).then((riskDetails) => {
            riskDetails.data.result.forEach((risk) => {
                this.aircraftModels.push(new AircraftModel(risk));
            });

            return this.aircraftModels;
        }, (response) => this._$q.reject(response.status));
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