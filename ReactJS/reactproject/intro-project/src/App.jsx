import React from "react";
import _01_PhoneDirectory from "./01_components/_01_PhoneDirectory";
import _02_ClassOrFuncComponent from "./01_components/_02_ClassOrFuncComponent";
import _03_ClassCompWithStyle from "./01_components/_03_ClassCompWithStyle";
import _04_FuncCompoWithStyle from "./01_components/_04_FuncCompoWithState";
import _05_ClassCompWithState from "./01_components/_05_ClassCompWithState";
import _06_StylingInReactJavaScript from "./01_components/_06_StylingInReactFunc";
import _07_UsingMapMethod from "./01_components/_07_UsingMapMethod";
import _01_PropsExample from "./02_components/_01_PropsExample";
import _01_PropsWithClassComp from "./02_components/_01_PropsWithCalssComp";
import _01_Routers from "./03_Routers/_01_Routers"

function App() {

  return <React.Fragment>
    <div className="container mt-4">
      {/* <_01_PhoneDirectory />
      <_02_ClassOrFuncComponent />
      <_03_ClassCompWithStyle />
      <_04_FuncCompoWithStyle />
      <_05_ClassCompWithState />
      <_06_StylingInReactJavaScript />
      <_07_UsingMapMethod />
      <_01_PropsExample /> 
      <_01_PropsWithClassComp />
       */}  
      <_01_Routers />
    </div>
  </React.Fragment>;
}

export default App;
