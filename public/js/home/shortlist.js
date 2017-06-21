'use strict';
	angular.module('andy')
		.controller('shortlistCtrl',['$scope','$http','$state','SearchService',function($scope,$http,$state,SearchService){
			// $scope.shortlistData=SearchService.get();
			 $scope.shortlistcheckdata = {};
			 $scope.shortlistDelete = {};
			$http.get('/customer/profile')
			.then(function(r) {
				console.log(r);
				if(r.data.customer_login_status){
					$scope.shortlistcheckdata.CID = r.data.CID;
					$scope.shortlistcheckdata.CLType = 'FavorSave';
					$http.post('/customer/shortlist', $scope.shortlistcheckdata)
							.then(function(r){
								$scope.shortlistData = r.data;
								console.log('r',r);
							},function(e){
								console.log("数据有误");
							});
				}

			});
			$scope.remove = function(key){
				$http.get('/customer/profile')
				.then(function(r) {
					console.log(r);
					if(r.data.customer_login_status){
						$scope.shortlistDelete.CID = r.data.CID;
						$scope.shortlistDelete.CLType="FavorSave";
						$scope.shortlistDelete.CLDetail= key;
		//				$scope.shortlistDelete.CLTime="";
						$http.post('/customer/shortlist/delete',$scope.shortlistDelete)
								.then(function(r){
		//							$scope.shortlistData = r.data;
									console.log("$scope.shortlistDelete",r);
									$state.reload();
								},function(e){

								});
					}
				});

			};
		}]);
