import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './history.html';

class HistoryCtrl {
    constructor() {
        this.travels = [
            {
                date: "12/05/2016", distance: 50.6, ecoScore: 6.2, center: { latitude: 45.778570, longitude: 3.120654 }
            },
            { date: "10/05/2016", distance: 204.8, ecoScore: 9 },
            { date: "09/05/2016", distance: 404, ecoScore: 8.4 },
            { date: "08/05/2016", distance: 12.3, ecoScore: 4.6 },
            { date: "24/04/2016", distance: 25.6, ecoScore: 6 }
        ];
        this.currentTravel = this.travels[0];
    }
}

export default angular.module('history', [
    angularMeteor,
    'nemLogging',
    'uiGmapgoogle-maps'
]).component('history', {
    templateUrl: 'imports/components/history/history.html',
    controller: HistoryCtrl
});