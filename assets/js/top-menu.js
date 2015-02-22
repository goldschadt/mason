// Hide Header on on scroll down - Mason 1.1.5
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('figure').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('figure').removeClass('navi-down').addClass('navi-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('figure').removeClass('navi-up').addClass('navi-down');
        }
    }
    
    lastScrollTop = st;
}