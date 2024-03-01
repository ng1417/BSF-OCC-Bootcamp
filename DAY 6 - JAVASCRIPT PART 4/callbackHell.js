const step1 = (callback) =>{
    setTimeout(()=> {
        console.log("Step 1 is complete.");
        callback()
    }, 3000);
}

const step2 = (callback) =>{
    setTimeout(()=> {
        console.log("Step 2 is complete.");
        callback()
    }, 3000);
}

const step3 = () =>{
    setTimeout(() => {
        console.log('Step 3 is complete.');
        console.log("request is complete and all steps are done!")
    }, 7000);
}



//nested callbacks
step1(() => {
    step2(() => {
        step3(); // no need for a callback in here
   
    });
});
