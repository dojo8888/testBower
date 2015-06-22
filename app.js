var app = angular.module("app",['ngRoute', 'phonecatControllers']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider.
		when('/phones',{
			templateUrl : 'phone-list.html',
			controller : 'PhoneListCtrl'
		}).
		when('/phone/:phoneId',{
			templateUrl : 'phone-detail.html',
			controller : 'PhoneDetailCtrl'
		}).
		oterWise({
			redirectTo : '/phones'
		});
}]);


// index.html 에 연결
// 1. otherWise case 에 적용
// 2. redirectTo /phones
// 3. 