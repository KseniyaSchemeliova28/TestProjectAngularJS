import template from './cell-text.html'
import controller from './cell-text.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellTextCtrl',
    bindings: {
        coll: '<',
        risk: '<'
    }

};

export default Component;