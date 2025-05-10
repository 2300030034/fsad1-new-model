import { Button } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Header({ isAuthenticated, setIsAuthenticated }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-red-600">StreamFlix</Link>
          <nav className="flex items-center space-x-6">
            <Link 
              to="/" 
              className={`hover:text-red-500 ${location.pathname === '/' ? 'text-red-500' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className={`hover:text-red-500 ${location.pathname === '/movies' ? 'text-red-500' : ''}`}
            >
              Movies
            </Link>
            <Link 
              to="/series" 
              className={`hover:text-red-500 ${location.pathname === '/series' ? 'text-red-500' : ''}`}
            >
              Series
            </Link>
            {isAuthenticated ? (
              <Button color="failure" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button color="failure">Login</Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header; 