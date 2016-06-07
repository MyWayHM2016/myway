import angular from 'angular';
import 'angular-component';
import angularMeteor from 'angular-meteor';
import userProfile from '../imports/components/userProfile/userProfile';

angular.module('myway', [
    angularMeteor,
    userProfile.name
]);


