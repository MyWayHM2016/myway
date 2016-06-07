import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './history.html';

class HistoryCtrl {
    constructor() {
        this.travels = [
            { date: "12/05/2016", distance: 50.6, ecoScore: 6.2 },
            { date: "10/05/2016", distance: 204.8, ecoScore: 9 },
            { date: "09/05/2016", distance: 404, ecoScore: 8.4 },
            { date: "08/05/2016", distance: 12.3, ecoScore: 4.6 },
            { date: "24/04/2016", distance: 25.6, ecoScore: 6 }
        ];
    }
}

export default angular.module('history', [
    angularMeteor
]).component('history', {
    templateUrl: 'imports/components/history/history.html',
    controller: HistoryCtrl
});