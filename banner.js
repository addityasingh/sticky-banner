var banner = angular.module('banner', [])
.directive('stickyBanner', function(){
	var config = {
		unit: 'px'
	};

	return {
		restrict: 'E',
		template: 	"<div class='banner-container'>\
						<div class='banner-text'>{{text}}</div>\
						<a class='banner-close-icon' title='Close banner' ng-click='bannerClose()' href='#'>X</a>\
					</div>",
		replace: true,
		scope: {
			text: "@",
			size: "@",
			background: "@"
		},
		controller: function($scope, $element, $attrs){
			$element.css({
				'background-color': $scope.background,
				'height': $scope.size + config.unit
			});

			$scope.bannerClose = function(){
				$element.remove();
			}	
		}
	}
});
