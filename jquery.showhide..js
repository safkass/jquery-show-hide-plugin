///////////////////////////////////////////////////
// ShowHide plugin                               
// Author: Kaleem Ahmad - http://www.kahmad.com
// Demo: Tutorial - http://www.kahmad.com/jquery-show-hide-plugin
// Built: 1st July 2013                                     
///////////////////////////////////////////////////

// AS toggle function is not working properly from Jquery v1.9 so I wrote a alternative function to work properly.
$.fn.toggleClick = function(){
    var functions = arguments ;
    return this.click(function(){
		var depricate = $(this).data('depricate') || 0;
		functions[depricate].apply(this, arguments);
		depricate = (depricate + 1) % functions.length ;
		$(this).data('depricate', depricate);
    });
};

(function ($) {
	$.fn.showHide = function (options) {
		var defaults = {
			speed: 1000, // you can set a animation speed.
			VisibleBox:'1', //add class name which box you want to display first.
			HiddenBox:'2' // add class name which box you want to keep it hide.
		};

		var options = $.extend(defaults, options);
		$("."+options.HiddenBox).hide();
		
		$(this).each(function(e){
			$(this).toggleClick(function(){
				var toggleDiv = "#"+$(this).attr('rel');
				$(toggleDiv).animate({height:200},options.speed);
				$(toggleDiv).find("."+options.VisibleBox).hide();
				$(toggleDiv).find("."+options.HiddenBox).show();

			},function(){
				var toggleDiv = "#"+$(this).attr('rel');
				$(toggleDiv).find("."+options.VisibleBox).show();
				$(toggleDiv).find("."+options.HiddenBox).hide();
				$(toggleDiv).animate({height:18},options.speed);
			});
		});
	};
})(jQuery);