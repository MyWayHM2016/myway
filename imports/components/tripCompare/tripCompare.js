import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-simple-logger';
import 'angular-google-maps';

import template from './tripCompare.html';

class TripCompareCtrl {
    constructor() {
        //this.tripCompare =
        this.community = [
            {
                name : '',
                avatar: '/avatar/avatar1.png',
                weeklyTripResults : {
                    startDate : '30/05/2016',
                    endDate : '05/06/2016',
                    totalDistance : 12840,
                    averageScore : 7.45,
                    averageConsoScore : 5.4,
                    averageSafetyScore : 7.1,
                    averageConfortScore : 8.1,
                    tripCount : 10,
                    averageTripDistance : 284,
                    shorterTrip : 5.6,
                    longerTrip : 267,
                    ecoStarConso : new Array(3),
                    ecoStarSafety : new Array(3),
                    ecoStarComfort : new Array(4),
                    trips : []
                }
            },
            {
                name : '',
                avatar: '/avatar/avatar2.png',
                weeklyTripResults : {
                    startDate : '30/05/2016',
                    endDate : '05/06/2016',
                    totalDistance : 22840,
                    averageScore : 7.45,
                    averageConsoScore : 5.4,
                    averageSafetyScore : 7.1,
                    averageConfortScore : 8.1,
                    tripCount : 10,
                    averageTripDistance : 284,
                    shorterTrip : 5.6,
                    longerTrip : 267,
                    ecoStarConso : new Array(3),
                    ecoStarSafety : new Array(3),
                    ecoStarComfort : new Array(4),
                    trips : []
                }
            },
            {
                name : '',
                avatar: '/avatar/avatar6.png',
                weeklyTripResults : {
                    startDate : '30/05/2016',
                    endDate : '05/06/2016',
                    totalDistance : 32840,
                    averageScore : 8.45,
                    averageConsoScore : 5.4,
                    averageSafetyScore : 7.1,
                    averageConfortScore : 8.1,
                    tripCount : 10,
                    averageTripDistance : 284,
                    shorterTrip : 5.6,
                    longerTrip : 267,
                    ecoStarConso : new Array(3),
                    ecoStarSafety : new Array(3),
                    ecoStarComfort : new Array(4),
                    trips : []
                }
            },
            {
                name : '',
                avatar: '/avatar/avatar4.png',
                weeklyTripResults : {
                    startDate : '30/05/2016',
                    endDate : '05/06/2016',
                    totalDistance : 42840,
                    averageScore : 6.45,
                    averageConsoScore : 5.4,
                    averageSafetyScore : 7.1,
                    averageConfortScore : 8.1,
                    tripCount : 10,
                    averageTripDistance : 284,
                    shorterTrip : 5.6,
                    longerTrip : 267,
                    ecoStarConso : new Array(3),
                    ecoStarSafety : new Array(3),
                    ecoStarComfort : new Array(4),
                    trips : []
                }
            },
            {
                name : '',
                avatar: '/avatar/avatar6.png',
                weeklyTripResults : {
                    startDate : '30/05/2016',
                    endDate : '05/06/2016',
                    totalDistance : 62840,
                    averageScore : 5.45,
                    averageConsoScore : 5.4,
                    averageSafetyScore : 7.1,
                    averageConfortScore : 8.1,
                    tripCount : 10,
                    averageTripDistance : 284,
                    shorterTrip : 5.6,
                    longerTrip : 267,
                    ecoStarConso : new Array(3),
                    ecoStarSafety : new Array(3),
                    ecoStarComfort : new Array(4),
                    trips : []
                }
            }
        ];

        this.userCompetitionResults = {
            avatar: '/avatar/avatar3.png',
            weeklyTripResults : {
                startDate : '30/05/2016',
                endDate : '05/06/2016',
                totalDistance : 5440,
                averageScore : 7.45,
                averageConsoScore : 7.4,
                averageSafetyScore : 6.7,
                averageConfortScore : 8.1,
                tripCount : 34,
                averageTripDistance : 160,
                shorterTrip : 5.6,
                longerTrip : 267,
                ecoStarConso : new Array(3),
                ecoStarSafety : new Array(3),
                ecoStarComfort : new Array(4),
                trips : []
            }
            /*,
            monthlyTripResults : {
                startDate : '30/05/2016',
                endDate : '05/06/2016',
                totalDistance : 5440,
                averageScore : 7.45,
                averageConsoScore : 7.4,
                averageSafetyScore : 6.7,
                averageConfortScore : 8.1,
                tripCount : 34,
                averageTripDistance : 160,
                shorterTrip : 5.6,
                longerTrip : 267,
                ecoStarConso : 3,
                ecoStarSafety : 3,
                ecoStarComfort : 4,
                trips : []
            }*/
        };


        this.challengesList = [
            {
                id:0,
                name : 'Meilleur eco conducteur de la semaine'
            },
            {
                id:1,
                name : 'Conducteur Pépère du mois'
            }
        ]


        this.challenges = [
            {
                name : 'Meilleur eco conducteur de la semaine',
                dateDebut : '30/05/2016',
                dateFin : '05/06/2016',
                playerResults : [
                    {
                        name : 'Dominique',
                        trips : [
                            {}
                        ],
                        averageScore : 8,
                        bestScore : 9.1,
                        lowerScore : 5.6
                    }
                ]
            },
            {
                name : 'Conducteur Pépère du mois',
                dateDebut : '01/05/2016',
                dateFin : '31/05/2016',
                playerResults : [
                    {
                        name : 'Dominique',
                        trips : [
                            {}
                        ],
                        averageScore : 8,
                        bestScore : 9.1,
                        lowerScore : 5.6
                    }
                ]
            }
        ];
        $('select').material_select();
        $('.carousel').carousel();
        this.selectOpponent = false;
        this.selectedOpponent = {};
        this.userWinner = false;
        this.opponentWinner = false;

    }

    focusOpponent(opponentIndex, userResult) {
        this.selectOpponent = true;
        this.data = opponentIndex;
        this.selectedOpponent = this.community[opponentIndex];
        if (this.selectedOpponent.weeklyTripResults.averageScore > userResult){
            this.opponentWinner = true;
            this.userWinner = false;
        }
        else{
            this.userWinner = true;
            this.opponentWinner = false;
        }
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

export default angular.module('tripCompare', [
    angularMeteor,
    'nemLogging',
    'uiGmapgoogle-maps'
]).component('tripCompare', {
    templateUrl: 'imports/components/tripCompare/tripCompare.html',
    controller: TripCompareCtrl
});