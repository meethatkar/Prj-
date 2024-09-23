var tl = gsap.timeline({    /* IDHAR TIMELINE KA SAB FUNCTION TL MAI STORE HO GAYA, SO NOW WE CAN USE TL AS TIMELINE */
    repeat:-1       /*UNLIMITED TIMES REPEAT HOGA  */
});   
/* YE CURRENT GSAP METHOD KO EXECUTE KAREGI THEN VUSKE NEXT METHOD KO AND THEN VUSKE NEXT METHOD KO TILL END 
FOR EG: IDHAR 3 METHOD HAISO 1ST METHOD IMG LODAING VALA  EXECUTE HOGA THEN TEXT LOADING VALA HOGA THEN TEXT CLOSING VALA HOGA*/

tl.to(".imgcontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    duration:2,
    stagger:2,
},'common')
/* IDHAR 'COMMON' EK ARG HAI JHO, CURRENT METHOD KO RUN KARNEKE BAAD, JISMAI YE SAME ARG HOGA VUSSE EXECUTE*/

.to("#lefttext h1",{        /* timeline aur common arg ke help se next ye run hoga */
    ease:Expo.easeInOut,
    duration:2,
    left:"0%",
    stagger:2,
},'common')

.to("#lefttext h1",{    /* timeline aur common arg ke help se vuske next ye run hoga */
    delay:2,
    ease:Expo.easeInOut,
    duration:2,
    left:"-97%",
    stagger:2,
},'common')

// .to("#lefttext h1",{
//     ease:Expo.easeInOut,
//     top:"-100%",
//     duration:2,
//     stagger:2,
// },'common')
// .to("#lefttext h1",{
//     delay:2,
//     ease:Expo.easeInOut,
//     top:0,
//     duration:2,
//     stagger:2,
// },'common')

// gsap.to(".text h1",{
//     ease:Expo.easeInOut,
//     top:0,
//     duration:2,
//     stagger:2,
// },'common')

// gsap.to(".text h1",{
//     delay:2,
//     ease:Expo.easeInOut,
//     stagger:2,
//     top:"-100%",
// },'common')

