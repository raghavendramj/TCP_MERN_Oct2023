import Car from "./_02_Car";

function _01_Cars(props) {
    //console.log("Component - 02 Cars Array :- ", props.onDeleteCar);
    return (
        <div className="container m-3">
            <div className="container-fluid m-2 p-3 text-white bg-primary text-center">
                <h1>Props - Cars Example!</h1>
            </div>
            <table className="table table-striped">
                <thead className="table-danger">
                    <tr >
                        <th>Sl.No</th>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                        <th>Fuel Type</th>
                        <th>Horse Power</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.cars.map((eachCar, index) => {
                            return <Car key={eachCar.id} slNo={index+1} car={eachCar} deleteCarObj={props.onDeleteCar} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default _01_Cars;
