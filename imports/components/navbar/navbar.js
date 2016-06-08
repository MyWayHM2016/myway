import angular from 'angular';
import angularMeteor from 'angular-meteor';
import history from '../history/history';
import userProfile from '../userProfile/userProfile';
import tripCompare from '../tripCompare/tripCompare';

import template from './navbar.html';

class NavbarCtrl {
    constructor() {
        /*this.showHistory = true;
        this.showProfile = false;
        this.showTripCompare = false;*/
        this.showHistory = false;
        this.showProfile = false;
        this.showTripCompare = true;
    }
    
    toggleUserProfile() {
        this.showProfile = true;
        this.showHistory = false;
        this.showTripCompare = false;
    }
    
    toggleHistory() {
        this.showHistory = true;
        this.showProfile = false;
        this.showTripCompare = false;
    }

    toggleTripCompare() {
        this.showTripCompare = true;
        this.showHistory = false;
        this.showProfile = false;
    }

}

export default angular.module('navbar', [
    angularMeteor,
    userProfile.name,
    history.name,
    tripCompare.name
]).component('navbar', {
    templateUrl: 'imports/components/navbar/navbar.html',
    controller: NavbarCtrl
});