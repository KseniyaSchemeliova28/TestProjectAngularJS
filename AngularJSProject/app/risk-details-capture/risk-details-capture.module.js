import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './risk-details-capture.routes'
import riskDetailsCapture from './risk-details-capture.component'
import riskDetailsCaptureController from './risk-details-capture.controller'

export default angular.module('testProj.riskDetailsCapture', [uirouter])
    .config(routes)
    .component('riskDetailsCapture', riskDetailsCapture)
    .controller('riskDetailsCaptureController', riskDetailsCaptureController)
    .name;