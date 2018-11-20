import controller from "./cell.controller";
import template from './cell.html';

const Component = {
    template,
    controller,
    controllerAs: '$cellCtrl',
    bindings: {
        header: "<",
        risk: "<"
    }
};

export default Component;
