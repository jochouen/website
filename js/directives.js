directives = angular.module('directives', []);

directives.directive("topAnimation", function () {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
        	var pointer = $(".animation img");
        	var text = $(".animation p");
        	var animation_div = $(".animation");
        	var r =  ($(".animation").width() - pointer.width()) / 5;
        	var duration = 16000;

        	var hideAnimation = function(){
        		pointer.click(function(){
        			animation_div.animate({"opacity":0},800,function(){
        				animation_div.remove();	
        			})
        			
        		});
        	}

        	var hint = function(){
        		pointer.hover(function() {
        			text.css("display","block");
        		},function(){
        			text.css("display","none");
        		});
        	}

            var anim = function(){
		        pointer.animate({ count: 2 }, { 
		            duration: duration, 
		            easing: "linear", 
		            step: function(now){
		                $(this).css({
		                    left: r - r * Math.tan(now * Math.PI),
		                    top:  r + r * Math.sin(now * Math.PI)
		                });
		            },
		            complete: function(){
		                anim();
		                this.count = 0;
		            }
		        });
    		};
    
    		anim();
    		hint();
    		hideAnimation();
        }
    }
});

directives.directive("show", function () {
    return {
        restrict: "A",
        link: function (scope, elem, attrs) {
            elem.animate({"opacity":1},1000);
        }
    }
});

