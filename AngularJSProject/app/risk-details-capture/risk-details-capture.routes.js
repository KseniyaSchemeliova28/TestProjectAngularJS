routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider
        .state('riskDetailsCapture', {
            url: '/',
            component: 'riskDetailsCapture'
        });
}