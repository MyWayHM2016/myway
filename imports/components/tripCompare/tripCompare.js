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
                    startDate : '15/05/2016',
                    endDate : '21/05/2016',
                    totalDistance : 2640,
                    averageScore : 8.45,
                    averageConsoScore : 7.4,
                    averageSafetyScore : 9.1,
                    averageConfortScore : 8.4,
                    tripCount : 12,
                    averageTripDistance : 220,
                    shorterTrip : 62,
                    longerTrip : 336,
                    ecoStarConso : new Array(3),
                    ecoStarSafety : new Array(4),
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
                avatar: '/avatar/avatar5.png',
                weeklyTripResults : {
                    startDate : '15/05/2016',
                    endDate : '21/05/2016',
                    totalDistance : 336,
                    averageScore : 5.45,
                    averageConsoScore : 8.1,
                    averageSafetyScore : 4.05,
                    averageConfortScore : 4.2,
                    tripCount : 13,
                    averageTripDistance : 25.8,
                    shorterTrip : 5.6,
                    longerTrip : 68.7,
                    ecoStarConso : new Array(4),
                    ecoStarSafety : new Array(2),
                    ecoStarComfort : new Array(2),
                    trips : []
                }
            }
        ];

        this.userCompetitionResults = {
            avatar: '/avatar/avatar3.png',
            weeklyTripResults : {
                startDate : '15/05/2016',
                endDate : '21/05/2016',
                totalDistance : 396.5,
                averageScore : 5.65,
                averageConsoScore : 4.5,
                averageSafetyScore : 6.5,
                averageConfortScore : 6,
                tripCount : 2,
                averageTripDistance : 198,
                shorterTrip : 24.5,
                longerTrip : 372,
                ecoStarConso : new Array(2),
                ecoStarSafety : new Array(3),
                ecoStarComfort : new Array(3),
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