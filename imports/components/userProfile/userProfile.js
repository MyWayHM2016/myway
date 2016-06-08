import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userProfile.html';

class UserProfileCtrl {
    constructor() {
        this.userProfile = { pseudo: "Bob" };
        $('.carousel').carousel();
    }
}

export default angular.module('userProfile', [
    angularMeteor
]).component('userProfile', {
    templateUrl: 'imports/components/userProfile/userProfile.html',
    controller: UserProfileCtrl
});