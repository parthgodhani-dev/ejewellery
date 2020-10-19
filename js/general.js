
var preloader = document.getElementById('loader');

function myFunction() {
    preloader.style.display = 'none';
};

// Sticky Header
$(window).scroll(function () {    
    if ($(this).scrollTop() > 1) {
        $('body').addClass("fixed");
    }
    else {
        $('body').removeClass("fixed");
    }    
});

// Navigation
if ($("#nav").length) {
    if ($(".toggleMenu").length == 0) {
        $("#mainNav").prepend('<a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar"></span></a>');
    }
    $('.menu-icon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $('#nav').slideToggle('slow');
        return false;
    });

    $("#nav li a").each(function () {
        if ($(this).next().length) {
            $(this).parent().addClass("parent");
        }
    });
    $("#nav li.parent").each(function () {
        if ($(this).has(".arrowclick").length <= 0) {
            $(this).append('<i class="arrowclick">&nbsp;</i>');
        }
    });
    $(".arrowclick").on('click', function () {
        if ($(this).hasClass("active")) {
            if ($(this).parents("li").hasClass("parent")) {
                $(this).closest("li").find(".sub-menu").slideUp(250);
                $(this).removeClass("active");
            } else {
            }
        } else {
            if ($(this).parents("li").hasClass("parent")) {
            } else {
                $(".sub-menu").slideUp(250);
                $(".arrowclick").removeClass("active");
            }
            $(this).closest("li").find(".sub-menu:first").slideDown(250);
            $(this).addClass("active");
        }
    });    
}

// searchbar 
$(document).ready(function() {
    $(".search_btn").click(function() {
	   $(".togglesearch").toggle();
	   $("input[type='text']").focus();
	 });
});

// banner slider
$(document).ready(function() {
    $(".banner_slider").owlCarousel({
      autoplay: true,
      items: 1,
      loop: true,
      nav: true,
      navText: ["<span class='left'></span>","<span class='right'></span>"]
    });
});


// banner slider
$(document).ready(function () {
    $(".shop_slider").owlCarousel({
        loop: true,
        nav: true,
        margin:15,
        dotsEach: true,
        navText: ["<span class='left'></span>", "<span class='right'></span>"],
        responsive: {
            0: {
                items: 1,
                dots: false
            },
            479: {
                items: 1.5,  
                dots: false               
            },
            767: {
                items: 2.5                               
            },
            991: {
                items: 3.3               
            }            
        }
    });
});


$(document).ready(function () {
    $(".desibann_slider").owlCarousel({
        autoplay: true,
        autoplayTimeout:8000,
        items: 1,
        loop: true                
    });
});



$(window).on('load', function () {
    $.instagramFeed({
        'username': 'jewellery_hubb_by_swati',
        'container': ".insta_mn",
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'get_raw_json': false,
        'callback': null,
        'styling': true,
        'items': 4,
        'items_per_row': 4,
        'margin': 0
    });
});


$(document).ready(function () {
    $(".our_testi").owlCarousel({
        autoplay: true,        
        items: 1,
        loop: true,
        dots: false,   
        nav: true,
        navText: ["<span class='left'></span>", "<span class='right'></span>"]            
    });
});

