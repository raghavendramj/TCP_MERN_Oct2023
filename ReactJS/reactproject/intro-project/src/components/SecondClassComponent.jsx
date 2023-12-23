// import { Component } from "react";

//Class Component! - Statefull
// class Header extends Component {
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

// export default Header;

//Functional Component! - Stateless
function Header() {
    return (
        <div className="container p-4 mt-3 text-center bg-primary text-white h1">
            Phone Directory!
        </div>
    );
}

export default Header;