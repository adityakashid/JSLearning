let h2Element = document.getElementsByTagName("h2");
console.log(h2Element[1].innerHTML);
h2Element[1].innerHTML = "My hobbie";

console.log(
  `=========== API IDSELECTOR() TO SELECT ELEMENT ID IT ONLY SELECT ONE ELEMENT ===========`
);

const elementProfile = document.getElementById("profile");
elementProfile.style.color = "darkviolet";
console.log(elementProfile.innerHTML);

console.log(
  `=========== API CLASS SELECTOR() TO SELECT ELEMENT CLASS ===========`
);

let elementLi = document.getElementsByClassName("liItem");
console.log(elementLi);

console.log(`=========== API QUERYSELECTOR() TO SELECT ELEMENT ID ===========`);

const elementQueryId = document.querySelector("#profile");
console.log(elementQueryId.innerHTML);

console.log(
  `=========== AND EXEMPLE OF CLASS BY QUER SELECTOR == IT WILL ONLY GIVE LAST ELEMENT =========== `
);

const elementQueryClass = document.querySelector(".liItem");
console.log(elementQueryClass.innerHTML);

console.log(
  ` ===========  queriSelectorAll() ==> I will retuen all the element fron the class =========== `
);

const allElement = document.querySelectorAll(".liItem");
allElement[3].innerHTML = "Oracle DataBase";
console.log(allElement[3]);

console.log("=========Chanaging the attribute of an element ========");

const elementMyProfile = document.querySelector("#myProfile");
elementMyProfile.setAttribute("href", " https://github.com/");
console.log(elementMyProfile);

console.log(`========changing the css properties =======`);
const elementTechStack = document.querySelector("#teckStack");
elementTechStack.style.color = "red";
elementTechStack.style.fontFamily = "Arial ";

console.log(`===========Remove Element ===========`);

const elementDivProject = document.querySelector("#divProject");
const elementProject = document.querySelector("#project");
elementDivProject.removeChild(elementProject);

console.log(`Assignment 1`);
const iif = document.querySelector("#if");
console.log(iif.innerHTML);
// const gg = document.querySelectorAll(".liItem")
const liElenemet = iif.getElementsByTagName("li")[1];
console.log(liElenemet.innerHTML);
iif.removeChild(liElenemet);

const elementDiv = document.querySelector("#divProject");
const elementP = document.createElement("p");
const elementText = document.createTextNode("Team size is : 7");
elementP.appendChild(elementText);
elementDiv.appendChild(elementP);

function show() {
  console.log(` Click evemt........... `);
}
const elementAddress = document.querySelector("#address");
elementAddress.addEventListener("click", () => {
  console.log("Listening click event .............");
  alert("you have click on address");
});
// elementAddress.addEventListener("mouseover",()=>{
//     console.log("YOU MOUSE OVER ON THE EVENT");
//     elementAddress.style.color="red";
// })

const IsEvenbutton = document.querySelector("#IsEvenbutton");
IsEvenbutton.addEventListener("click", () => {
  console.log(`button click`);
  let inputValue = prompt("please enter number to check", 0);
  if (inputValue == null || isNaN(inputValue)|| inputValue < 0) {
    alert(`Invalid number`);
  }else{
    const result = inputValue % 2 == 0 ? true : false;
  if (result) {
    alert(`${inputValue} :- it is the even number`);
  } else {
    alert(`${inputValue} :- it is odd number`);
  }
  }
});

//prime button

const isPrimeNumber = document.querySelector("#isPrimeButton");
isPrimeNumber.addEventListener("click", () => {
  const primenumber = prompt("Plese Enter the number");
  if (primenumber < 2) {
    alert("enter correct number");
  }
  const resultPrimeNumber = primenumber % 2 == 0;
});

const confirmElement = document.querySelector("#confirm");
confirmElement.addEventListener("click",() => {
    const result = confirm("confirm the information");
    console.log(result);
    //it will return in true aur false
})