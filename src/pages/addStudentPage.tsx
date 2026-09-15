import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateStudent } from "../hooks/useCreateStudent";

function AddStudentPage() {
    const navigate = useNavigate();

    const {
        createStudent,
        submitting,
        error
    } = useCreateStudent();

    const [name, setName] = useState("");
    const [percentage, setPercentage] = useState("");
    const [branch, setBranch] = useState("");
    const [subject, setSubject] = useState("");
    const [grade, setGrade] = useState("");

    async function handleSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();

        try {
            await createStudent({
                name,
                percentage: Number(percentage),
                branch,
                subject,
                grade: Number(grade)
            });

            navigate("/students");

        } catch {
            // useCreateStudent handles the error state
        }
    }

    return (
        <div>
            <h1>Add Student</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    required
                />

                <label htmlFor="percentage">
                    Percentage
                </label>
                <input
                    id="percentage"
                    type="number"
                    step="0.1"
                    value={percentage}
                    onChange={(event) =>
                        setPercentage(event.target.value)
                    }
                    required
                />

                <label htmlFor="branch">Branch</label>
                <input
                    id="branch"
                    value={branch}
                    onChange={(event) =>
                        setBranch(event.target.value)
                    }
                    required
                />

                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    value={subject}
                    onChange={(event) =>
                        setSubject(event.target.value)
                    }
                    required
                />

                <label htmlFor="grade">Grade</label>
                <input
                    id="grade"
                    type="number"
                    step="0.1"
                    value={grade}
                    onChange={(event) =>
                        setGrade(event.target.value)
                    }
                    required
                />

                {error && (
                    <p role="alert">{error}</p>
                )}

                <button
                    type="submit"
                    disabled={submitting}
                >
                    {submitting
                        ? "Adding..."
                        : "Add Student"}
                </button>

            </form>
        </div>
    );
}

export default AddStudentPage;