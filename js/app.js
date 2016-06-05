// js/app.js

;(function(angular, $, _){
	
	document.addEventListener("deviceready", yourCallbackFunction, false);
	
	function yourCallbackFunction(){
		
		navigator.notification.alert(
			'You are the winner!',  // message
			null,         // callback
			'Game Over',            // title
			'Done'                  // buttonName
		);
	};

	
	angular.module('mthTipApp', ['xeditable','filters', 'checklist-model'])
		.run(function(editableOptions, editableThemes) {
			  editableOptions.theme = 'bs3';
			});
			
	$(function(){
		
		function toggleSnapper(){
			 if( snapper.state().state=="left" ){
					snapper.close();
				} else {
					snapper.open('left');
				}
		};
		
		$('body').on('change', '.scrollTo' ,function(event){
		
			//prevent the default action for the click event
			//event.preventDefault();
			
			//get the full url - like mysitecom/index.htm#home
			var full_url = $(this).val();
			
			  //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
				var parts = full_url.split("#");
				var trgt = parts[1];
				
				//get the top offset of the target anchor
				var target_offset = $('[name="'+trgt+'"]').position();
				console.log(target_offset.top);
				var target_top = Math.abs(target_offset.top+300);
				
				//goto that anchor by setting the body scroll top to anchor top
				$('.snap-content').animate({scrollTop:target_top}, 500);
		 });
		 
		 var snapper = new Snap({
                element: document.getElementById('snap-content')
				,maxPosition:300
				,minPosition:-300
				,disable: 'right'
				//,hyperextensible: false
            });
			
		$('#left-opener').on('click', toggleSnapper);
		
		
		
//		$('body').on('focus','.editable-input', function(){this.select()});
//		$('input.editable-input').toggleVal();
	});

//end of SIF	
})(angular, jQuery, _);