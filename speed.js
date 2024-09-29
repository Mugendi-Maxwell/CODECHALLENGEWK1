function demerits(speed) {
    //declares the maximum speed and sets demerits per unit.
    const maxSpeed = 70;
    const demerit = 5;

    if (speed <= maxSpeed) {
        console.log("Ok");
    } else {
        //evaluates the demeritpoints by using this math equation  
        const demeritPoints = Math.floor((speed - maxSpeed) / demerit);
        console.log(`Points: ${demeritPoints}`);
        
        
        if (demeritpoints > 12) {
            console.log("License suspended");
        }
    }
}

//supposed to input the car speed to be evaluated
const speed = parseInt(prompt("Enter the speed of the car. "));
checkSpeed(speed);
