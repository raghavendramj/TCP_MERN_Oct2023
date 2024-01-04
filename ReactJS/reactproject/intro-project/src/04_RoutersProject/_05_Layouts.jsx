
import { Link, Outlet } from "react-router-dom";
import ItemRouters from "./_01_AllRouters";

function ItemsLayout() {
    return (
        <>   
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/items" ><button className="btn btn-primary m-2">Show Items</button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/add"><button className="btn btn-secondary m-2">Add New Item</button></Link>
                </li>
            </ul>
            <Outlet />
            <ItemRouters />
        </>
    );
}

export default ItemsLayout;