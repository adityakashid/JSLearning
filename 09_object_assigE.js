const sbiBank = {
  bankName: "STATE BANK OF INDIA",
  location: "MUMBAI",
  accountNo: 201548622156,
  ifsc: "BKID254687",
  showdetails: function () {
    console.log(`bankName :  ${this.bankName},
    location :${this.location}
    accountNo :${this.accountNo} 
    ifsc :${this.ifsc} `);
  },
};

const axisBank = {
  bankName: "AXIS BANK INDIA",
  location: "PUNE",
  accountNo: 99854785216,
  ifsc: "SDFE546849",
  customer: {
    acountName: "aditya kashid",
    age: 23,
    accountNumber: 45987453234,
    address: "KHADSE LAY OUT WARDHA",
  },
  loneName: ["EDUCATION", "HomeLone", "car lone"],

  show: function () {
    console.log(`I am normal show functiom`);
  },
  customerDetails: function () {
    this.customer;
  },
  showdetails: function () {
    console.log(`bankName :  ${this.bankName},
        location :${this.location}
        accountNo :${this.accountNo} 
        ifsc :${this.ifsc} `);
  },
};

axisBank.show(); // Invoke function

const hdfcBank = {
  bankName: "HDFC BANK INDIA",
  location: "INDORE",
  accountNo: 89457623545,
  ifsc: "HGFDS459872",
  showdetails: function () {
    console.log(`bankName :  ${this.bankName},
        location :${this.location}
        accountNo :${this.accountNo} 
        ifsc :${this.ifsc} `);
  },
};

const yesBank = {
  bankName: "YES BANK INDIA ",
  location: "NAGPUR",
  accountNo: 666648622156,
  ifsc: "KJHUD254687",
  showdetails: function () {
    console.log(`bankName :  ${this.bankName},
        location :${this.location}
        accountNo :${this.accountNo} 
        ifsc :${this.ifsc} `);
  },
};
sbiBank.showdetails();
yesBank.showdetails();
axisBank.showdetails();
hdfcBank.showdetails();

