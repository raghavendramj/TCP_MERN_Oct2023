import React from "react";
import PhoneDirectory from "./components/PhoneDirectory";
import MyTestComponent from "./components/SimpleClassComponent";
import Header from "./components/SecondClassComponent";
import StylingInReact from "./components/Styling";

function App() {
  return <React.Fragment>
    <div className="container mt-4">
      <StylingInReact />
      {/* <Header /> */}
      {/* <PhoneDirectory myName="Raghav" />  */}
      {/* <MyTestComponent /> */}

    </div>
  </React.Fragment>;
}

export default App;
