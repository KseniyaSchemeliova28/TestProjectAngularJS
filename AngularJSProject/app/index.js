import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './app.routes'
import riskDetailsCapture from './risk-details-capture/risk-details-capture.module'
import riskDetailsCaptureService from "./core/risk-details-capture.service";

angular.module('testProj', [uirouter, riskDetailsCapture])
    .config(routes).service('riskDetailsCaptureService', riskDetailsCaptureService);