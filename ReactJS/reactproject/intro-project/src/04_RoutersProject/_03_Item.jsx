import { Link } from "react-router-dom";

function Item(props) {

    const toLink = `/item/${props.item.id}?data=${encodeURIComponent(JSON.stringify(props.item))}`
    return (
        <tr className="text-center">
            <td>{props.slNo}</td>
            <td>{props.item.name}</td>
            <td>{props.item.id}</td>
            <td>{props.item.price}</td>
            <td>{props.item.category}</td>
            <td><button className="btn btn-danger" onClick={() => props.deleteProduct(props.item)}>Delete {props.item.name}</button>
                <Link to={toLink}><button className="btn btn-secondary m-2">Edit {props.item.name}</button></Link>
            </td>
        </tr>
    );
}

export default Item;