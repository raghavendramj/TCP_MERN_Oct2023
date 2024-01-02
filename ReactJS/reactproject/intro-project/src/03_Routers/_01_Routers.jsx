import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./_01_Home";
import Blogs from "./_01_Blogs";
import Contact from "./_01_Contacts";
import PageNotFound from "./_01_PNF";

function _01_Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contacts" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default _01_Routers;