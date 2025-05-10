import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Subscription = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically process the payment
    console.log('Payment details:', { cardNumber, expiry, cvv });
    setPaymentSuccess(true);
  };

  if (paymentSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Payment Successful!</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your payment has been processed successfully. Thank you for your subscription!
          </p>
          <Link to="/" className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Complete Your Payment</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Please enter your payment details to complete your subscription.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Expiry Date</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2">CVV</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="123"
              required
            />
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200">
            Pay Now
          </button>
        </form>
        <div className="text-center mt-4">
          <Link to="/" className="inline-block text-gray-600 dark:text-gray-300 hover:underline">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Subscription; 