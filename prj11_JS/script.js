var rect = document.querySelector("#center");       //ye single element ko select karta hai (id hai so #id_name use kiya hu)
rect.addEventListener("mousemove",function(details){       /* mousemove event hai, mouse move hone par iske ander ha function execute hoga */
    // console.log("hello ");
    let rect_loc = rect.getBoundingClientRect();        /* gives details about position of rectangle  */
    // console.log(rect_loc);
    // console.log(details);   /* gets details of mouse point Loction, inside rectangle and screen position too */

    let mouse_loc_inside_rect = details.clientX - rect_loc.left ;   /* mouse ka location(pixel based) inside rectangle */
    // console.log("mouse_loc: "+mouse_loc_inside_rect);


    if(mouse_loc_inside_rect < rect.clientWidth/2){
       var redclr =  gsap.utils.mapRange(0, rect.clientWidth/2, 255, 0, mouse_loc_inside_rect); /* THIS WILL MAP 0(X CO-ORDINATE) TO 255(RGB RED CODE) AND CLIENT_MID_WIDTH TO 0(RGB RED CODE) */
       /* GSAP.UTILS.MAPRANGE(MIN_INPUT, MAX_INPUT, MIN_OUTPUT, MAX_OUTPUT, CURRENT_MOUSE,LOC_(INSIDE RECT)) */
       gsap.to(rect,{
        backgroundColor:`rgb(${redclr},0,0)`,
        ease: Power4
       });
       /* GSAP.TO(KISKO_APPLY_KARNA_HAI,{
            //KYA APPLY KARNA HAI ?
        }) */
    }
    else{
        let blueclr = gsap.utils.mapRange(rect.clientWidth/2, rect.clientWidth, 0, 255, mouse_loc_inside_rect);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueclr})`,
            ease:Power4
        });
        console.log(blueclr);

    }

})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor: "white"
    })
})
var btn = document.querySelector("button");
btn.addEventListener("click",function(){
    console.log("clickeddd");
    let hint_txt = document.querySelector("h1");
    hint_txt.innerHTML="hover over the rectangle";
}) 