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

export interface CreateStudentRequest {
    name: string;
    percentage: number;
    branch: string;
    subject: string;
    grade: number;
}
