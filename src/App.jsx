import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CountryList from "./components/CountryList"
import Navbar from "./components/Navbar"
import SearchFilter from "./components/SearchFilter"
import HomePage from "./pages/HomePage"
import CountryPage from "./pages/CountryPage"


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <HomePage />
        </>
      )
    },
    {
      path: "/:id",
      element: (
        <>
          <Navbar />
          <CountryPage />
        </>
      )
    }
  ])

  return (

    <RouterProvider router={router} />


  )
}

export default App
