angular.module("sumModul", [])
    .controller('sumCtrl', function($scope) {
        $scope.summand1 = 0;
        $scope.summand2 = 0;

        $scope.summarize = function(){
            return $scope.summand1 + $scope.summand2;
        }
    });