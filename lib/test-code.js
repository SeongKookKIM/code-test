gsap.from(".text h1", 0.8, {
  y: innerHeight * 1,
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
});
gsap.to(".text", 1, {
  left: "-100%",
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
  delay: 2,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#smooth-content",
      start: "top top",
      end: "bottom center",
      scrub: 1,
    },
  })
  .from(".text1", { top: "400px", scale: 5 });

gsap.from(".text1 h1", 1, {
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
  delay: 2,
  y: innerHeight * 0.1,
});

gsap.from(".text2", 1, {
  top: "5%",
  opacity: 0,
  ease: "power3.inout",
  stagger: 0.1,
  delay: 3,
});

gsap.to(".text2 h1", {
  scrollTrigger: {
    scrub: 1,
    start: "top top",
    end: "10% 20%",
  },
  y: innerHeight * 0.1,
  opacity: 0,
});

gsap.from(".content", {
  scrollTrigger: {
    scrub: 1,
    start: "-20% -30%",
    end: "20% top",
  },
  scale: 0.1,
  opacity: 0,
});
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".con-cover",
      start: "top top",
      end: "200% 10%",
      scrub: 1,
      pin: true,
      duration: 10,
    },
  })
  .to(".wrap", { delay: 0.1, left: "-150%" });
