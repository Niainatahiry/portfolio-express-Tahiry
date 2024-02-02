document.addEventListener('DOMContentLoaded', function() {
    const fronth3 = document.getElementById('front-h3');
    const frontp = document.getElementById('front-p');
    const designh3 = document.getElementById('design-h3');
    const designp = document.getElementById('design-p');

    const frontendTimeline = gsap.timeline({ paused: true });
    const designTimeline = gsap.timeline({ paused: true });

    frontendTimeline.to(fronth3, { opacity: 1, y: '0', duration: 0.5, ease: Power1 });
    frontendTimeline.to(frontp, { opacity: 1, y: '0', duration: 1, ease: Power1}, '-=0.3');
    designTimeline.to(designh3, { opacity: 1, y: '0', duration: 0.5, ease: Power1 });
    designTimeline.to(designp, { opacity: 1, y: '0', duration: 1, ease: Power1 }, '-=0.3');

    gsap.registerPlugin(ScrollTrigger);

    // ScrollTrigger for ".front-end" section
    ScrollTrigger.create({
        trigger: ".front-end", // Specify the trigger element for the frontend section
        start: "top center", // Adjust the start position as needed
        once: true,
        onEnter: function() {
            frontendTimeline.play();
        }
    });

    // ScrollTrigger for ".design" section
    ScrollTrigger.create({
        trigger: ".design", // Specify the trigger element for the design section
        start: "bottom 85%", // Adjust the start position as needed
        once: true, // Animation happens only once
        markers: true, //
        onEnter: function() {
            designTimeline.play();
        }
    });
});
