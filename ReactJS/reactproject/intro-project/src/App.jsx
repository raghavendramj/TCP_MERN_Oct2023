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
import ItemRouters from "./04_RoutersProject/_01_AllRouters";
import ShowItems from "./04_RoutersProject/_02_ShowItems";
import ItemsLayout from "./04_RoutersProject/_05_Layouts";
import ReactRouterHook from "./05_RouterHooks/_01_RouterHooks";
import Timer from "./05_RouterHooks/_04_UseEffect";
import ListStudents from "./05_RouterHooks/_06_ListStudents";
import StudentsProvider from "./05_RouterHooks/_08_StudentContext";
import UseRefHookFormExample from "./05_RouterHooks/_09_UseReHook";
import UseReducerExample from "./05_RouterHooks/_10_UseReducer";
import UseMemoExample from "./05_RouterHooks/_11_UseMemo";
import UsecallbackExample from "./05_RouterHooks/_12_UseCalback";
import CustomHook from "./05_RouterHooks/_14_CustomHook";
import BookOperations from "./06_Redux/01_BookOperations";
import { Provider } from "react-redux";
import {bookStore} from "./06_Redux/03_Reducer" 

function App() {
  return <React.Fragment>
    {/* 
        <UseRefHookFormExample /> 
        <UseReducerExample />
        <UseMemoExample />
      <UsecallbackExample /> 
      <CustomHook />
    */}

    <Provider store={bookStore}>
      <BookOperations />
    </Provider>

  </React.Fragment>


  {/*    return <React.Fragment>
          <div className="container mt-4"> 
              <_01_PhoneDirectory />
              <_02_ClassOrFuncComponent />
              <_03_ClassCompWithStyle />
              <_04_FuncCompoWithStyle />
              <_05_ClassCompWithState />
              <_06_StylingInReactJavaScript />
              <_07_UsingMapMethod />
              <_01_PropsExample /> 
              <_01_PropsWithClassComp /> 
              <NavRouterLayout />
              <_01_Routers /> 
              <ReactRouterHook />  
              <ItemsLayout />  --> Actual Project for CRUD
              <Timer />
            </div>
        </React.Fragment>; 

        <React.Fragment>
          <div className="container mt-4">
            <StudentsProvider>
              <ListStudents />
            </StudentsProvider> 
          </div>
        </React.Fragment>;  
       */}



}

export default App;
