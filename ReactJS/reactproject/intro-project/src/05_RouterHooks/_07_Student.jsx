function Student(props) { 
    return (
        <tr className="text-center">
            <td>{props.slNo}</td>
            <td>{props.item.name}</td>
            <td>{props.item.age}</td>
            <td>{props.item.grade}</td>
            <td>{props.item.hobbies}</td>
            <td>{props.item.club_membership}</td>
        </tr>
    ); 
}

export default Student;