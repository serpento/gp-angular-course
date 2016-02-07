angular.module("sumModul", [])
    .controller('sumCtrl', function($scope) {
        $scope.list = {
            summand1: '',
            summand2: ''
        };
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

    });