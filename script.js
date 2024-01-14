gsap.from("#nav2",{
    y:20,
    duration:2
})

gsap.from(".page1 .headlines h1",{
    opacity: 0,
    y:30,
    duration:1.5,

})
gsap.from("#page3-p",{
    y:20,
    opacity:0,
    duration:2.5,

})
gsap.from("#s-heading",{
    y:30,
    duration:1.5,
    scrollTrigger:{
        trigger:"#s-heading",
        scroll: "body",
        Start:"top 10%",
        scrub:2
    }
})


gsap.from(".page-5 .right h1",{
    y:30,
    duration:1.5
})
gsap.from(".page-5 .right h4",{
    y:20,
    duration:2
})