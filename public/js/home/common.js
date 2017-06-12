;
(function() {
	'use strict';
	angular.module('andy')
		/*.filter('propsFilter', function() {
		    return function(items, props) {
		        var out = [];
		
		        if (angular.isArray(items)) {
		          items.forEach(function(item) {
		            var itemMatches = false;
		
		            var keys = Object.keys(props);
		            for (var i = 0; i < keys.length; i++) {
		              var prop = keys[i];
		              var text = props[prop].toLowerCase();
		              if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
		                itemMatches = true;
		                break;
		              }
		            }
		
		            if (itemMatches) {
		              out.push(item);
		            }
		          });
		        } else {
		          // Let the output be the input untouched
		          out = items;
		        }
		
		        return out;
		    };
		})*/
		/*.factory('readData', ['$http', '$q', function($http, $q) {
			return {
				query: function() {
					var deferred = $q.defer();
					$http({
						method: 'GET',
						url: '/customer/hotrent'
					}).success(function(data, status, header, config) {
						deferred.resolve(data);
					}).error(function(data, status, header, config) {
						deferred.reject(data);
					});
					return deferred.promise;
				}
			}
		}])
		.factory('SearchService', function() {
			var savedData = {}

			function set(data) {
				savedData = data;
			}

			function get() {
				return savedData;
			}

			return {
				set: set,
				get: get
			}

		})
		.factory('hotRentService', function() {
			var savedData = {}

			function set(data) {
				savedData = data;
			}

			function get() {
				return savedData;
			}

			return {
				set: set,
				get: get
			}

		})
		.factory('updateService', function() {
			var savedData = {}

			function set(data) {
				savedData = data;
			}

			function get() {
				return savedData;
			}

			return {
				set: set,
				get: get
			}

		})*/
		.directive('animatesearch', ['$timeout', function($timeout) {
			return {
				restrict: 'EA',
				templateUrl: '/partials/mydirectives/directive-search.html',
				//			   css: 'css/winning/new.css',
				scope: {
					tips : '=',
					features : '=',
					boxshow : '=',
					openmodal : "&"
				},
				controller: function($scope) {
//					$scope.openmodal();
				},
				link: function(scope, element, attr) {
//					scope.openmodal();
					scope.tips=false;
					scope.features=false;
					scope.boxshow=true;
					/*点击事件*/
					scope.clickEvent = function(event) {
						var left = 0;
						var opacity=0;
//						left = left + 63 * event;
						if(event == 0) {
							left = 0;
							opacity=1;
							scope.tips=false;
							scope.features=false;
							scope.boxshow=true;
							element.find("i").css({'opacity': 1,'left': left + 90 + 'px'});
						} else if(event == 1) {
							left = 90;
							opacity=1;
							scope.tips=true;
							scope.features=false;
							scope.boxshow=true;
							element.find("i").css({'opacity': 1,'left': left + 90 + 'px'});
						}
						 else if(event == 2) {
							left = 130;
							opacity=1;
							scope.tips=false;
							scope.features=false;
							scope.boxshow=true;
							element.find("i").css({'opacity': 1,'left': left + 56 + 'px'});
						}
						  else if(event == 3) {
							left = 186;
							opacity=1;
							scope.tips=true;
							scope.features=false;
							scope.boxshow=false;
							element.find("i").css({'opacity': 0,'left': left + 56 + 'px'});
						}
						   else if(event == 4) {
							left = 256;
							opacity=1;
							scope.tips=false;
							scope.features=true;
							scope.boxshow=false;
							element.find("i").css({'opacity': 0,'left': left + 56 + 'px'});
						}
						 else if(event == 5) {
						 	left = 334;
						 	opacity=1;
							scope.tips=false;
							scope.features=false;
							scope.boxshow=true;
							element.find("i").css({'opacity': 1,'left': left + 56 + 'px'});
						}
						element.find("li").removeClass("selected");
						element.find("li").eq(event).addClass("selected");
						/*element.find("i").css({
							'left': left + 56 + 'px'
						});*/
					};
				}
			}
		}])
		.directive('selectSearch', function($compile) {
			return {
				restrict: 'AE',
				scope: {
					datas: '=',
					x: '=',
					searchField: '=bind',
					getData: "&",
					change: "&"
				},
				controller: function($scope) {
					$scope.getData();
					$scope.change();
				},
				template: '<input type = "test"' +
					'class="input-lg form-control" autocomplete="off" name="inputStr" data-val="true" data-val-required="Please choose a location to search." ng-minlength="2"  placeholder="Search by suburb, region, postcode or address" type="text"' +
					'ng-change="changeKeyValue(searchField)" ng-keyup="getData({val:searchField})" ng-model="searchField" ' +
					' value="{{searchField}}" style="width:414px; height:55px;border:none"/>' +
					'<div  ng-hide="hidden" style = "position:absolute; top:55px; z-index: 1000;">' +
					'   <select style = "width:605px; border:none;border-bottom-left-radius:2px;border-bottom-right-radius:4px; overflow-x:hidden;" ng-change="change(x)" ng-model="x" multiple>' +
					'       <option ng-repeat="data in datas track by $index" style="padding-left:16px;padding-bottom:10px">{{data}}</option>' +
					'   </select>' +
					'</div>',
				//    replace: true,  overflow-y:hidden;remove the y-direction overflow-hidden
				link: function($scope, elem, attr, ctrl) {
					$scope.getData();
					$scope.change();
					$scope.tempdatas = $scope.datas; //下拉框选项副本  
					$scope.hidden = true; //选择框是否隐藏  
					$scope.searchField = ''; //文本框数据  
					//将下拉选的数据值赋值给文本框  
					$scope.change = function(x) {
						$scope.searchField = x;
						$scope.hidden = true;
					}
					//获取的数据值与下拉选逐个比较，如果包含则放在临时变量副本，并用临时变量副本替换下拉选原先的数值，如果数据为空或找不到，就用初始下拉选项副本替换  
					$scope.changeKeyValue = function(v) {

						var newDate = []; //临时下拉选副本  
						//如果包含就添加  
						angular.forEach($scope.datas, function(data, index, array) {
							if((data + "").indexOf(v) >= 0) {
								newDate.unshift(data);
							}
						});
						//用下拉选副本替换原来的数据  
						$scope.datas = newDate;
						//下拉选展示  
						$scope.hidden = false;
						//如果不包含或者输入的是空字符串则用初始变量副本做替换  
						if($scope.datas.length == 0 || '' == v) {
							$scope.datas = $scope.tempdatas;
						}
						console.log($scope.datas);
					}
				}
			};
		})
		.directive('hotrent', ['readData','$timeout', 'mouseEvent','hotRentService', function(readData, $timeout, mouseEvent,hotRentService) {
			return {
				restrict: 'EA',
				templateUrl: '/partials/mydirectives/directive-hotrent.html',
				scope: {
				},
				link: function(scope, element, attr) {
					scope.imageid = 4;
					scope.left = 0;
					var promise = readData.query();
					var step = 0;
					var time = null;
					promise.then(function(data) {
						 angular.forEach(data, function(data,index,array){
						//data等价于array[index]
						data.train_station = false;
						data.backpack = false;
						data.park = false;
						data.school = false;
						data.big_family = false;
						data.shopping_mall = false;
						data.offical_rental = false;
						data.university = false;
						var dataresults = data.ER_Description.split(";");
						console.log("lengthhhh",dataresults);
						var uniindex = 0
						dataresults.pop();
						uniindex = dataresults.indexOf('university');
						console.log("length",dataresults.length);
						for(var i =0;i<dataresults.length;i++)
						{
							switch (dataresults[i])
							{
							     case "train_station":
							     	data.train_station = true;
							   	 break;
							     case "backpack": 
									data.backpack = true;
							    break;
							     case "park": 
									data.park = true;
							    break;
							     case "school": 
									data.school = true;
							    break;
							     case "big_family": 
									data.big_family = true;
							    break;
							     case "shopping_mall": 
									data.shopping_mall = true;
							    break;
							     case "offical_rental": 
									data.offical_rental = true;
							    break;
							    case "university":
							     	data.university = true;
							     break;
							    case "":
							    	data.university = false;
							    	 break;
							    default:
							    	data.university = true;
							    	 break;
							    	
							}
						}
						if (uniindex == dataresults.length-1 || uniindex==-1){
								data.university = false;
							}
						if(data.university){
							data.uniname = dataresults[uniindex + 1];
						}
					});
						scope.carouselimages = data;
						hotRentService.set(data);
						console.log("scope.carouselimages",scope.carouselimages);
					});
					scope.prev = function(){
						if(scope.imageid >4 ){
							scope.imageid--;
							scope.left = scope.left+341.25;
							element.find("ul").css({
								'left': scope.left + 'px'
							});
						}
					}
					scope.next = function(){
						if(scope.imageid <scope.carouselimages.length ){
							scope.imageid++;
							scope.left = scope.left-341.25;
							element.find("ul").css({
								'left': scope.left + 'px'
							});
						}
					}
				}
			}
		}])
		.service('commonHeader', ['$scope', function() {
			
			
		}])
		.controller('HomeController', [
			'$cookies',
			'$rootScope',
			'$state',
			'$scope',
			'$element',
			'$http',
			'SearchService',
			'updateService',
			'$modal', 
			'$log',
			function($cookies, $rootScope, $state, $scope, $element, $http, SearchService, updateService,$modal,$log) {
				var hello = true;
				//						var address = {};
				var active = true;
				var data = {};
				var count = 0;
				var regions = {};
				var business = {};
				$scope.datas = []; //下拉框选项
				var entireData = {};
				var ER_Feature = '';
				var t1Arr = [];
				var t2Arr = [];
				var t3Arr = [];
				var t4Arr = [];
				var t5Arr = [];
				var t6Arr = [];
				var t7Arr = [];
				/*****************anchorscroll********************/
				
				/************************************************/
			
				/*******************************************location input**************************/
		    $scope.person = {};
	        $scope.people = [
	        { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
	        { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
	        { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
	        { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
	        { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
	        { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
	        { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
	        { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
	        { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
	        { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
	        ];
	        /***************************************************************/
				//model types
				$scope.myMode = 'Entire';
				$scope.Modes = [{
					id: 1,
					name: 'Entire'
				}, {
					id: 2,
					name: 'Share'
				}, {
					id: 3,
					name: 'New Homes'
				}, {
					id: 4,
					name: 'Sold'
				}];

				// input address
				$scope.getData = function(val) {
					$scope.datas = [];
					regions = {};
					data.inputStr = val;
					if(data.inputStr && data.inputStr.length > 2) {
						$http.post('/customer/filt_address', data)
							.then(function(r) {
								console.log('r', r);
								angular.forEach(r.data, function(value, key) {
									regions.postcode = value.postcode;
									regions.region = value.region;
									regions.suburb = value.suburb;
									//									  console.log("regions",regions);
									//									  if( !$scope.datas.contains(regions.postcode))
									$scope.datas.push(regions.suburb + "," + regions.region + "," + regions.postcode);
								});

							}, function(e) {
								console.log("数据有误");
							})
					} else {
						$scope.datas = [""];
					}

				}

				// property types
				$scope.myPropertyType = '';
				$scope.propertyTypes = [{
						id: 1,
						propertyType: 'House'
					}, {
						id: 2,
						propertyType: 'Apartment'
					},
					{
						id: 3,
						propertyType: 'Unit'
					}, {
						id: 4,
						propertyType: 'Studio'
					}
				];

				//select minPrice
				$scope.myMinPrice = 0;
				$scope.minPrices = [{
					id: 1,
					price: ''
				}, {
					id: 2,
					price: '50'
				}, {
					id: 3,
					price: '100'
				}, {
					id: 4,
					price: '150'
				}, {
					id: 5,
					price: '200'
				}, {
					id: 6,
					price: '250'
				}, {
					id: 7,
					price: '300'
				}, {
					id: 8,
					price: '350'
				}, {
					id: 9,
					price: '400'
				}, {
					id: 10,
					price: '450'
				}, {
					id: 11,
					price: '500'
				}, {
					id: 12,
					price: '550'
				}, {
					id: 13,
					price: '600'
				}, {
					id: 14,
					price: '650'
				}, {
					id: 15,
					price: '700'
				}, {
					id: 16,
					price: '750'
				}, {
					id: 17,
					price: '800'
				}, {
					id: 18,
					price: '850'
				}, {
					id: 19,
					price: '900'
				}, {
					id: 20,
					price: '950'
				}, {
					id: 21,
					price: '1000'
				}, {
					id: 22,
					price: '1100'
				}, {
					id: 23,
					price: '1200'
				}, {
					id: 24,
					price: '1300'
				}, {
					id: 25,
					price: '1400'
				}, {
					id: 26,
					price: '1500'
				}, {
					id: 27,
					price: '1600'
				}, {
					id: 28,
					price: '1700'
				}, {
					id: 29,
					price: '1800'
				}, {
					id: 30,
					price: '1900'
				}];

				//select maxPrice
				$scope.myMaxPrice = 2000;
				$scope.maxPrices = [{
					id: 1,
					price: ''
				}, {
					id: 2,
					price: '50'
				}, {
					id: 3,
					price: '100'
				}, {
					id: 4,
					price: '150'
				}, {
					id: 5,
					price: '200'
				}, {
					id: 6,
					price: '250'
				}, {
					id: 7,
					price: '300'
				}, {
					id: 8,
					price: '350'
				}, {
					id: 9,
					price: '400'
				}, {
					id: 10,
					price: '450'
				}, {
					id: 11,
					price: '500'
				}, {
					id: 12,
					price: '550'
				}, {
					id: 13,
					price: '600'
				}, {
					id: 14,
					price: '650'
				}, {
					id: 15,
					price: '700'
				}, {
					id: 16,
					price: '750'
				}, {
					id: 17,
					price: '800'
				}, {
					id: 18,
					price: '850'
				}, {
					id: 19,
					price: '900'
				}, {
					id: 20,
					price: '950'
				}, {
					id: 21,
					price: '1000'
				}, {
					id: 22,
					price: '1100'
				}, {
					id: 23,
					price: '1200'
				}, {
					id: 24,
					price: '1300'
				}, {
					id: 25,
					price: '1400'
				}, {
					id: 26,
					price: '1500'
				}, {
					id: 27,
					price: '1600'
				}, {
					id: 28,
					price: '1700'
				}, {
					id: 29,
					price: '1800'
				}, {
					id: 30,
					price: '1900'
				}];
				//select bedsNum
				$scope.minBedNum = 0;
				$scope.maxBedNum = 5;
				$scope.bedsNum = [{
					id: 1,
					num: ''
				}, {
					id: 2,
					num: '1'
				}, {
					id: 3,
					num: '2'
				}, {
					id: 4,
					num: '3'
				}, {
					id: 5,
					num: '4'
				}, {
					id: 6,
					num: '5'
				}];
				//select bathNum
				$scope.minBathNum = 0;
				$scope.maxBathNum = 5;
				$scope.bathsNum = [{
					id: 1,
					num: ''
				}, {
					id: 2,
					num: '1'
				}, {
					id: 3,
					num: '2'
				}, {
					id: 4,
					num: '3'
				}, {
					id: 5,
					num: '4'
				}, {
					id: 6,
					num: '5'
				}];

				//select parkingNum
				$scope.myParkingNum = 0;
				$scope.parkingsNum = [{
					id: 1,
					num: ''
				}, {
					id: 2,
					num: '0'
				}, {
					id: 3,
					num: '1'
				}, {
					id: 4,
					num: '2'
				}, {
					id: 5,
					num: '3'
				}, {
					id: 6,
					num: '4'
				}, {
					id: 7,
					num: '5'
				}];

				function SetCredentials(searchData) {
					$rootScope.globals = {
						currentData: {
							data: searchData
						}
					};
					// store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
					var cookieExp = new Date();
					cookieExp.setDate(cookieExp.getDate() + 7);
					$cookies.globals = $rootScope.globals;
				}
				//search for the results of properties
				$scope.entireSearch = function() {
					//selected items which are an array
					console.log('$scope.x',$scope.x);
					if($scope.x) {
						var address = $scope.x[0].split(",");
						console.log("xxx", address);
						entireData = {
							ER_Suburb: address[0],
							ER_Region: address[1],
							ER_Type: $scope.myPropertyType,
							ER_PriceMin: $scope.myMinPrice,
							ER_PriceMax: $scope.myMaxPrice,
							ER_BedRoomMin: $scope.minBedNum,
							ER_BedRoomMax: $scope.maxBedNum,
							ER_BathRoomMin: $scope.minBathNum,
							ER_BathRoomMax: 10,
							ER_ParkingMin: $scope.myParkingNum,
							ER_ParkingMax: 10,
							ER_AreaMin: 0,
							ER_AreaMax: 50000,
							ER_AvailableDate: '2200-01-01',
							ER_Description:'',
							ER_Feature: ER_Feature
						};
					} else {
						entireData = {
							ER_Suburb: '',
							ER_Region: '',
							ER_Type: $scope.myPropertyType,
							ER_PriceMin: $scope.myMinPrice,
							ER_PriceMax: $scope.myMaxPrice,
							ER_BedRoomMin: $scope.minBedNum,
							ER_BedRoomMax: $scope.maxBedNum,
							ER_BathRoomMin: $scope.minBathNum,
							ER_BathRoomMax: 10,
							ER_ParkingMin: $scope.myParkingNum,
							ER_ParkingMax: 10,
							ER_AreaMin: 0,
							ER_AreaMax: 5000,
							ER_AvailableDate: '2200-01-01',
							ER_Description:'',
							ER_Feature: ER_Feature
						}
					}

					// $state.go('app.googlemap');
					console.log(entireData);
					$http.post('/customer/filt/entire', entireData)
						.then(function(r) {
							SearchService.set(r);
							updateService.set(entireData);
							//							SetCredentials(r);
							console.log('r===>', r);
							if(r.data.length > 0) {
								$state.go('app.listpage');
							}
							//							

						}, function(e) {

						});
				}
				/**
				 * features update code starts
				 */
				//all_requirements
				// colum1
				$scope.nosmoking = function (){
					$scope.no_smoking = !$scope.no_smoking;
					if($scope.no_smoking==true &&$scope.no_pets==true&&$scope.girl_only==true&&$scope.boy_only==true&&$scope.no_party==true)
					{
						$scope.all_requirements = true;
					}else if($scope.no_smoking==false || $scope.no_pets==false || $scope.girl_only==false || $scope.boy_only==false || $scope.no_party==false){
						$scope.all_requirements = false;
					}
				}
				$scope.nopets = function (){
					$scope.no_pets = !$scope.no_pets;
					if($scope.no_smoking==true&&$scope.no_pets==true&&$scope.girl_only==true&&$scope.boy_only==true&&$scope.no_party==true)
					{
						$scope.all_requirements = true;
					}else if($scope.no_smoking==false || $scope.no_pets==false || $scope.girl_only==false || $scope.boy_only==false || $scope.no_party==false){
						$scope.all_requirements = false;
					}
				}
				$scope.girlonly = function (){
					$scope.girl_only = !$scope.girl_only;
					if($scope.no_smoking==true&&$scope.no_pets==true&&$scope.girl_only==true&&$scope.boy_only==true&&$scope.no_party==true)
					{
						$scope.all_requirements = true;
					}else if($scope.no_smoking==false || $scope.no_pets==false || $scope.girl_only==false || $scope.boy_only==false || $scope.no_party==false){
						$scope.all_requirements = false;
					}
				}
				$scope.boyonly = function (){
					$scope.boy_only = !$scope.boy_only;
					if($scope.no_smoking==true&&$scope.no_pets==true&&$scope.girl_only==true&&$scope.boy_only==true&&$scope.no_party==true)
					{
						$scope.all_requirements = true;
					}else if($scope.no_smoking==false || $scope.no_pets==false || $scope.girl_only==false || $scope.boy_only==false || $scope.no_party==false){
						$scope.all_requirements = false;
					}
				}
				$scope.noparty = function (){
					$scope.no_party = !$scope.no_party;
					if($scope.no_smoking==true&&$scope.no_pets==true&&$scope.girl_only==true&&$scope.boy_only==true&&$scope.no_party==true)
					{
						$scope.all_requirements = true;
					}else if($scope.no_smoking==false || $scope.no_pets==false || $scope.girl_only==false || $scope.boy_only==false || $scope.no_party==false){
						$scope.all_requirements = false;
					}
				}
				
				$scope.col_requirements = function(){
					$scope.all_requirements = !$scope.all_requirements;
					
					if($scope.all_requirements)
					{
						$scope.no_smoking = true;
						$scope.no_pets = true;
						$scope.girl_only = true;
						$scope.boy_only = true;
						$scope.no_party = true;
					}
					else{
						$scope.no_smoking = false;
						$scope.no_pets = false;
						$scope.girl_only = false;
						$scope.boy_only = false;
						$scope.no_party = false;
					}
					
				}
				// colum2
				//appliances
				$scope.stove_click = function (){
					$scope.stove = !$scope.stove;
					if($scope.stove==true &&$scope.dishwasher==true&&$scope.dryer==true&&$scope.aircondition==true)
					{
						$scope.appliances = true;
					}else if($scope.stove==false || $scope.dishwasher==false || $scope.dryer==false || $scope.aircondition==false){
						$scope.appliances = false;
					}
				}
				$scope.dishwasher_click = function (){
					$scope.dishwasher = !$scope.dishwasher;
					if($scope.stove==true &&$scope.dishwasher==true&&$scope.dryer==true&&$scope.aircondition==true)
					{
						$scope.appliances = true;
					}else if($scope.stove==false || $scope.dishwasher==false || $scope.dryer==false || $scope.aircondition==false){
						$scope.appliances = false;
					}
				}
				$scope.dryer_click = function (){
					$scope.dryer = !$scope.dryer;
					if($scope.stove==true &&$scope.dishwasher==true&&$scope.dryer==true&&$scope.aircondition==true)
					{
						$scope.appliances = true;
					}else if($scope.stove==false || $scope.dishwasher==false || $scope.dryer==false || $scope.aircondition==false){
						$scope.appliances = false;
					}
				}
				$scope.aircondition_click = function (){
					$scope.aircondition = !$scope.aircondition;
					if($scope.stove==true &&$scope.dishwasher==true&&$scope.dryer==true&&$scope.aircondition==true)
					{
						$scope.appliances = true;
					}else if($scope.stove==false || $scope.dishwasher==false || $scope.dryer==false || $scope.aircondition==false){
						$scope.appliances = false;
					}
				}
				
				$scope.col_appliances = function(){
					$scope.appliances = !$scope.appliances;
					if($scope.appliances)
					{
						$scope.stove = true;
						$scope.dishwasher = true;
						$scope.dryer = true;
						$scope.aircondition = true;
					}
					else{
						$scope.stove = false;
						$scope.dishwasher = false;
						$scope.dryer = false;
						$scope.aircondition = false;
					}
//					$scope.appliances = $scope.stove&&$scope.dishwasher&&$scope.dryer;
				}
				//furniture
				// colum3
				$scope.bed_click = function (){
					$scope.bed = !$scope.bed;
					if($scope.bed==true &&$scope.desk==true&&$scope.wardrob==true)
					{
						$scope.furniture = true;
					}else if($scope.bed==false || $scope.desk==false || $scope.wardrob==false){
						$scope.furniture = false;
					}
				}
				$scope.desk_click = function (){
					$scope.desk = !$scope.desk;
					if($scope.bed==true &&$scope.desk==true&&$scope.wardrob==true)
					{
						$scope.furniture = true;
					}else if($scope.bed==false || $scope.desk==false || $scope.wardrob==false){
						$scope.furniture = false;
					}
				}
				$scope.wardrob_click = function (){
					$scope.wardrob = !$scope.wardrob;
					if($scope.bed==true &&$scope.desk==true&&$scope.wardrob==true)
					{
						$scope.furniture = true;
					}else if($scope.bed==false || $scope.desk==false || $scope.wardrob==false){
						$scope.furniture = false;
					}
				}
				
				$scope.col_furniture = function(){
					$scope.furniture = !$scope.furniture;
					if($scope.furniture)
					{
						$scope.bed = true;
						$scope.desk = true;
						$scope.wardrob = true;
					}
					else{
						$scope.bed = false;
						$scope.desk = false;
						$scope.wardrob = false;
					}
				}
				// colum4
				//other_appliance
				$scope.refrigerator_click = function (){
					$scope.refrigerator = !$scope.refrigerator;
					if($scope.refrigerator==true &&$scope.laundry==true)
					{
						$scope.other_appliance = true;
					}else if($scope.refrigerator==false || $scope.laundry==false){
						$scope.other_appliance = false;
					}
				}
				$scope.laundry_click = function (){
					$scope.laundry = !$scope.laundry;
					if($scope.refrigerator==true &&$scope.laundry==true)
					{
						$scope.other_appliance = true;
					}else if($scope.refrigerator==false || $scope.laundry==false){
						$scope.other_appliance = false;
					}
				}
				
				
				$scope.col_other_appliance = function(){
					$scope.other_appliance = !$scope.other_appliance;
					if($scope.other_appliance)
					{
						$scope.refrigerator = true;
						$scope.laundry = true;
					}
					else{
						$scope.refrigerator = false;
						$scope.laundry = false;
					}
				}
				// colum5
				//other_essential
				$scope.wifi_click = function (){
					$scope.wifi = !$scope.wifi;
					if($scope.wifi==true &&$scope.gas==true)
					{
						$scope.other_essential = true;
					}else if($scope.wifi==false || $scope.gas==false){
						$scope.other_essential = false;
					}
				}
				$scope.gas_click = function (){
					$scope.gas = !$scope.gas;
					if($scope.wifi==true &&$scope.gas==true)
					{
						$scope.other_essential = true;
					}else if($scope.wifi==false || $scope.gas==false){
						$scope.other_essential = false;
					}
				}
				$scope.col_other_essential = function(){
					$scope.other_essential = !$scope.other_essential;
					if($scope.other_essential)
					{
						$scope.wifi = true;
						$scope.gas = true;
					}
					else{
						$scope.wifi = false;
						$scope.gas = false;
					}
				}
				
				
		/***************************features update ends *******************************************/
		
		/*******************************************************************************************
		 * search by different features
		 *******************************************************************************************/
		$scope.features_Submit = function(){
//			alert($scope.wardrob);
			var arr_key = [$scope.stove,$scope.dishwasher,
							$scope.dryer,$scope.aircondition,
							$scope.refrigerator,$scope.laundry,$scope.bed,$scope.desk,
							$scope.wardrob,$scope.wifi,$scope.gas,$scope.no_smoking,$scope.no_pets,
							$scope.girl_only,$scope.boy_only,$scope.no_party];
			var arr_value = ["stove","dishwasher","dryer","aircondition","refrigerator"
								,"laundry","bed","desk","wardrob","wifi","gas","no_smoking",
								"no_pets","girl_only","boy_only","no_party"];
			var arr_features = [];
			for(var i=0;i<arr_key.length;i++){
				if(arr_key[i]){
					arr_features.push("%"+arr_value[i]+";");
				}
			}
			if(arr_features.length==0){
				arr_features.push("");
			}
			ER_Feature = arr_features.join('');
			entireData = {
							ER_Suburb: '',
							ER_Region: '',
							ER_Type: $scope.myPropertyType,
							ER_PriceMin: $scope.myMinPrice,
							ER_PriceMax: 10000,
							ER_BedRoomMin: $scope.minBedNum,
							ER_BedRoomMax: 20,
							ER_BathRoomMin: $scope.minBathNum,
							ER_BathRoomMax: 10,
							ER_ParkingMin: $scope.myParkingNum,
							ER_ParkingMax: 10,
							ER_AreaMin: 0,
							ER_AreaMax: 50000,
							ER_AvailableDate: '2200-01-01',
							ER_Description:'',
							ER_Feature: ER_Feature
						}
			console.log("arr_features",arr_features.join(''));
			$http.post('/customer/filt/entire', entireData)
						.then(function(r) {
							SearchService.set(r);
							updateService.set(entireData);
							//SetCredentials(r);
							console.log('r===>', r);
							if(r.data.length > 0) {
//								$state.go('app.listpage');
								$state.go('app.listpage');
							}
							//							

						}, function(e) {
								console.log('r===>', e);
						});
		}
				
				
		/*****************theme title search********************************************************/
				$scope.search = function(keywords) {
//					console.log($scope.x);
//					alert(keywords);
					if($scope.x) {
						var address = $scope.x[0].split(",");
//						console.log("xxx", address);
						entireData = {
							ER_Suburb: address[0],
							ER_Region: address[1],
							ER_Type: $scope.myPropertyType,
							ER_PriceMin: $scope.myMinPrice,
							ER_PriceMax: $scope.myMaxPrice,
							ER_BedRoomMin: $scope.minBedNum,
							ER_BedRoomMax: $scope.maxBedNum,
							ER_BathRoomMin: $scope.minBathNum,
							ER_BathRoomMax: 5,
							ER_ParkingMin: $scope.myParkingNum,
							ER_ParkingMax: 5,
							ER_AreaMin: 0,
							ER_AreaMax: 5000,
							ER_AvailableDate: '2020-01-01',
							ER_Description:'%'+keywords+';',
							ER_Feature: ER_Feature
						};
					} else {
						entireData = {
							ER_Suburb: '',
							ER_Region: '',
							ER_Type: $scope.myPropertyType,
							ER_PriceMin: $scope.myMinPrice,
							ER_PriceMax: $scope.myMaxPrice,
							ER_BedRoomMin: $scope.minBedNum,
							ER_BedRoomMax: $scope.maxBedNum,
							ER_BathRoomMin: $scope.minBathNum,
							ER_BathRoomMax: 5,
							ER_ParkingMin: $scope.myParkingNum,
							ER_ParkingMax: 5,
							ER_AreaMin: 0,
							ER_AreaMax: 5000,
							ER_AvailableDate: '2020-01-01',
							ER_Description:'%'+keywords+';',
							ER_Feature: ER_Feature
						}
					}

					// $state.go('app.googlemap');
					console.log(entireData);
					$http.post('/customer/filt/entire', entireData)
						.then(function(r) {
							SearchService.set(r);
							updateService.set(entireData);
							//SetCredentials(r);
							console.log('r===>', r);
							if(r.data.length > 0) {
//								$state.go('app.listpage');
								$state.go('app.listpage');
							}
							//							

						}, function(e) {

						});
				}
		/*****************theme title search ends********************************************************/
		
		
		/**************************************商家专区 starts****************************************************/
				$scope.businessSearch = function(TPDetail){
					business.TPDetail = TPDetail;
					business.TPServLoc = '';
					$http.post('/customer/filt_thirdparty', business)
						.then(function(r) {
							SearchService.set(r);
							updateService.set(TPDetail);
							console.log('r===>', r);
							if(r.data.length > 0) {
								$state.go('app.business');
							}
							//							

						}, function(e) {

						});
				}
		/**************************************商家专区 ends****************************************************/
		
				/****************************datepicker control code************************************/
				$scope.today = function() {
					$scope.dt = new Date();
				};
				$scope.today();

				$scope.clear = function() {
					$scope.dt = null;
				};

				// Disable weekend selection
				/*$scope.disabled = function(date, mode) {
				  return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
				};*/

				$scope.toggleMin = function() {
					$scope.minDate = $scope.minDate ? null : new Date();
				};
				$scope.toggleMin();

				$scope.open = function($event) {
					$event.preventDefault();
					$event.stopPropagation();

					$scope.opened = true;
				};

				$scope.dateOptions = {
					formatYear: 'yy',
					startingDay: 1,
					class: 'datepicker'
				};

				$scope.initDate = new Date('2016-15-20');
				$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
				$scope.format = $scope.formats[0];


			/**********************************modal code starts***********************************/
		    $scope.items = ['item1', 'item2', 'item3'];
		    
		    $scope.openmodal = function (size) {
//		    	alert("modal");
				
		      var modalInstance = $modal.open({
		        templateUrl: 'myModalContent.html',
		        controller: 'ModalInstanceCtrl',
		        size: size,
		        resolve: {
		         /* maps: function(){
		          	return angular.element(".subway-map").subwayMap({ debug: true });
		          },*/
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
		    /**********************************modal code ends***********************************/
			
			/************************filter orderby*******************************/
			$scope.orderleft = false;
			$scope.orderright = false;
			$scope.sortBy = function(orderName){
				alert("000");
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
			/************************filter orderby*******************************/
			
			/****************************train filter starts*****************************/
			/* $scope.get_Chatswood = function(str1,str2){
			 		 	if(t1Arr.length<=0){
			 		 		t1Arr.push(str2);
			 		 		console.log(str2);
			 		 		angular.element("."+str2).css({'background-color': '#fcb514'});
			 		 	}else{
			 		 		for(var i=0; i<t1Arr.length; i++) {
						    if(t1Arr[i] == str2) {
						      t1Arr.splice(i, 1);
						      angular.element("."+str2).css({'background-color': '#4d555d'});
						    }else{
						    	t1Arr.push(str2);
						    	angular.element("."+str2).css({'background-color': '#fcb514'});
						    }
						  }
			 		 	}
			 }
			 $scope.get_Hornsby = function(str1,str2){
			 		 	if(t1Arr.length<=0){
			 		 		t1Arr.push(str2);
			 		 		console.log(str2);
			 		 		angular.element("."+str2).css({'background-color': '#fcb514'});
			 		 	}else{
			 		 		for(var i=0; i<t1Arr.length; i++) {
						    if(t1Arr[i] == str2) {
						      t1Arr.splice(i, 1);
						      angular.element("."+str2).css({'background-color': '#4d555d'});
						    }else{
						    	t1Arr.push(str2);
						    	angular.element("."+str2).css({'background-color': '#fcb514'});
						    }
						  }
			 		 	}
			 }*/
				/*****************************************************************
			     ********************entire rental station filter*****************
			     ****************************************************************/
			 	$scope.Chatswood=false;$scope.Hornsby=false;$scope.Epping=false;$scope.MQ_Uni=false;$scope.Rodes=false;$scope.allT1=false;
				$scope.Burwood=false;$scope.Straithfield=false;$scope.Greensquare=false;$scope.Mascot=false;$scope.Lidcome_T2=false;$scope.allT2=false;
				$scope.Central_T3=false;$scope.Sydenham=false;$scope.Campsie=false;$scope.Bankstown=false;$scope.Liverpool_T3=false;$scope.allT3=false;
				$scope.Central_T4=false;$scope.Redfern=false;$scope.Wollicreek=false;$scope.Rockdale=false;$scope.Hurstville=false;$scope.allT4=false;				
				$scope.Parramatta=false;$scope.Westmead=false;$scope.Blacktown=false;$scope.Merrylands=false;$scope.Liverpool_T5=false;$scope.allT5=false;
			 	$scope.Clyde=false;$scope.Rosehill=false;$scope.Camellia=false;$scope.Carlingford=false;$scope.allT6=false;
				$scope.Lidcome_T7=false;$scope.Olympic_Park=false;$scope.allT7=false;
			 	// T1
				$scope.get_Chatswood = function (){
					$scope.Chatswood = !$scope.Chatswood;
					console.log("$scope.Chatswood",$scope.Chatswood);
					if($scope.Chatswood==true &&$scope.Hornsby==true&&$scope.Epping==true&&$scope.MQ_Uni==true&&$scope.Rodes==true)
					{
						$scope.allT1 = true;
						$scope.Chatswood=false ;$scope.Hornsby=false; $scope.Epping=false; $scope.MQ_Uni=false; $scope.Rodes=false;
					}else if($scope.Chatswood==false || $scope.Hornsby==false || $scope.Epping==false || $scope.MQ_Uni==false || $scope.Rodes==false){
						$scope.allT1 = false;
					}
					station_selection();
				
				}
				
				$scope.get_Hornsby = function (){
					$scope.Hornsby = !$scope.Hornsby;
					if($scope.Chatswood==true &&$scope.Hornsby==true&&$scope.Epping==true&&$scope.MQ_Uni==true&&$scope.Rodes==true)
					{	
						$scope.allT1 = true;
						$scope.Chatswood=false ;$scope.Hornsby=false; $scope.Epping=false; $scope.MQ_Uni=false; $scope.Rodes=false;
					}else if($scope.Chatswood==false || $scope.Hornsby==false || $scope.Epping==false || $scope.MQ_Uni==false || $scope.Rodes==false){
						$scope.allT1 = false;
					}
					station_selection();
				}
				$scope.get_Epping = function (){
					$scope.Epping = !$scope.Epping;
					if($scope.Chatswood==true &&$scope.Hornsby==true&&$scope.Epping==true&&$scope.MQ_Uni==true&&$scope.Rodes==true)
					{	
						$scope.allT1 = true;
						$scope.Chatswood=false ;$scope.Hornsby=false; $scope.Epping=false; $scope.MQ_Uni=false; $scope.Rodes=false;
					}else if($scope.Chatswood==false || $scope.Hornsby==false || $scope.Epping==false || $scope.MQ_Uni==false || $scope.Rodes==false){
						$scope.allT1 = false;
					}
					station_selection();
				}
				$scope.get_MQ_Uni = function (){
					$scope.MQ_Uni = !$scope.MQ_Uni;
					if($scope.Chatswood==true &&$scope.Hornsby==true&&$scope.Epping==true&&$scope.MQ_Uni==true&&$scope.Rodes==true)
					{
						$scope.allT1 = true;
						$scope.Chatswood=false ;$scope.Hornsby=false; $scope.Epping=false; $scope.MQ_Uni=false; $scope.Rodes=false;
						
					}else if($scope.Chatswood==false || $scope.Hornsby==false || $scope.Epping==false || $scope.MQ_Uni==false || $scope.Rodes==false){
						$scope.allT1 = false;
					}
					station_selection();
				}
				$scope.get_Rodes = function (){
					$scope.Rodes = !$scope.Rodes;
					if($scope.Chatswood==true &&$scope.Hornsby==true&&$scope.Epping==true&&$scope.MQ_Uni==true&&$scope.Rodes==true)
					{
						$scope.allT1 = true;
						$scope.Chatswood=false ;$scope.Hornsby=false; $scope.Epping=false; $scope.MQ_Uni=false; $scope.Rodes=false;
					}else if($scope.Chatswood==false || $scope.Hornsby==false || $scope.Epping==false || $scope.MQ_Uni==false || $scope.Rodes==false){
						$scope.allT1 = false;
					}
					station_selection();
				}
				
				$scope.get_All_T1 = function(){
					$scope.allT1 = !$scope.allT1;
					
					if($scope.allT1)
					{
						$scope.Chatswood = false;
						$scope.Hornsby = false;
						$scope.Epping = false;
						$scope.MQ_Uni = false;
						$scope.Rodes = false;
					}
					else{

					}
					station_selection();
				}
				
				// T2
				$scope.get_Burwood = function (){
					$scope.Burwood = !$scope.Burwood;
					if($scope.Burwood==true &&$scope.Straithfield==true&&$scope.Greensquare==true&&$scope.Mascot==true&&$scope.Lidcome_T2==true)
					{
						$scope.allT2 = true;
						$scope.Burwood=false; $scope.Straithfield=false; $scope.Greensquare=false; $scope.Mascot=false; $scope.Lidcome_T2=false;
					}else if($scope.Burwood==false || $scope.Straithfield==false || $scope.Greensquare==false || $scope.Mascot==false || $scope.Lidcome_T2==false){
						$scope.allT2 = false;
					}
					station_selection();
				}
				$scope.get_Straithfield = function (){
					$scope.Straithfield = !$scope.Straithfield;
					if($scope.Burwood==true &&$scope.Straithfield==true&&$scope.Greensquare==true&&$scope.Mascot==true&&$scope.Lidcome_T2==true)
					{
						$scope.Burwood=false; $scope.Straithfield=false; $scope.Greensquare=false; $scope.Mascot=false; $scope.Lidcome_T2=false;
						$scope.allT2 = true;
					}else if($scope.Burwood==false || $scope.Straithfield==false || $scope.Greensquare==false || $scope.Mascot==false || $scope.Lidcome_T2==false){
						$scope.allT2 = false;
					}
					station_selection();
				}
				$scope.get_Greensquare = function (){
					$scope.Greensquare = !$scope.Greensquare;
					if($scope.Burwood==true &&$scope.Straithfield==true&&$scope.Greensquare==true&&$scope.Mascot==true&&$scope.Lidcome_T2==true)
					{
						$scope.Burwood=false; $scope.Straithfield=false; $scope.Greensquare=false; $scope.Mascot=false; $scope.Lidcome_T2=false;
						$scope.allT2 = true;
					}else if($scope.Burwood==false || $scope.Straithfield==false || $scope.Greensquare==false || $scope.Mascot==false || $scope.Lidcome_T2==false){
						$scope.allT2 = false;
					}
					station_selection();
				}
				$scope.get_Mascot = function (){
					$scope.Mascot = !$scope.Mascot;
					if($scope.Burwood==true &&$scope.Straithfield==true&&$scope.Greensquare==true&&$scope.Mascot==true&&$scope.Lidcome_T2==true)
					{
						$scope.Burwood=false; $scope.Straithfield=false; $scope.Greensquare=false; $scope.Mascot=false; $scope.Lidcome_T2=false;
						$scope.allT2 = true;
					}else if($scope.Burwood==false || $scope.Straithfield==false || $scope.Greensquare==false || $scope.Mascot==false || $scope.Lidcome_T2==false){
						$scope.allT2 = false;
					}
					station_selection();
				}
				$scope.get_Lidcome_T2 = function (){
					$scope.Lidcome_T2 = !$scope.Lidcome_T2;
					if($scope.Burwood==true &&$scope.Straithfield==true&&$scope.Greensquare==true&&$scope.Mascot==true&&$scope.Lidcome_T2==true)
					{
						$scope.Burwood=false; $scope.Straithfield=false; $scope.Greensquare=false; $scope.Mascot=false; $scope.Lidcome_T2=false;
						$scope.allT2 = true;
					}else if($scope.Burwood==false || $scope.Straithfield==false || $scope.Greensquare==false || $scope.Mascot==false || $scope.Lidcome_T2==false){
						$scope.allT2 = false;
					}
					station_selection();
				}
				
				$scope.get_All_T2 = function(){
					$scope.allT2 = !$scope.allT2;
					
					if($scope.allT2)
					{	
						$scope.Burwood = false;
						$scope.Straithfield = false;
						$scope.Greensquare = false;
						$scope.Mascot = false;
						$scope.Lidcome_T2 = false;
					}
					else{

					}
					station_selection();
				}
			
				// T3
				$scope.get_Central_T3 = function (){
					$scope.Central_T3 = !$scope.Central_T3;
					if($scope.Central_T3==true &&$scope.Sydenham==true&&$scope.Campsie==true&&$scope.Bankstown==true&&$scope.Liverpool_T3==true)
					{
						$scope.allT3 = true;
						$scope.Central_T3=false; $scope.Sydenham=false; $scope.Campsie=false; $scope.Bankstown=false; $scope.Liverpool_T3=false;
					}else if($scope.Central_T3==false || $scope.Sydenham==false || $scope.Campsie==false || $scope.Bankstown==false || $scope.Liverpool_T3==false){
						$scope.allT3 = false;
					}
					station_selection();
				}
				$scope.get_Sydenham = function (){
					$scope.Sydenham = !$scope.Sydenham;
					if($scope.Central_T3==true &&$scope.Sydenham==true&&$scope.Campsie==true&&$scope.Bankstown==true&&$scope.Liverpool_T3==true)
					{
						$scope.allT3 = true;
						$scope.Central_T3=false; $scope.Sydenham=false; $scope.Campsie=false; $scope.Bankstown=false; $scope.Liverpool_T3=false;
					}else if($scope.Central_T3==false || $scope.Sydenham==false || $scope.Campsie==false || $scope.Bankstown==false || $scope.Liverpool_T3==false){
						$scope.allT3 = false;
					}
					station_selection();
				}
				$scope.get_Campsie = function (){
					$scope.Campsie = !$scope.Campsie;
					if($scope.Central_T3==true &&$scope.Sydenham==true&&$scope.Campsie==true&&$scope.Bankstown==true&&$scope.Liverpool_T3==true)
					{
						$scope.allT3 = true;
						$scope.Central_T3=false; $scope.Sydenham=false; $scope.Campsie=false; $scope.Bankstown=false; $scope.Liverpool_T3=false;
					}else if($scope.Central_T3==false || $scope.Sydenham==false || $scope.Campsie==false || $scope.Bankstown==false || $scope.Liverpool_T3==false){
						$scope.allT3 = false;
					}
					station_selection();
				}
				$scope.get_Bankstown = function (){
					$scope.Bankstown = !$scope.Bankstown;
					if($scope.Central_T3==true &&$scope.Sydenham==true&&$scope.Campsie==true&&$scope.Bankstown==true&&$scope.Liverpool_T3==true)
					{
						$scope.allT3 = true;
						$scope.Central_T3=false; $scope.Sydenham=false; $scope.Campsie=false; $scope.Bankstown=false; $scope.Liverpool_T3=false;
					}else if($scope.Central_T3==false || $scope.Sydenham==false || $scope.Campsie==false || $scope.Bankstown==false || $scope.Liverpool_T3==false){
						$scope.allT3 = false;
					}
					station_selection();
				}
				$scope.get_Liverpool_T3 = function (){
					$scope.Liverpool_T3 = !$scope.Liverpool_T3;
					if($scope.Central_T3==true &&$scope.Sydenham==true&&$scope.Campsie==true&&$scope.Bankstown==true&&$scope.Liverpool_T3==true)
					{
						$scope.allT3 = true;
						$scope.Central_T3=false; $scope.Sydenham=false; $scope.Campsie=false; $scope.Bankstown=false; $scope.Liverpool_T3=false;
					}else if($scope.Central_T3==false || $scope.Sydenham==false || $scope.Campsie==false || $scope.Bankstown==false || $scope.Liverpool_T3==false){
						$scope.allT3 = false;
					}
					station_selection();
				}
				
				$scope.get_All_T3 = function(){
					$scope.allT3 = !$scope.allT3;
					
					if($scope.allT3)
					{	
						$scope.Central_T3 = false;
						$scope.Sydenham = false;
						$scope.Campsie = false;
						$scope.Bankstown = false;
						$scope.Liverpool_T3 = false;
					}
					else{

					}
					station_selection();
				}
				
				// T4
				$scope.get_Central_T4 = function (){
					$scope.Central_T4 = !$scope.Central_T4;
					if($scope.Central_T4==true &&$scope.Redfern==true&&$scope.Wollicreek==true&&$scope.Rockdale==true&&$scope.Hurstville==true)
					{
						$scope.allT4 = true;
						$scope.Central_T4=false; $scope.Redfern=false; $scope.Wollicreek=false; $scope.Rockdale=false; $scope.Hurstville=false;
					}else if($scope.Central_T4==false || $scope.Redfern==false || $scope.Wollicreek==false || $scope.Rockdale==false || $scope.Hurstville==false){
						$scope.allT4 = false;
					}
					station_selection();
				}
				$scope.get_Redfern = function (){
					$scope.Redfern = !$scope.Redfern;
					if($scope.Central_T4==true &&$scope.Redfern==true&&$scope.Wollicreek==true&&$scope.Rockdale==true&&$scope.Hurstville==true)
					{
						$scope.allT4 = true;
						$scope.Central_T4=false; $scope.Redfern=false; $scope.Wollicreek=false; $scope.Rockdale=false; $scope.Hurstville=false;
					}else if($scope.Central_T4==false || $scope.Redfern==false || $scope.Wollicreek==false || $scope.Rockdale==false || $scope.Hurstville==false){
						$scope.allT4 = false;
					}
					station_selection();
				}
				$scope.get_Wollicreek = function (){
					$scope.Wollicreek = !$scope.Wollicreek;
					if($scope.Central_T4==true &&$scope.Redfern==true&&$scope.Wollicreek==true&&$scope.Rockdale==true&&$scope.Hurstville==true)
					{
						$scope.allT4 = true;
						$scope.Central_T4=false; $scope.Redfern=false; $scope.Wollicreek=false; $scope.Rockdale=false; $scope.Hurstville=false;
					}else if($scope.Central_T4==false || $scope.Redfern==false || $scope.Wollicreek==false || $scope.Rockdale==false || $scope.Hurstville==false){
						$scope.allT4 = false;
					}
					station_selection();
				}
				$scope.get_Rockdale = function (){
					$scope.Rockdale = !$scope.Rockdale;
					if($scope.Central_T4==true &&$scope.Redfern==true&&$scope.Wollicreek==true&&$scope.Rockdale==true&&$scope.Hurstville==true)
					{
						$scope.allT4 = true;
						$scope.Central_T4=false; $scope.Redfern=false; $scope.Wollicreek=false; $scope.Rockdale=false; $scope.Hurstville=false;
					}else if($scope.Central_T4==false || $scope.Redfern==false || $scope.Wollicreek==false || $scope.Rockdale==false || $scope.Hurstville==false){
						$scope.allT4 = false;
					}
					station_selection();
				}
				$scope.get_Hurstville = function (){
					$scope.Hurstville = !$scope.Hurstville;
					if($scope.Central_T4==true &&$scope.Redfern==true&&$scope.Wollicreek==true&&$scope.Rockdale==true&&$scope.Hurstville==true)
					{
						$scope.allT4 = true;
						$scope.Central_T4=false; $scope.Redfern=false; $scope.Wollicreek=false; $scope.Rockdale=false; $scope.Hurstville=false;
					}else if($scope.Central_T4==false || $scope.Redfern==false || $scope.Wollicreek==false || $scope.Rockdale==false || $scope.Hurstville==false){
						$scope.allT4 = false;
					}
					station_selection();
				}
				
				$scope.get_All_T4 = function(){
					$scope.allT4 = !$scope.allT4;
					
					if($scope.allT4)
					{	
						$scope.Central_T4 = false;
						$scope.Redfern = false;
						$scope.Wollicreek = false;
						$scope.Rockdale = false;
						$scope.Hurstville = false;
					}
					else{
						
					}
					station_selection();
				}
				
				// T5
				$scope.get_Parramatta = function (){
					$scope.Parramatta = !$scope.Parramatta;
					if($scope.Parramatta==true &&$scope.Westmead==true&&$scope.Blacktown==true&&$scope.Merrylands==true&&$scope.Liverpool_T5==true)
					{
						$scope.allT5 = true;
						$scope.Parramatta=false; $scope.Westmead=false; $scope.Blacktown=false; $scope.Merrylands=false; $scope.Liverpool_T5=false;
					}else if($scope.Parramatta==false || $scope.Westmead==false || $scope.Blacktown==false || $scope.Merrylands==false || $scope.Liverpool_T5==false){
						$scope.allT5 = false;
					}
					station_selection();
				}
				$scope.get_Westmead = function (){
					$scope.Westmead = !$scope.Westmead;
					if($scope.Parramatta==true &&$scope.Westmead==true&&$scope.Blacktown==true&&$scope.Merrylands==true&&$scope.Liverpool_T5==true)
					{
						$scope.allT5 = true;
						$scope.Parramatta=false; $scope.Westmead=false; $scope.Blacktown=false; $scope.Merrylands=false; $scope.Liverpool_T5=false;
					}else if($scope.Parramatta==false || $scope.Westmead==false || $scope.Blacktown==false || $scope.Merrylands==false || $scope.Liverpool_T5==false){
						$scope.allT5 = false;
					}
					station_selection();
				}
				$scope.get_Blacktown = function (){
					$scope.Blacktown = !$scope.Blacktown;
					if($scope.Parramatta==true &&$scope.Westmead==true&&$scope.Blacktown==true&&$scope.Merrylands==true&&$scope.Liverpool_T5==true)
					{
						$scope.allT5 = true;
						$scope.Parramatta=false; $scope.Westmead=false; $scope.Blacktown=false; $scope.Merrylands=false; $scope.Liverpool_T5=false;
					}else if($scope.Parramatta==false || $scope.Westmead==false || $scope.Blacktown==false || $scope.Merrylands==false || $scope.Liverpool_T5==false){
						$scope.allT5 = false;
					}
					station_selection();
				}
				$scope.get_Merrylands = function (){
					$scope.Merrylands = !$scope.Merrylands;
					if($scope.Parramatta==true &&$scope.Westmead==true&&$scope.Blacktown==true&&$scope.Merrylands==true&&$scope.Liverpool_T5==true)
					{
						$scope.allT5 = true;
						$scope.Parramatta=false; $scope.Westmead=false; $scope.Blacktown=false; $scope.Merrylands=false; $scope.Liverpool_T5=false;
					}else if($scope.Parramatta==false || $scope.Westmead==false || $scope.Blacktown==false || $scope.Merrylands==false || $scope.Liverpool_T5==false){
						$scope.allT5 = false;
					}
					station_selection();
				}
				$scope.get_Liverpool_T5 = function (){
					$scope.Liverpool_T5 = !$scope.Liverpool_T5;
					if($scope.Parramatta==true &&$scope.Westmead==true&&$scope.Blacktown==true&&$scope.Merrylands==true&&$scope.Liverpool_T5==true)
					{
						$scope.allT5 = true;
						$scope.Parramatta=false; $scope.Westmead=false; $scope.Blacktown=false; $scope.Merrylands=false; $scope.Liverpool_T5=false;
					}else if($scope.Parramatta==false || $scope.Westmead==false || $scope.Blacktown==false || $scope.Merrylands==false || $scope.Liverpool_T5==false){
						$scope.allT5 = false;
					}
					station_selection();
				}
				
				$scope.get_All_T5 = function(){
					$scope.allT5 = !$scope.allT5;
					if($scope.allT5)
					{	
						$scope.Parramatta = false;
						$scope.Westmead = false;
						$scope.Blacktown = false;
						$scope.Merrylands = false;
						$scope.Liverpool_T5 = false;
					}
					else{
						
					}
					station_selection();
				}
				//T6
				$scope.get_Clyde = function (){
					$scope.Clyde = !$scope.Clyde;
					if($scope.Clyde==true &&$scope.Rosehill==true&&$scope.Camellia==true&&$scope.Carlingford==true)
					{
						$scope.allT6 = true;
						$scope.Clyde=false; $scope.Rosehill=false; $scope.Camellia=false; $scope.Carlingford=false;
					}else if($scope.Clyde==false || $scope.Rosehill==false || $scope.Camellia==false || $scope.Carlingford==false){
						$scope.allT6 = false;
					}
					station_selection();
				}
				$scope.get_Rosehill = function (){
					$scope.Rosehill = !$scope.Rosehill;
					if($scope.Clyde==true &&$scope.Rosehill==true&&$scope.Camellia==true&&$scope.Carlingford==true)
					{
						$scope.allT6 = true;
						$scope.Clyde=false; $scope.Rosehill=false; $scope.Camellia=false; $scope.Carlingford=false;
					}else if($scope.Clyde==false || $scope.Rosehill==false || $scope.Camellia==false || $scope.Carlingford==false){
						$scope.allT6 = false;
					}
					station_selection();
				}
				$scope.get_Camellia = function (){
					$scope.Camellia = !$scope.Camellia;
					if($scope.Clyde==true &&$scope.Rosehill==true&&$scope.Camellia==true&&$scope.Carlingford==true)
					{
						$scope.allT6 = true;
						$scope.Clyde=false; $scope.Rosehill=false; $scope.Camellia=false; $scope.Carlingford=false;
					}else if($scope.Clyde==false || $scope.Rosehill==false || $scope.Camellia==false || $scope.Carlingford==false){
						$scope.allT6 = false;
					}
					station_selection();
				}
				$scope.get_Carlingford = function (){
					$scope.Carlingford = !$scope.Carlingford;
					if($scope.Clyde==true &&$scope.Rosehill==true&&$scope.Camellia==true&&$scope.Carlingford==true)
					{
						$scope.allT6 = true;
						$scope.Clyde=false; $scope.Rosehill=false; $scope.Camellia=false; $scope.Carlingford=false;
					}else if($scope.Clyde==false || $scope.Rosehill==false || $scope.Camellia==false || $scope.Carlingford==false){
						$scope.allT6 = false;
					}
					station_selection();
				}
				$scope.get_All_T6 = function(){
					$scope.allT6 = !$scope.allT6;
					if($scope.allT6)
					{	
						$scope.Clyde = false;
						$scope.Rosehill = false;
						$scope.Camellia = false;
						$scope.Carlingford = false;
					}
					else{

					}
					station_selection();
				}
				//T7
				$scope.get_Lidcome_T7 = function (){
					$scope.Lidcome_T7 = !$scope.Lidcome_T7;
					if($scope.Lidcome_T7==true &&$scope.Olympic_Park==true)
					{
						$scope.allT7 = true;
						$scope.Lidcome_T7=false; $scope.Olympic_Park=false;
					}else if($scope.Lidcome_T7==false || $scope.Olympic_Park==false){
						$scope.allT7 = false;
					}
					station_selection();
				}
				$scope.get_Olympic_Park = function (){
					$scope.Olympic_Park = !$scope.Olympic_Park;
					if($scope.Lidcome_T7==true &&$scope.Olympic_Park==true)
					{
						$scope.allT7 = true;
						$scope.Lidcome_T7=false; $scope.Olympic_Park=false;
					}else if($scope.Lidcome_T7==false || $scope.Olympic_Park==false){
						$scope.allT7 = false;
					}
					station_selection();
				}
				$scope.get_All_T7 = function(){
					$scope.allT7 = !$scope.allT7;
					if($scope.allT7)
					{	
						$scope.Lidcome_T7 = false;
						$scope.Olympic_Park = false;
					}
					else{
						
					}
					station_selection();
				}
				function station_selection(){
					var station_key = [
					$scope.Chatswood,$scope.Hornsby,$scope.Epping,$scope.MQ_Uni,$scope.Rodes,$scope.allT1,
					$scope.Burwood,$scope.Straithfield,$scope.Greensquare,$scope.Mascot,$scope.Lidcome_T2,$scope.allT2,
					$scope.Central_T3,$scope.Sydenham,$scope.Campsie,$scope.Bankstown,$scope.Liverpool_T3,$scope.allT3,
					$scope.Central_T4,$scope.Redfern,$scope.Wollicreek,$scope.Rockdale,$scope.Hurstville,$scope.allT4,				
					$scope.Parramatta,$scope.Westmead,$scope.Blacktown,$scope.Merrylands,$scope.Liverpool_T5,$scope.allT5,
					$scope.Clyde,$scope.Rosehill,$scope.Camellia,$scope.Carlingford,$scope.allT6,
					$scope.Lidcome_T7,$scope.Olympic_Park,$scope.allT7
					];
				var station_value = ["Chatswood","Hornsby","Epping","MQ_Uni","Rodes","AllT1",
									"Burwood","Straithfield","Greensquare","Mascot","Lidcome_T2","AllT2",
									"Central_T3","Sydenham","Campsie","Bankstown","Liverpool_T3","AllT3",
									"Central_T4","Redfern","Wollicreek","Rockdale","Hurstville","AllT4",
									"Parramatta","Westmead","Blacktown","Merrylands","Liverpool_T5","AllT5",
									"Clyde","Rosehill","Camellia","Carlingford","AllT6",
									"Lidcome_T7","Olympic_Park","AllT7"];
				for(var i=0;i<station_key.length;i++){
					if(station_key[i]){
							if(i>34){
								angular.element("."+station_value[i]).css({'background-color': '#999999'});
							}else if(i>=30){
								angular.element("."+station_value[i]).css({'background-color': '#336699'});
							}else if(i>=24){
								angular.element("."+station_value[i]).css({'background-color': '#cc00a1'});
							}else if(i>=18){
								angular.element("."+station_value[i]).css({'background-color': '#0073c7'});
							}else if(i>=12){
								angular.element("."+station_value[i]).css({'background-color': '#f47424'});
							}else if(i>=6){
								angular.element("."+station_value[i]).css({'background-color': '#26ae4e'});
							}else if(i>=0){
								angular.element("."+station_value[i]).css({'background-color': '#fcb514'});
							}
							
						}else{
							angular.element("."+station_value[i]).css({'background-color': '#4d555d'});
						}
					}
				}	
				
				/*****************************************************************
			     ********************share rental station filter*****************
			     ****************************************************************/
			 	$scope._Chatswood=false;$scope._Hornsby=false;$scope._Epping=false;$scope._MQ_Uni=false;$scope._Rodes=false;$scope._allT1=false;
				$scope._Burwood=false;$scope._Straithfield=false;$scope._Greensquare=false;$scope._Mascot=false;$scope._Lidcome_T2=false;$scope._allT2=false;
				$scope._Central_T3=false;$scope._Sydenham=false;$scope._Campsie=false;$scope._Bankstown=false;$scope._Liverpool_T3=false;$scope._allT3=false;
				$scope._Central_T4=false;$scope._Redfern=false;$scope._Wollicreek=false;$scope._Rockdale=false;$scope._Hurstville=false;$scope._allT4=false;				
				$scope._Parramatta=false;$scope._Westmead=false;$scope._Blacktown=false;$scope._Merrylands=false;$scope._Liverpool_T5=false;$scope._allT5=false;
			 	$scope._Clyde=false;$scope._Rosehill=false;$scope._Camellia=false;$scope._Carlingford=false;$scope._allT6=false;
				$scope._Lidcome_T7=false;$scope._Olympic_Park=false;$scope._allT7=false;
			 	// T1
				$scope._get_Chatswood = function (){
					$scope._Chatswood = !$scope._Chatswood;
					if($scope._Chatswood==true &&$scope._Hornsby==true&&$scope._Epping==true&&$scope._MQ_Uni==true&&$scope._Rodes==true)
					{
						$scope._allT1 = true;
						$scope._Chatswood=false ;$scope._Hornsby=false; $scope._Epping=false; $scope._MQ_Uni=false; $scope._Rodes=false;
					}else if($scope._Chatswood==false || $scope._Hornsby==false || $scope._Epping==false || $scope._MQ_Uni==false || $scope._Rodes==false){
						$scope._allT1 = false;
					}
					_station_selection();
				
				}
				
				$scope._get_Hornsby = function (){
					$scope._Hornsby = !$scope._Hornsby;
					if($scope._Chatswood==true &&$scope._Hornsby==true&&$scope._Epping==true&&$scope._MQ_Uni==true&&$scope._Rodes==true)
					{
						$scope._allT1 = true;
						$scope._Chatswood=false ;$scope._Hornsby=false; $scope._Epping=false; $scope._MQ_Uni=false; $scope._Rodes=false;
					}else if($scope._Chatswood==false || $scope._Hornsby==false || $scope._Epping==false || $scope._MQ_Uni==false || $scope._Rodes==false){
						$scope._allT1 = false;
					}
					_station_selection();
				}
				$scope._get_Epping = function (){
					$scope._Epping = !$scope._Epping;
					if($scope._Chatswood==true &&$scope._Hornsby==true&&$scope._Epping==true&&$scope._MQ_Uni==true&&$scope._Rodes==true)
					{
						$scope._allT1 = true;
						$scope._Chatswood=false ;$scope._Hornsby=false; $scope._Epping=false; $scope._MQ_Uni=false; $scope._Rodes=false;
					}else if($scope._Chatswood==false || $scope._Hornsby==false || $scope._Epping==false || $scope._MQ_Uni==false || $scope._Rodes==false){
						$scope._allT1 = false;
					}
					_station_selection();
				}
				$scope._get_MQ_Uni = function (){
					$scope._MQ_Uni = !$scope._MQ_Uni;
					if($scope._Chatswood==true &&$scope._Hornsby==true&&$scope._Epping==true&&$scope._MQ_Uni==true&&$scope._Rodes==true)
					{
						$scope._allT1 = true;
						$scope._Chatswood=false ;$scope._Hornsby=false; $scope._Epping=false; $scope._MQ_Uni=false; $scope._Rodes=false;
					}else if($scope._Chatswood==false || $scope._Hornsby==false || $scope._Epping==false || $scope._MQ_Uni==false || $scope._Rodes==false){
						$scope._allT1 = false;
					}
					_station_selection();
				}
				$scope._get_Rodes = function (){
					$scope._Rodes = !$scope._Rodes;
				if($scope._Chatswood==true &&$scope._Hornsby==true&&$scope._Epping==true&&$scope._MQ_Uni==true&&$scope._Rodes==true)
					{
						$scope._allT1 = true;
						$scope._Chatswood=false ;$scope._Hornsby=false; $scope._Epping=false; $scope._MQ_Uni=false; $scope._Rodes=false;
					}else if($scope._Chatswood==false || $scope._Hornsby==false || $scope._Epping==false || $scope._MQ_Uni==false || $scope._Rodes==false){
						$scope._allT1 = false;
					}
					_station_selection();
				}
				
				$scope._get_All_T1 = function(){
					$scope._allT1 = !$scope._allT1;
					
					if($scope._allT1)
					{
						$scope._Chatswood = false;
						$scope._Hornsby = false;
						$scope._Epping = false;
						$scope._MQ_Uni = false;
						$scope._Rodes = false;
					}
					else{

					}
					_station_selection();
				}
				
				// T2
				$scope._get_Burwood = function (){
					$scope._Burwood = !$scope._Burwood;
					if($scope._Burwood==true &&$scope._Straithfield==true&&$scope._Greensquare==true&&$scope._Mascot==true&&$scope._Lidcome_T2==true)
					{
						$scope._allT2 = true;
						$scope._Burwood=false; $scope._Straithfield=false; $scope._Greensquare=false; $scope._Mascot=false; $scope._Lidcome_T2=false;
					}else if($scope._Burwood==false || $scope._Straithfield==false || $scope._Greensquare==false || $scope._Mascot==false || $scope._Lidcome_T2==false){
						$scope._allT2 = false;
					}
					_station_selection();
				}
				$scope._get_Straithfield = function (){
					$scope._Straithfield = !$scope._Straithfield;
					if($scope._Burwood==true &&$scope._Straithfield==true&&$scope._Greensquare==true&&$scope._Mascot==true&&$scope._Lidcome_T2==true)
					{
						$scope._allT2 = true;
						$scope._Burwood=false; $scope._Straithfield=false; $scope._Greensquare=false; $scope._Mascot=false; $scope._Lidcome_T2=false;
					}else if($scope._Burwood==false || $scope._Straithfield==false || $scope._Greensquare==false || $scope._Mascot==false || $scope._Lidcome_T2==false){
						$scope._allT2 = false;
					}
					_station_selection();
				}
				$scope._get_Greensquare = function (){
					$scope._Greensquare = !$scope._Greensquare;
					if($scope._Burwood==true &&$scope._Straithfield==true&&$scope._Greensquare==true&&$scope._Mascot==true&&$scope._Lidcome_T2==true)
					{
						$scope._allT2 = true;
						$scope._Burwood=false; $scope._Straithfield=false; $scope._Greensquare=false; $scope._Mascot=false; $scope._Lidcome_T2=false;
					}else if($scope._Burwood==false || $scope._Straithfield==false || $scope._Greensquare==false || $scope._Mascot==false || $scope._Lidcome_T2==false){
						$scope._allT2 = false;
					}
					_station_selection();
				}
				$scope._get_Mascot = function (){
					$scope._Mascot = !$scope._Mascot;
					if($scope._Burwood==true &&$scope._Straithfield==true&&$scope._Greensquare==true&&$scope._Mascot==true&&$scope._Lidcome_T2==true)
					{
						$scope._allT2 = true;
						$scope._Burwood=false; $scope._Straithfield=false; $scope._Greensquare=false; $scope._Mascot=false; $scope._Lidcome_T2=false;
					}else if($scope._Burwood==false || $scope._Straithfield==false || $scope._Greensquare==false || $scope._Mascot==false || $scope._Lidcome_T2==false){
						$scope._allT2 = false;
					}
					_station_selection();
				}
				$scope._get_Lidcome_T2 = function (){
					$scope._Lidcome_T2 = !$scope._Lidcome_T2;
					if($scope._Burwood==true &&$scope._Straithfield==true&&$scope._Greensquare==true&&$scope._Mascot==true&&$scope._Lidcome_T2==true)
					{
						$scope._allT2 = true;
						$scope._Burwood=false; $scope._Straithfield=false; $scope._Greensquare=false; $scope._Mascot=false; $scope._Lidcome_T2=false;
					}else if($scope._Burwood==false || $scope._Straithfield==false || $scope._Greensquare==false || $scope._Mascot==false || $scope._Lidcome_T2==false){
						$scope._allT2 = false;
					}
					_station_selection();
				}
				
				$scope._get_All_T2 = function(){
					$scope._allT2 = !$scope._allT2;
					
					if($scope._allT2)
					{	
						$scope._Burwood = false;
						$scope._Straithfield = false;
						$scope._Greensquare = false;
						$scope._Mascot = false;
						$scope._Lidcome_T2 = false;
					}
					else{
						
					}
					_station_selection();
				}
			
				// T3
				$scope._get_Central_T3 = function (){
					$scope._Central_T3 = !$scope._Central_T3;
					if($scope._Central_T3==true &&$scope._Sydenham==true&&$scope._Campsie==true&&$scope._Bankstown==true&&$scope._Liverpool_T3==true)
					{
						$scope._allT3 = true;
						$scope._Central_T3=false; $scope._Sydenham=false; $scope._Campsie=false; $scope._Bankstown=false; $scope._Liverpool_T3=false;
					}else if($scope._Central_T3==false || $scope._Sydenham==false || $scope._Campsie==false || $scope._Bankstown==false || $scope._Liverpool_T3==false){
						$scope._allT3 = false;
					}
					_station_selection();
				}
				$scope._get_Sydenham = function (){
					$scope._Sydenham = !$scope._Sydenham;
					if($scope._Central_T3==true &&$scope._Sydenham==true&&$scope._Campsie==true&&$scope._Bankstown==true&&$scope._Liverpool_T3==true)
					{
						$scope._allT3 = true;
						$scope._Central_T3=false; $scope._Sydenham=false; $scope._Campsie=false; $scope._Bankstown=false; $scope._Liverpool_T3=false;
					}else if($scope._Central_T3==false || $scope._Sydenham==false || $scope._Campsie==false || $scope._Bankstown==false || $scope._Liverpool_T3==false){
						$scope._allT3 = false;
					}
					_station_selection();
				}
				$scope._get_Campsie = function (){
					$scope._Campsie = !$scope._Campsie;
					if($scope._Central_T3==true &&$scope._Sydenham==true&&$scope._Campsie==true&&$scope._Bankstown==true&&$scope._Liverpool_T3==true)
					{
						$scope._allT3 = true;
						$scope._Central_T3=false; $scope._Sydenham=false; $scope._Campsie=false; $scope._Bankstown=false; $scope._Liverpool_T3=false;
					}else if($scope._Central_T3==false || $scope._Sydenham==false || $scope._Campsie==false || $scope._Bankstown==false || $scope._Liverpool_T3==false){
						$scope._allT3 = false;
					}
					_station_selection();
				}
				$scope._get_Bankstown = function (){
					$scope._Bankstown = !$scope._Bankstown;
					if($scope._Central_T3==true &&$scope._Sydenham==true&&$scope._Campsie==true&&$scope._Bankstown==true&&$scope._Liverpool_T3==true)
					{
						$scope._allT3 = true;
						$scope._Central_T3=false; $scope._Sydenham=false; $scope._Campsie=false; $scope._Bankstown=false; $scope._Liverpool_T3=false;
					}else if($scope._Central_T3==false || $scope._Sydenham==false || $scope._Campsie==false || $scope._Bankstown==false || $scope._Liverpool_T3==false){
						$scope._allT3 = false;
					}
					_station_selection();
				}
				$scope._get_Liverpool_T3 = function (){
					$scope._Liverpool_T3 = !$scope._Liverpool_T3;
					if($scope._Central_T3==true &&$scope._Sydenham==true&&$scope._Campsie==true&&$scope._Bankstown==true&&$scope._Liverpool_T3==true)
					{
						$scope._allT3 = true;
						$scope._Central_T3=false; $scope._Sydenham=false; $scope._Campsie=false; $scope._Bankstown=false; $scope._Liverpool_T3=false;
					}else if($scope._Central_T3==false || $scope._Sydenham==false || $scope._Campsie==false || $scope._Bankstown==false || $scope._Liverpool_T3==false){
						$scope._allT3 = false;
					}
					_station_selection();
				}
				
				$scope._get_All_T3 = function(){
					$scope._allT3 = !$scope._allT3;
					
					if($scope._allT3)
					{	
						$scope._Central_T3 = false;
						$scope._Sydenham = false;
						$scope._Campsie = false;
						$scope._Bankstown = false;
						$scope._Liverpool_T3 = false;
					}
					else{

					}
					_station_selection();
				}
				
				// T4
				$scope._get_Central_T4 = function (){
					$scope._Central_T4 = !$scope._Central_T4;
					if($scope._Central_T4==true &&$scope._Redfern==true&&$scope._Wollicreek==true&&$scope._Rockdale==true&&$scope._Hurstville==true)
					{
						$scope._allT4 = true;
						$scope._Central_T4=false; $scope._Redfern=false; $scope._Wollicreek=false; $scope._Rockdale=false; $scope._Hurstville=false;
					}else if($scope._Central_T4==false || $scope._Redfern==false || $scope._Wollicreek==false || $scope._Rockdale==false || $scope._Hurstville==false){
						$scope._allT4 = false;
					}
					_station_selection();
				}
				$scope._get_Redfern = function (){
					$scope._Redfern = !$scope._Redfern;
						if($scope._Central_T4==true &&$scope._Redfern==true&&$scope._Wollicreek==true&&$scope._Rockdale==true&&$scope._Hurstville==true)
					{
						$scope._allT4 = true;
						$scope._Central_T4=false; $scope._Redfern=false; $scope._Wollicreek=false; $scope._Rockdale=false; $scope._Hurstville=false;
					}else if($scope._Central_T4==false || $scope._Redfern==false || $scope._Wollicreek==false || $scope._Rockdale==false || $scope._Hurstville==false){
						$scope._allT4 = false;
					}
					_station_selection();
				}
				$scope._get_Wollicreek = function (){
					$scope._Wollicreek = !$scope._Wollicreek;
						if($scope._Central_T4==true &&$scope._Redfern==true&&$scope._Wollicreek==true&&$scope._Rockdale==true&&$scope._Hurstville==true)
					{
						$scope._allT4 = true;
						$scope._Central_T4=false; $scope._Redfern=false; $scope._Wollicreek=false; $scope._Rockdale=false; $scope._Hurstville=false;
					}else if($scope._Central_T4==false || $scope._Redfern==false || $scope._Wollicreek==false || $scope._Rockdale==false || $scope._Hurstville==false){
						$scope._allT4 = false;
					}
					_station_selection();
				}
				$scope._get_Rockdale = function (){
					$scope._Rockdale = !$scope._Rockdale;
						if($scope._Central_T4==true &&$scope._Redfern==true&&$scope._Wollicreek==true&&$scope._Rockdale==true&&$scope._Hurstville==true)
					{
						$scope._allT4 = true;
						$scope._Central_T4=false; $scope._Redfern=false; $scope._Wollicreek=false; $scope._Rockdale=false; $scope._Hurstville=false;
					}else if($scope._Central_T4==false || $scope._Redfern==false || $scope._Wollicreek==false || $scope._Rockdale==false || $scope._Hurstville==false){
						$scope._allT4 = false;
					}
					_station_selection();
				}
				$scope._get_Hurstville = function (){
					$scope._Hurstville = !$scope._Hurstville;
						if($scope._Central_T4==true &&$scope._Redfern==true&&$scope._Wollicreek==true&&$scope._Rockdale==true&&$scope._Hurstville==true)
					{
						$scope._allT4 = true;
						$scope._Central_T4=false; $scope._Redfern=false; $scope._Wollicreek=false; $scope._Rockdale=false; $scope._Hurstville=false;
					}else if($scope._Central_T4==false || $scope._Redfern==false || $scope._Wollicreek==false || $scope._Rockdale==false || $scope._Hurstville==false){
						$scope._allT4 = false;
					}
					_station_selection();
				}
				
				$scope._get_All_T4 = function(){
					$scope._allT4 = !$scope._allT4;
					
					if($scope._allT4)
					{	
						$scope._Central_T4 = false;
						$scope._Redfern = false;
						$scope._Wollicreek = false;
						$scope._Rockdale = false;
						$scope._Hurstville = false;
					}
					else{
						
						
					}
					_station_selection();
				}
				
				// T5
				$scope._get_Parramatta = function (){
					$scope._Parramatta = !$scope._Parramatta;
					if($scope._Parramatta==true &&$scope._Westmead==true&&$scope._Blacktown==true&&$scope._Merrylands==true&&$scope._Liverpool_T5==true)
					{
						$scope._allT5 = true;
						$scope._Parramatta=false; $scope._Westmead=false; $scope._Blacktown=false; $scope._Merrylands=false; $scope._Liverpool_T5=false;
					}else if($scope._Parramatta==false || $scope._Westmead==false || $scope._Blacktown==false || $scope._Merrylands==false || $scope._Liverpool_T5==false){
						$scope._allT5 = false;
					}
					_station_selection();
				}
				$scope._get_Westmead = function (){
					$scope._Westmead = !$scope._Westmead;
					if($scope._Parramatta==true &&$scope._Westmead==true&&$scope._Blacktown==true&&$scope._Merrylands==true&&$scope._Liverpool_T5==true)
					{
						$scope._allT5 = true;
						$scope._Parramatta=false; $scope._Westmead=false; $scope._Blacktown=false; $scope._Merrylands=false; $scope._Liverpool_T5=false;
					}else if($scope._Parramatta==false || $scope._Westmead==false || $scope._Blacktown==false || $scope._Merrylands==false || $scope._Liverpool_T5==false){
						$scope._allT5 = false;
					}
					_station_selection();
				}
				$scope._get_Blacktown = function (){
					$scope._Blacktown = !$scope._Blacktown;
					if($scope._Parramatta==true &&$scope._Westmead==true&&$scope._Blacktown==true&&$scope._Merrylands==true&&$scope._Liverpool_T5==true)
					{
						$scope._allT5 = true;
						$scope._Parramatta=false; $scope._Westmead=false; $scope._Blacktown=false; $scope._Merrylands=false; $scope._Liverpool_T5=false;
					}else if($scope._Parramatta==false || $scope._Westmead==false || $scope._Blacktown==false || $scope._Merrylands==false || $scope._Liverpool_T5==false){
						$scope._allT5 = false;
					}
					_station_selection();
				}
				$scope._get_Merrylands = function (){
					$scope._Merrylands = !$scope._Merrylands;
					if($scope._Parramatta==true &&$scope._Westmead==true&&$scope._Blacktown==true&&$scope._Merrylands==true&&$scope._Liverpool_T5==true)
					{
						$scope._allT5 = true;
						$scope._Parramatta=false; $scope._Westmead=false; $scope._Blacktown=false; $scope._Merrylands=false; $scope._Liverpool_T5=false;
					}else if($scope._Parramatta==false || $scope._Westmead==false || $scope._Blacktown==false || $scope._Merrylands==false || $scope._Liverpool_T5==false){
						$scope._allT5 = false;
					}
					_station_selection();
				}
				$scope._get_Liverpool_T5 = function (){
					$scope._Liverpool_T5 = !$scope._Liverpool_T5;
					if($scope._Parramatta==true &&$scope._Westmead==true&&$scope._Blacktown==true&&$scope._Merrylands==true&&$scope._Liverpool_T5==true)
					{
						$scope._allT5 = true;
						$scope._Parramatta=false; $scope._Westmead=false; $scope._Blacktown=false; $scope._Merrylands=false; $scope._Liverpool_T5=false;
					}else if($scope._Parramatta==false || $scope._Westmead==false || $scope._Blacktown==false || $scope._Merrylands==false || $scope._Liverpool_T5==false){
						$scope._allT5 = false;
					}
					_station_selection();
				}
				
				$scope._get_All_T5 = function(){
					$scope._allT5 = !$scope._allT5;
					if($scope._allT5)
					{	
						$scope._Parramatta = false;
						$scope._Westmead = false;
						$scope._Blacktown = false;
						$scope._Merrylands = false;
						$scope._Liverpool_T5 = false;
					}
					else{
						
					}
					_station_selection();
				}
				//T6
				$scope._get_Clyde = function (){
					$scope._Clyde = !$scope._Clyde;
					if($scope._Clyde==true &&$scope._Rosehill==true&&$scope._Camellia==true&&$scope._Carlingford==true)
					{
						$scope._allT6 = true;
						$scope._Clyde=false; $scope._Rosehill=false; $scope._Camellia=false; $scope._Carlingford=false;
					}else if($scope._Clyde==false || $scope._Rosehill==false || $scope._Camellia==false || $scope._Carlingford==false){
						$scope._allT6 = false;
					}
					_station_selection();
				}
				$scope._get_Rosehill = function (){
					$scope._Rosehill = !$scope._Rosehill;
					if($scope._Clyde==true &&$scope._Rosehill==true&&$scope._Camellia==true&&$scope._Carlingford==true)
					{
						$scope._allT6 = true;
						$scope._Clyde=false; $scope._Rosehill=false; $scope._Camellia=false; $scope._Carlingford=false;
					}else if($scope._Clyde==false || $scope._Rosehill==false || $scope._Camellia==false || $scope._Carlingford==false){
						$scope._allT6 = false;
					}
					_station_selection();
				}
				$scope._get_Camellia = function (){
					$scope._Camellia = !$scope._Camellia;
					if($scope._Clyde==true &&$scope._Rosehill==true&&$scope._Camellia==true&&$scope._Carlingford==true)
					{
						$scope._allT6 = true;
						$scope._Clyde=false; $scope._Rosehill=false; $scope._Camellia=false; $scope._Carlingford=false;
					}else if($scope._Clyde==false || $scope._Rosehill==false || $scope._Camellia==false || $scope._Carlingford==false){
						$scope._allT6 = false;
					}
					_station_selection();
				}
				$scope._get_Carlingford = function (){
					$scope._Carlingford = !$scope._Carlingford;
					if($scope._Clyde==true &&$scope._Rosehill==true&&$scope._Camellia==true&&$scope._Carlingford==true)
					{
						$scope._allT6 = true;
						$scope._Clyde=false; $scope._Rosehill=false; $scope._Camellia=false; $scope._Carlingford=false;
					}else if($scope._Clyde==false || $scope._Rosehill==false || $scope._Camellia==false || $scope._Carlingford==false){
						$scope._allT6 = false;
					}
					_station_selection();
				}
				$scope._get_All_T6 = function(){
					$scope._allT6 = !$scope._allT6;
					if($scope._allT6)
					{	
						$scope._Clyde = false;
						$scope._Rosehill = false;
						$scope._Camellia = false;
						$scope._Carlingford = false;
					}
					else{
						
						
					}
					_station_selection();
				}
				//T7
				$scope._get_Lidcome_T7 = function (){
					$scope._Lidcome_T7 = !$scope._Lidcome_T7;
					if($scope._Lidcome_T7==true &&$scope._Olympic_Park==true)
					{
						$scope._allT7 = true;
						$scope._Lidcome_T7=false; $scope._Olympic_Park=false;
					}else if($scope._Lidcome_T7==false || $scope._Olympic_Park==false){
						$scope._allT7 = false;
					}
					_station_selection();
				}
				$scope._get_Olympic_Park = function (){
					$scope._Olympic_Park = !$scope._Olympic_Park;
					if($scope._Lidcome_T7==true &&$scope._Olympic_Park==true)
					{
						$scope._allT7 = true;
						$scope._Lidcome_T7=false; $scope._Olympic_Park=false;
					}else if($scope._Lidcome_T7==false || $scope._Olympic_Park==false){
						$scope._allT7 = false;
					}
					_station_selection();
				}
				$scope._get_All_T7 = function(){
					$scope._allT7 = !$scope._allT7;
					if($scope.allT7)
					{	
						$scope._Lidcome_T7 = false;
						$scope._Olympic_Park = false;
					}
					else{
					
					}
					_station_selection();
				}
				function _station_selection(){
					var _station_key = [
					$scope._Chatswood,$scope._Hornsby,$scope._Epping,$scope._MQ_Uni,$scope._Rodes,$scope._allT1,
					$scope._Burwood,$scope._Straithfield,$scope._Greensquare,$scope._Mascot,$scope._Lidcome_T2,$scope._allT2,
					$scope._Central_T3,$scope._Sydenham,$scope._Campsie,$scope._Bankstown,$scope._Liverpool_T3,$scope._allT3,
					$scope._Central_T4,$scope._Redfern,$scope._Wollicreek,$scope._Rockdale,$scope._Hurstville,$scope._allT4,				
					$scope._Parramatta,$scope._Westmead,$scope._Blacktown,$scope._Merrylands,$scope._Liverpool_T5,$scope._allT5,
					$scope._Clyde,$scope._Rosehill,$scope._Camellia,$scope._Carlingford,$scope._allT6,
					$scope._Lidcome_T7,$scope._Olympic_Park,$scope._allT7
					];
				var _station_value = ["_Chatswood","_Hornsby","_Epping","_MQ_Uni","_Rodes","_AllT1",
									"_Burwood","_Straithfield","_Greensquare","_Mascot","_Lidcome_T2","_AllT2",
									"_Central_T3","_Sydenham","_Campsie","_Bankstown","_Liverpool_T3","_AllT3",
									"_Central_T4","_Redfern","_Wollicreek","_Rockdale","_Hurstville","_AllT4",
									"_Parramatta","_Westmead","_Blacktown","_Merrylands","_Liverpool_T5","_AllT5",
									"_Clyde","_Rosehill","_Camellia","_Carlingford","_AllT6",
									"_Lidcome_T7","_Olympic_Park","_AllT7"];
				for(var i=0;i<_station_key.length;i++){
					if(_station_key[i]){
							if(i>34){
								angular.element("."+_station_value[i]).css({'background-color': '#999999'});
							}else if(i>=30){
								angular.element("."+_station_value[i]).css({'background-color': '#336699'});
							}else if(i>=24){
								angular.element("."+_station_value[i]).css({'background-color': '#cc00a1'});
							}else if(i>=18){
								angular.element("."+_station_value[i]).css({'background-color': '#0073c7'});
							}else if(i>=12){
								angular.element("."+_station_value[i]).css({'background-color': '#f47424'});
							}else if(i>=6){
								angular.element("."+_station_value[i]).css({'background-color': '#26ae4e'});
							}else if(i>=0){
								angular.element("."+_station_value[i]).css({'background-color': '#fcb514'});
							}
							
						}else{
							angular.element("."+_station_value[i]).css({'background-color': '#4d555d'});
						}
					}
				}	
				
				
			/****************************train filter ends*****************************/
			}
		])
		.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items) {
		   
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
		  }]);
		
		
		
  
	/*.animation('.fold-animation', ['$animateCss', function($animateCss) {
	  return {
	    enter: function(element, doneFn) {
	      var left = element[0].offsetLeft;
	      return $animateCss(element, {
	        from: { height:'0px' },
	        to: { height:left + 'px' },
	        duration: 1 
	      });
	    }
	  }
	}])*/

})();