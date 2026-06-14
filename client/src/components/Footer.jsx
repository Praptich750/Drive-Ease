import React from 'react'

const Footer = () => {

  return (
    <footer className="bg-white mt-20">
      {/* Newsletter Section */}
      {/* Footer Links */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800">
            CarRental
          </h2>

          <p className="text-gray-500 mt-4">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>

          <div className="flex gap-4 mt-6 text-2xl text-gray-500">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="far fa-envelope"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">QUICK LINKS</h3>

          <ul className="space-y-3 text-gray-500">
            <li>Home</li>
            <li>Browse Cars</li>
            <li>List Your Car</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-lg mb-4">RESOURCES</h3>

          <ul className="space-y-3 text-gray-500">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Insurance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">CONTACT</h3>

          <ul className="space-y-3 text-gray-500">
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 234 567890</li>
            <li>info@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-6 border-t border-gray-300 py-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm">
          © 2026 Brand. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-500 text-sm mt-4 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;