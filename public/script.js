gsap.registerPlugin(ScrollTrigger);

gsap.to("header", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    toggleActions: "play reverse play reverse",
    onEnter: () => gsap.to("header", { y: -10, duration: 0.3 }),
    onLeaveBack: () => gsap.to("header", { y: 0, duration: 0.3 }),
  },
});

gsap.fromTo(
  ".hero h2",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".hero h1",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".hero p",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".hero img",
  { opacity: 0, scale: 0.9, rotation: 2 },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero img",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".about",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".highlight-card",
  { opacity: 0, y: 50, rotation: 5 },
  {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".highlights",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".speakers h2",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".speakers",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".speaker-card",
  { opacity: 0, y: 50, scale: 0.95, rotation: 3 },
  {
    opacity: 1,
    y: 0,
    scale: 1,
    rotation: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".speaker-grid",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".register h2",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".register",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
      onEnter: () => console.log("Register section entered view"),
    },
  }
);

gsap.fromTo(
  ".register p",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".register",
      start: "top 85%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".register .input-group",
  { opacity: 0, x: -50 },
  {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".register form",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".cta-button",
  { opacity: 0, scale: 0.8 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".register form",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".office",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".office",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".office .details",
  { opacity: 0, scale: 0.95 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".office .details",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".awards",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".awards",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".award-item",
  { opacity: 0, y: 30, rotation: 5 },
  {
    opacity: 1,
    y: 0,
    rotation: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".award-grid",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.to(".hero::before", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.to(".register::before", {
  backgroundPosition: "50% 100%",
  ease: "none",
  scrollTrigger: {
    trigger: ".register",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.fromTo(
  "footer",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".agenda",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".agenda",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".agenda-item",
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".agenda-container",
      start: "top 70%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
  }
);

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted! (This is a placeholder)");
});