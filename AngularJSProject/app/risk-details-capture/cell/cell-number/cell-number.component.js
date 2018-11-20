import template from './cell-number.html'
import controller from './cell-number.component'

const Component = {
    template,
    controller,
    controllerAs: '$cellNumberCtrl',
    bindings: {
        coll: '<',
        risk: '<'
    }

};

export default Component;