import angular from 'angular';
import angularMeteor from 'angular-meteor';
import history from '../history/history';
import userProfile from '../userProfile/userProfile';

import template from './navbar.html';

class NavbarCtrl {
    constructor() {
        this.showHistory = true;
    }
    
    toggleUserProfile() {
        this.showHistory = false;
    }
    
    toggleHistory() {
        this.showHistory = true;
    }

}

export default angular.module('navbar', [
    angularMeteor,
    userProfile.name,
    history.name
]).component('navbar', {
    templateUrl: 'imports/components/navbar/navbar.html',
    controller: NavbarCtrl
});