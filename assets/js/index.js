if ("serviceWorker" in navigator){
navigator.serviceWorker.register("sw.js").then(registration=>{
    console.log("sw ok");
    console.log(registration);
}).catch(error=>{
console.log("sw failed");
console.log(error)
});
}
