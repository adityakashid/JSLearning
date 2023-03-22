function factorialWordsCount(add) {
    
    let ff = "";
    let count = 0 ;
    let strat = 1;

    if (add == null || add >= "") {
        console.log(`Plese chech the string `);
        console.log(`****************************`);
    }
    
    for (let index = 0; index <= add.length; index++) {
        var char = add.charAt(index);
        ff = ff + char;   
        if (char == " ") {
            count = count + 1
        } 
    }
    for (let index = 1; index <= count ; index++) {
        strat *= index;
        
    }
    console.log(`The given string is :- ${ff} The word count of the string is ${count} and the factorial of number is ${strat}`);
    // console.log("The given string is :- ", ff ; "The word count of the string is ", count ; "and the factorial of number is ", strat);

    console.log(`****************************`);
}
factorialWordsCount("Revision is the mother of success");
factorialWordsCount("we never fail , we always learn");
factorialWordsCount(" null");
factorialWordsCount("");
factorialWordsCount(" Aditya Mahesh Kashid")
 
// console.log(`The given string is :- ${ff} The length of the string is ${count} `);