'use strict';

/* Controllers */

angular.module('andy')
	.factory('indexService', function() {
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
	.factory('readData', ['$http', '$q', function($http, $q) {
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

	})
	.filter('propsFilter', function() {
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
		})
  .controller('MainCtrl', ['$scope', '$translate', '$localStorage', '$window','indexService', 
    function(              $scope,   $translate,   $localStorage,   $window,indexService ) {
      // add 'ie' classes to html
      var isIE = !!navigator.userAgent.match(/MSIE/i);
      isIE && angular.element($window.document.body).addClass('ie');
      isSmartDevice( $window ) && angular.element($window.document.body).addClass('smart');

      // config
      $scope.app = {
        name: 'Angulr',
        version: '1.3.3',
        // for chart colors
        color: {
          primary: '#7266ba',
          info:    '#23b7e5',
          success: '#27c24c',
          warning: '#fad733',
          danger:  '#f05050',
          light:   '#e8eff0',
          dark:    '#3a3f51',
          black:   '#1c2b36'
        },
        settings: {
          themeID: 1,
          navbarHeaderColor: 'bg-black',
          navbarCollapseColor: 'bg-white-only',
          asideColor: 'bg-black',
          headerFixed: true,
          asideFixed: false,
          asideFolded: false,
          asideDock: false,
          container: false
        }
      }

      // save settings to local storage
      if ( angular.isDefined($localStorage.settings) ) {
        $scope.app.settings = $localStorage.settings;
      } else {
        $localStorage.settings = $scope.app.settings;
      }
      $scope.$watch('app.settings', function(){
        if( $scope.app.settings.asideDock  &&  $scope.app.settings.asideFixed ){
          // aside dock and fixed must set the header fixed.
          $scope.app.settings.headerFixed = true;
        }
        // save to local storage
        $localStorage.settings = $scope.app.settings;
      }, true);

      // angular translate
      $scope.lang = { isopen: false };
      $scope.langs = {en:'English', tw:'繁體中文',ch:'简体中文'};
      $scope.selectLang = $scope.langs[$translate.proposedLanguage()] || "English";
      $scope.setLang = function(langKey, $event) {
        // set the current lang
        $scope.selectLang = $scope.langs[langKey];
        // You can change the language during runtime
        $translate.use(langKey);
        $scope.lang.isopen = !$scope.lang.isopen;
      };

      function isSmartDevice( $window )
      {
          // Adapted from http://www.detectmobilebrowsers.com
          var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
          // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
          return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
      }

  }]);