let str="Aman";
let str4="Mishra";
let str7="Aman";
console.log(str);
//let newStr=str.toUpperCase(); another method for
//console.log(newStr);           changes in string

//UPPER CASE
str=str.toUpperCase();
console.log(str);

//LOWER CASE
str=str.toLowerCase();
console.log(str);

//TRIM , it removes starting and ending spaces
let str3="   My Name Is Aman       ";
console.log(str3.trim());

// CONCAT
str = str7.concat(str4);
console.log(str);
let res = "hello"+123;
console.log(res);


//SLICE , in this last one is not included
str=str7.slice(0,2);
console.log(str);
str=str7.slice(1);// it will slice till end!!
console.log(str);

//REPLACE
let str8 = "hello"
str8 =str8.replace("h","y");
console.log(str8);

//CHARAT
let str9 ="java";
console.log(str9.charAt(2));

