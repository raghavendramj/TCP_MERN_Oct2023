//Usecase 2 :-
// 1. Visit github.com
// 2. Check user exist
// 3. list repoitories
// 4. open one repo
// 5. read the code

let visitGithub = (url) => {
  let visitGithubCallBack = (resolve, reject) => {
    if (url.includes("github")) {
      setTimeout(() => {
        resolve("URL is valid!.. Going forward");
      }, 3000);
    } else {
      reject("Invalid URL!!");
    }
  };
  return new Promise(visitGithubCallBack);
};

let newPromise = visitGithub("github.com");
newPromise.then(
  (successMsg) => console.log("Success!... ", successMsg),
  (errMsg) => console.log("Failure!!... ", errMsg)
);
