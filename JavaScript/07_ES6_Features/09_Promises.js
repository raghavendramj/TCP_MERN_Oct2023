// Actors in this scenario
// -> Singer
// -> Fans

// Producing Code -> Releasing the song -> Singer
// Consuming Code -> Enjoying the song -> Fans
// Promise -> Links Singer and Fans
// -> SUCCESS  :- Successful Release
// -> PENDING :- Till tomorrow 9PM
// -> FAILURE :- New postponed date for song release

// A promise is in one of these states :-
// PENDING      -> initial state, neither fulfilled nor rejected
// FULFILLED    -> Operation successfully completed
// REJECTED     -> Operation failed

// promise : SUCCESS
//     state:PENDING -> resolve("done") -> state: FULFILLED
// promise : FAILURE
//     state:PENDING -> reject("done") -> state: REJECTED

//Producing code
let songPromise = (songName) => {
  let promiseObj = new Promise((resolve, reject) => {
    console.log("State :- ", this);
    if (songName) {
      let msg = "Thanks guys for your patience, here's new Album song :- ";
      resolve(msg + songName);
      console.log("State :- ", this);
    } else {
      reject("Couldn't record the song, Will update you all soon!");
      console.log("State :- ", this);
    }
  });
  return promiseObj;
};

//Consuming code - Success Case
songPromise("Yeh dil maange more!").then(
  (successMsg) => console.log("Success! ..", successMsg),
  (failureMsg) => console.log("Failure! ..", failureMsg)
);

//Consuming code - Failure Case
songPromise().then(
  (successMsg) => console.log("Success! ..", successMsg),
  (failureMsg) => console.log("Failure! ..", failureMsg)
);
