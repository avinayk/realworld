//== Smooth scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  mobile: {
    smooth: true,
  },
  tablet: {
    smooth: true,
  },
});

locoScroll.on("scroll", ScrollTrigger.update);

var navTrigger = document.getElementsByClassName("nav-trigger")[0];
var body = document.getElementsByTagName("body")[0];

navTrigger.addEventListener("click", toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle("nav-open");
}

function intro() {
  paceOptions = {
    ajax: true,
    document: true,
    eventLag: false,
  };

  Pace.on("done", function () {
    $(".loaderLogo")
      .delay(500)
      .animate({ top: "20%", opacity: "0" }, 3000, $.bez([0.19, 1, 0.22, 1]));

    $("#preloader")
      .delay(1500)
      .animate({ top: "-100%" }, 2000, $.bez([0.19, 1, 0.22, 1]));

    TweenMax.to(".navbar", 2, {
      delay: 1.8,
      opacity: 1,
      ease: Expo.easeInOut,
    });
  });
}

(function ($) {
  $.fn.flip = function (options) {
    var options = $.extend(
      {
        targetClass: ".m-flip_item",
      },
      options
    );

    return this.each(function () {
      console.log(this);
      var $this = $(this),
        $target = $this.find(options.targetClass);

      $this
        .on({
          "init.flip": function () {
            var targetFirst_height = $target.eq(0).height();

            $this
              .data("height", targetFirst_height)
              .css({ height: targetFirst_height });
          },
          "mouseenter.flip": function () {
            $target.css({ top: -$this.data("height") + "px" });
          },
          "mouseleave.flip": function () {
            $target.css({ top: 0 + "px" });
          },
        })
        .trigger("init.flip");
    });
  };
})(jQuery);

$(function () {
  $(".js-flip").flip();
});
intro();
