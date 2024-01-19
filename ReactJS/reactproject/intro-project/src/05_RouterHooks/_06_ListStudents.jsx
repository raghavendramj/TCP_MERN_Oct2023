import React, { useContext } from 'react';
import { useAllData } from './_08_StudentContext';
import Student from './_07_Student';
import ComponentHeader from '../07_Utils/_00_ComponentHeader';

function ListStudents() { 
    const dataObj = useAllData();
    console.log("Context Data  -> ", dataObj);
    const students = dataObj.loadStudentsFn(); 
    return (
        <div className="container m-3"> 
            <ComponentHeader 
            headerText="List Of Students" 
            headerBgColor="info"
            subHeaderText="Displaying List of Students!"
            />
            <table className="table table-striped table-bordered">
                <thead className="table-danger">
                    <tr className="h5 text-center">
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Grade</th>
                        <th>Hobbies</th>
                        <th>Club Membership</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student, index) => {
                            return <Student key={student.id} slNo={index + 1} student={student} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListStudents;