;(function() {
	'use strict';
	angular.module('andy')
	.controller('ModalContactCtrl', ['$http','$scope', '$modalInstance', 'items','utilConvertDateToString', function($http,$scope, $modalInstance,items,utilConvertDateToString) {
			$scope.contact = {};
			$scope.customer = {};
		$scope.saveEnvelope = function(){
			alert('1010');
			$scope.customer.title = 'Contact';
			$scope.customer.CID = 1;
			$scope.customer.createTime = utilConvertDateToString.getDateToString(new Date(),"yyyy-MM-dd HH:mm:ss");
			$scope.customer.IdReceiver= 3;
			$scope.customer.content = $scope.contact.name +';'+$scope.contact.email +';'+$scope.contact.phone +';'+$scope.contact.message;
			$scope.customer.msg_direct_comment='Customer to Staff';
			console.log("me.customer",$scope.customer);
		$http.post('/customer/msg/write', $scope.customer)
			.then(function(r){
				console.log('r===>',r);
				/*if (r.status===200)
				{
					me.signup_data = {};
					$state.go('app.login');
				}*/
//				$modalInstance.dismiss('cancel');
			},function(e){

			})

		}

		$scope.items = items;
			$scope.selected = {
				item: $scope.items[0]
			};
			$scope.ok = function () {
				$modalInstance.close($scope.selected.item);
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		}])
		.controller('ModalFeedbackCtrl', ['$http','$scope', '$modalInstance', 'items','utilConvertDateToString', function($http,$scope, $modalInstance,items,utilConvertDateToString) {
				$scope.contact = {};
				$scope.customer = {};
			$scope.saveEnvelope = function(){
				alert('1010');
				$scope.customer.title = 'Contact';
				$scope.customer.CID = 1;
				$scope.customer.createTime = utilConvertDateToString.getDateToString(new Date(),"yyyy-MM-dd HH:mm:ss");
				$scope.customer.IdReceiver= 3;
				$scope.customer.content = $scope.contact.name +';'+$scope.contact.email +';'+$scope.contact.phone +';'+$scope.contact.message;
				$scope.customer.msg_direct_comment='Customer to Staff';
				console.log("me.customer",$scope.customer);
			$http.post('/customer/msg/write', $scope.customer)
				.then(function(r){
					console.log('r===>',r);
					/*if (r.status===200)
					{
						me.signup_data = {};
						$state.go('app.login');
					}*/
	//				$modalInstance.dismiss('cancel');
				},function(e){

				})

			}

			$scope.items = items;
				$scope.selected = {
					item: $scope.items[0]
				};
				$scope.ok = function () {
					$modalInstance.close($scope.selected.item);
				};

				$scope.cancel = function () {
					$modalInstance.dismiss('cancel');
				};
			}])
		.controller('fixCtrl',['$scope','$window','$modal',function($scope,$window,$modal){
			$scope.go2Top = function(){
				$(window).scrollTop(0,0);
			};
			$scope.items = ['item1', 'item2', 'item3'];
			$scope.open = function (size) {//'sm','lg',''
	      var modalInstance = $modal.open({
	        templateUrl: 'myModalContact.html',
	        controller: 'ModalContactCtrl',
	        size: size,
	        resolve: {
	          items: function () {
	            return $scope.items;
	          }
	        }
	      });

	      modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	      });
	    };
			$scope.feedback = function (size) {//'sm','lg',''
	      var modalInstance = $modal.open({
	        templateUrl: 'myModalFeedback.html',
	        controller: 'ModalContactCtrl',
	        size: size,
	        resolve: {
	          items: function () {
	            return $scope.items;
	          }
	        }
	      });

	      modalInstance.result.then(function (selectedItem) {
	        $scope.selected = selectedItem;
	      }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	      });
	    };

		}])
})();
