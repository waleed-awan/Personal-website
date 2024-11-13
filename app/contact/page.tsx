"use client"
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// Define the shape of form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prepare the data in the expected format
    const emailData: Record<string, unknown> = {
      user_name: formData.name, // Ensure these keys match your EmailJS template variables
      user_email: formData.email,
      message: formData.message,
    };

    // Use EmailJS to send the email
    emailjs
      .send(
        'service_9hu0u6q', // Replace with your EmailJS service ID
        'template_kgmrju1', // Replace with your EmailJS template ID
        emailData,          // Pass the correctly formatted data
        'dAfU53U1RVAXjG7On'      // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-700">Get in Touch</h1>
        <p className="text-gray-600 mt-2">We would love to hear from you!</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg mt-8 p-6 md:p-10 max-w-2xl w-full">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Your Message"
                rows={4}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
