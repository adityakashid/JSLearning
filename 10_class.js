class Bank{
    bankName
    location
    account
    ifsc 
    intrestRate

    constructor(bankName , location ,account ,ifsc ,intrestRate) {
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.intrestRate = intrestRate;
    }

}

const sbiBank = new Bank("SBI Bank" ,"Wakad",36546536463,"SBIK465653", 10.2);
console.log(sbiBank);
const axisBank = new Bank("Axis bank" ,"Bajirao road" , 4635333556 , "AJSJ3543543", 12.5);
console.log(axisBank);
const hdfcBank = new Bank("HDFC bank" ,"WARDHA road" , 6876889333556 , "HUYJ3543543", 12.5);
console.log(hdfcBank);