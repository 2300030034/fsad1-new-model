import React, { useState } from 'react';

function About() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    problem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically make an API call to your backend
      console.log('Contact form submitted:', formData);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({ name: '', contact: '', email: '', problem: '' });
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setShowModal(false);
      }, 3000);
    } catch (err) {
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About StreamFlix</h1>
      
      {/* Our Story Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-700 leading-relaxed">
          StreamFlix was founded with a simple mission: to provide high-quality entertainment to viewers worldwide. 
          We believe that everyone should have access to great content, regardless of their location or device.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Extensive Library</h3>
            <p className="text-gray-700">
              Access thousands of movies and TV shows across various genres, from the latest blockbusters to timeless classics.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">High-Quality Streaming</h3>
            <p className="text-gray-700">
              Enjoy crystal-clear video quality with adaptive streaming that adjusts to your internet connection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
            <p className="text-gray-700">
              Our intuitive platform makes it easy to find and watch your favorite content with just a few clicks.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-2">Cross-Platform Support</h3>
            <p className="text-gray-700">
              Watch on any device - from your smartphone to your smart TV, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Quality</h3>
            <p className="text-gray-700">
              We are committed to providing the highest quality streaming experience.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p className="text-gray-700">
              Making entertainment accessible to everyone, everywhere.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-700">
              Constantly improving our platform with the latest technology.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">User Experience</h3>
            <p className="text-gray-700">
              Putting our users first in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <button 
          onClick={() => setShowModal(true)}
          className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition"
        >
          Get in Touch
        </button>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Contact Us</h3>
              <button 
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {showSuccess ? (
              <div className="text-center py-8">
                <div className="mb-4">
                  <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  Your message has been submitted successfully. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-1">
                    Describe Your Problem
                  </label>
                  <textarea
                    id="problem"
                    name="problem"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Please describe your problem or inquiry"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default About; 