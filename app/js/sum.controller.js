angular.module("sumModule", ['ngRoute'])

    .controller('sumCtrl', function($scope, $routeParams, $location) {
        $scope.list = {
            summand1: parseInt($routeParams.summand1) || '',
            summand2: parseInt($routeParams.summand2) || ''
        };

        $scope.setUrl = function() {
            $location.path('/' + $scope.list.summand1 + '/' + $scope.list.summand2);
        }
    })

    .directive('laSum', function() {
        return {
            restrict: 'E',
            scope: { list: '=' },
            template: '<input type="text" readonly="true" value="{{ summarize() }}" />',
            link: function(scope){
                scope.summarize = function() {
                    return _.reduce(scope.list, function(memo, num){ return memo + num; }, 0);
                }
            }
        };

    })

    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'partials/sum.html',
                    controller: 'sumCtrl'
                })
                .when('/:summand1/:summand2', {
                    templateUrl: 'partials/sum.html',
                    controller: 'sumCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
