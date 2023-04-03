function print() {
  console.log(
    `================================NEXT QUESTION ==============================`
  );
}
print();

const bankSbi = {
  bankname: "sbiBank",
  ifscCode: "BKIS214562",
  pin: 442001,
  adress: "khadse lay our-arvi naka bachelor road wardha",
};

const bankLocation = {
  street: "Street NO 56 karve nager pune ",
  city: "PUNE",
  pinCode: 4456789,
};
print();
let cloneBankSbi = bankSbi;
console.log("CLONE OF BANK SBI WITH THE (=) ASSIGN() METHOD", cloneBankSbi);

let cloneBankLocation = bankLocation;
console.log(
  "CLONE OF BANK LOCATION WITH THE (=) ASSIGN() METHOD",
  cloneBankLocation
);
print();

console.log();
const spreadCloneBankName = { ...bankSbi };
console.log("CLONE OF BANK SBI WITH THE SPREAD METHOD", spreadCloneBankName);

const spreadCloneBankLocation = { ...bankLocation };
console.log(
  "CLONE OF BANK LOCATION WITH THE SPREAD METHOD",
  spreadCloneBankLocation
);
print();

const rateOfIntreast = {
  homeLoanInterest: "5.5 %",
  personalLoanIntrest: "11.2%",
  dueIntrest: "7.1 % ",
};

// FIRST METHOD TO DO  
const sbiDetails = Object.assign(bankSbi,bankLocation,rateOfIntreast);
console.log(typeof sbiDetails);
//SECOND METHOD TO DOP
// const sbiDetails ={};
// Object.assign(sbiDetails,bankSbi,bankLocation,rateOfIntreast)
// console.log("WE MERGE THE ALL OBJECT WHICH WE CREATED IN ABOVE PROGRAM ",sbiDetails);

print();
console.log(`"we travers all the element of object sbiDetail with the help of For in loop"`);
for (const key in sbiDetails) {
  if (Object.hasOwnProperty.call(sbiDetails, key)) {
    const element = sbiDetails[key];
    console.log(element);
  }
}
