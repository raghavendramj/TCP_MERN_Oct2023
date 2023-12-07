console.log("Hey Buddy"); //Main Thread
setTimeout(() => console.log("How"), 0);
console.log("are You"); //Main Thread
setTimeout(() => console.log("test"), 1000);
console.log("doing?"); //Main Thread

// Hey buddy are you doing? how test

// Hey buddy How are you test doing?
