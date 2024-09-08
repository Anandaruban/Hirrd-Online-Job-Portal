import { Link } from "react-router-dom"
import logo from "../utils/logo.png"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between py-4 items-center">
        <Link to={"/"}>
          <img className="h-20" src={logo} alt="Hirrd-logo" />
        </Link>

        <Button variant="outline">Sign In</Button>
      </nav>
    </div>
  )
}

export default Header