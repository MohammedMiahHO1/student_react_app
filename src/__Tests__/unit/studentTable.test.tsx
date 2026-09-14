import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import StudentTable from "../../conponents/StudentTable.tsx";
import type { Student } from "../../types/Student";
import { describe, test, expect } from "vitest";

const students: Student[] = [
    {
        rollNo: 1,
        name: "Ali",
        percentage: 85.5,
        branch: "Computer Science",
        subjects: [
            {
                id: 10,
                grade: 90,
                subject: {
                    id: 5,
                    name: "Maths",
                },
            },
        ],
    },
];

describe("StudentTable", () => {
    test("renders student details", () => {
        render(
            <MemoryRouter>
                <StudentTable students={students} />
        </MemoryRouter>
    );

        expect(screen.getByText("Ali")).toBeInTheDocument();
        expect(screen.getByText("Computer Science")).toBeInTheDocument();
        expect(screen.getByText(85.5)).toBeInTheDocument();
        expect(screen.getByText(/Maths/)).toBeInTheDocument();
        expect(screen.getByText(/90/)).toBeInTheDocument();
    });

    // test("student name links to student details page", () => {
    //     render(
    //         <MemoryRouter>
    //             <StudentTable students={students} />
    //     </MemoryRouter>
    // );
    //
    //     const link = screen.getByRole("link", {
    //         name: "Ali",
    //     });
    //
    //     expect(link).toHaveAttribute(
    //         "href",
    //         "/students/1"
    //     );
    // });
    //
    // test("Add Student link points to add page", () => {
    //     render(
    //         <MemoryRouter>
    //             <StudentTable students={students} />
    //     </MemoryRouter>
    // );
    //
    //     const link = screen.getByRole("link", {
    //         name: /add student/i,
    //     });
    //
    //     expect(link).toHaveAttribute(
    //         "href",
    //         "/students/add"
    //     );
    // });
});