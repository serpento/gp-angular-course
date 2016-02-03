angular.module("sumModul", [])
    .controller('sumCtrl', function($scope) {
        $scope.list = {
            summand1: '',
            summand2: ''
        };

        $scope.summarize = function() {
            var sumResult = $scope.list.summand1 + $scope.list.summand2;
            if(isNaN(sumResult)) return;
            return sumResult;
        };
    });