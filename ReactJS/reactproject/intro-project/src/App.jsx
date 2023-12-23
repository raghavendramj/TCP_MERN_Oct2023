import React from "react";
import PhoneDirectory from "./components/PhoneDirectory";
import MyTestComponent from "./components/SimpleClassComponent";
import Header from "./components/SecondClassComponent";
import StylingInReact from "./components/Styling";
import SimpleMapMethodDemo from "./components/UsingMapMethod";
 import FunctionalComponentWithStates from "./components/FuncCompoWIthState";
import ClassComponentWithStates from "./components/ClassCompWithState";

function App() {
  return <React.Fragment>
    <div className="container mt-4">
      <FunctionalComponentWithStates />
      {/* <ClassComponentWithStates /> */}
      {/* <SimpleMapMethodDemo /> */}
      {/* <StylingInReact /> */}
      {/* <Header /> */}
      {/* <PhoneDirectory myName="Raghav" />  */}
      {/* <MyTestComponent /> */}

    </div>
  </React.Fragment>;
}

export default App;
