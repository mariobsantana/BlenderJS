let blenderStatus = "off";
let blender = document.getElementById("blender");
let blenderSound = document.getElementById("blenderSound");
let buttonSound = document.getElementById("buttonSound");


const blenderButton =() => {
    if (blenderStatus == "off") {
        blenderStatus = "on";
        blender.classList.add("blender-On");
        brrrbrbrrr();
        /* console.log("Blender is on"); */
    } else {
        blenderStatus = "off";
        blender.classList.remove("blender-On");
        brrrbrbrrr();
        /* console.log("Blender is off"); */
    }
}

const brrrbrbrrr = () => {
    if (blenderSound.paused) {
        buttonSound.play();
        blenderSound.play();
    } else {
        buttonSound.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}