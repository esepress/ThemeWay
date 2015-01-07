$(document).ready(function() 
	{

		$('.element-item img').css('opacity', 1);  
		$('.element-item').hover(function()
		{
				$(this).find('img').stop().fadeTo('slow', 0.6);  
		},  
		function()
		{  
			$(this).find('img').stop().fadeTo('slow', 1);  
		});  
	});  

$(document).ready(function() 
			{
 
				$("#partners").owlCarousel
				({
				 
				    autoPlay: 3000, //Set AutoPlay to 3 seconds
				    items : 4,
				    itemsDesktop : [1199,3],
				    itemsDesktopSmall : [979,3],
				    itemsTablet: [600,3],
				    itemsMobile : [400,2],
				    autoHeight:	false
				 
				});
				 
			});

new WOW().init();

$( function() 
			{
				  // init Isotope
			  	var $container = $('.isotope').isotope
			  	({
				    itemSelector: '.element-item',
				    layoutMode: 'fitRows'
			  	});


  				// bind filter button click
  				$('#filters').on( 'click', 'button', function() 
  				{
				    var filterValue = $( this ).attr('data-filter');
				    // use filterFn if matches value
				    $container.isotope({ filter: filterValue });
				 });
  
			  // change is-checked class on buttons
			  	$('.button-group').each( function( i, buttonGroup ) 
			  	{
			    	var $buttonGroup = $( buttonGroup );
			    	$buttonGroup.on( 'click', 'button', function() 
			    	{
			      		$buttonGroup.find('.is-checked').removeClass('is-checked');
			      		$( this ).addClass('is-checked');
			    	});
			  	});
			  
			});



			$(function()
			{
    			$(".element-item").hover(function()
    			{
      				$(this).find(".item-desc").fadeIn();
    			}
                ,function()
                {
                        $(this).find(".item-desc").fadeOut();
                });        
			});

			$(function() 
			{
  				$('a[href*=#]:not([href=#])').click(function() 
  				{
    				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) 
    				{
      					var target = $(this.hash);
      					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      					if (target.length) 
      					{
        					$('html,body').animate
        					({
          						scrollTop: target.offset().top
        					}, 1000);
        					return false;
      					}
    				}
  				});
			});