function Item(props) {
    return (
        <tr className="text-center">
            <td>{props.slNo}</td>
            <td>{props.item.name}</td>
            <td>{props.item.id}</td>
            <td>{props.item.price}</td>
            <td>{props.item.category}</td>
        </tr>
    );
}

export default Item;