
import { test, expect } from "@playwright/test";




test("displays students returned from the GraphQL backend", async ({
                                                                       page,
                                                                       request,
                                                                   }) => {



    const response = await request.post(
        "http://localhost:8080/graphql",
        {
            data: {
                query: `
                    mutation {
                        createStudentWithSubject(
                            name: "Joe"
                            percentage: 85.5
                            branch: "Computer Science"
                            subject: "Maths"
                            grade: 90
                        ) {
                            rollNo
                            name
                            percentage
                            branch
                            subjects {
                                id
                                grade
                                subject {
                                    id
                                    name
                                }
                            }
                        }
                    }
                `,
            },
        }
    );

    expect(response.ok()).toBe(true);

    const body = await response.json();

    expect(body.errors).toBeUndefined();



    await page.goto("/students");


    await expect(
        page.getByText("Joe")
    ).toBeVisible();

    await expect(
        page.getByText("Computer Science")
    ).toBeVisible();

    await expect(
        page.getByText("85.5")
    ).toBeVisible();

    await expect(
        page.getByText(/Maths\s*-\s*Grade:\s*90/i)
    ).toBeVisible();
});