'use strict'
angular.module('andy')
  .controller('footerCtrl',['$location', '$anchorScroll','$scope','$element',function($location,$anchorScroll,$scope,$element){
    $scope.showWechat = function(){
       $scope.wechat = !$scope.wechat;
    }
    $scope.gotoBottom = function(){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('bottom');

      // call $anchorScroll()
      $anchorScroll();
    }
  }]);
