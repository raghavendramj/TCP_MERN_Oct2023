import _01_Cars from "./_01_Cars";

function _01_PropsExample(props) {

    const carsArr = [
        {
            "id": 1,
            "car_brand": "Toyota",
            "model": "Camry",
            "year": 2022,
            "fuel_type": "Gasoline",
            "horsepower": 203
        },
        {
            "id": 2,
            "car_brand": "Ford",
            "model": "Mustang",
            "year": 2023,
            "fuel_type": "Petrol",
            "horsepower": 450
        },
        {
            "id": 3,
            "car_brand": "Tesla",
            "model": "Model 3",
            "year": 2022,
            "fuel_type": "Electric",
            "horsepower": 283
        },
        {
            "id": 4,
            "car_brand": "Chevrolet",
            "model": "Equinox",
            "year": 2023,
            "fuel_type": "Hybrid",
            "horsepower": 260
        },
        {
            "id": 5,
            "car_brand": "Honda",
            "model": "Civic",
            "year": 2022,
            "fuel_type": "Gasoline",
            "horsepower": 158
        }
    ]
    return (
        <_01_Cars cars={carsArr} />
    );
}

export default _01_PropsExample;
