import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider } from 'react-router-dom'

import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from "./layouts/MainLayout"
import JobsPage from './pages/JobsPage'
import NotFoundPages from './pages/NotFoundPages'
import JobPage, { jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'


const App = () => {
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob),
    })
    return res;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<MainLayout />}>
        <Route index  element = {<HomePage />} />
        <Route path = '/jobs'  element = {<JobsPage />} />
        <Route path = '/add-job'  element = {<AddJobPage addJobSubmit={addJob} />} />
        <Route path = '/jobs/:id'  element = {<JobPage />} loader={jobLoader}/>
        <Route path = '*'  element = {<NotFoundPages/>} />
    </Route>
    )
  );

  return  <RouterProvider router={router} />}
export default App




 
