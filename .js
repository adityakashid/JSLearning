class Vehicle {
    brand;
    model;
    topSpeed;
    mileage;
    brandOrigine;
    constructor(brand,model,topSpeed,mileage,brandOrigine) {
        this.brand = brand;
        this.model = model;
        this.topSpeed = topSpeed;
        this.mileage = mileage;
        this.brandOrigine = brandOrigine;
    }
}

const bmw = new Vehicle("BMW","MG350","255 km",11,"Germany");
console.log(bmw);
console.log(`********`);
const mercedes = new Vehicle("MERCEDES","S-CLASS","245 Km",8,"France");
console.log(mercedes);
const audi = new Vehicle("AUDI","A6","210 km",15,"Germany");
console.log(audi);
const tata = new Vehicle("TATA","NEXON","150 Km",22,"INDIA");
console.log(tata);
const mahindra = new Vehicle("MAHINDRA","THAR","190 Km",18,"INDIA");
console.log(mahindra);
const volvo = new Vehicle("VOLVO","XC90","225 Km",46,"USA");
console.log(volvo);

const arrayOfVehiscles=[bmw,mercedes, audi, tata,mahindra,volvo]
arrayOfVehiscles.forEach((car)=>{
    console.log(`The brand is ${car.brand}.`)
})
// console.log();

// second class 
console.log(`*****************************************`);

class College {
    constructor(name , address , branch , rating) {
        this.name = name;
        this.address = address;
        this.branch = branch;
        this.rating = rating;
    }
}

const raisoni = new College("RAISONI","WAGHOLI","IT",3.4);
console.log(raisoni);
const coep = new College("COLLEGE OF ENGINEERING PUNE","PUNE","CSE",4.5);
console.log(coep);
const iit = new College("INDIAN INSTUTE OF TECHNOLOGY","MADRAS","IT",5);
console.log(iit);
const vit = new College("VELLOR INSTUTE OF TECHNOLOGY","VELLOR","CIVEL",4.2);
console.log(vit);
function traverseObject(arg) {
    for (const key in arg) {
        if (arg.hasOwnProperty.call(arg, key)) {
            const element = arg[key];
            [console.log(`${key},${element}`)]
        }
    }
}
traverseObject(raisoni); 
console.log(`***************`);
traverseObject(coep);
console.log(`***************`);
traverseObject(iit);
console.log(`***************`);
traverseObject(vit);
console.log(`*****************************************`);

function gg(arg) {
    if (arg % 2 == 1 ) {
        console.log(`${arg} It is a prime number`);
    }else{
        console.log(`${arg} It is not a prime number`);
    }
}

gg(11);