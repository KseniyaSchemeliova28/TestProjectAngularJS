import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './risk-details-capture.routes'
import riskDetailsCapture from './risk-details-capture.component'
import cell from './cell/cell.component'
import cellText from './cell/cell-text/cell-text.component'
import cellNumber from './cell/cell-number/cell-number.component'
import riskDetailsCaptureController from './risk-details-capture.controller'
import cellBool from './cell/cell-bool/cell-bool.component';

export default angular.module('testProj.riskDetailsCapture', [uirouter])
    .config(routes)
    .component('riskDetailsCapture', riskDetailsCapture)
    .component('cell', cell)
    .component('cellText', cellText)
    .component('cellNumber', cellNumber)
    .component('cellBool', cellBool)
    .controller('riskDetailsCaptureController', riskDetailsCaptureController)
    .name;