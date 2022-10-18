//JS is single thread synchronous means single and one line will be executed then only other line will be executed
//Stack is call stack or execution stack
//data members are execution context
//Execution context is where every variable of codes are present
//When we call a function new execution context is created
//First one is global execution context for this we don't have to call function It will be for main file
//phase 1:memory allocation
//phase 2:code execution

//var a=18 var b=12
//phase1:a:undefined b:undefined
//in execution phase
//in phase 1:a=18 and b=12

var i = 10;
var j = 15;
function sum(a, b) {
  var c = a + b;
  return c;
}
var result = sum(i, j);
_ | _GEC, SUM;
//Global execution context
//phase 1
//i undef
//j undef
//sum code
//result :undefined
//execution phase
//phase1
//i=10
//j=15
//sum:code

//sum
//sum global execution context
//phase1 a,b,c undefined
//execution phase:a:10 b=15 c:25
//phase2:a+b return c
//after function is executed completely the global execution context of sum is over

var i = 10;
var j = 15;
console.log("First Console Log");
function sum(a, b) {
  console.log("Printing");
  var c = a + b;
  return c;
}
var result = sum(i, j);

//GEC
//phase1
//i:undefined
//j:undefined
//sum:code
//result:undefined _
//   |_GEC,ConsoleGEC(REMOVED),SUMGEC
//Execution phase
//i:10
//j:15
//Execution context for console.log

//SUM EXECUTION CONTEXT
//phase1
//a:undefined
//b:undefined
//c:undefined
//Execution phase
//a:10
//b:15
//console.log GEC(Removed)
//c:25
//GEC of sum is over as return statement is called

//Asynchronous is multitasking inshort
