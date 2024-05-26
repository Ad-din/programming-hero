//////--> Set timeout function

const a=10;
const b=20;
const c=30;
console.log(a);
setTimeout(() => {
    console.log('after b');
}, 3000);//If we put without time it will show input after all execution is done.
console.log(b);
console.log(c);

//->set Interval
  let seconds=0;
//  setInterval(() => {
//     seconds++;
//     console.log(seconds);
//  }, 1000);
//  console.log('seconds');
 //set intervals has a terminating value, which it returns from the setInterval function.

 const stopVal=setInterval(() => {
    console.log(seconds++);
    if (seconds>10) {
        clearInterval(stopVal);
    }
 }, 1000);