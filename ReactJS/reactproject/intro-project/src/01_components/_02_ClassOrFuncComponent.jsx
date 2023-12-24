// import { Component } from "react";

//Class Component! - Statefull
// class _02_HeaderClass extends Component {
//     constructor() {
//         super();
//         this.state = {}
//     }
//     render() {
//         return (
//             <div className="container p-4 mt-3 text-center bg-primary text-white h1">
//                 Phone Directory!
//             </div>

//         );
//     }
// }

// export default _02_HeaderClass;

//Functional Component! - Stateless
function _02_HeaderFunc() {
    return (
        <div className="container p-4 mt-3 text-center bg-primary text-white h1">
            Phone Directory!
        </div>
    );
}

export default _02_HeaderFunc;