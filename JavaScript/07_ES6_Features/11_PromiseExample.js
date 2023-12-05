//Usecase 2 :-
// 1. Visit github.com
// 2. Check user exist
// 3. open one repo
// 4. list files
// 5. read the code from one file

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

let loginUser = (user) => {
  return new Promise((resolve, reject) => {
    if (user.includes("raghav")) {
      setTimeout(() => {
        resolve("User is valid!.. Going forward");
      }, 3000);
    } else {
      reject("Invalid User!!");
    }
  });
};

let readRepo = (repoName) => {
  return new Promise((resolve, reject) => {
    if (repoName.includes("nodeJs")) {
      setTimeout(() => {
        resolve("Repoisitory is valid!.. Going forward");
      }, 3000);
    } else {
      reject("Invalid Repoisitory!!");
    }
  });
};

let visitGithubPromise = visitGithub("github.com");

let loginUserPromise = visitGithubPromise.then(
  (successMsg) => {
    console.log("Success!... ", successMsg);
    return loginUser("raghav");
  },
  (errMsg) => console.log("Failure!!... ", errMsg)
);

let readRepoPromise = loginUserPromise.then(
  (successMsg) => {
    console.log("Success!... ", successMsg);
    return readRepo("nodeJs");
  },
  (errMsg) => console.log("Failure!!... ", errMsg)
);

readRepoPromise.then(
  (successMsg) => {
    console.log("Success!... ", successMsg);
    //   return readRepo("nodeJs");
  },
  (errMsg) => console.log("Failure!!... ", errMsg)
);
