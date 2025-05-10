import React, { useState } from 'react';

const HelpCenter = () => {
  const [form, setForm] = useState({ description: '', complaint: '' });
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
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">Help Center</h2>
      {submitted ? (
        <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center font-semibold">
          Thank you for your feedback! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Describe your issue or question..."
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2" htmlFor="complaint">Complaint</label>
            <textarea
              id="complaint"
              name="complaint"
              value={form.complaint}
              onChange={handleChange}
              className="w-full border rounded p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-red-400"
              placeholder="Enter your complaint (if any)..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default HelpCenter; 