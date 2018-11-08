routes.$inject = ['$stateProvider'];
export default function routes($stateProvider) {
    $stateProvider
        .state('riskDetailsCapture', {
            url: '/',
            template: require('./risk-details-capture.component.html')
        });
}