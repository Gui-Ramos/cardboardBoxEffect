// JavaScript Document
// Plugin Maked By Gui-Ramos
//Effects that show and hide elements

/* 

	The name of functions are the action + de direction
 	Exemplo:
	
	Actions:  show and hide;
	Directions:  Left, Right, Top and Bottom; 
	
	action+direction();
	
	showLeft();
	hideLeft();
	
*/


jQuery.fn.showLeft = function(){
			return this.each(function(){						
						$(this).css("right","inherit").css("left","15px").css("width","0%").css("height","93%").css("display","block").animate({
						  width: "91%"
						}, {
						  queue: false,
						  duration: 500
						});			
				
			});
		};
		
		
		jQuery.fn.showRight = function(){
			return this.each(function(){
						$(this).css("right","15px").css("left","inherit").css("height","93%").css("width","0%").css("display","block").animate({
						  width: "91%"
						}, {
						  queue: false,
						  duration: 500
						});			
				
			});
		};
		
		
		jQuery.fn.showBottom = function(){
			return this.each(function(){						
						$(this).css("width","91%").css("bottom","inherit").css("top","0px").css("height","0%").css("display","block").animate({
						  height: "93%"
						}, {
						  queue: false,
						  duration: 500
						});			
				
			});
		};
		
		jQuery.fn.showTop = function(){
			return this.each(function(){						
						$(this).css("width","91%").css("height","0%").css("top","inherit").css("bottom","19px").css("display","block").animate({
						  height: "93%"
						}, {
						  queue: false,
						  duration: 500
						});			
				
			});
		};
		
		
		jQuery.fn.hideTop = function(){
			return this.each(function(){						
				
						$(this).css("bottom","inherit").css("top","0px").animate({
						  height: "0%", opacity: "hide"
						}, {
						  queue: false,
						  duration: 700
						});			
				
			});
		};
		
		jQuery.fn.hideBottom = function(){
			return this.each(function(){
				
						$(this).css("top","inherit").css("bottom","19px").animate({
						  height: "0%", opacity: "hide"
						}, {
						  queue: false,
						  duration: 500
						});			
				
			});
		};
		
		jQuery.fn.hideRight = function(){
			return this.each(function(){			
						$(this).css("right","15px").css("left","inherit").animate({
						  width: "0%", opacity: "hide"
						}, {
						  queue: false,
						  duration: 500
						});			
					
				
			});
		};
		
		jQuery.fn.hideLeft = function(){
			return this.each(function(){			
						
				
						$(this).css("right","inherit").css("left","15px").animate({
						  width: "0%", opacity: "hide"
						}, {
						  queue: false,
						  duration: 500
						});	
				
			});
		};
		