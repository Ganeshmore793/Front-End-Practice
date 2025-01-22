/*for(let i=0;i<=10;i++){       basic program for loop
    console.log(i);
}
    */


// for(let i=2;i<=20;i++){


//     if(i%2===0){
//         console.log(i);
//     }

// }    Even  numbers between 1 to 20


//find sum of 1 to n 
// let number=10;
// let sum=0;
// for(let i=1;i<=number;i++){
//  sum=sum+i;
// }

// console.log(sum);

// //for of loop
// let str="Ganesh";
// let cha='a';
// let cha2='e';
// let cha3='i';
// let cha4='o';
// let cha5='u';
// let count=0;
// for(let i of str){
//     if(i===cha || i===cha2 || i===cha3 || i===cha4 || i===cha5){
//        count++;
//     }
   
// }
// console.log(count); 

//for in loop

// let student={
//     name:"ganesh",
//      age:21,
//      CGPA:8.33,
//      isPass:true
// }

// for (let i in student){
//     console.log("Key=", i ,"value=", student[i]);
// }


//Practice Questions 

//Even  numbers between 1 to 100

// let number=100;
 
// for(let i=1;i<=number;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Number guissing Game 

// let gameNum=24;
// let userNum=prompt("Guiss the number");
// while(userNum != gameNum){
//     userNum=prompt("You entered wrong number please guiss again");
// }

// console.log("Congractulations you are win");


// let name=prompt("Enter first and last name");

// let userName="@"+name;

// if(userName!=name){
//      name=prompt("Please enter name start with @");
// }

// console.log(userName+userName.length);

//Arrays 

// let arr=[89,90,89,87,65];
// let sum=0
// for(let i=0;i<arr.length;i++){
//      sum=sum+arr[i];
// }

// let avg=sum/arr.length;

// console.log("Average of students is  "+avg );
 

// let marks=[89,87,98,98,78];
// let sum=0;

// for(let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(`average is  ${avg} `);


// let price=[300,400,500,600,700];

// for(let i=0;i<price.length;i++){

 //    console.log(price[i]);
//     let val1=price[i]/10;
//     let val2=price[i]-val1;

//     price[i]=val2

//     console.log(price[i]);
// }


// let arr=["BloomBerg","Microsoft","Uber","Google","IBM","Netflix"];

// //arr.shift();

// //arr.splice(2,1,"Ola");
// //arr.push("Amazon");
// console.log(arr);
