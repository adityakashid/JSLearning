function doAssignment(callBack) {
    console.log(`solving assignment`);
    console.log(`step 1 to 10 all are done`);
    callBack();
}

function copyAssignment() {
    //ajinkya
    console.log(`Tahnks you ajju , let me copy assignmenet! `);
}

doAssignment(copyAssignment);
//***********************************************************
// function school(){
//     console.log(`Good morning`);
// }
// setTimeout(school,2000);



console.log(`*******************************************`);
function firstClass() {
    console.log(`we can return function from another function`);
    function innerFunction () {
        console.log(`Inner Function`);
    }
    return innerFunction;

}

firstClass()();


