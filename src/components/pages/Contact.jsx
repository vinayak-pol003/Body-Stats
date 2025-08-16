import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-2xl p-10">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Contact Me
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Feel free to connect with me through any of the platforms below 🚀
        </p>

        {/* Contact Links */}
        <div className="space-y-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/vinayak-pol-a80339299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-blue-50 transition"
          >
            <Linkedin className="text-blue-600" size={28} />
            <span className="text-lg font-medium text-gray-700">
              Vinayak Pol
            </span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/vinayak-pol003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-gray-50 transition"
          >
            <Github className="text-gray-800" size={28} />
            <span className="text-lg font-medium text-gray-700">
              vinayak-pol003
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:vinayakpol200@gmail.com"
            className="flex items-center gap-4 p-4 border rounded-lg hover:bg-red-50 transition"
          >
            <Mail className="text-red-500" size={28} />
            <span className="text-lg font-medium text-gray-700">
              vinayakpol200@gmail.com
            </span>
          </a>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 mt-10 text-sm">
          🚀 Built by myself
        </p>
      </div>
    </div>
  );
};

export default Contact;
