//Requirements
//-Take 2 numbers from the command line
//-Add the two numbers together
//-Print the output to the console.

//sliced = process.argv.slice(2);
//Removes the first two elements which aren't numbers

var args = process.argv;
args = Number(args[2]) + Number(args[3]);
console.log(args);
