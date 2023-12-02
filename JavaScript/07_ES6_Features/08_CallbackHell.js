let subtract = (a, b) => {
  return a - b;
};

let add = (a, b) => {
  return a + b;
};

let multiply = (a, b) => {
  return a * b;
};

let calculator = (a, b, operator) => {
  let result = operator(a, b);
  console.log("Result is :- ", result);
};

//Usecase :- Multiplication -> Addition -> Subtraction
let perforMultipleOperation = (a, b) => {
  calculator(a, b, (a, b) => {
    calculator(a, b, (a, b) => {
      calculator(a, b, (a, b) => {
        return a * b; //Multipliaction
      });
      return a + b; //Addition
    });
    return a - b; //Subtraction
  });
};

// perforMultipleOperation(45, 12);

// btn.addEventListener("click", function () {
//   console.log("Clicked!");
// });

//Usecase 1 :- Division -> Addition -> Multiplication -> Subtraction

//Usecase 2 :-
// 1. Visit github.com
// 2. Check user exist
// 3. list repoitories
// 4. open one repo
// 5. read the code

let callBackHellBegin = (
  passigURL,
  passingUsername,
  passingReponame,
  passingFilename
) => {
  performOperation(passingFilename, (fileName) => {
    //4. Reading the code from file
    performOperation(passingReponame, (repo) => {
      //3. List the repository
      performOperation(passingUsername, (user) => {
        //2. Check Username
        performOperation(passigURL, (url) => {
          //1. Visit URL
          setTimeout(() => {
            console.log("Opening url:- :- ", url);
          }, 2000);
        });
        setTimeout(() => {
          console.log("Checking the user :- ", user);
        }, 4000);
      });
      setTimeout(() => {
        console.log("Listing repositories :- ", repo);
      }, 6000);
    });
    setTimeout(() => {
      console.log("Reading Code from :- ", fileName);
    }, 8000);
  });
};

let performOperation = (param, callBack) => {
  callBack(param);
};

//url, username, reponame, filename
callBackHellBegin("bitbucket.com", "andy", "jsrepo", "callbacks.js");
