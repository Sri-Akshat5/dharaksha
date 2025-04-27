import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-6">
    
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
          {/* Google Maps Section */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.3463047100545!2d77.27214207459107!3d28.318119798290613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cd950f39b072b%3A0x4cb34d2947100ee3!2sDharaksha%20Ecosolutions%20Private%20Limited%20-%20Faridabad%20Facility!5e0!3m2!1sen!2sin!4v1745787954056!5m2!1sen!2sin"
              className="w-full h-full border-0 rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-gray-800">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Have questions? Fill out the form below, and we'll get back to you soon!
            </p>

            <form action="#" method="POST" className="space-y-2">
              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                  placeholder="Enter subject"
                  required
                />
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  className="mt-1 w-full p-4 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    
    </div>
  );
}

export default Contact;
