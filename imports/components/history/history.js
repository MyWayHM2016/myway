import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './history.html';

class HistoryCtrl {
    constructor() {
        this.travels = [
            {
                date: "12/05/2016",
                distance: 50.6,
                ecoScore: 6.2,
                center: { latitude: 45.778570, longitude: 3.120654 },
                consommation: 2,
                safety: 4,
                comfort: 4
            },
            {
                date: "10/05/2016", distance: 204.8, ecoScore: 9, center: { latitude: 45.778570, longitude: 3.120654 },
                consommation: 9.5,
                safety: 8,
                comfort: 7
            },
            {
                date: "09/05/2016", distance: 404, ecoScore: 8.4, center: { latitude: 45.778570, longitude: 3.120654 },
                consommation: 7.2,
                safety: 9.3,
                comfort: 5
            },
            {
                date: "08/05/2016", distance: 12.3, ecoScore: 4.6, center: { latitude: 45.778570, longitude: 3.120654 },
                consommation: 1,
                safety: 4,
                comfort: 4
            },
            {
                date: "24/04/2016", distance: 25.6, ecoScore: 6, center: { latitude: 45.778570, longitude: 3.120654 },
                consommation: 9,
                safety: 4,
                comfort: 7
            }
        ];
        this.currentTravel = this.travels[0];
    }

    setCurrentTravel(travel) {
        this.currentTravel = travel;
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