# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: student.spec.ts >> displays students returned from the GraphQL backend
- Location: e2e/student.spec.ts:7:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Joe')
Expected: visible
Error: strict mode violation: getByText('Joe') resolved to 2 elements:
    1) <td>Joe</td> aka getByRole('cell', { name: 'Joe' }).first()
    2) <td>Joe</td> aka getByRole('cell', { name: 'Joe' }).nth(1)

Call log:
  - Expect "toBeVisible" getByText('Joe') with timeout 5000ms
  - waiting for getByText('Joe')

```

# Page snapshot

```yaml
- main [ref=e3]:
  - heading "Student Management" [level=1] [ref=e4]
  - table [ref=e5]:
    - rowgroup [ref=e6]:
      - row [ref=e7]:
        - columnheader "Roll No" [ref=e8]
        - columnheader "Name" [ref=e9]
        - columnheader "Branch" [ref=e10]
        - columnheader "Percentage" [ref=e11]
        - columnheader "Subjects" [ref=e12]
    - rowgroup [ref=e13]:
      - row [ref=e14]:
        - cell "1" [ref=e15]
        - cell "Joe" [ref=e16]
        - cell "Computer Science" [ref=e17]
        - cell "85.5" [ref=e18]
        - cell [ref=e19]:
          - listitem [ref=e20]: "Maths - Grade: 90"
      - row [ref=e21]:
        - cell "2" [ref=e22]
        - cell "Joe" [ref=e23]
        - cell "Computer Science" [ref=e24]
        - cell "85.5" [ref=e25]
        - cell [ref=e26]:
          - listitem [ref=e27]: "Maths - Grade: 90"
```

# Test source

```ts
  1  | 
  2  | import { test, expect } from "@playwright/test";
  3  | 
  4  | 
  5  | 
  6  | 
  7  | test("displays students returned from the GraphQL backend", async ({
  8  |                                                                        page,
  9  |                                                                        request,
  10 |                                                                    }) => {
  11 | 
  12 | 
  13 | 
  14 |     const response = await request.post(
  15 |         "http://localhost:8080/graphql",
  16 |         {
  17 |             data: {
  18 |                 query: `
  19 |                     mutation {
  20 |                         createStudentWithSubject(
  21 |                             name: "Joe"
  22 |                             percentage: 85.5
  23 |                             branch: "Computer Science"
  24 |                             subject: "Maths"
  25 |                             grade: 90
  26 |                         ) {
  27 |                             rollNo
  28 |                             name
  29 |                             percentage
  30 |                             branch
  31 |                             subjects {
  32 |                                 id
  33 |                                 grade
  34 |                                 subject {
  35 |                                     id
  36 |                                     name
  37 |                                 }
  38 |                             }
  39 |                         }
  40 |                     }
  41 |                 `,
  42 |             },
  43 |         }
  44 |     );
  45 | 
  46 |     expect(response.ok()).toBe(true);
  47 | 
  48 |     const body = await response.json();
  49 | 
  50 |     expect(body.errors).toBeUndefined();
  51 | 
  52 | 
  53 | 
  54 |     await page.goto("/students");
  55 | 
  56 | 
  57 |     await expect(
  58 |         page.getByText("Joe")
> 59 |     ).toBeVisible();
     |       ^ Error: expect(locator).toBeVisible() failed
  60 | 
  61 |     await expect(
  62 |         page.getByText("Computer Science")
  63 |     ).toBeVisible();
  64 | 
  65 |     await expect(
  66 |         page.getByText("85.5")
  67 |     ).toBeVisible();
  68 | 
  69 |     await expect(
  70 |         page.getByText(/Maths\s*-\s*Grade:\s*90/i)
  71 |     ).toBeVisible();
  72 | });
```