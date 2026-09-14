import { useEffect, useState } from "react";
import { getAllStudents } from "../api/studentApi";
import type { Student } from "../types/Student";

export function useStudents() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function loadStudents() {
            try {
                const data = await getAllStudents();
                setStudents(data);
            } catch (error) {
                console.error("Failed to load students:", error);

                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Unable to load students");
                }
            } finally {
                setLoading(false);
            }
        }

        loadStudents();
    }, []);

    return {
        students,
        loading,
        error,
    };
}