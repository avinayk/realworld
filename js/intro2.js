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
  TweenMax.from(".mainHeader", 2, {
    delay: 1.8,
    y: 50,
    opacity: 0,
    ease: Expo.easeInOut,
  });
});
