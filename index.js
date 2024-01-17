function distanceFromHqInBlocks(distance) {
//returns the number of blocks given a value
return Math.abs(distance - 42);
}

function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance); 
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
  // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
return blocks * 264;
  // the return value of distanceFromHqInBlocks can then be used to calculate feet
} 

function distanceTravelledInFeet(start, destination){
    //returns the number of feet travelled 
    const distance = Math.abs(start - destination);
    return distance * 264;
} 

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer 
    const distance = distanceTravelledInFeet(start, destination); 
    let fare; 

    if (distance <= 400) {
        fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        fare = 25;
    } else {
        fare = 'cannot travel that far'
    } 

    return fare;
} 

