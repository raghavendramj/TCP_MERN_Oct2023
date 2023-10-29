//Built in functions of Strings

function indexOf() {
  var str = "Hi there, How are you?";

  //indexOf -> Returns the position of the first occurrence of a substring.
  var currentIndex = str.indexOf("are");
  console.log("Current Index :- ", currentIndex);
  var second =
    "bangalore is a beautiful city, and bangalore is also IT hub of Karnataka";
  console.log("bangalore's indexOf :- ", second.indexOf("bangalore"));
}
// indexOf();

function lastIndexOf() {
  var first =
    "bangalore is a beautiful city, and bangalore is also IT hub of Karnataka";

  //Returns the last occurrence of a substring in the string.
  console.log("bangalore's lastIndexOf :- ", first.lastIndexOf("bangalore"));

  var str = "Hi there, How are you?";
  console.log("H's indexOf :- ", str.lastIndexOf("H"));
}
// lastIndexOf();

function searchMethod() {
  var str = "My favorite SpOrT is soccer, but the sport i like is cricket!";
  //Finds the first substring match in a regular expression search.
  console.log("1. Search sport's Index :- ", str.search("sport"));

  console.log("2. Search sport's Index :- ", str.search(/sport/g));

  // i-> Case-Insesitive, g-> global
  console.log("3. Search sport's Index :- ", str.search(/sport/gi));
}
// searchMethod();

function substringMethod() {
  var str = "my favorite country is India";

  //Returns the substring at the specified location within a String object.
  //first param -> start-index, second -> end-index(exclusive)
  console.log("1. str.substring(3, 10) :- ", str.substring(3, 10));
  console.log("2. str.substring(3, 11) :- ", str.substring(3, 11));
}
// substringMethod();

function replaceMethods() {
  var str = "Apples are round, and apples are juicy.";

  //Replaces text in a string, using a regular expression or search string.
  var result = str.replace("apples", "oranges"); //ONLY Matching first occurence, case-sensitive
  console.log("1. str.replace('apples', 'oranges') :- ", result);

  result = str.replace(/apples/i, "oranges"); //ONLY Matching first occurence, case-insensitive
  console.log("2. str.replace(/apples/i, 'oranges') :- ", result);

  result = str.replace(/apples/gi, "oranges"); //all the occurences, case-insensitive
  console.log("3. str.replace(/apples/gi, 'oranges') :- ", result);
}
// replaceMethods();

function sliceMethods() {
  var str = "my favorite country is India";

  // Returns a section of a string
  //first param -> start-index, second -> end-index(exclusive)
  console.log("str.slice(12, 19)) :- ", str.slice(12, 19));
}
sliceMethods();
