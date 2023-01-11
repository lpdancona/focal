// const args = process.argv;
// delete args[1];
// delete args[0];
// console.log(args);
// let y = args[2];
// let x = args[3];
// console.log(+y + +x);

const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Error, please enter more than two values");
  process.exit();
}
console.log("args", args);
// for loop
// for (let i = 0; i < args.length; i++){}
// for of
let total = 0;
for (let arg of args) {
  // convert the arg into a number
  // edge case:if any argument is not a hole number skip it
  if (Number.isInteger(Number(arg))) {
    total += Number(arg);
    // edge case: if any argument is not a nuber, output an error message

    console.log("arg", arg, "type of arg", typeof arg);
  }
  if (isNaN(Number(arg))) {
    console.log("Error, please enter only numbers");
    // stop the execution of the script
    // return; //output the value of a function, side effect: stop the function execurion
    process.exit();
  }
}
console.log("Total", total);
