import angular from 'angular';
import 'angular-component';
import angularMeteor from 'angular-meteor';

import navbar from '../imports/components/navbar/navbar';

angular.module('myway', [
    angularMeteor,
    navbar.name
]);


