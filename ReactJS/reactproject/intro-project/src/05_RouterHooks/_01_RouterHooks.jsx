import { Link } from 'react-router-dom';
import ActualRoutes from './_00_Routes';

function ReactRouterHook() {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/home" ><button className="btn btn-warning m-2">Home</button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/about"><button className="btn btn-secondary m-2">About</button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs"><button className="btn btn-success m-2">Blogs</button></Link>
                </li>
                <li className="nav-item">
                    <Link to="/contacts"><button className="btn btn-danger m-2">Contacts</button></Link>
                </li>
            </ul>
            <ActualRoutes />
        </>
    );
}

export default ReactRouterHook;  