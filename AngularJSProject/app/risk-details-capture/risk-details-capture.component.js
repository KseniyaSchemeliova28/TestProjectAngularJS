import riskDetailsCaptureController from "./risk-details-capture.controller";



module.exports = {
    template: require('./risk-details-capture.component.html'),
    controller: riskDetailsCaptureController,
    controllerAs: 'riskDetailsCaptureController',
    styles: [ require('./risk-details-capture.component.less')],
    bindings: {
        headers: '='
    }
}