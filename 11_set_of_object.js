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

const setOfObject = new Set();
setOfObject.add(axis_bank);
setOfObject.add(sbi_bank);
setOfObject.add(hdfc_bank);
setOfObject.add(kotak_bank);
setOfObject.add(panjab_bank);

for (const keys of setOfObject) {
    console.log(`BANK NAME :- ${keys.bankName}--------- LOCATION OF BANK :-${keys.location}`);
}