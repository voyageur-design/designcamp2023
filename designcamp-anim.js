var Webflow = Webflow || [];
Webflow.push(function () {
    let tload = gsap.timeline();
    tload.to("#preload-animation", {
        delay: 2,
        duration: 0.2,
        scale: 0,
    })
        .to("#preloader", {
            height: 0,
            duration: 1,
            ease: "expo.inOut",

        })

        .to("#preloader", {
            display: "none",
        })

        .from(".logo_banner", {
            duration: 0.5,
            opacity: 0,
            yPercent: -110,
            ease: "expo.inOut",
        }, ">")
        
        .from("[anim=slideIn-right]", {
            opacity: 0,
            xPercent: -50,
            stagger: 0.2,
            ease: "expo.inOut",
        }, ">")
        .to(".logo_banner", {
            width: "8rem",
            ease: "expo.inOut",
            scrollTrigger: {
                trigger: ".location_section",
                start: 'top bottom',
                scrub: true,
              },
        })
        .from(".header", {
            height: "0rem",
            ease: "expo.inOut",
            duration: 0.2,
            scrollTrigger: {
                trigger: ".location_section",
                start: 'top bottom',
                end: 'top top',
                scrub: true,
              },
        })
        .from(".header-container", {
            display: "none",
            scrollTrigger: {
                trigger: ".location_section",
                start: 'top center',
                scrub: true,
              },
        })
        .from(".header-container", {
            delay: 0.05,
            opacity: 0,
            yPercent: -100,
            scrollTrigger: {
                trigger: ".location_section",
                start: 'top center',
                scrub: true,
              },
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
})
