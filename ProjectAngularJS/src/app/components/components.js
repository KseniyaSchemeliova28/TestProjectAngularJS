import angular from 'angular';
    import RiskDetailsCaptureModule from './riskDetailsCapture/riskDetailsCapture.module';

const ComponentsModule = angular.module('app.components',[
       RiskDetailsCaptureModule.name 
]);

export default ComponentsModule;