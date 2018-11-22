import template from './cell-number.html'
import controller from './cell-number.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellNumberCtrl',
    bindings: {
        cell: '<',
        risk: '='
    }

};

export default Component;