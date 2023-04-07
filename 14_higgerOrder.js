function doHomeWork(callBack) {
  console.log(`Doing Homework`);
  console.log(`Finally homework is completed`);
  callBack();
  
  let submitItHomework = function () {
    console.log(`we both completed the work`);
    console.log(`thank you  for the help`);
}
return submitItHomework;
}

function copyHomework() {
    console.log(`******************`);
  console.log(`copying Homework...`);
  console.log(`thank you ,, I copied homework`);
}
// console.log(copyHomework);
// doHomeWork(copyHomework);
const vv = doHomeWork(copyHomework);
console.log(`******************`);
vv();