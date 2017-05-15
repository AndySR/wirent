;(function(){
	'use strict';
	angular.module('map',['ngMap','home'])
	.controller('MyCtrl',function($scope,$log,NgMap,$cookies,$rootScope,$localStorage,SearchService) {
				
				var vm = this;
				NgMap.getMap().then(function(map) {
					vm.map = map;
					
				});

				vm.clicked = function() {
					alert('Clicked a link inside infoWindow');
				};
				/*
					 * when SearchService.get() has children, set the result to localstorage,
					 * when searchservice has no child, the localstorage will keep the previous 
					 * set value
					 *
					 * */
					 if(JSON.stringify(SearchService.get()) != "{}"){
					 	$localStorage.settings = SearchService.get().data;
					 	console.log('$localStorage.settings',$localStorage.settings);
					 	vm.shops = $localStorage.settings;
						console.log('vm.shops',vm.shops);
					 	alert( $localStorage.settings);
					 }else{
					 	vm.shops = $localStorage.settings;
					 	console.log('$localStorage.settings other conditions',$localStorage.settings);
					 }
				/*vm.shops = [{
						id: 'foo',
						name: 'FOO SHOP',
						position: 'sydney australia'
					},
					{
						id: 'bar',
						name: 'BAR SHOP',
						position: '9/20 harbourne road kingsford australia'
					},
					{
						id:vm.shopss[0].ER_ID+'',
						name:'Danestone',
						position:vm.shopss[0].ER_No+' '+vm.shopss[0].ER_St+' '+vm.shopss[0].ER_Suburb+' '+vm.shopss[0].ER_Region
					}
				];*/
				vm.shop = vm.shops[0];
				vm.showDetail = function(e, shop) {
					vm.shop = shop;
					vm.map.showInfoWindow('foo-iw', shop.ER_ID+'');
				};

				vm.hideDetail = function() {
					vm.map.hideInfoWindow('foo-iw');
				};
				
				
			})
		.service('googleService',['$scope',function($scope){
			var me = this;
			me.data = {};
//				alert("fixed header");
		}])
})();
