var isMenuOpen = true;
var menuButton = document.querySelector(".toggle-button");
var menuNavigation = document.querySelector(".menu-navigation");
var liencontainer = document.querySelector(".lien-container");
var closeButton = document.querySelector(".close");

menuButton.addEventListener("click", function () {
   var toggleMenuTimeline = gsap.timeline();

	toggleMenuTimeline.set(liencontainer, { opacity: "100%"});
	toggleMenuTimeline.set(menuNavigation, { visibility: "visible" });
	toggleMenuTimeline.to(menuNavigation, {
		opacity: "100%",
		duration: 0.3,
		ease: Power1,
	});
	if (window.innerWidth > 980) {
		toggleMenuTimeline.to(menuNavigation, { width: "35rem", duration: 0.3 }, "<");
	} else {
		toggleMenuTimeline.to(
			menuNavigation,
			{ width: "calc(100vw - 40px)", duration: 0.3 },
			"<"
		);
	}
	toggleMenuTimeline.to(menuNavigation, { height: "720px", duration: 0.3 }, "<");
	toggleMenuTimeline.to(liencontainer, { y: "0", duration: 1, ease: Power1 });

	toggleMenuTimeline.play();
});

closeButton.addEventListener("click", function () {

   var closeMenuTimeline= gsap.timeline();
	closeMenuTimeline.to(liencontainer, { opacity: "0", duration: 0.2, ease: Power1});
	closeMenuTimeline.to(menuNavigation, { height: "0", duration: 0.3, ease: Power1 },'<0.2');
	closeMenuTimeline.to(menuNavigation, { width: "0", duration: 0.3 , ease: Power1},'<');
	closeMenuTimeline.to(menuNavigation, { opacity: "0", duration: 0.3, ease: Power1},'<');
	closeMenuTimeline.set(liencontainer, { y: "+120px"});
   
	closeMenuTimeline.set(menuNavigation, { visibility: "hidden" });
});