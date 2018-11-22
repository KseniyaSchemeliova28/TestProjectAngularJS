import template from './cell-bool.html'
import controller from './cell-bool.controller'
import './cell-bool.less';

const Component = {
    template,
    controller,
    controllerAs: '$cellBoolCtrl',
    bindings: {
        item: '=',
        coll: '<',
        editMode: '<'
    }
};

export default Component;