// Code your solution in this file!

function distanceFromHqInBlocks(){
  return 1;
}
function distanceFromHqInBlocks(){
  return 8;
}
const HQ_LOCATION = 42; 

function distanceFromHqInBlocks(location) {
  return Math.abs(location - HQ_LOCATION);
}

function distanceFromHqInFeet(location) {
  const blocks = distanceFromHqInBlocks(location);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  const feetPerBlock = 264;
  return Math.abs(destination - start) * feetPerBlock;
}



function calculatesFarePrice (start, destination){
let price = distanceTravelledInFeet(start, destination)
if(price < 400){
return 0;
} else if(price > 400 && price < 2000){
return ((price - 400) *2)/ 100;
} else if (price > 2000 && price < 2500){
  return 25
} else {
  return 'cannot travel that far';
}
}