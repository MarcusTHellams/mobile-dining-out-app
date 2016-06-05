// js/controllers/tipController

;(function(angular, $, _){
	
	angular.module('mthTipApp')
		.controller('tipController',['$scope', '$filter','dataBase',function($scope, $filter,dB){
		
		$scope.customers = dB.customers;
		$scope.charges = dB.charges;
		$scope.dB = dB;
		$scope.blank = [];
		$scope.blank2 = [];
	console.log($scope.customers().get());
		
		$scope.killer =  function(){console.log(arguments)};
		
		window.scope = $scope;
		
		$('body').on('click','.selectAll', function(){
			var $this =  $(this);
			$this.parents('.shared-charge')
				.find(':checkbox')
				.not($this)
				.trigger('click');
		})
		
		
		 $scope.$watchCollection('[taxTotal, subTotal]', function(newValues)
			  {
				  dB.taxPercentage = (newValues[0]/newValues[1]) *100;
				
			  });
		
		//
	}]);

//end of SIF	
})(angular, jQuery, _);