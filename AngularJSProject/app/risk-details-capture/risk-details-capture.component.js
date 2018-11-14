import riskDetailsCaptureController from "./risk-details-capture.controller";



module.exports = { // Please, use export/import. Ex: export const RiskDetailsCaptureComponent = {...your code}
    template: require('./risk-details-capture.component.html'),
    controller: riskDetailsCaptureController,
    controllerAs: 'riskDetailsCaptureController',
    styles: [ require('./risk-details-capture.component.less')],
    bindings: {
        headers: '='
    }
}
