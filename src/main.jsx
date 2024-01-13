import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPages from './pages/login'
import Dashboard from './pages/admin/dashboard';
import DashboardForm from './pages/dashboardForm';


const router = createBrowserRouter([
  {
  path:"/login",
  element: <LoginPages></LoginPages>
  },
  {
    path:"/",
    element: <Dashboard></Dashboard>
  },
  {
    path: "/form",
    element: <DashboardForm></DashboardForm>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>,
)