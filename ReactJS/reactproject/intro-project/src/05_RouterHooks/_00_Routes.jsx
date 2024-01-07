import { Route, Routes } from "react-router-dom";

function ActualRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
        </Routes>
    );
}

export default ActualRoutes;

const Home = () => {
    return <div className="container-fluid m-2 p-3 text-white bg-warning text-center">
        <h1>Home Page!</h1>
    </div>
}

const About = () => {
    return <div className="container-fluid m-2 p-3 text-white bg-secondary text-center">
        <h1>About Page!</h1>
    </div>
}

const Blogs = () => {
    return <div className="container-fluid m-2 p-3 text-white bg-success text-center">
        <h1>Blogs Page!</h1>
    </div>
}
const Contacts = () => {
    return <div className="container-fluid m-2 p-3 text-white bg-danger text-center">
        <h1>Contacts Page!</h1>
    </div>
}