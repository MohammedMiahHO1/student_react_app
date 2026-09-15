
import { Link } from "react-router-dom";
import { useStudents } from "../hooks/UseStudents.tsx";
import StudentTable from "../conponents/StudentTable.tsx";


function StudentsPage() {
    const { students, loading, error } = useStudents();

    if (loading) {
        return <p>Loading students...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <main>
            <h1>Student Management</h1>
            <Link to="/students/add">
                Add Student
            </Link>
            <StudentTable students={students} />
        </main>
    );
}

export default StudentsPage;