;(function(){
	'use strict';
	angular.module('map',['ngMap','home'])
		.factory('utilConvertDateToString', ['$filter', function ($filter) {  
		    return {  
		        getDateToString: function (date, format) {  
		            if (angular.isDate(date) && angular.isString(format)) {  
		                return $filter('date')(date, format);  
		            }  
		        },  
		        getStringToDate: function (string) {  
		            if (angular.isString(string)) {  
		                return new Date(string.replace(/-/g, "-"));  
		            }  
		        }  
		    };  
		}])
	.controller('MyCtrl',function($scope,$http,$log,NgMap,$cookies,$rootScope,$localStorage,SearchService,utilConvertDateToString) {
				var shortlistInsert = {};
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
				 
				  /*   vm.myInterval = 5000;
				   *   var slides = vm.slides = [];
				    vm.addSlide = function() {
				      slides.push({
				        image: 'img/b1' + slides.length + '.jpg',
				        text: ['Carousel text #0','Carousel text #1','Carousel text #2','Carousel text #3'][slides.length % 4]
				      });
				    };
				    for (var i=0; i<4; i++) {
				      vm.addSlide();
				    }*/
				    
				vm.addShortlist = function (){
					alert("clicked");
					shortlistInsert.CID = 1;
					shortlistInsert.CLType="FavorSave";
					shortlistInsert.CLDetail=vm.shop.ER_ID+'';;
					shortlistInsert.CLTime=utilConvertDateToString.getDateToString(new Date(),"yyyy-MM-dd hh:mm:ss");
					console.log("shortlistInsert",shortlistInsert);
					$http.post('/customer/shortlist/insert', shortlistInsert)
							.then(function(r){
								console.log('r',r);				
									console.log("r",r);
							},function(e){
								console.log("数据有误");
							})
				}
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
