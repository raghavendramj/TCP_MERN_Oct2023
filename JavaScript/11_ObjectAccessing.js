var car = {
  make: 2023,
  model: "Seltos",
  brand: "Kia",
  start: function () {
    console.log("Started!...");
  },
};

//Accessing Object's Propertty

function accessObject() {
  //Dot Opertor:- Syntax :- ObjectName.propertyName
  console.log("objectName.propertyName :: car.make :- ", car.make);

  //Of Opertor:- Syntax :- ObjectName['propertyName']
  console.log("ObjectName['propertyName'] :: car['brand'] :- ", car["brand"]);
  var modelPropertyNameVariable = 'model';
  console.log("ObjectName['propertyName'] :: car[modelPropertyNameVariable] :- ", car[modelPropertyNameVariable]);

  //Invoking the property fuction - syntax :- object.function();
  console.log("ObjectName.funcPropName() :: car.start() ");  
  car.start()
}

accessObject();
