import axios from "axios";
import type {Student,CreateStudentRequest} from "../types/Student";

const GRAPHQL_URL = "http://localhost:8080/graphql";

export async function getAllStudents(): Promise<Student[]> {
    const query = `
    query {
      getAllStudents {
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
  `;

    const response = await axios.post(GRAPHQL_URL, {
        query,
    });
    console.log("GraphQL response:", response.data);
    if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
    }

    return response.data.data.getAllStudents;
}


export async function createStudentWithSubject(
    student: CreateStudentRequest
): Promise<Student> {

    const query = `
        mutation CreateStudentWithSubject(
            $name: String!
            $percentage: Float!
            $branch: String!
            $subject: String!
            $grade: Float!
        ) {
            createStudentWithSubject(
                name: $name
                percentage: $percentage
                branch: $branch
                subject: $subject
                grade: $grade
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
    `;

    const response = await axios.post(GRAPHQL_URL, {
        query,
        variables: student,
    });

    if (response.data.errors) {
        throw new Error(response.data.errors[0].message);
    }

    return response.data.data.createStudentWithSubject;
}