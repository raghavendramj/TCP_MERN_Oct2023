function Car(props) {
    //console.log("Component - 03 Each Car from Props:- ", props.car);
    return (
        <tr>
            <td>{props.car.id}</td>
            <td>{props.car.car_brand}</td>
            <td>{props.car.model}</td>
            <td>{props.car.year}</td>
            <td>{props.car.fuel_type}</td>
            <td>{props.car.horsepower}</td>
            <td><button className="btn btn-danger" onClick={() => props.deleteCarObj(props.car)}>Delete</button></td>
        </tr>
    );
}

export default Car;
