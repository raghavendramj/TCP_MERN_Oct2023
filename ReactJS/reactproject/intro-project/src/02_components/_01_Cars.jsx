import Car from "./_02_Car";
import _01_Header from "./_01_Header";

function _01_Cars(props) {
    //console.log("Component - 02 Cars Array :- ", props.onDeleteCar);
    return (
        <div className="container m-3">
            <_01_Header />
            <table className="table table-striped table-bordered">
                <thead className="table-danger">
                    <tr className="h5 text-center">
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
                            return <Car key={eachCar.id} slNo={index + 1} car={eachCar} deleteCarObj={props.onDeleteCar} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default _01_Cars;
