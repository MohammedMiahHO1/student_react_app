import { useState } from "react";
import { createStudentWithSubject } from "../api/studentApi.ts";
import type { CreateStudentRequest } from "../types/Student.ts";

export function useCreateStudent() {
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function createStudent(student: CreateStudentRequest) {
        try {
            setSubmitting(true);
            setError(null);

            return await createStudentWithSubject(student);

        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else {
                setError("Unable to create student");
            }

            throw error;

        } finally {
            setSubmitting(false);
        }
    }

    return {
        createStudent,
        submitting,
        error
    };
}