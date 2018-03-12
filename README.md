# Cardboard Box Effect

The Cardboard Box Effect is a plugin maked with JQuery that use other Plugin maked with JQuery that allow to you chose the direction of the slideToggle function.
This Plugin give a effect that look like a random effect, the User don't know where information came from. Dynamically the information appear to user.


## Getting Started

To make the Plugin work, just use the files on `/js` folder and `/css` folder, follow the steps below.

### Prerequisites

Take the JQuery files and CSS files in the respective folders, and save in your project, to use Jquery Plugin's you should declare or to reference the Jquery libray :
CDN or one file.

### Installing

First you need create a element in your project as the example in `index.hmtl` file, follow below.

`
	<div class="thumbnail">
		<img src="img/metallica.jpg" alt="">
		<div class="caption text-center">
			<h5>Any Name</h5>
		</div>
		<div class="caption-information">
			<h5 class="text-warning">Use de Cardboard Box</h5>
			<p>The Cardboard Box Effect offer a different way to show the informations, of way dinamic.Try to guess where the information comes from.</p>
		</div>
	</div>
`

The element that will hide and show, should have the following characteristics. 

`
.caption-information{
	position: absolute;
	top: 0px;
	left: 15px;
	padding: 10px;
	width: 20%;
	height: 93%;
	border-radius: 5px;
	background: #e2ebff;
	display: none;
	color: black;
	border: 1px solid #3558b2;			
}

Then you should declare inside of the JQuery Plugin called cardboardbox the element father, and the element that will hide and show the informations.

`
	$(document).ready(function(){
			var status = 0;
			var count = 0;
			
			//element that will activate the event
			$(".thumbnail").hover(function(){
				
				//son of element that activated the event
				var element = $(this).children(".caption-information");
`
 To do little adjusts on element positions, sizes, velocity, effect, and other characteristics access the file `slideToggleDirections`.
 
 `/js/slideToggleDirections.js`
 
 
 ### Observations
 
 Please access the `slideToggleDirections` plugin in another repository, help me improve this plugin, send me a message about errors or ways to improve the Plugin.