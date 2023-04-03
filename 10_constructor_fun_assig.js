
var count = 0;
function print() {
    console.log(`==============================${count++}============================`);
}

function bank(bankName , location , ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode; 
    this.branchCode = branchCode;
    this.bankDetail = function() {
        console.log( `BANK NAME ${bankName} LOCATION :- ${location} IFASCODE :- ${ifscCode} BRANCHCODE:- ${branchCode}`);
        print();
    };

}
print()

const sbiBank = new bank("SBI BANK", " NAGPUR" , "BHGF4547896" , 1254);
sbiBank.bankDetail();

const mahBank = new bank("MAHARASHTRA BANK", "PUNE" , "MAHA0547896" , 5879);
mahBank.bankDetail();

const axisBank = new bank("AXIS BANK", "DELHI" , "AXIS45879096" , 1111);
axisBank.bankDetail();

const yesBank = new bank("YES BANK", "BANGLOR" , "YES77777896" , 9999);
yesBank.bankDetail();

bank.prototype.openTime = "9.00 AM IST";
bank.prototype.closeTime = "6.00 PM IST";

console.log(`BANK NAME :- ${yesBank.bankName} OPENING TIME IS AT :- ${yesBank.openTime} CLOSING TIME IS AT :- ${yesBank.closeTime}`);
print();
console.log(`BANK NAME :- ${axisBank.bankName} OPENING TIME IS AT :- ${yesBank.openTime} CLOSING TIME IS AT :- ${yesBank.closeTime}`);
print();
console.log(`BANK NAME :- ${mahBank.bankName} OPENING TIME IS AT :- ${yesBank.openTime} CLOSING TIME IS AT :- ${yesBank.closeTime}`);
print();
console.log(`BANK NAME :- ${sbiBank.bankName} BRANCH CODE ;_ ${sbiBank.branchCode} OPENING TIME IS AT :- ${yesBank.openTime} CLOSING TIME IS AT :- ${yesBank.closeTime}`);
print();
print();
bank.prototype.foundIN =1956;
bank.prototype.foundIN = 55;
console.log(sbiBank.__proto__);