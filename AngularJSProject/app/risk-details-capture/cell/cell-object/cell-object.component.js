import template from './cell-object.html'
import controller from './cell-object.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellObjCtrl',
    bindings: {
        coll: '<',
        item: '=',
        editMode: '<'
    }

};

export default Component;