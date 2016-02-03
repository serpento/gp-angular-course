angular.module("sumModul", [])
    .controller('sumCtrl', function($scope) {
        $scope.list = {
            summand1: '',
            summand2: ''
        };

        $scope.summarize = function() {
            var sumResult = _.reduce($scope.list, function(memo, num){ return memo + num; }, 0);
            return sumResult;
        };
    });