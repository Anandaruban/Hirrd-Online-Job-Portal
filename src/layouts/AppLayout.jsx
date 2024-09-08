import { Outlet } from "react-router-dom"
import Header from "@/components/Header"

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <div className="min-h-screen container px-10 sm:px-28">
        <Header />
        <Outlet />
      </div>

      <footer className="p-10 text-center bg-gray-800 mt-10">
        rubaaa
      </footer>
    </div>
  )
}

export default AppLayout