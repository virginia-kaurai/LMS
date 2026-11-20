
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from './Login'
import Register from './Register'
import Homepage from './Homepage'
import * as Admin from './AdminPages'
import * as Teacher from './LecturersPages'
import * as Student from './StudentsPages'




export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admin" element={<Layout role="admin" />}>
        <Route index element={<Admin.Dashboard />} />
        <Route path="students" element={<Admin.Students />} />
        <Route path="teachers" element={<Admin.Teachers />} />
        <Route path="classes" element={<Admin.Classes />} />
        <Route path="subjects" element={<Admin.Subjects />} />
        <Route path="exams" element={<Admin.Exams />} />
        <Route path="results" element={<Admin.Results />} />
        <Route path="fees" element={<Admin.Fees />} />
        <Route path="promotion" element={<Admin.Promotion />} />
        <Route path="settings" element={<Admin.Settings />} />
      </Route>

      <Route path="/lecturer" element={<Layout role="lecturer" />}>
        <Route index element={<Teacher.Dashboard />} />
        <Route path="classes" element={<Teacher.MyClasses />} />
        <Route path="grades" element={<Teacher.Grades />} />
        <Route path="attendance" element={<Teacher.Attendance />} />
      </Route>

      <Route path="/student" element={<Layout role="student" />}>
        <Route index element={<Student.Dashboard />} />
        <Route path="courses" element={<Student.MyCourses />} />
        <Route path="results" element={<Student.Results />} />
        <Route path="timetable" element={<Student.Timetable />} />
        <Route path="fees" element={<Student.Fees />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
