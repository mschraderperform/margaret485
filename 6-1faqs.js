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
    var faqs = $("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    var next = h2Elements.nextElementSibling;
    
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    
    h2Elements[0].firstChild.focus();    
  
};
