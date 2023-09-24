var Webflow = Webflow || [];
Webflow.push(function () {
  let typeSplit = new SplitType("[text-split]", {
    types: "words, chars",
    tagName: "span",
  });
  let tload = gsap.timeline();
  tload
    .to("#preload-animation", {
      delay: 2,
      duration: 0.2,
      scale: 0,
    })
    .to("#preloader", {
      height: 0,
      duration: 0.5,
      ease: "expo.inOut",
    })
    .to("#preloader", {
      display: "none",
    })
    .from(
      $("[words-slide-up]").find(".word"),
      {
        opacity: 0,
        yPercent: 100,
        duration: 0.2,
        ease: "back.out(2)",
        stagger: { amount: 0.3 },
      },
      ">0.01"
    )
    .from(
      "[scale-in]",
      {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        ease: "expo.out",
      },
      ">0"
    )
    .from(
      "[hero-stagger]",
      {
        duration: 0.2,
        opacity: 0,
        yPercent: -100,
        stagger: { amount: 0.3 },
        ease: "expo.inOut",
      },
      ">0.2"
    )
});
// Avoid flash of unstyled content
gsap.set("[text-split]", { opacity: 1 });

let scrollTl = gsap.timeline({});

$(document).ready(function () {
  scrollTl
    .to("[banner]", {
      width: "8rem",
      scrollTrigger: {
        trigger: ".location_section",
        start: "bottom bottom",
        scrub: true,
      },
    })
});
console.clear();

const can = $("[bob]");

const randomX = random(10, 15);
const randomY = random(10, 15);
const randomDelay = random(0, 3);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);

TweenLite.set(can, {
  x: randomX(-1),
  y: randomX(1),
  rotation: randomAngle(-1),
});

moveX(can, 1);
moveY(can, -1);
rotate(can, 1);

function rotate(target, direction) {
  TweenLite.to(target, randomTime2(), {
    rotation: randomAngle(direction),
     delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  });
}

function moveX(target, direction) {
  TweenLite.to(target, randomTime(), {
    x: random([0, 100]),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  });
}

function moveY(target, direction) {
  TweenLite.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
//On Mouse Hover, change color
// $('[mouse-hover]').hover(function () {
//     gsap.to(this, {
//         color: "#ff6b00",
//         scale: 1.1,
//         duration: 0.2,
//         ease: "expo.inOut",
//         stagger: { amount: 0.3},
//         onmouseleave: function () {
//             gsap.reverse(this);
//         }
//     })
// });
ScrollTrigger.matchMedia({
  "(min-width: 991px)": function () {
    let tlB = gsap.timeline({
        scrollTrigger: {
          trigger: ".page-wrapper",
          start: "top 0%",
          end: "top 5%",
          toggleActions: "restart none none reverse",
          markers: false,
          scrub: 1,
        },
      })

      .to("[minnesota]", { y: "10%" }, 0)
      .to("[top-block]", { y: "5svh" }, 0)
      .to("[mid-block]", { y: "6svh" }, 0)
      .to("[bot-block]", { y: "5svh" }, 0)
      .to("[bob]", { y: "-1svh" }, 0);
  },

  // TABLET AND BELOW ANIMATION
  "(max-width: 991px)": function () {
    let tlB = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top 0%",
          end: "bottom 15%",
          toggleActions: "restart none none reverse",
          markers: false,
          scrub: 1,
        },
      })

      .to("[minnesota]", { y: "10%" }, 0)
      .to("[top-block]", { y: "5svh" }, 0)
      .to("[mid-block]", { y: "6svh" }, 0)
      .to("[bot-block]", { y: "5svh" }, 0);
  },
});
$(document).ready(function () {
  

  $(".tickets-item").each(function (index) {
    let ticketItem = $(this);
    let fillSvg = $(this).find(".fill-svg");
    let tixImg = $(this).find(".tiximage_wrap");
    let tixBadge = $(this).find(".tix_badge");
    
      gsap.matchMedia().add("(min-width: 992px)", () => {
        
        let tlTix = gsap.timeline({ paused: true, defaults: { duration: 0.2 } });
        
        tlTix.fromTo(ticketItem, 
        { 
          top: "6rem",
          color: "#d3ea8e",
          backgroundColor: "#1a3c35",
          duration: 0.3,
          ease: "expo.inOut",
        }, { 
          top: "0rem",
          color: "#193c35",
          backgroundColor: "#eee6d6", 
        }, "<")
        tlTix.fromTo(fillSvg, { fill: "" }, { fill: "currentColor", color: "#b6ad9c" }, "<");
        tlTix.fromTo(tixImg, { opacity: 0, duration: 0.3, }, { opacity: 1, }, "<");
        tlTix.fromTo(tixBadge, { opacity: 0, duration: 0.3, }, { opacity: 1, }, "<");

        $(this).on("mouseenter", function () {
          tlTix.timeScale(1);
          tlTix.play();
        });
        $(this).on("mouseleave", function () {
          tlTix.timeScale(2);
          tlTix.reverse();
        });
      });
  });
});
