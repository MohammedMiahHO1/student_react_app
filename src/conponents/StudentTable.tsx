import type { Student } from "../types/Student";
import "./StudentTable.css";

type StudentTableProps = {
    students: Student[];
};

function StudentTable({ students }: StudentTableProps) {
    return (
        <table className="student-table">
            <thead>
            <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Branch</th>
                <th>Percentage</th>
                <th>Subjects</th>
            </tr>
            </thead>

            <tbody>
            {students.map((student) => (
                <tr key={student.rollNo}>
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.branch}</td>
                    <td>{student.percentage}</td>

                    <td>
                        {student.subjects.map((studentSubject) => (
                            <li key={studentSubject.id}>
                                {studentSubject.subject.name}
                                {" - "}
                                Grade: {studentSubject.grade}
                            </li>
                        ))}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default StudentTable;