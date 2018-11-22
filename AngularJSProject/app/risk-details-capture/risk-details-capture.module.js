import angular from 'angular'
import uirouter from 'angular-ui-router'
import routes from './risk-details-capture.routes'
import RiskDetailsCaptureComponent from './risk-details-capture.component'
import cellText from './cell/cell-text/cell-text.component'
import cellNumber from './cell/cell-number/cell-number.component'
import cellBool from './cell/cell-bool/cell-bool.component'
import cellSeats from './cell/cell-seats/cell-seats.component'
import cellObject from './cell/cell-object/cell-object.component'
import cellPercentage from './cell/cell-percentage/cell-percentage.component'

export default angular.module('testProj.riskDetailsCapture', [uirouter])
    .config(routes)
    .component('riskDetailsCapture', RiskDetailsCaptureComponent)
    .component('cellText', cellText)
    .component('cellNumber', cellNumber)
    .component('cellBool', cellBool)
    .component('cellSeats', cellSeats)
    .component('cellObject', cellObject)
    .component('cellPercentage', cellPercentage)
    .name;