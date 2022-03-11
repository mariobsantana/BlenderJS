let blenderStatus = "off";

const blenderButton =() => {
    if (blenderStatus == "off") {
        blenderStatus = "on";
        console.log("Blender is on");
    } else {
        blenderStatus = "off";
        console.log("Blender is off");
    }
}