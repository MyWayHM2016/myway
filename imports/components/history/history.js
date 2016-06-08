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
                map : {
                    center: {
                        latitude: 40.1451,
                        longitude: -99.6680
                    },
                    zoom: 4,
                },
                polylines : [
                    {
                        id: 1,
                        path: [
                            {
                                latitude: 45,
                                longitude: -74
                            },
                            {
                                latitude: 30,
                                longitude: -89
                            },
                            {
                                latitude: 37,
                                longitude: -122
                            },
                            {
                                latitude: 60,
                                longitude: -95
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: true,
                        draggable: true,
                        geodesic: true,
                        visible: true,
                    },
                    {
                        id: 2,
                        path: [
                            {
                                latitude: 47,
                                longitude: -74
                            },
                            {
                                latitude: 32,
                                longitude: -89
                            },
                            {
                                latitude: 39,
                                longitude: -122
                            },
                            {
                                latitude: 62,
                                longitude: -95
                            }
                        ],
                        stroke: {
                            color: '#6060FB',
                            weight: 3
                        },
                        editable: true,
                        draggable: true,
                        geodesic: true,
                        visible: true,
                    }
                ],
                consommation: 2,
                safety: 4,
                comfort: 4
            },
            {
                date: "10/05/2016", distance: 204.8, ecoScore: 9,
                map : {
                    center: {latitude: 45.778570, longitude: 3.120654}
                },
                consommation: 9.5,
                safety: 8,
                comfort: 7
            },
            {
                date: "09/05/2016", distance: 404, ecoScore: 8.4,
                map : {
                    center: { latitude: 45.778570, longitude: 3.120654 }
                },
                consommation: 7.2,
                safety: 9.3,
                comfort: 5
            },
            {
                date: "08/05/2016", distance: 12.3, ecoScore: 4.6,
                map : {
                    center: { latitude: 45.778570, longitude: 3.120654 }
                },
                consommation: 2,
                safety: 4,
                comfort: 4
            },
            {
                date: "24/04/2016", distance: 25.6, ecoScore: 6,
                map : {
                    center: { latitude: 45.778570, longitude: 3.120654 }
                },
                consommation: 9,
                safety: 4,
                comfort: 7
            }
        ];
        this.setCurrentTravel(this.travels[0]);
    }

    setCurrentTravel(travel) {
        this.currentTravel = travel;
        this.currentTravel.ecoStarConso = new Array(Math.floor(this.currentTravel.consommation / 2));
        this.currentTravel.ecoStarSafety = new Array(Math.floor(this.currentTravel.safety / 2));
        this.currentTravel.ecoStarComfort = new Array(Math.floor(this.currentTravel.comfort / 2));
    }
    
    starColor(ecoScore) {
        var color;
        if (ecoScore < 4) {
            color = 'red';
        } else if (ecoScore < 7) {
            color = 'orange';
        } else {
            color = 'green';
        }
        return {color: color};
    }
}

export default angular.module('history', [
    angularMeteor,
    'nemLogging',
    'uiGmapgoogle-maps'
]).component('history', {
    templateUrl: 'imports/components/history/history.html',
    controller: HistoryCtrl
}).config(function(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
});