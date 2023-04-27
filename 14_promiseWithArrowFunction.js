const isSirAvailable =false;
const promiseForNotes = new Promise((resolve,reject) => {
    if (isSirAvailable) {
        resolve("promise and MAP.PDF");
    }else{
        reject("Sorry i didn't get time...");
    }
});

promiseForNotes.then (success => console.log(success,"I got your notes let me read it....."))
.catch(failure =>console.log(failure,"Are yaar ... kaisa teacher hai ye...."))
.finally(() => console.log("you should have always have your notes ......."))