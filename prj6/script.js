gsap.to(".imgcontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2,
})

gsap.to(".text h1",{
    ease:Expo.easeInOut,
    top:0,
    duration:2,
    stagger:2,
})

gsap.to(".text h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%",
})

gsap.to("#lefttext h1",{
    ease:Expo.easeInOut,
    duration:2,
    left:"0%",
    stagger:2,
})

gsap.to("#lefttext h1",{
    delay:2,
    ease:Expo.easeInOut,
    duration:2,
    left:"-97%",
    stagger:2,
})

// gsap.to("#lefttext h1",{
//     ease:Expo.easeInOut,
//     top:"-100%",
//     duration:2,
//     stagger:2,
// })
// gsap.to("#lefttext h1",{
//     delay:2,
//     ease:Expo.easeInOut,
//     top:0,
//     duration:2,
//     stagger:2,
// })