// subscribe alert
$(function() {$(".text-submit").on("click", ".submit", function() {
  const text = $("input[name='email_address']").val();
  if( checkEmailValidity(text)===true){
      alert("Thank you for subscrıbıng!");
  }else{
      alert("Not a valid email address!");
  }
  $("input[name='email_address']").val()="";
});

// email validity checker source @https:/ / stackoverflow.com / a / 2507043;
function checkEmailValidity(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
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

// carousel
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
  $("a[href^='#']").not("a[href='#']").click(function() {
     $("#"+$(this).attr("href").slice(1)+"").focus();
  });
});