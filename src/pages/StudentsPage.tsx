import { useStudents } from "../hooks/UseStudents.tsx";
import StudentCard from "../conponents/StudentCard.tsx";

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

            {students.map((student) => (
                <StudentCard
                    key={student.rollNo}
                    student={student}
                />
            ))}
        </main>
    );
}

export default StudentsPage;