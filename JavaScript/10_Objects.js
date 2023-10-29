var carObject = {
  name: "Fiat",
  model: "Punto",
  weight: "1200kg",
  color: "white",
  start: function () {
    console.log("Car started!");
  },
  stop: function () {
    console.log("Car stopped!");
  },
  drive: function () {
    console.log("Now the car is been driven");
  },
};

function objExample() {
  console.log("carObject :- ", carObject);
  console.log("Object Property via . :: carObject.name :- ", carObject.name);
  console.log(
    "Object Property via of  :: carObject['model'] :- ",
    carObject["model"]
  );
  carObject.drive();
}
// objExample();

function forInLoop() {
  for (var eachKey in carObject) {
    if (typeof carObject[eachKey] == "function") {
      carObject[eachKey]();
    } else {
      console.log(
        "Each Key :- ",
        eachKey,
        ", Each Value :- ",
        carObject[eachKey]
      );
    }
  }
}
// forInLoop();

function Question() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };

  var classical = "rock";
  console.log("1. music.classical :- ", music.classical); //Object's property -> music.classical
  console.log("2. music['rock'] :- ", music[classical]); //Object's property -> music[classical] => music['rock'] -> guitar
}
Question();
