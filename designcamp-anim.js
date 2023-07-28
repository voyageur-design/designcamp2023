var Webflow = Webflow || [];
Webflow.push(function () {
    let typeSplit = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
    });
    let tload = gsap.timeline();
    tload.to("#preload-animation", {
        delay: 2,
        duration: 0.2,
        scale: 0,
    })
        .to("#preloader", {
            height: 0,
            duration: .5,
            ease: "expo.inOut",
        })
        .to("#preloader", {
            display: "none",
        })
        .from($("[words-slide-up]").find(".word"), { 
            opacity: 0, 
            yPercent: 100, 
            duration: 0.2, 
            ease: "back.out(2)", 
            stagger: { amount: 0.3},
            }, ">0.01")
        .from("[scale-in]", {
            duration: 0.5,
            opacity: 0,
            scale: 0,
            ease: "expo.out",
        }, ">0")
        .from("[hero-stagger]", {
            duration: 0.2,
            opacity: 0,
            yPercent: -100,
            stagger: { amount: 0.3},
            ease: "expo.inOut",
        }, ">0.2")
        .from(".logo_banner", {
            duration: 0.3,
            opacity: 0,
            yPercent: -110,
            ease: "expo.inOut",
        }, ">")
});

gsap.from("#location", {
    scale: 0.5,
    opacity: 0,
    borderRadius: "100rem",
    ease: "expo.inOut",
    scrollTrigger: {
        trigger: ".location_section",
        start: 'top bottom',
        end: 'top top',
        scrub: true,
      },
});
// Avoid flash of unstyled content
gsap.set("[text-split]", { opacity: 1 });

let scrollTl = gsap.timeline({})

$(document).ready(function () {
    scrollTl.to(".logo_banner", {
        width: "8rem",
        ease: "expo.inOut",
        scrollTrigger: {
            trigger: ".location_section",
            start: 'top bottom',
            scrub: true,
          },
    },)
    .from(".header", {
        height: "0rem",
        ease: "expo.inOut",
        duration: 0.2,
        scrollTrigger: {
            trigger: ".hero",
            start: 'center bottom',
            scrub: true,
          },
    })
    .from(".header-container", {
        display: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: 'center bottom',
            scrub: true,
          },
    })
    .from(".header-container", {
        delay: 0.05,
        opacity: 0,
        yPercent: -100,
        scrollTrigger: {
            trigger: ".hero",
            start: 'bottom bottom',
            scrub: true,
          },
    }, ">")
});
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