// call back hell // messy Code 
setTimeout(() => {
    console.log("step-1")
   setTimeout(() => {
     console.log("step-2")
      setTimeout(() => {
         console.log("step-3")
      }, 1000);
   }, 2000);  
}, 3000);