import { Navigate, Route, Routes } from "react-router-dom";
import StudentsPage from "../src/pages/StudentsPage";
import AddStudentPage from "../src/pages/addStudentPage.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/students" replace />} />

            <Route
                path="/students"
                element={<StudentsPage />}

            />
            <Route
                path="/students/add"
                element={<AddStudentPage />}
            />
        </Routes>

    );
}

export default App;