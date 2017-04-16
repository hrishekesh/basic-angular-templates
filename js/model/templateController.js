/*
	author: hrishekesh_shinde
	release date: 19-Nov-2015
	version: 0.0.1
	description: this file is responsible to collect data (model) for the site. As illustrated, the site data can be kept witin this file or fetched from database as a REST service from node.js Please note that this is a client side file.
*/
var siteApp = angular.module('siteApp',[]);
	
	//controller for page title
	siteApp.controller('indexController', function($scope){
		$scope.title = 'Home|Site Name';
	});
	
	//controller for page header
	siteApp.controller('headerController', function($scope, $http){
		//REST request to get site navigation bar information
		$http({
			method: 'GET',
			url:  '../js/model/data-models/navbar.json'
		}).then(function successCallback(response){
			$scope.navBar = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to display products
	siteApp.controller('productController', function($scope, $http){
		//REST request to get carousel details
		$http({
			method: 'GET',
			url:  '../js/model/data-models/product-list.json'
		}).then(function successCallback(response){
			$scope.productlist = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to display items in carousel
	siteApp.controller('carouselController', function($scope, $http){
		//REST request to get carousel details
		$http({
			method: 'GET',
			url:  '../js/model/data-models/carousel.json'
		}).then(function successCallback(response){
			$scope.carousellist = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to display products
	siteApp.controller('productDetailsController', function($scope, $http, $location){
		var path= $location.path();
		//REST request to get carousel details
		$http({
			method: 'GET',
			url:  '../js/model/data-models'+path+'.json',
		}).then(function successCallback(response){
			$scope.productData = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to display about-us information
	siteApp.controller('aboutusController', function($scope, $http, $location){
		//REST request to get carousel details
		$http({
			method: 'GET',
			url:  '../js/model/data-models/about-us.json',
		}).then(function successCallback(response){
			$scope.aboutus = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get details for features module
	siteApp.controller('featureController', function($scope, $http){
		//REST request to get feature title details
		$http({
			method: 'GET',
			url:  '/features/featureTitle'
		}).then(function successCallback(response){
			$scope.featureTitle = response.data[0];
		}, function errorCallback(error){
		});
		//REST request to get feature module details
		$http({
			method: 'GET',
			url:  '/features/featureList'
		}).then(function successCallback(response){
			$scope.featureList = response.data;
		}, function errorCallback(error){
		});
	});
	
	//Controller to get recent works module
	siteApp.controller('recentWorksController', function($scope, $http){
		//REST request to get recent works title details
		$http({
			method: 'GET',
			url:  '/aboutus/recentWorksTitle'
		}).then(function successCallback(response){
			$scope.recentWorksTitle = response.data[0];
		}, function errorCallback(error){
		});
		
		//REST request to get recent works details
		$http({
			method: 'GET',
			url:  '/aboutus/recentWorkList'
		}).then(function successCallback(response){
			$scope.recentWorkList = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get services details
	siteApp.controller('servicesController', function($scope, $http){
		//REST request to get services title
		$http({
			method: 'GET',
			url:  '/services/servicesTitle'
		}).then(function successCallback(response){
			$scope.servicesTitle = response.data[0];
		}, function errorCallback(error){
		});
		//REST request to get services details
		$http({
			method: 'GET',
			url:  '/services/serviceList'
		}).then(function successCallback(response){
			$scope.serviceList = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get skill details
	siteApp.controller('skillsController', function($scope, $http){
		//REST request to get skill title
		$http({
			method: 'GET',
			url:  '/features/skillsTitle'
		}).then(function successCallback(response){
			$scope.skillsTitle = response.data[0];
		}, function errorCallback(error){
		});
		//REST request to get skill details
		$http({
			method: 'GET',
			url:  '/features/skillList'
		}).then(function successCallback(response){
			$scope.skillList = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get accordian details in feature module
	siteApp.controller('accordionController', function($scope, $http){
		//REST request to get accordian title
		$http({
			method: 'GET',
			url:  '/features/accordionTitle'
		}).then(function successCallback(response){
			$scope.accordionTitle = response.data[0];
		}, function errorCallback(error){
		});
		//REST request to get accordian details
		$http({
			method: 'GET',
			url:  '/features/accordionList'
		}).then(function successCallback(response){
			$scope.accordionList = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get partner details
	siteApp.controller('partnerController', function($scope, $http){
		//REST request to get partner details
		$http({
			method: 'GET',
			url:  '/aboutus/partnerDtls'
		}).then(function successCallback(response){
			$scope.partnerDtls = response.data[0];
		}, function errorCallback(error){
		});
		//REST request to get partner list
		$http({
			method: 'GET',
			url:  '/aboutus/partnerList'
		}).then(function successCallback(response){
			$scope.partnerList = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get contact details. Model is stored within this file and not fetched from database
	siteApp.controller('contactController', function($scope){
		$scope.contactDtls = {'title':'Have a question or need a custom quote?', 'description':'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation +0123 456 70 80'};
	});
	
	//controller to get footer details
	siteApp.controller('footerController', function($scope, $http){
		//REST request to get site footer
		$http({
			method: 'GET',
			url:  '/home/footer'
		}).then(function successCallback(response){
			$scope.footerLinks = response.data;
		}, function errorCallback(error){
		});
	});
	
	//controller to get footer links
	siteApp.controller('footlinkController', function($scope, $http){
		//REST request to get footer links
		$http({
			method: 'GET',
			url:  '/home/footLinks'
		}).then(function successCallback(response){
			$scope.footlinks = response.data[0];
		}, function errorCallback(error){
		});
	});
	
	//controller for portfolio template
	siteApp.controller('portfolioController', function($scope, $http){
		//REST request to get portfolio details
		$http({
			method: 'GET',
			url:  '/portfolio/portFolioDtls'
		}).then(function successCallback(response){
			$scope.portFolioDtls = response.data[0];
		}, function errorCallback(error){
		});
		//REST request to get portfolio verticals
		$http({
			method: 'GET',
			url:  '/portfolio/verticals'
		}).then(function successCallback(response){
			$scope.verticals = response.data;
		}, function errorCallback(error){
		});
		//REST request to get work details
		$http({
			method: 'GET',
			url:  '/portfolio/works'
		}).then(function successCallback(response){
			$scope.works = response.data;
		}, function errorCallback(error){
		});
	});
	
	//custom directive to display templates in the site.
	siteApp.directive('custtmpl', function($http, $templateCache, $compile, $parse) {
        return {
            restrict: 'E',
            link: function(scope , iElement, iAttrs) { 
              var tmplPath = iAttrs.tmplname;
              $http.get(tmplPath, {cache: $templateCache}).success(function(tplContent){
                iElement.replaceWith($compile(tplContent)(scope));                
              });              
            } 
        }
    });
	
	
	
	
	