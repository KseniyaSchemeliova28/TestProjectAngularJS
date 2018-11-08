import 'bootstrap-css-only';
import 'normalize.css';
import angular from 'angular';
import appComponent from './app/app.component';
import ComponentsModule from './app/components/components';
import RiskDetailsService from "./app/services/risk-details";


angular.module('app', [
    ComponentsModule.name
]).component('app', appComponent).service('riskDetailsService', RiskDetailsService);