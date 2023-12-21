import React from "react";
import PhoneDirectory from "./components/PhoneDirectory";
import MyTestComponent from "./components/SimpleClassComponent";

function App() {
  return <React.Fragment>
    <div className="container mt-4">
      {/* <PhoneDirectory myName="Raghav" />  */}
      <MyTestComponent />
    </div>
  </React.Fragment>;
}

export default App;
