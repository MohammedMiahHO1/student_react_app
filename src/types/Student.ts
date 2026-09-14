export interface Subject {
    id: number;
    name: string;
}

export interface StudentSubject {
    id: number;
    grade: number;
    subject: Subject;
}

export interface Student {
    rollNo: number;
    name: string;
    percentage: number;
    branch: string;
    subjects: StudentSubject[];
}