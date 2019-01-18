$("form").on("click", "button", function(event) {
  event.preventDefault();
  alert("Thanks for subscribing");
  $(".submit").val("");
});

$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  percentPosition: false,
  imagesLoaded: true,
  autoPlay: true,
  prevNextButtons: false
});

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

