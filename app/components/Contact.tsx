// import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 bg-[#0F0344]">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-widest font-roboto mb-2 bg-[#D7AA5F]/30 px-5 py-1 text-[#D7AA5F] rounded-2xl">
            Professional Inquiries
          </p>
          <h2 className="text-4xl font-playfair-display font-bold text-[#FFFFFF]">
            Contact
          </h2>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-8">
          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-roboto text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-[#0F0344]/40"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-roboto text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-[#0F0344]/40"
              />
            </div>

            {/* Organization */}
            <div>
              <label className="block text-sm font-roboto text-gray-700 mb-1">
                Organization
              </label>
              <input
                type="text"
                placeholder="Enter Organization Name"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-[#0F0344]/40"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-roboto text-gray-700 mb-1">
                Subject
              </label>
              <select className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-roboto bg-white focus:outline-none focus:ring-2 focus:ring-[#0F0344]/40">
                <option>Board Opportunity</option>
                <option>Business Inquiry</option>
                <option>Speaking Engagement</option>
                <option>Media Request</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-roboto text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Provide details about your inquiry"
                className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm font-roboto focus:outline-none focus:ring-2 focus:ring-[#0F0344]/40"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0F0344] text-white py-3 rounded-md font-roboto text-sm tracking-wide hover:bg-[#14055A] transition-colors"
            >
              Submit Inquiry
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 border-t border-gray-200" />

          {/* Footer Links */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500 font-roboto">
            <a href="#" className="hover:text-[#0F0344] transition-colors">
              LinkedIn Profile
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-[#0F0344] transition-colors">
              Direct Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
