import { Navigate, Route, Routes } from "react-router-dom";
import StudentsPage from "../src/pages/StudentsPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/students" replace />} />

            <Route
                path="/students"
                element={<StudentsPage />}
            />
        </Routes>
    );
}

export default App;