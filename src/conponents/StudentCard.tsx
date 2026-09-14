import type { Student } from "../types/Student";
import SubjectList from "./SubjectList";

type StudentCardProps = {
    student: Student;
};

function StudentCard({ student }: StudentCardProps) {
    return (
        <section>
            <h2>{student.name}</h2>

            <p>Branch: {student.branch}</p>
            <p>Percentage: {student.percentage}</p>

            <h3>Subjects</h3>

            <SubjectList subjects={student.subjects} />
        </section>
    );
}

export default StudentCard;