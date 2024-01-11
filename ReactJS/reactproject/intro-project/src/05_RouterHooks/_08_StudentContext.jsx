import React, { useContext } from "react";
import jsonData from "./_05_Data.json";

const StudentContext = React.createContext();


export function useAllData() {
    return useContext(StudentContext);
}

export const StudentsProvider = ({ children }) => {

    function loadStudents() {
        const { students } = jsonData;
        return students;
    }


    function laodCars() {
        const { cars } = jsonData;
        return cars;

    }

    const dataObj = {
        entireJSON: jsonData,
        loadStudentsFn: loadStudents,
        laodCarsFn: laodCars
    };

    return <StudentContext.Provider value={dataObj}>{children}</StudentContext.Provider>
}

export default StudentsProvider;
