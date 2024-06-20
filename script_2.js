var tl = gsap.timeline()


tl.from("#nav", {
    opacity: 0,
    delay: 0.3,
})
tl.from("#nav h1, #nav h4, #nav h3", {
    y: -80,
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    stagger: 0.3,
})

tl.from("#left h1 ", {
    x: -500,
    opacity: 0,
    duration: 0.45,
    stagger: 0.5,
    
})

tl.from("#right img", {
    scale: 2,
    opacity: 0,
    duration: 0.45,
})

gsap.from("#page2 .box",{
    opacity:0,
    duration:1,
    scale:0,
    stagger:0.3,
    markers:true,
    start: "top 70%",
    scrollTrigger:{
        trigger:"page2.box",
        scroller:"body",
    },
    scrub:5
})
