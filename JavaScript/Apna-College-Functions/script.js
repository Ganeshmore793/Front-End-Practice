// function vowels(str){

//     let str2=str.toLowerCase();

//   let count=0;
  
//    for(let i=0;i<=str2.length;i++){
//         if(str2[i]=="a"||str2[i]=="e"||str2[i]=="i"||str2[i]=="o"||str2[i]=="u"){
//             console.log(str2[i]);
//             count++;
//     }

//    }
//    console.log(count);
// }

// vowels("GAnesh");

// const arrowVowels=(str)=>{
//    let str2=str.toLowerCase();
//    let count=0;

//    for(let i=0;i<=str2.length;i++){
//     if(str2[i]=="a"||str2[i]=="e"||str2[i]=="i"||str2[i]=="o"||str2[i]=="u"){
//                    console.log(str2[i])
//                    count++;
//    }

//    }
//    console.log(count);
//    }

//    arrowVowels("AjaY");

//use for each loop for callBackFunction(that is function passesd as an argument inside another function)
// let arr=[10,23,23,12];
// arr.forEach(function printVal(val) {
//     console.log(val)
// });

//using arrow function
// let arr=[32,43,23,22];
// arr.forEach((val)=>{
//     console.log(val);
// })

//for Each loop
//we have to use for each loop with arrow function here val ind and arr is optional.
// let arr=[56,76,87,66,45];

// arr.forEach((val,ind,arr)=>{
//     console.log(val,ind,arr);
// });


// let num=[2,4,6,8,10];

// num.forEach((val)=>{
//     let sqr=val*val;
//     console.log(`the square of each number in array is  ${sqr}`);
// })

//

// let marks=[40,67,87,98,99];

// marks.map((val)=>{
//     if(val>90){
//         console.log(val); 
//     }
// });

// let num=prompt("Enter any number");

// let arr=[];

// for(let i=1;i<=num;i++){
//     arr[i-1]=i;
// }
// const sum=arr.reduce((prev,curr)=>{
//     return prev+curr;
// });
// console.log("Addition of numbers is "+sum);

// const mul=arr.reduce((prev,curr)=>{
//     return prev*curr;

// });
// console.log("factorial of numbers is"+mul);


