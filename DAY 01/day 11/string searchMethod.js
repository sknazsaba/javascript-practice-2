document.getElementById("demo").innerHTML = "Azhar";
let str = "Apple , Banana , Kiwi,Banana";
const bananaIndex = str.indexOf("Banana", 15);
console.log("position", bananaIndex);
const newstring = str.slice(bananaIndex);
console.log("New string after slice", newstring);
const searchIndex = str.search("Banana");
console.log("search method Index", searchIndex);
let text2 = "The RAIN in spain stays mainly in the plain";
const matchReturnvalue = text2.match(/ain/gi);
console.log("returned value", matchReturnvalue);
let text = "Hello world, welcome to the universe";
const includesReturnvalue = text.includes("world");
console.log("includesReturnvalue", includesReturnvalue);

