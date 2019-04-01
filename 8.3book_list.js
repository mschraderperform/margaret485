"use strict";
var $ = function(id) { return document.getElementById(id); };


// the event handler for the click event of each h2 element
var toggle = function() {
    var h2 = this;                    // clicked h2 tag     
    var div = h2.nextElementSibling;  // h2 tag's sibling div tag
    
   
  //This is making the plus and minus appear and disappear
  	if(h2.className){  
        h2.className = '';
    } else { 
        h2.className = 'minus';
    }


   //This is making the text appear amd disappear
      if (div.className){
        div.className = '';
    } else { 
        div.className = 'open';
    }  
};


window.onload = function() {
	
    // get the h2 tags
    var faqs = $("categories");
    var h2Elements = faqs.getElementsByTagName("h2");
    var next = h2Elements.nextElementSibling;
      
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    
    h2Elements[0].firstChild.focus();  
    
    //////////////////////////////////
     var listNode = $("web_images");           // the ul element
    var captionNode = $("caption");           // the h2 element
    var imageNode = $("main_image");          // the main img element
    
    var imageLinks = listNode.getElementsByTagName("a");
    
    // process image links
    var i, image, link;
    for ( i = 0; i < imageLinks.length; i++ ) {
        
        // preload image 
        image = new Image();
        image.src = imageLinks[i].getAttribute("href");
        
        // attach event handler
        imageLinks[i].onclick = function(evt) {
            link = this; // 'this' = the link that was clicked
            
            // set new image and caption
            imageNode.src = link.getAttribute("href");
            captionNode.firstChild.nodeValue = link.getAttribute("title");
            
            // cancel the default action of the event
            if (!evt) { evt = window.event; }
            if (evt.preventDefault) { evt.preventDefault(); }
            else { evt.returnFalse = false; } 
        };
    }
    
    // set focus on first image link
    imageLinks[0].focus();
    
    
    
    
    
       
};



$(document).ready(function() {

	
  	$("#web_images a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	//set up event handlers for links
	$("#web_images a").click(function(evt) {
		//swap images
		var imageURL = $(this).attr("href");
		$("main_image").attr("src",imageURL);
		
		//cancel the default action of the link
		evt.preventDefault();  //jquery cross browser method
	}); //end click
	
	//move focus to first thumbnail
	$("li:first-child a").focus();
		
		
	}); //end ready
	
	
	









