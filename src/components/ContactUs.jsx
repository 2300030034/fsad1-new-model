import React, { useState } from 'react';

const ContactUs = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the form data to a backend or email service
  };

  return (
    <div className="container mx-auto max-w-lg py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Contact Us</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-semibold">
          Thank you for reaching out! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Type your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactUs; 