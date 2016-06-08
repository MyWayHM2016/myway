import angular from 'angular';
import 'angular-component';
import angularMeteor from 'angular-meteor';

import history from '../imports/components/history/history';
import userProfile from '../imports/components/userProfile/userProfile';
import navbar from '../imports/components/navbar/navbar';

angular.module('myway', [
    angularMeteor,
    userProfile.name,
    history.name,
    navbar.name
]);


