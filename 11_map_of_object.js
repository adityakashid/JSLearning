class Bank {
    constructor(bankName , location, account_no, ifsc, intrest_rate){
        this.bankName = bankName;
        this.location = location;
        this.account_no = account_no;
        this.ifsc = ifsc;
        this.intrest_rate = intrest_rate;
    
    }
}

const axis_bank = new Bank("AXIS BANK" ,"MUMBAI",444859723 ,"AXIS457892",6.7);
const sbi_bank = new Bank("SBI BANK" ,"NAGPUR",554859723 ,"ICIC457892",9.4);
const hdfc_bank = new Bank("HDFC BANK" ,"WARDHA",954859723 ,"HDFC457892",10.7);
const kotak_bank = new Bank("KOTAK BANK" ,"NASHIK",8854859723 ,"KOTAC557892",5.5);
const panjab_bank = new Bank("PANJAB BANK" ,"PANJAB",664859723 ,"JSHJ457892",8.5);

// console.log(yes_bank);

const setOfObject = new Map();
setOfObject.set("bankName",axis_bank);
setOfObject.set("bankName1",sbi_bank);
setOfObject.set("bankName2",hdfc_bank);
setOfObject.set("bankName3",kotak_bank);
setOfObject.set("bankName4",panjab_bank);

const keyOfMap = setOfObject.keys();
for (const keys of keyOfMap) {
    const element = setOfObject.get(keys);
    console.log(`NAME OF THE BANK :- ${element.bankName}--------- YOUR ACCOUNT NUMBER:- ${element.account_no}--------- AND THE RATE OF INTREST ON IT :-${element.intrest_rate}`);
}