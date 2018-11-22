// import SimpleEntity from 'Shared/models/simple-entity.model.js';
// import HullCoverage from './hull-coverage.model';
// import LiabilityCoverage from './liability-coverage.model.js';
// import PersonalAccidentCoverage from './personal-accident-coverage.model.js';
// import Model from 'Shared/models/aircraft-model.model.js';
// import { DeductionList } from './deduction-list.model.js';

class AircraftDeductions {
  constructor({
    participationRecordId, ratingNeedsReview = false,
    hullDeductionSummary, hullWarDeductionSummary, liabilityDeductionSummary,
    hullDeductions = [], hullWarDeductions = [], liabilityDeductions = [],
  }) {
    this.participationRecordId = participationRecordId;
    this.ratingNeedsReview = ratingNeedsReview;
    this.hullDeductionSummary = hullDeductionSummary;
    this.hullWarDeductionSummary = hullWarDeductionSummary;
    this.liabilityDeductionSummary = liabilityDeductionSummary;

    this.hullDeductions = new DeductionList(hullDeductions);
    this.hullWarDeductions = new DeductionList(hullWarDeductions);
    this.liabilityDeductions = new DeductionList(liabilityDeductions);
  }
}

export class AircraftModel {
  constructor({
    contractId, aircraftId = 0, aircraftModel = null,
    registrationNumber = '', purposeOfUse = null, crewSeats = 0, passengerSeats = 0,
    hullCoverage = {}, liabilityCoverage = {}, personalAccidentCoverage = {}, deductions = {}, eTag = null, isNew = false,
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
    this.deductions = deductions;
    this.eTag = eTag;
    this.isNew = isNew;

    this._aircraftMakeModel = {aircraftModel: this._aircraftModel.name, aircraftMake: this._aircraftModel.aircraftMake.name};
    this._seats = { crewSeats: this.crewSeats, passengerSeats: this.passengerSeats };
    //this._aircraftModel = aircraftModel && new Model(aircraftModel);
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

  get use(){
    return this.purposeOfUse.name;
  }

  get hullDeductible() {
    //if (!this.aircraftModel) return null;

    return this.hullCoverage.hullDeductiblePercentage;
  }

  // set hullDeductible(value) {
  //   this.aircraftModel.isDeductibleTypeMonetaryAmount
  //       ? this.hullCoverage.hullDeductibleMonetaryAmount = value
  //       : this.hullCoverage.hullDeductiblePercentage = value;
  // }

  get AVN52Deductible() {
    //if (!this.aircraftModel) return null;

    return this.liabilityCoverage.extendedCoverEndorsementsPercentage;
  }

  // set AVN52Deductible(value) {
  //   this.aircraftModel.isDeductibleTypeMonetaryAmount
  //       ? this.liabilityCoverage.extendedCoverEndorsementsMonetaryAmount = value
  //       : this.liabilityCoverage.extendedCoverEndorsementsPercentage = value;
  // }

  get hullCoverageEnabled() {
    return this.hullCoverage.hullCoverageEnabled;
  }

  // set hullCoverageEnabled(value) {
  //   this.hullCoverage.hullCoverageEnabled = value;
  // }

  get tloCoverageEnabled() {
    return this.hullCoverage.tloCoverageEnabled;
  }

  // set tloCoverageEnabled(value) {
  //   this.hullCoverage.tloCoverageEnabled = value;
  // }

  get hullWarCoverageEnabled() {
    return this.hullCoverage.hullWarCoverageEnabled;
  }

  set hullWarCoverageEnabled(value) {
    this.hullCoverage.hullWarCoverageEnabled = value;
  }

  get hullCoverageCurrency() {
    return this.hullCoverage.currency.name;
  }

  // set hullCoverageCurrency(value) {
  //   this.hullCoverage.currency = value;
  // }

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

  get hullDeductionSummary() {
    return this.deductions.hullDeductionSummary;
  }

  get hullWarDeductionSummary() {
    return this.deductions.hullWarDeductionSummary;
  }

  get liabilityDeductionSummary() {
    return this.deductions.liabilityDeductionSummary;
  }

  get liabilityCoverageCurrency() {
    return this.liabilityCoverage.currency.name;
  }

  // set liabilityCoverageCurrency(value) {
  //   this.liabilityCoverage.currency = value;
  // }

  get paCoverageCurrency() {
    return this.personalAccidentCoverage.currency.name;
  }

  // set paCoverageCurrency(value) {
  //   this.personalAccidentCoverage.currency.name = value;
  // }

  get aircraftModel() {
    return this._aircraftModel;
  }

  set aircraftModel(value) {
    this._aircraftModel = value;

    if (!this.aircraftModel) {
      this.hullCoverage.hullDeductibleEnabled = false;
      this.liabilityCoverage.extendedCoverEndorsementsEnabled = false;
    }

  }

  toJSON() {
    return {
      contractId: this.contractId,
      aircraftId: this.aircraftId,
      registrationNumber: this.registrationNumber,
      purposeOfUse: this.purposeOfUse,
      crewSeats: this.crewSeats,
      passengerSeats: this.passengerSeats,
      hullCoverage: this.hullCoverage,
      liabilityCoverage: this.liabilityCoverage,
      personalAccidentCoverage: this.personalAccidentCoverage,
      deductions: this.deductions,
      eTag: this.eTag,
      aircraftModel: this._aircraftModel
    };
  }

}

export class AircraftModelEditMode extends AircraftModel {

  set hullDeductible(value) {

    if (this.isNil(value)){
      this.hullCoverage.hullDeductibleEnabled = false;
    } else {
      this.hullCoverage.hullDeductibleEnabled = true;
      super.hullDeductible = value;
    }
  }

  get hullDeductible() {
    return super.hullDeductible;
  }

  set AVN52Deductible(value) {

    if (this.isNil(value)){
      this.liabilityCoverage.extendedCoverEndorsementsEnabled = false;
    } else {
      this.liabilityCoverage.extendedCoverEndorsementsEnabled = true;
      super.AVN52Deductible = value;
    }
  }

  get AVN52Deductible() {
    return super.AVN52Deductible;
  }

  isNil(value){
    return value === null || value === undefined || value === '';
  }
}
