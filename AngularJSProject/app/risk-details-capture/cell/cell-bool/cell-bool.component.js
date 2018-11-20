import template from './cell-bool.html'
import controller from './cell-bool.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellBoolCtrl',
    bindings: {
        risk: '<',
        coll: '<'
    }
};

export default Component;