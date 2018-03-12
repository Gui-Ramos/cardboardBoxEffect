//Cardboard Box Effect
//Logically the plugin control the way that the element will to behave

$(document).ready(function(){
	
	
	//else minus 1
			var status = 0;
	
	//the count variable will until 8
			var count = 0;
			
			//element that will activate the event
			$(".thumbnail").hover(function(){
				
				//son of element that activated the event
				var element = $(this).children(".caption-information");
				
				//if status is 0 so add more 1
				if(status == 0){
					//If count < 7 so add more 1
					if(count < 7){
						count ++;						
					}
					else{
						count = 8;
						status = 1;						
					}
					
				}
				//if status is != 0 so minus 1
				else{
					//if count > 2 or != 2 so minus 1
					if(count != 2){
						count--;						
					}
					else{
						count= 1;
						status = 0;							
					}
				}
				
				//switch call the slideToggleDirections functions
				switch(count){
				
					case 1:					
						element.showTop();			
					break;
						
					case 2:
						element.hideTop();			
					break;
						
					case 3:
						element.showBottom();
					break;
						
					case 4:
						element.hideBottom();		
					break;
						
					case 5:
						element.showRight();
					break;
						
					case 6:
						element.hideRight();		
					break;
						
					case 7:
						element.showLeft();
					break;
						
					case 8:
						element.hideLeft();		
					break;
					
				}
				
			})
			
		})