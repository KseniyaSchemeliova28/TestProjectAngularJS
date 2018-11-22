import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './risk-details-capture.routes'
import riskDetailsCapture from './risk-details-capture.component'
import cellText from './cell/cell-text/cell-text.component'
import cellNumber from './cell/cell-number/cell-number.component'
import cellBool from './cell/cell-bool/cell-bool.component'
import cellSeats from './cell/cell-seats/cell-seats.component'
import riskDetailsCaptureController from './risk-details-capture.controller'

export default angular.module('testProj.riskDetailsCapture', [uirouter])
    .config(routes)
    .component('riskDetailsCapture', riskDetailsCapture)
    .component('cellText', cellText)
    .component('cellNumber', cellNumber)
    .component('cellBool', cellBool)
    .component('cellSeats', cellSeats)
    .controller('riskDetailsCaptureController', riskDetailsCaptureController)
    .name;