angular.module('FitTime')
        .config(['$routeProvider', function($routeProvider){
            $routeProvider
            .when(
                '/dashboard',{
                templateUrl: 'templates/pages/fitness/index.html'
            })
            
            .when('/user-login',{
                templateUrl: 'templates/pages/user/login.html'  
            })
            
            .when('/user-signup', {
                templateUrl: 'templates/pages/user/signup.html'
            })
            
            .when('/user', {
                templateUrl: 'templates/pages/user/index.html'
            });
                  
        }]);