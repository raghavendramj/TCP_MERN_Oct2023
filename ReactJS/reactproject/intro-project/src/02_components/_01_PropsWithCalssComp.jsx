import { Component } from "react";
import _01_Cars from "./_01_Cars";

class _01_PropsWithClassComp extends Component {
    carsArr = [
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
    constructor(props) {
        console.log("1. PropsWithClassComp Example - constructor!");
        super();
        this.state = {
            cars: this.carsArr
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("2. PropsWithClassComp Example - getDerivedStateFromProps!");
        return { cars: state.cars };
    }
    shouldComponentUpdate() {
        console.log("5. PropsWithClassComp Example - shouldComponentUpdate!");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("6. PropsWithClassComp Example - getSnapshotBeforeUpdate!");
        console.log("6. Current State :- ", this.state);
        console.log("6. prevState State :- ", prevState);
        return null;
    }

    componentDidUpdate() {
        console.log("7. PropsWithClassComp Example - componentDidUpdate!");
    }

    componentDidMount() {
        console.log("4. PropsWithClassComp Example - componentDidMount!");
        let currentCars = [...this.state.cars]; //Take a copy  
        currentCars.push({
            "id": 7,
            "car_brand": "BMW",
            "model": "E7",
            "year": 2024,
            "fuel_type": "Gasoline",
            "horsepower": 233
        })
        this.setState({ cars: currentCars });
    }

    componentWillUnmount() {
        console.log("8. PropsWithClassComp Example - componentWillUnmount!");
    }

    deleteCar = (car) => {
        console.log("Reached Delete Car Method ", car);
        let currentCars = [...this.state.cars]; //Take a copy
        let filteredCars = currentCars.filter(eachCar => eachCar.id != car.id);
        this.setState({ cars: filteredCars });
    }

    render() {
        console.log("3. PropsWithClassComp Example - render!");
        return (
            <_01_Cars cars={this.state.cars} onDeleteCar={this.deleteCar} />
        );
    }

}

export default _01_PropsWithClassComp;
