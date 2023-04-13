const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
const evenNumbers = [];

for (let index = 0; index < arrayNumbers.length; index++) {
  if (arrayNumbers[index] % 2 === 0) {
    evenNumbers.push(arrayNumbers[index]);
  }
}

// console.log("Even numbers in the array: ", evenNumbers);

// const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
// let evenSum = 0;

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }



// for (let i = 0; i < arrayNumbers.length; i++) {
//   if (arrayNumbers[i] % 2 === 0) { // check if the number is even
//     evenSum += arrayNumbers[i]; // add the even number to the sum
//   }
// }

// console.log("The sum of even numbers in the array is: " + evenSum);


// const arrayNumbersh = ["ajdgjas", "jhgdsj", "asyudgtasyd"];
// let hh = "";
// let vv = "";
// for (let index = 0; index < 1; index++) {
//    hh = arrayNumbersh[index];
//   console.log(hh);
// }

// for (let index = 0; index < hh.length; index++) {
//   if (index == 1) {
//     vv = hh[index];
//     console.log(vv);
//     break ;
//   }
//   // const vv = hh[index];
  
// }
// let hh = "jhgdsj";
// for(let i=0; i<hh.length; i++){
//   if(i === 1){
//     console.log(hh[i]); // Output: h
//     break;
//   }
// }



// for(let i=0; i<hh.length; i++){
//   if(i === 1){
//     vv = hh[i]
//     console.log(vv);
//     // console.log(hh[i]); // Output: h
//     break;
//   }
// }

// class Person {
//   constructor(name ,age ,group ,classNo,teacher){
// this.name = name;
// this.age = age ;
// this.group = group;
// this.classNo = classNo;
// this.teacher = teacher;
// this.greet = function(){
// console.log(`hello ${name} your age is ${age}`);
// }
//   }
// }

// const student1 = new Person("aditya", 23,"b+","A1",401,"Aparna");
// console.log(student1);

// student1.greet.hh = 568;
// console.log(student1);


// const student = {
//   firstName: 'Monica'
// }

// // // getting property
// // Object.defineProperty(student, "getName", {
// //   get : function () {
// //       return this.firstName;
// //   }
// // });

// // // setting property
// // Object.defineProperty(student, "changeName", {
// //   set : function (value) {
// //       this.firstName = value;
// //   }
// //   student.firstName = "hh";

// // });
// // console.log(student.firstName);

// // function fabonici(params) {
// //     let first = 1;
// //     let second = 0;
// //     let next = 0;
// // for (let index = 1; index <= params ; index++) {
// //     console.log(first);
// // next = first + second;
// // first = second;
// // second =next;  
// // }
// // }
// // // fabonici(9);
// // var hh =;
// // if (hh % 2 == 1) {
// //     console.log(`it is a prime number`);
// // }else{
// //     console.log(`it ia not a prime number`);
// // }
//     // Corner case
//         if (n <= 1)
//             return false;
  
//         // Check from 2 to n-1
//         for (let i = 2; i < n; i++)
//             if (n % i == 0)
    //             return false;
  
    //     return true;
    // // }



    function isPrime(n) {
        if (n <= 1)
            return false;
        for (let i = 2; i < n; i++)
            if (n % i == 0)
                return false;
  
        return true;
    }
    isPrime(11);
    console.log(isPrime);