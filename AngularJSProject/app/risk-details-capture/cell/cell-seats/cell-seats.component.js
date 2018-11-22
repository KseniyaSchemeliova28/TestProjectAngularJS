import template from './cell-seats.html'
import controller from './cell-seats.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellSeatsCtrl',
    bindings: {
        coll: '<',
        item: '<',
        editMode: '<'
    }

};

export default Component;