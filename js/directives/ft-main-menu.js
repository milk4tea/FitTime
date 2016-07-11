angular.module('FitTime')
.directive('ftMainMenu', function($location) {
  return {
    replace: true,
    restrict: "E",
    scope: {

    },
    templateUrl: "templates/directives/ft-main-menu.html",
    link: function(scope, element) {
//        element.on('click', '.sign-in-btn', function(e) {
//           e.preventDefault();
//           $location.url('/user-login');
//        });
    }
  };
});