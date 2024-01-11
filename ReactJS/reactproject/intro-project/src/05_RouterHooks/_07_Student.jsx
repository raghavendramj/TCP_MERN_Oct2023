function Student({ slNo, student }) { 
    return (
        <tr className="text-center">
            <td>{slNo}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
            <td>{student.hobbies.join(", ")}</td>
            <td>{student.club_membership}</td>
        </tr>
    );
}

export default Student;