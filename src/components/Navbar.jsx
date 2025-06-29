import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, userProfile, logout } = useAuth(); // Get user, userProfile and logout from context

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-blue-200">
            Home
          </Link>
          {user ? (
            // Show these links when user is logged in
            <Link to="/dashboard" className="hover:text-blue-200">
              Dashboard
            </Link>
          ) : (
            // Show these links when user is NOT logged in
            <>
              <Link to="/login" className="hover:text-blue-200">
                Login
              </Link>
              <Link to="/register" className="hover:text-blue-200">
                Register
              </Link>
            </>
          )}
        </div>

        {user && (
          // Show user info and logout when logged in
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              Welcome, {userProfile?.username || user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded text-sm"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
