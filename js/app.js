var portfolioApp = angular.module('portfolioApp',['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://justthings.firebaseio.com/dannypule');

portfolioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
		templateUrl: 'views/home.html',
	}).
	when('/codepens', {
		templateUrl: 'views/codepens.html',
		controller: 'CodepenController',
		controllerAs: 'vm'
	}).
	when('/portfolio', {
		templateUrl: 'views/portfolio.html',
		controller: 'CodepenController',
		controllerAs: 'vm'
	});

	// use the HTML5 History API
  // $locationProvider.html5Mode(true);
}]);

