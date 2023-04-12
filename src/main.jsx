import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import Blog from '../src/pages/Blog/Blog';
import AppliedJobs from './pages/AppliedJobs/AppliedJobs';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home';
import JobDetails from './pages/JobDetails/JobDetails';
import Statistics from './Components/Statistics/Statistics';
// import './index.css'






const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('/FeatureJob.json')
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/appliedJobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/job_details/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('/FeatureJob.json')
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
