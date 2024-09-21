gsap.to("#circle", {
    // ye code circle ko 0 degree pe leke aayega irrespective of the current position
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})

var active = 3;
var mncircles = document.querySelectorAll(".mncircle",) //isse all circles ye var(arr) mai store ho jayege
var sec = document.querySelectorAll(".sec",) //isse all circles ye var(arr) mai store ho jayege
gsap.to(mncircles[active-1], {
    opacity: .9
})
gsap.to(sec[active-1], {
    opacity: .9
    
})

//for each arry ke har element pe kuch tho operation karega 
//yaha pe click karne pe 
mncircles.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#circle",{
            rotate: (3-(index+1))*10
        })
        greyout();
        gsap.to(this, {
            opacity: .9
        })
        gsap.to(sec[index], {
            opacity: .9
        })
    })
})
function greyout(){
    gsap.to(mncircles,{
        opacity: .3
    })
    gsap.to(sec,{
        opacity: .3
    })
}