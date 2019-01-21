$("form").on("click", "button", function(event) {
  event.preventDefault();
  alert("Thanks for subscribing");
  // $(".submit").val("");
});

// / email validity checker source @https:/ / stackoverflow.com / a / 2507043;
// function checkEmailValidity(email) {
//   var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   return regex.test(email);
// }

$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  percentPosition: false,
  imagesLoaded: true,
  autoPlay: true,
  prevNextButtons: false
});

//  smooth scrolling source @ https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});
