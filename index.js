gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", function () {
  gsap.set(".panel:not(:first-child)", {
    yPercent: 100,
  });

  gsap.set(".panel:nth-child(2) > .panel", {
    yPercent: 0,
  });
  gsap.set(".panel:nth-child(3) > .panel", {
    yPercent: 0,
  });
  gsap.set(".panel:nth-child(4) > .panel", {
    yPercent: 0,
  });

  gsap.to(".panel", {
    yPercent: (index, target) => {
      if (index === 0 || index === gsap.utils.toArray(".panel").length - 1) {
        return gsap.getProperty(target, "yPercent"); // Keep first element in place
      }

      let currentPosition = gsap.getProperty(target, "yPercent");
      return currentPosition - 100;
    },
    ease: "slow(0.7,0.7,false)",
    stagger: 0.5,
    scrollTrigger: {
      trigger: "#container",
      start: "top top",
      end: "+=800%",
      scrub: true,
      pin: true,
      anticipatePin: 1, // Improves pin smoothness
      fastScrollEnd: true, // Improves behavior during fast scrolling
      preventOverlaps: true, // Ensures animations don't overlap
      invalidateOnRefresh: true, // Recalculates on page refresh
    },
  });

  gsap.to("#pringle-1", {
    duration: 2,
    x: 20, // Move to the left
    y: 10, // Move downward
    rotation: -10, // Slight rotation for a slant effect
    repeat: -1, // Loop forever
    yoyo: true, // Makes the animation go to and fro
    ease: "power1.inOut", // Smooth easing for a natural effect
  });

  // Animation for the second Pringle can (slight shift along x-axis)
  gsap.to("#pringle-2", {
    duration: 2,
    x: 20, // Slightly shift to the right
    rotation: 5, // Slight rotation
    repeat: -1, // Loop forever
    yoyo: true, // Makes the animation go to and fro
    ease: "power1.inOut", // Smooth easing for a natural effect
  });

  // Animation for the third Pringle can (4th quadrant - bottom right)
  gsap.to("#pringle-3", {
    duration: 2,
    x: -7, // Move to the right
    y: 5, // Move downward
    rotation: 5, // Slight rotation for a slant effect
    repeat: -1, // Loop forever
    yoyo: true, // Makes the animation go to and fro
    ease: "power1.inOut", // Smooth easing for a natural effect
  });
});
