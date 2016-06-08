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
                avatar: '/avatar/avatar1.png'
            },
            {
                name : '',
                avatar: '/avatar/avatar2.png'
            },
            {
                name : '',
                avatar: '/avatar/avatar3.png'
            },
            {
                name : '',
                avatar: '/avatar/avatar4.png'
            },
            {
                name : '',
                avatar: '/avatar/avatar6.png'
            }
        ];

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
    }

    focusOpponent(opponentIndex) {
        this.selectOpponent = true;
        this.data = opponentIndex;
        this.selectedOpponent = this.community[opponentIndex];
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