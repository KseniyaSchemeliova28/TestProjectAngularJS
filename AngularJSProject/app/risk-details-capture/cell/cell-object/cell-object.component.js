import template from './cell-object.html'
import controller from './cell-object.controller'

const CellComponent = {
    template,
    controller,
    controllerAs: '$cellObjCtrl',
    bindings: {
        coll: '<',
        item: '=',
        editMode: '<'
    }

};

export default CellComponent;