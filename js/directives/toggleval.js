// js/directives/toggleval.js

;(function(angular, $, _){
	
	angular.module('mthTipApp')
		.directive('toggleVal',function() {
			  return {
				restrict: 'A'
				,link: function(scope, elem, attrs){
					$(elem).toggleVal({populateFrom: 'placeholder'});
					
					//end of link	
				}
				//end of return  
			  }
			});

//end of SIF	
})(angular, jQuery, _);