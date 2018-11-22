import template from './cell-text.html'
import controller from './cell-text.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellTextCtrl',
    bindings: {
        cell: '<',
        risk: '='
    }

};

export default Component;