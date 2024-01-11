import React, { useContext } from 'react';
import Student from "./_07_Student"; 

function ListStudents() {

    const StudentContext = useContext(StudentContext);

    
    // console.log("Students :- ", students);
    return (
        <div className="container m-3">
            <h1>Testing</h1>
            {/* <table className="table table-striped table-bordered">
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
            </table> */}
        </div>
    );
}

export default ListStudents;