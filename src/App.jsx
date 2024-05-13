import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import MainContext from './context/Context'
import { Router } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Routes from './routes/Routes'
import { RouterProvider } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const router= createBrowserRouter(Routes)
 const [data,setData] = useState([])
 const contextData={
  data,setData
 }

 useEffect(() => {
    axios.get("http://localhost:3000/games").then(res=>{
      setData([...res.data])
      
    }).catch(error=>{
      alert(error)
    })
 }, [])

  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider >
     
   
  )
}

export default App
