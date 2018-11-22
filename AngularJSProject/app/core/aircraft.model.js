export class AircraftModel {
    constructor({
                    contractId, aircraftId = 0, aircraftModel = null,
                    registrationNumber = '', purposeOfUse = null, crewSeats = 0, passengerSeats = 0,
                    hullCoverage = {}, liabilityCoverage = {}, personalAccidentCoverage = {}, deductions = {}, eTag = null,
                }) {

        if (!contractId) {
            throw new Error('\'contract\' id is required field for Aircraft Model');
        }

        this.contractId = contractId;
        this.aircraftId = aircraftId;
        this._aircraftModel = aircraftModel;
        this.registrationNumber = registrationNumber;
        this.purposeOfUse = purposeOfUse;
        this.crewSeats = crewSeats;
        this.passengerSeats = passengerSeats;
        this.hullCoverage = hullCoverage;
        this.liabilityCoverage = liabilityCoverage;
        this.personalAccidentCoverage = personalAccidentCoverage;
        this.eTag = eTag;

        this._aircraftMakeModel = {
            aircraftModel: this._aircraftModel.name,
            aircraftMake: this._aircraftModel.aircraftMake.name
        };
        this._seats = {crewSeats: this.crewSeats, passengerSeats: this.passengerSeats};
    }

    get seats() {
        return this._seats;
    }

    set seats(seats) {
        this._seats = seats;
        this.crewSeats = seats.crewSeats;
        this.passengerSeats = seats.passengerSeats;
    }

    get liabilityLimit() {
        return this.liabilityCoverage.thirdPartyLimit;
    }

    get paLimit() {
        return this.personalAccidentCoverage.crewLimit;
    }

    get aircraftMakeModel() {
        return this._aircraftMakeModel;
    }

    get use() {
        return this.purposeOfUse.name;
    }

    get hullDeductible() {
        return this.hullCoverage.hullDeductiblePercentage;
    }

    get AVN52Deductible() {
        return this.liabilityCoverage.extendedCoverEndorsementsPercentage;
    }

    get hullCoverageEnabled() {
        return this.hullCoverage.hullCoverageEnabled;
    }

    get tloCoverageEnabled() {
        return this.hullCoverage.tloCoverageEnabled;
    }

    get hullWarCoverageEnabled() {
        return this.hullCoverage.hullWarCoverageEnabled;
    }

    set hullWarCoverageEnabled(value) {
        this.hullCoverage.hullWarCoverageEnabled = value;
    }

    get hullCoverageCurrency() {
        return this.hullCoverage.currency.name;
    }

    get hullValue() {
        return this.hullCoverage.hullValue;
    }

    set hullValue(value) {
        this.hullCoverage.hullValue = value;
    }

    get tloLimit() {
        return this.hullCoverage.tloLimit;
    }

    set tloLimit(value) {
        this.hullCoverage.tloLimit = value;
    }

    get liabilityCoverageCurrency() {
        return this.liabilityCoverage.currency.name;
    }

    get paCoverageCurrency() {
        return this.personalAccidentCoverage.currency.name;
    }

    get aircraftModel() {
        return this._aircraftModel;
    }
}

