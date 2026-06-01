import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import Habits from "./pages/Habits";
import Calendar from "./pages/Calendar";
import Notes from "./pages/Notes";

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/notes" element={<Notes />} />
      </Route>
    </Routes>
  );
}
