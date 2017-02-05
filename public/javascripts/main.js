;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

            $(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}    

	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};
        
        var firstest = function() {
            var $div = $("#rj-nomal");
            $(".to-animate-2").addClass('fadeInUp animated');
            $(".to-animate").addClass('fadeInUp animated');
            /*var $scroll = $('.scroll-link');
            $scroll.on('click',function(event){
                event.preventDefault();
                var sectionID = $(this).attr("data-id");
                sectionID.velocity("scroll", 1000);
                
            });*/
            /*$div.velocity({ width: "500px",opacity: 1 },{ duration: 400, easing: "swing" });*/
            /*$div.velocity({ top: 50 },1000, "ease-in-out" );*/
            /*$div.velocity({ top: 50 },{ duration: 1000, easing: "ease-in-out",delay:500 } );*/
            /*$div.velocity({ top: 50 },1000, function(){ alert("Compelet.")} );*/
            /*$div.velocity({ padding: 50 } );*/
            /*$div.velocity({ paddingLeft: 50,paddingRight: 50 } );*/
            /*$div.velocity({ top: 50, left: "50%", rotateZ: 25 } );*/
            /*$div.velocity({ top: "50px", left: "-50", width: "+=5rem", height: "-10rem", paddingLeft: "*=2", paddingRight: "/=2"});*/
            /*$div.velocity({ width: "100px", height: "100px" })
                .velocity({ top: "50px" });*/
            /*$div.velocity({ width: "100px" }, "easeInOutSine" );*/
            /*$div.velocity({ width: "100px" }, [ 0.17, 0.67, 0.83, 0.67 ] );*/
            /*$div.velocity({ width: "100px" }, [ 250, 15 ] );*/
            /*$div.velocity({ width: "100px" }, "spring" );*/
            /*$div.velocity({ translateY: "100px" }, { loop: 2 } );*/
            /*$div.animate({ width: "100px",opacity: 0.5 });*/
            /*$div.addClass("fadeInAndMove",1000);*/
            /*$div.velocity(fadeIn, 1000);*/
            
        }
        
 /*       var animate_enable = function() {
            $('body .animate_afb').waypoint( function() {
                if (!$(this.element).hasClass('animated_start')){
                    var e = $(this);
                    setTimeout( function() {
                        e.addClass('animated_start')
                    }, 20);
                    
                }
                
            } , { offset: '85%' ,triggerOnce: !0});
            
            
        };

*/
 
        var optionfilter = function() {
            var $data = $("#list").clone();
            
            $("#navpost ul li").click(function() {
                $(this).addClass("cur");
                $(this).sibings().removeClass("cur");
                var id = $(this).attr("id");
                    if(id=="all"){
                        var $source = $data.find("li");
                    }else {
                        var $source = $data.find("li[class="+id+"]");
                    }
                    $("#list").quicksand($source, {
                        duration: 1000,
                        attribute: 'id',
                        easing: 'swing'
                    });
            });
            
        }
	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};
        
        var goToSection = function() {
                $('.js-gosection').on('click', function(event){
                        event.preventDefault();

			$('html, body').animate({
				scrollTop: $('div[data-section]').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
        }


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});
	};

	var sliderMain = function() {
		
	  	$('#fh5co-hero .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#fh5co-hero .flexslider .slides > li').css('height', $(window).height());	
	  	});

	};

	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
                //animate_enable();
                firstest();
		sliderMain();
		dropdown();
		goToTop();
                goToSection();
		loaderPage();
		counterWayPoint();
		counter();
		parallax();
		testimonialCarousel();
		fullHeight();
                optionfilter();
	});


}());
