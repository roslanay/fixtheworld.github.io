
$( function() {
    $( "nav,.content,#my-image" ).draggable();
    
    // $( "nav" ).draggable();  		// only blue nav circle draggable
    // $( ".content" ).draggable();		// only green content circle draggable
    // $( "#my-image" ).draggable();	// only cogwheel draggable

 //    $('.content').on('mousedown', function(event) { 
 //   	 	$('.content').css('z-index','1');
 //    	$( this ).css('z-index','1000');
	// });
  
} );


var i,c=['auto','pointer','default','none','context-menu','help','progress','wait','cell','crosshair','text','vertical-text','alias','copy','move','no-drop','not-allowed','initial','inherit','n-resize','s-resize','e-resize','w-resize','ns-resize','ew-resize','ne-resize','nw-resize','se-resize','sw-resize','nesw-resize','nwse-resize','col-resize','row-resize','all-scroll','url(bulbasaur.cur), auto','url(squirtle.cur) 0 16, pointer','zoom-in','zoom-out','grab','grabbing','-webkit-grab','-webkit-grabbing'];for(i=0;i<c.length;i++){var d=document.createElement('div'),h='hsl('+~~(Math.random()*360)+',50%,75%)';d.innerHTML=d.style.cursor=c[i];d.style.backgroundColor=h;document.getElementsByTagName('main')[0].appendChild(d);}