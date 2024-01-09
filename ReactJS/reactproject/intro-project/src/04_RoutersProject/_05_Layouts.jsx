
import { Link, Outlet, useLocation } from "react-router-dom";
import ItemRouters from "./_01_AllRouters";

function ItemsLayout() {

    const location = useLocation();
    const shouldHideAddBtn = location.pathname.includes("/add");
    const shouldHideShowItemsBtn = location.pathname.includes("/items");
    return (
        <>
            <ul className="nav">
                {
                    !shouldHideShowItemsBtn &&
                    <li className="nav-item">
                        <Link to="/items" ><button className="btn btn-primary m-2">Show Items</button></Link>
                    </li>
                }
                {
                    !shouldHideAddBtn && <li className="nav-item">
                        <Link to="/add"><button className="btn btn-warning m-2">Add New Item</button></Link>
                    </li>
                }
            </ul>
            <Outlet />
            <ItemRouters />
        </>
    );
}

export default ItemsLayout;