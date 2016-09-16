(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.eatListToSplit = "";
  $scope.output = "";

  // $scope.display = function () {
  //   var output = check($scope.eatListToSplit);
  //   $scope.output = output;
  // };

  // function check(eatListToSplit) {
  //   var output = "";
  //   if (eatListToSplit.length === 0 || !eatListToSplit.trim()) {
  //     output = "Please enter data first";
  //   } else {
  //     var eatItems = eatListToSplit.split(',');
  //     var total = eatItems.length;
  //     var limit = 3;
  //     if (total <= limit) {
  //       output = "Enjoy!";
  //     } else {
  //       output = "Too much!";
  //     }
  //   }
  //   return output;
  // };

  $scope.check = function () {
    if ($scope.eatListToSplit.length === 0) {
      $scope.output = "Please enter data first";
    } else {
      var eatItems = $scope.eatListToSplit.split(',');
      var total = eatItems.length;
      var limit = 3;
      if (total <= limit) {
        $scope.output = "Enjoy!";
      } else {
        $scope.output = "Too much!";
      }
    }
  };
}

})();
