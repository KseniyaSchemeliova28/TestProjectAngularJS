import template from './cell-percentage.html'
import controller from './cell-percentage.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellPercentCtrl',
    bindings: {
        coll: '<',
        item: '=',
        editMode: '<'
    }

};

export default Component;