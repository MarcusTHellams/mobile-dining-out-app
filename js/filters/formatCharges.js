// js/filters/formatCharges.js

;(function(angular, $, _){
	
	angular.module('filters', [])
		.filter('formatCharges',['$filter',function($filter, $scope){
			function IsNumeric(input){
				return (input - 0) == input && input.length > 0;
			};
			
			return function(text){
				if(!IsNumeric(text)){
					return 'Please enter a proper number'
					
					
				} else if(parseFloat(text) > 0){
					
					return $filter('currency')(text);
				} 
				else if(parseFloat(text) <= 0){
					return 	'Click to enter a charge';
				};
				
			};
		
		//
	}])
	.filter('removeClickShared', [function(){
		return function(text){
			if(text.match(/Click to Edit Name of Shared Charge/)){
				return '';
			} else{
			 return text + ' - ';	
			};
			
			//var text = text.replace(/Click to Edit Name of Shared Charge - /, '');
			
		}
	}])
	.filter('removeClickToEnter', [function(){
		return function(text){
			if(text.match(/Click to Enter a Name/)){
				return 'Name';
			} else{
			 return text;	
			};
			
			//var text = text.replace(/Click to Edit Name of Shared Charge - /, '');
			
		}
	}])
	.filter('removeClickShared2', [function(){
		return function(text){
			if(text.match(/Click to Edit Name of Shared Charge/)){
				return 'Shared Charge';
			} else{
			 return text + ' - Shared Charge';	
			};
			
			//var text = text.replace(/Click to Edit Name of Shared Charge - /, '');
			
		}
	}]);

//end of SIF	
})(angular, jQuery, _);