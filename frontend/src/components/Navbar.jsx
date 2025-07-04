import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-indigo-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-white font-bold text-xl">
                            StreamFlix
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/"
                                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/comedy"
                                    className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Comedy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <Link
                                to="/login"
                                className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 