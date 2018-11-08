import angular from 'angular';
import riskDetailsCaptureComponent from './riskDetailsCapture.component';
import RiskDetailsService from "../../services/risk-details";


const riskDetailsCaptureModule = angular.module('riskDetailsCapture', [])
  .component('riskDetailsCapture', riskDetailsCaptureComponent)
    .service('riskDetailsService', RiskDetailsService);
export default riskDetailsCaptureModule;