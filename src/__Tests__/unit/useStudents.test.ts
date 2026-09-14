import { renderHook, waitFor } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import { useStudents } from "../../hooks/UseStudents.tsx";
import { getAllStudents } from "../../api/studentApi.ts";

vi.mock("../../api/studentApi.ts", () => ({
    getAllStudents: vi.fn(),
}));

const mockedGetAllStudents = vi.mocked(getAllStudents);

describe("useStudents", () => {
    test("starts with loading true", () => {
        mockedGetAllStudents.mockReturnValue(new Promise(() => {}));

        const { result } = renderHook(() => useStudents());

        expect(result.current.students).toEqual([]);
        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBeNull();
    });

    test("loads students successfully", async () => {
        const students = [
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

        mockedGetAllStudents.mockResolvedValue(students);

        const { result } = renderHook(() => useStudents());

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.students).toEqual(students);
        expect(result.current.error).toBeNull();
    });

    test("sets error when getAllStudents fails", async () => {
        mockedGetAllStudents.mockRejectedValue(
            new Error("Failed to fetch students")
        );

        const { result } = renderHook(() => useStudents());

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.students).toEqual([]);
        expect(result.current.error).toBe("Failed to fetch students");
    });
});