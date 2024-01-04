
import { Link, Outlet } from "react-router-dom";

function NavRouterLayout() {
    return (
        <>
            <ul class="nav">
                <li class="nav-item">
                    <Link to="/home" ><button className="btn btn-primary m-2">Home</button></Link>
                </li>
                <li class="nav-item">
                    <Link to="/blogs"><button className="btn btn-danger m-2">Blogs</button></Link>
                </li>
                <li class="nav-item">
                    <Link to="/contacts" ><button className="btn btn-warning m-2">Contacts</button></Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}

export default NavRouterLayout;