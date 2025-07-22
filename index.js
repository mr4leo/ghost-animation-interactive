const faceBtn = document.querySelector(".face")
const mouthBtn = document.querySelector(".mouth")
const heartBtn = document.querySelector(".heart")
const armBtn = document.querySelector(".arm")
const leftFieldBtn = document.querySelector(".left-field")
const rightFieldBtn = document.querySelector(".right-field")
const lateralMove = document.querySelector(".ghost-lateral-move")
const coverUp = document.querySelector(".cover-up")
 

let smile = "closed"
faceBtn.addEventListener("click", function() {
    console.log("Face clicked");
    faceBtn.classList.toggle("face-state2");

    if (smile === "closed") {
        mouthBtn.src="images/Mouth - Open Tongue.png"
        smile = "open"
    } else {
        mouthBtn.src="images/Mouth - Closed.png"
        smile = "closed"
    }
})

heartBtn.addEventListener("click", function(){
    console.log("Heart clicked")
    heartBtn.classList.remove("heart-state2"); 
    void heartBtn.offsetWidth
    heartBtn.classList.add("heart-state2")

}
)

armBtn.addEventListener("click", function(){
    console.log("Arm clicked")
    armBtn.classList.remove("arm-state2")
    void armBtn.offsetWidth
    armBtn.classList.add("arm-state2")
}
)

leftFieldBtn.addEventListener("click", function(){
    console.log("Left field clicked")
    lateralMove.classList.remove("ghost-move-left")
    lateralMove.classList.remove("ghost-move-right")
    void lateralMove.offsetWidth
    lateralMove.classList.add("ghost-move-left")
    console.log(lateralMove)
}
)

rightFieldBtn.addEventListener("click", function(){
    console.log("Right field clicked")
    lateralMove.classList.remove("ghost-move-right")
    lateralMove.classList.remove("ghost-move-left")
    void lateralMove.offsetWidth
    lateralMove.classList.add("ghost-move-right")

    // coverUp.classList.remove("cover-up-state2")
    // void coverUp.offsetWidth
    // coverUp.classList.add("cover-up-state2")

    console.log(lateralMove)
        console.log(coverUp)
}
)



