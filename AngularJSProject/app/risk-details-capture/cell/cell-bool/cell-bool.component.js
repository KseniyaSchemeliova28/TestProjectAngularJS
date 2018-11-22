import template from './cell-bool.html'
import controller from './cell-bool.controller'

const Component = {
    template,
    controller,
    controllerAs: '$cellBoolCtrl',
    bindings: {
        item: '<'
    },
    style: [require('./cell-bool.less')]
};

export default Component;