import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
        <Link to='/#/'>Home</Link>
        <Link to='/#/discover'>Discover</Link>
        <Link to='/#/signin'>Signin</Link>
        <Link to='/#/login'>Login</Link>
    </div>
  )
}

export default Header