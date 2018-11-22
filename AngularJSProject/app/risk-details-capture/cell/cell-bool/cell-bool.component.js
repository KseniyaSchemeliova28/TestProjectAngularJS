import template from './cell-bool.html'
import controller from './cell-bool.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellBoolCtrl',
    bindings: {
        item: '=',
        coll: '<',
        editMode: '<'
    },
    styles: [require('./cell-bool.less')]
};

export default Component;