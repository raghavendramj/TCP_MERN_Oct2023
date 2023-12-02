function spreadTest() {
  const nums1 = [1, 2, 3, 4];
  const nums2 = [8, 9, 7, 15];

  const clubbedNums = nums1.concat(nums2);
  console.log("Clubbed nums :- ", clubbedNums);

  const es6Way = [...nums1, ...nums2];
  console.log("Clubbed nums es6Way:- ", es6Way);

  const mergedArray = [12, 58, ...nums1, 56, 23, 45, ...nums2, 27, 36, 19];
  console.log("Clubbed nums alongWithOthers:- ", mergedArray);
}
// spreadTest();

function objectSpreadExample() {
  let person1 = { name: "Adam", age: 23 };
  let person2 = { name: "Mathew", age: 34 };
  let people = [person1, person2];

  let person3 = { name: "Ram", age: 26 };

  let newArray = [...people, person3];
  console.log("Object arrays spreaded :- ", newArray);
}
// objectSpreadExample();


function addNumbers(a, b, ...others){
    console.log("\n-------------------------------")
    console.log("A :- ", a);
    console.log("B :- ", b);
    let res = a + b;
    console.log("Result :- ", res);

    for(let eachParam of others){
        console.log("Each param :- ", eachParam);
        res+= eachParam;
    }
    console.log("Final Result with optional params are :- ", res);
}
addNumbers(10, 20, 15, 56, 78);
addNumbers(33, 56);
addNumbers(16, 22, 33, 56);