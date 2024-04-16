$('.navbar-nav .nav-item').click(function() {
    $('.navbar-nav .nav-item.active').removeClass('active'); 
    $(this).addClass('active');
})


$(".navbar .navbar-toggler").click(function(){
  $(".sandwitch").toggleClass("open");
});


var header = document.querySelector('.header-area');


onScroll = () => {
  var scrolledPage = Math.round(window.pageYOffset);
  if(scrolledPage > 60) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}


document.addEventListener('scroll', onScroll);


jQuery(document).ready(function(){
  jQuery(window).scroll(function() {    
    if (jQuery(window).scrollTop() >= 500) {
      jQuery("#to-top").css("opacity", "1");
    } else {
      jQuery("#to-top").css("opacity", "0");
    }
  });
  jQuery("#to-top").click(function(){
    jQuery('html, body').animate({
      scrollTop: jQuery("body").offset().top
    }, 300); 
  });
});