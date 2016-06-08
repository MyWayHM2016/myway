import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navbar.html';

class NavbarCtrl {
    constructor() {
    }

}

export default angular.module('navbar', [
    angularMeteor
]).component('navbar', {
    templateUrl: 'imports/components/navbar/navbar.html',
    controller: NavbarCtrl
});