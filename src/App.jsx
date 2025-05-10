import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Categories from "./components/Categories";
import Subscription from "./components/Subscription";
import HelpCenter from "./components/HelpCenter";
import ContactUs from "./components/ContactUs";
import TermsOfService from "./components/TermsOfService";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  const [videoId, setVideoId] = useState("kgf");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const [videos] = useState([
    { 
      id: "kgf", 
      title: "KGF", 
      path: "/videos/kgf edit.mp4"
    },
    { 
      id: "friends", 
      title: "Friends", 
      path: "/videos/friends.mp4"
    },
    { 
      id: "pushpa", 
      title: "Pushpa", 
      path: "/videos/pushpa.mp4"
    }
  ]);

  const subscriptionPlans = [
    {
      name: "Basic",
      price: "₹199",
      period: "month",
      features: [
        "HD Available",
        "Watch on your TV or computer",
        "Unlimited movies and TV shows",
        "Cancel anytime"
      ]
    },
    {
      name: "Standard",
      price: "₹499",
      period: "month",
      features: [
        "Full HD Available",
        "Watch on your TV, computer, mobile or tablet",
        "Unlimited movies and TV shows",
        "Cancel anytime",
        "2 screens at the same time"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹699",
      period: "month",
      features: [
        "Ultra HD Available",
        "Watch on your TV, computer, mobile or tablet",
        "Unlimited movies and TV shows",
        "Cancel anytime",
        "4 screens at the same time",
        "Download videos"
      ]
    }
  ];

  const searchVideos = () => {
    if (!searchQuery.trim()) {
      return videos;
    }
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredVideos = searchVideos();

  const handleSubscribe = (plan) => {
    // Here you would typically handle the subscription process
    console.log('Selected plan:', plan);
    setShowSubscriptionModal(false);
    // Navigate to the subscription page
    navigate('/subscription');
  };

  const Home = () => (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-100"></div>
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-[20vw] font-bold text-red-600 tracking-tighter transform -rotate-12 select-none">
              STREAMFLIX
            </div>
          </div>
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%), linear-gradient(45deg, #E50914 0%, #000000 100%)',
            opacity: '0.7'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Unlimited movies, TV shows, and more</h1>
            <p className="text-2xl mb-6">Watch anywhere. Cancel anytime.</p>
            <p className="text-xl mb-8">Ready to watch? Start your free trial today.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/categories" 
                className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded flex items-center justify-center"
              >
                Get Started
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose StreamFlix?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gray-800 rounded-lg p-8 transition-transform transform hover:scale-105">
              <div className="text-red-600 mb-6">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Affordable Plans</h3>
              <p className="text-gray-300 text-center">
                Choose from our flexible pricing plans starting as low as ₹199/month. Cancel anytime with no commitments.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-800 rounded-lg p-8 transition-transform transform hover:scale-105">
              <div className="text-red-600 mb-6">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Watch Anywhere</h3>
              <p className="text-gray-300 text-center">
                Stream on your phone, tablet, laptop, TV, or gaming console. Your entertainment follows you everywhere.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-800 rounded-lg p-8 transition-transform transform hover:scale-105">
              <div className="text-red-600 mb-6">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Unlimited Content</h3>
              <p className="text-gray-300 text-center">
                Access thousands of movies, TV shows, documentaries, and exclusive originals. New content added monthly.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-gray-800 rounded-lg p-8 transition-transform transform hover:scale-105">
              <div className="text-red-600 mb-6">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Download & Watch</h3>
              <p className="text-gray-300 text-center">
                Download your favorite shows and movies to watch offline. Perfect for travel or when you're on the go.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-800 rounded-lg p-8 transition-transform transform hover:scale-105">
              <div className="text-red-600 mb-6">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Family Sharing</h3>
              <p className="text-gray-300 text-center">
                Create up to 5 profiles for your family members. Everyone gets their own personalized recommendations.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-800 rounded-lg p-8 transition-transform transform hover:scale-105">
              <div className="text-red-600 mb-6">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Smart Features</h3>
              <p className="text-gray-300 text-center">
                Enjoy smart recommendations, multiple device sync, and seamless playback across all your devices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl mb-6">Ready to watch? Start your free trial today.</h3>
          <Link 
            to="/categories" 
            className="bg-red-600 hover:bg-red-700 text-white text-lg font-semibold px-8 py-4 rounded inline-flex items-center"
          >
            Get Started
            <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-600">Subscribe to StreamFlix</h2>
          <p className="mb-6 text-gray-700">Get the latest updates and exclusive content delivered to your inbox.</p>
          <button 
            onClick={() => setShowSubscriptionModal(true)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
          >
            View Plans
          </button>
        </div>
      </section>

      {/* Subscription Plans Modal */}
      {showSubscriptionModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Choose Your Plan</h3>
              <button 
                onClick={() => setShowSubscriptionModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {subscriptionPlans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`border rounded-lg p-6 ${
                    plan.popular ? 'border-red-500 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  {plan.popular && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                      Most Popular
                    </span>
                  )}
                  <h4 className="text-xl font-bold mt-4">{plan.name}</h4>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleSubscribe(plan)}
                    className={`w-full mt-6 py-2 px-4 rounded font-bold transition ${
                      plan.popular
                        ? 'bg-red-600 hover:bg-red-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Choose Plan
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Header */}
      <header className={`shadow-lg ${theme === 'dark' ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-r from-white via-gray-100 to-white'} p-0`}
        style={{ fontFamily: 'Poppins, Inter, Arial, sans-serif', letterSpacing: '0.01em' }}>
        <div className="container mx-auto flex justify-between items-center py-3 px-2 md:px-0">
          <Link to="/" className="flex items-center gap-3 group">
            <svg className="w-12 h-12 text-red-600 drop-shadow-lg group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.4 4L20 7.5V4H22V20H20V16.5L13.4 20H4V4H13.4ZM6 6V18H12.6L18 15.1V8.9L12.6 6H6ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"/>
            </svg>
            <div className="text-3xl font-extrabold tracking-tight leading-tight">
              <span className="text-red-600 font-black drop-shadow-md" style={{fontFamily: 'Poppins, Inter, Arial, sans-serif'}}>Stream</span>
              <span className="ml-1 text-white dark:text-gray-900" style={{fontFamily: 'Poppins, Inter, Arial, sans-serif'}}>Flix</span>
            </div>
          </Link>
          <nav className="space-x-2 md:space-x-6 flex items-center text-lg font-medium">
            <Link to="/" className="inline-flex items-center px-3 py-1 rounded-lg transition-all duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link to="/about" className="inline-flex items-center px-3 py-1 rounded-lg transition-all duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400">About</Link>
            {isLoggedIn ? (
              <>
                <Link to="/categories" className="inline-flex items-center px-3 py-1 rounded-lg transition-all duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400">Categories</Link>
                <button 
                  onClick={handleLogout}
                  className="ml-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
                  style={{fontFamily: 'Poppins, Inter, Arial, sans-serif'}}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="inline-flex items-center px-3 py-1 rounded-lg transition-all duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-400">Register</Link>
                <Link to="/login" className="ml-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400">Login</Link>
              </>
            )}
            <button 
              onClick={toggleTheme}
              className="ml-2 bg-gray-700 hover:bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              style={{fontFamily: 'Poppins, Inter, Arial, sans-serif'}}
            >
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="/categories" 
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            } 
          />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/" element={<Home />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} text-${theme === 'dark' ? 'white' : 'gray-900'}`}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold mb-4 text-red-500">StreamFlix</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                Your ultimate destination for streaming movies and TV shows. Watch anywhere, anytime.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-500">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/register" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-500">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/help-center" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    FAQ
                  </a>
                </li>
                <li>
                  <Link to="/terms-of-service" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 flex items-center`}>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-500">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 transform hover:scale-110`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 transform hover:scale-110`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300 transform hover:scale-110`}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>&copy; 2024 StreamFlix. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300`}>Privacy Policy</a>
              <Link to="/terms-of-service" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300`}>Terms of Service</Link>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} hover:text-white transition-colors duration-300`}>Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;