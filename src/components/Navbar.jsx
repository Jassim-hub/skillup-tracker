import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        <Link to="/login" className="hover:text-blue-200">Login</Link>
        <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
      </div>
    </nav>
  )
}

export default Navbar