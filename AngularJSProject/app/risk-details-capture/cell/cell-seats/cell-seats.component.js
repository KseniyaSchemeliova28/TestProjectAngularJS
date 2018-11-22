import template from './cell-seats.html'
import controller from './cell-seats.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellSeatsCtrl',
    bindings: {
        cell: '<',
        item: '<'
    }

};

export default Component;