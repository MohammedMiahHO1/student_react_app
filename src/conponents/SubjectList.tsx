import type { StudentSubject } from "../types/Student";

type SubjectListProps = {
    subjects: StudentSubject[];
};

function SubjectList({ subjects }: SubjectListProps) {
    return (
        <div>
            {subjects.map((studentSubject) => (
                <p key={studentSubject.id}>
                    {studentSubject.subject.name}
                    {" - "}
                    Grade: {studentSubject.grade}
                </p>
            ))}
        </div>
    );
}

export default SubjectList;