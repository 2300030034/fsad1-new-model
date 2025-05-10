import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using StreamFlix's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Subscription and Billing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Subscription fees are billed at the beginning of each billing cycle</li>
              <li>You can cancel your subscription at any time</li>
              <li>No refunds for partial subscription periods</li>
              <li>Prices may change with prior notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must maintain accurate account information</li>
              <li>Accounts are personal and non-transferable</li>
              <li>You are responsible for maintaining account security</li>
              <li>Sharing account credentials is prohibited</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Content Usage Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Content is for personal, non-commercial use only</li>
              <li>No downloading or copying unless explicitly permitted</li>
              <li>Geographic restrictions may apply to certain content</li>
              <li>Content availability may change</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Prohibited Activities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>No unauthorized access to our services</li>
              <li>No circumvention of content protection</li>
              <li>No distribution or public display of content</li>
              <li>No use of VPNs to bypass geographic restrictions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Service Availability</h2>
            <p className="mb-4">
              We strive to provide uninterrupted service but do not guarantee continuous, error-free access. Service may be occasionally interrupted for maintenance or updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Privacy Policy</h2>
            <p className="mb-4">
              Our privacy practices are governed by our Privacy Policy, which is incorporated into these Terms of Service by reference.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend access to our services at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users, us, or third parties, or for any other reason.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We may modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us at support@streamflix.com
            </p>
          </section>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Last updated: March 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 