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
						$scope.shortlistDelete.CLDetail= $scope.shortlistData[key][0].ER_ID;
		//				$scope.shortlistDelete.CLTime="";
						$http.post('/customer/shortlist/delete',$scope.shortlistDelete)
								.then(function(r){
									$state.reload();
								},function(e){
										console.log(e);
								});
					}
				});

			};
			/*********************sortby*********************************************/
			$scope.sortBy = function(orderName){
				alert(777);
				if(orderName==='ER_Price'){
					$scope.orderright = false;
					$scope.orderleft = true;
					$scope.sortPrice=!$scope.sortPrice;
				}else if(orderName==='ER_AvailableDate'){
					$scope.orderleft = false;
					$scope.orderright = true;
					$scope.sortDate=!$scope.sortDate;
				}

				$scope.reverse = ($scope.orderName === orderName) ? !$scope.reverse : false;
					$scope.orderName = orderName;
			//				$scope.orderName = order+'';
			}
			/*********************sortby ends*********************************************/
		}]);
