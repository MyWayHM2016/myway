import angular from 'angular';
import angularMeteor from 'angular-meteor';
import {Meteor} from 'meteor/meteor';
import {UserProfiles} from '../../../model/userProfile';

import template from './userProfile.html';

class UserProfileCtrl {
    constructor() {
        this.userProfiles = [
            {pseudo: "Bob"}
        ]
    }
}

export default angular.module('userProfile', [
    angularMeteor
])
    .component('userProfile', {
        templateUrl: 'imports/components/userProfile/userProfile.html',
        controller: ['$scope', UserProfileCtrl]
    });